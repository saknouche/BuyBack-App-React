import React from 'react';
import Textfield from "../../components/ui/Textfield";
import Email from "@mui/icons-material/Email";
import LockIcon from '@mui/icons-material/Lock';
import Button from "../../components/ui/Button";
import LoginIcon from '@mui/icons-material/Login';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Auth from "./Auth";
import { useForm } from 'react-hook-form'
import classNames from "classnames";
import {UserAuth} from "../../models/User";
import {AuthService} from "../../services/Auth";
import {toast} from 'react-toastify';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate  = useNavigate();
    const form = useForm<UserAuth>()
    const authService = new AuthService();

    const submit = (data: UserAuth) => {
        authService.login(data)
        ?.then((e) => {
          console.log(e.data)
          const { accessToken, refreshToken } = e.data;
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          navigate("/");
        })
        .catch((error) => {
            console.log(error.response.data)
            toast.error(error.response.data.message);
        });
    }

  return (
    <Auth>
      <form
        onSubmit={form.handleSubmit(submit)}
        className="flex flex-col p-5 rounded-r-xl items-center justify-center h-full sm:w-2/3"
      >
        <div className="flex flex-row text-3xl font-bold mb-5 text-green-primary-50">
          Login
        </div>
        <Textfield
          form={form}
          id="email"
          placeholder="Email"
          type="text"
          prefixIcon={<Email/>}
        />
        <Textfield
          form={form}
          id="password"
          placeholder="Password"
          type="password"
          prefixIcon={<LockIcon/>}
        />
        <Button
          type="submit"
          label="Sign in"
          icon={<LoginIcon/>}
          className="bg-green-primary-700 hover:bg-green-primary-600 text-green-primary-50 font-bold mb-2"

        />
        <Button
          label="Create account"
          to="/register"
          icon={<AccessibilityNewIcon  />}
          className={classNames(
              "bg-yellow-primary-500 text-yellow-primary-50 font-bold",
              "hover:bg-yellow-primary-600"
          )}
        />
      </form>
    </Auth>
  );
}

export default Login;
