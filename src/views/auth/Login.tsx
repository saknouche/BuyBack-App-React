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

const Login = () => {
  const form = useForm<UserAuth>()
  const authService = new AuthService();
  const submit = (data: UserAuth) => {
    // const response = await authService.login(data);
    // const { accessToken, refreshToken } = response?.data;
    // localStorage.setItem('accessToken', accessToken);
    // localStorage.setItem('refreshToken', refreshToken);
    console.log(data);
    authService.login(data)
        ?.then((e) => {
          console.log(e.data)
          const { accessToken, refreshToken } = e.data;
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
        })
        .catch((error) => {
            console.log(error.response.data)
            toast.error(error.response.data);
        });
  }

  return (
    <Auth>
      <form
        onSubmit={form.handleSubmit(submit)}
        className="flex flex-col p-5 rounded-r-xl justify-center h-full gap-6"
      >
        <div className="flex flex-row text-5xl font-bold mb-10 text-green-primary-200">
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
          className={classNames(
            "bg-black-dark text-white font-bold border border-transparent mb-2",
            "hover:bg-black-primary hover:border-yellow-primary"
          )}
        />
        <Button
          label="Create account"
          to="/register"
          icon={<AccessibilityNewIcon  />}
          className="bg-black-primary hover:bg-black-light text-white font-bold border border-transparent hover:border-gray-dark"
        />
      </form>
    </Auth>
  );
}

export default Login;
