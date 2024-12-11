import axios from "axios";
import { BaseArguments } from "../interfaces/refactor.interface";
import { setLocale } from "./locale.helper";
import { getUser } from "./user.helper";
import { hashId } from "./hash.helper";


export async function addDevice(setIsLoading: (e: boolean) => void, args: BaseArguments) {
    const { webApp, tgUser } = args;

    try {
        setIsLoading(true);

        await axios.post('/api/addDevice', {
            user_id: tgUser?.id,
            hardware_info: {
                os: webApp?.platform,
                device: '',
                version: webApp?.version,
            },
        }).then(() => {
            setIsLoading(false);

            getUser(args);
        });
    } catch (err: any) {
        setIsLoading(false);
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.add_device_error);

        console.error(err);
    }
}

export async function removeDevice(deviceHash: string, setIsLoading: (e: boolean) => void, args: BaseArguments) {
    const { webApp, tgUser } = args;

    try {
        setIsLoading(true);

        await axios.delete('/api/removeDevice', {
            params: { deviceHash },
        }).then(() => {
            setIsLoading(false);

            getUser(args);
        });
    } catch (err: any) {
        setIsLoading(false);
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.remove_device_error);

        console.error(err);
    }
}
