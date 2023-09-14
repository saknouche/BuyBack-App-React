import api from "./Api";
import {UserUpdate} from "../models/UserModel";

export class UserService {
    modify = (data: UserUpdate) => {
        console.log(data)
        try {
            return api.post(process.env.REACT_APP_API_URL + '/user/update', data);
        } catch (error) {
            console.error(error);
        }
    }

}