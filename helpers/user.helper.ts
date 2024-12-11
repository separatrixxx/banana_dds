import axios, { AxiosResponse } from "axios";
import { setLocale } from "./locale.helper";
import { setUser, setUserDefault } from "../features/user/userSlice";
import { BaseArguments } from "../interfaces/refactor.interface";
import { getServers } from "./servers.helper";
import { UserInterface } from "../interfaces/user.interface";


export async function getUser(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    try {
        dispatch(setUserDefault());

        const { data: response }: AxiosResponse<UserInterface>  = await axios.get('/api/getUser', {
            params: {
                user_id: tgUser?.id,
            },
        });

        dispatch(setUser(response));

        getServers(args);
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_user_error);

        console.error(err);
    }
}
