import axios from "axios";
import { BaseArguments } from "../interfaces/refactor.interface";
import { setLocale } from "./locale.helper";
import { getUser } from "./user.helper";


export async function addDevice(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    try {
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            `/user/${tgUser?.id}/device`, {
                hardware_info : {
                    os: webApp?.platform,
                    device: '',
                    version: webApp?.version
                }
            }
        ).then(() => getUser(args));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.add_device_error);

        console.error(err);
    }
}

export async function removeDevice(deviceHash: string, args: BaseArguments) {
    const { webApp, tgUser } = args;

    try {
        await axios.delete(process.env.NEXT_PUBLIC_DOMAIN +
            '/device/' + deviceHash,
        ).then(() => getUser(args));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.remove_device_error);

        console.error(err);
    }
}
