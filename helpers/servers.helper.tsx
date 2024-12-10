import axios, { AxiosResponse } from "axios";
import { setLocale } from "./locale.helper";
import { BaseArguments } from "../interfaces/refactor.interface";
import { ServerInterface } from "../interfaces/servers.interface";
import { setServers } from "../features/servers/serversSlice";


export async function getServers(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    try {
        const { data: response }: AxiosResponse<ServerInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/zones',
        );

        dispatch(setServers(response.zones));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_servers_error);

        console.error(err);
    }
}
