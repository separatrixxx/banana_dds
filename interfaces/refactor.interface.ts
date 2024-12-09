import { IWebApp, ITelegramUser } from "../types/telegram";


export interface BaseArguments {
    webApp: IWebApp | undefined,
    tgUser: ITelegramUser | undefined,
    dispatch: any,
}
