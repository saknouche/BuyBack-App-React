import React from 'react';
import Textfield from "../../components/ui/Textfield";
import Email from "@mui/icons-material/Email";
import LockIcon from '@mui/icons-material/Lock';
import Button from "../../components/ui/Button";
import LoginIcon from '@mui/icons-material/Login';
import Auth from "./Auth";
import { useForm } from 'react-hook-form'
import {AuthService} from "../../services/Auth";
import {UserRegister} from "../../models/User";

const Register = () => {
  const form = useForm<UserRegister>()
  const authService = new AuthService();

  const submit = (data: UserRegister) => {
    authService.register(data)
      ?.then((e) => {console.log(e.data)})
      .catch((error) => console.log(error.response.data.error.message));
  };

  return (
    <Auth>
      <form
        className="flex flex-col p-5 bg-gray-light rounded-r-xl justify-center"
        onSubmit={form.handleSubmit(submit)}
      >
        <div className="flex flex-row justify-center text-3xl font-bold mb-10">
          Register
        </div>
        <div className="flex flex-row justify-center gap-3">
          <Textfield
            form={form}
            id="firstname"
            placeholder="Firstname"
            type="text"
            required={true}
          />
          <Textfield
            form={form}
            id="lastname"
            placeholder="Lastname"
            type="text"
            required={true}
          />
        </div>
        <Textfield
          form={form}
          id="email"
          placeholder="Email"
          type="text"
          prefixIcon={<Email/>}
          required={true}
        />
        <Textfield
          form={form}
          id="password"
          placeholder="Password"
          type="password"
          prefixIcon={<LockIcon/>}
          required={true}
        />
        <Textfield
          form={form}
          id="confirmPassword"
          placeholder="Confirm password"
          type="password"
          prefixIcon={<LockIcon/>}
          required={true}
        />
        <Button
          label="Sign up"
          // to="/"
          icon={<LoginIcon/>}
          className="bg-gray-primary font-bold border border-transparent hover:border-gray-dark mb-2"
          type="submit"
        />
        <Button
          label="Cancel"
          to="/login"
          // icon={<AccessibilityNewIcon  />}
          className="bg-gray-primary font-bold border border-transparent hover:border-gray-dark"
        />
      </form>
    </Auth>
  );
}

export default Register;
