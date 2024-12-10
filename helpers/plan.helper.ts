import axios from "axios";
import { PlanInterface } from "../interfaces/plan.interface";
import { BaseArguments, CreateSubscriptionArguments } from "../interfaces/refactor.interface";
import { setLocale } from "./locale.helper";
import { getUser } from "./user.helper";


export function getPlans(): PlanInterface[] {
    return [
        {
            name: 'Basic',
            servers: 1,
            devices: 3,
            traffic: 25,
            priceM: 300,
            priceY: 3200,
        },
        {
            name: 'Pro',
            servers: 2,
            devices: 5,
            traffic: 25,
            priceM: 500,
            priceY: 5500,
        },
        {
            name: 'Premium',
            servers: 3,
            devices: 7,
            traffic: 1000,
            priceM: 1200,
            priceY: 13500,
        }
    ];
}

export async function createSubscription(args: CreateSubscriptionArguments) {
    const { webApp, tgUser, type, duration, setIsLoading } = args;

    try {
        setIsLoading(true);

        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            '/subscription/create/' + tgUser?.id,
            {
                subscription_type: type.toLowerCase(),
                duration_days: duration
            }
        ).then(() => {
            setIsLoading(false);

            webApp?.showAlert(setLocale(tgUser?.language_code).pay_for_subscription_and_restart, async function () {
                webApp.close();
            });
        });
    } catch (err: any) {
        setIsLoading(false);
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.create_subscription_error);

        console.error(err);
    }
}

export async function cancelSubscription(args: BaseArguments) {
    const { webApp, tgUser } = args;

    try {
        await axios.delete(process.env.NEXT_PUBLIC_DOMAIN +
            '/subscription/cancel/' + tgUser?.id,
        ).then(() => {
            getUser(args);
        });
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.cancel_subscription_error);

        console.error(err);
    }
}

