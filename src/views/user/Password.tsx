import React from 'react';
import {useForm} from "react-hook-form";
import {UserUpdatePassword} from "../../models/UserModel";
import Textfield from "../../components/ui/Textfield";
import LockIcon from "@mui/icons-material/Lock";
import Button from "../../components/ui/Button";
import {SaveAlt} from "@mui/icons-material";
import {toast} from "react-toastify";
import {UserService} from "../../services/User";

const Password = () => {
    const userService: UserService = new UserService();
    const form = useForm<UserUpdatePassword>()

    const submit = (data: UserUpdatePassword) => {
        console.log(data)

        userService.updatePassword(data)
            ?.then((e) => {
                console.log(e.data);
                toast.success(e.data.message);
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.response.data.message);
            })
    };

    return (
        <>
            <div className="flex-1 w-full bg-green-primary-50 flex flex-col items-center justify-center p-5">
                <form
                    onSubmit={form.handleSubmit(submit)}
                    className="flex-1 w-full flex-col p-5 rounded-xl items-center justify-center"
                >
                    <Textfield
                        form={form}
                        id="password"
                        placeholder="Password"
                        backgroundColor={"bg-green-primary-300"}
                        className={"font-bold"}
                        type="password"
                        prefixIcon={<LockIcon/>}
                        required={true}
                    />
                    <Textfield
                        form={form}
                        id="newPassword"
                        placeholder="New password"
                        backgroundColor={"bg-green-primary-300"}
                        className={"font-bold"}
                        type="password"
                        prefixIcon={<LockIcon/>}
                        required={true}
                    />
                    <Textfield
                        form={form}
                        id="confirmNewPassword"
                        placeholder="Confirm new password"
                        backgroundColor={"bg-green-primary-300"}
                        className={"font-bold"}
                        type="password"
                        prefixIcon={<LockIcon/>}
                        required={true}
                    />
                    <Button
                        label="Save"
                        // to="/"
                        prefixIcon={<SaveAlt/>}
                        className="bg-blue-400 hover:bg-blue-500 min-w text-green-primary-50 font-bold mb-2"
                        type="submit"
                    />
                </form>
            </div>
        </>
    );
}

export default Password;
