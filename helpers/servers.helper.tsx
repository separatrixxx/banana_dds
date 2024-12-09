import axios from "axios";
import { setLocale } from "./locale.helper";
import { BaseArguments } from "../interfaces/refactor.interface";
import { ServerInterface } from "../interfaces/servers.interface";
import { setServers } from "../features/servers/serversSlice";


export async function getServers(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    try {
        const servers: ServerInterface[] = [
            {
                name: 'Germany',
                plan: 'Basic',
            },
            {
                name: 'USA',
                plan: 'Pro',
            },
            {
                name: 'Russia',
                plan: 'Marat',
            },
        ]; 

        dispatch(setServers(servers));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_servers_error);

        console.error(err);
    }
}
