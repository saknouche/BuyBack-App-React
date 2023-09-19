import React, {useContext, useEffect} from 'react';
import Textfield from "../../components/ui/Textfield";
import Email from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "../../components/ui/Button";
import {useForm} from "react-hook-form";
import {UserUpdate} from "../../models/UserModel";
import {toast} from "react-toastify";
import User from "../../classes/User";
import {SaveAlt} from "@mui/icons-material";
import {UserService} from "../../services/User";
import {UserContext} from "../../App";

const Profile = () => {
    const userService: UserService = new UserService();

    const {setUser} = useContext(UserContext);

    // useEffect(() => {
    //     setUser(User.getUser)
    // },[setUser]);

    const form = useForm<UserUpdate>({
        defaultValues: {
            firstname: User.getUser().firstname,
            lastname: User.getUser().lastname,
            email: User.getUser().email,
        }
    })

    const submit = (data: UserUpdate) => {
        console.log(data)

        userService.update(data)
            ?.then((e) => {
                console.log(e.data);
                const { accessToken, refreshToken, email, firstname, lastname } = e.data;
                User.setUser({accessToken, refreshToken, email, firstname, lastname})
                setUser(User.getUser)
                toast.success("Change made!");
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
                    className="flex-1 w-full flex-col px-5 rounded-xl flex"
                >
                    <div className={"flex justify-center items-center mb-6 gap-3"}>
                        <hr className={"border-green-primary-500 flex-1"}/>
                        <div className={"text-2xl font-bold text-green-primary-500"}>Modify my details</div>
                        <hr className={"border-green-primary-500 flex-1"}/>
                    </div>
                    <Textfield
                        form={form}
                        id="firstname"
                        placeholder="Firstname"
                        backgroundColor={"bg-green-primary-300"}
                        className={"font-bold"}
                        type="text"
                        required={true}
                    />
                    <Textfield
                        form={form}
                        id="lastname"
                        placeholder="Lastname"
                        backgroundColor={"bg-green-primary-300"}
                        className={"font-bold"}
                        type="text"
                        required={true}
                    />
                    <Textfield
                        form={form}
                        id="email"
                        placeholder="Email"
                        backgroundColor={"bg-green-primary-300"}
                        className={"font-bold"}
                        type="text"
                        prefixIcon={<Email/>}
                        required={true}
                    />
                    <hr className={"border-green-primary-500 w-full mb-6"}/>
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

export default Profile;
