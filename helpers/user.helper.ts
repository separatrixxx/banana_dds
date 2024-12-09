import axios from "axios";
import { setLocale } from "./locale.helper";
import { setUser, setUserDefault } from "../features/user/userSlice";
import { BaseArguments } from "../interfaces/refactor.interface";
import { UserInterface } from "../interfaces/user.interface";
import { getServers } from "./servers.helper";


export async function getUser(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    try {
        dispatch(setUserDefault());

        const user: UserInterface = {
            id: 1,
            plan: 'None',
            duration: 'monthly',
            price: 3,
            date_plan: '12-08-2025',
            devices: ['Sosung Galaxy O5', 'HyperOptimus X Infinity Ultra Pro Max 7G+'],
            current_server: 'Germany',
        }        

        dispatch(setUser(user));

        getServers({
            dispatch: dispatch,
            webApp: webApp,
            tgUser: tgUser,
        });
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_user_error);

        console.error(err);
    }
}
