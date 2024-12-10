import { IWebApp, ITelegramUser } from "../types/telegram";


export interface BaseArguments {
    webApp: IWebApp | undefined,
    tgUser: ITelegramUser | undefined,
    dispatch: any,
}

export interface CreateSubscriptionArguments extends Omit<BaseArguments, 'dispatch'> {
    type: 'Basic' | 'Pro' | 'Premium',
    duration: number,
    setIsLoading: (e: boolean) => void,
}
