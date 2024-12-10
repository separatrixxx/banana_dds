import { DeviceInterface } from "./device.interface";


export interface UserInterface {
    user_id: number,
    telegram_id: number,
    username: string,
    subscription: {
        status: 'active' | 'inactive',
        type: 'basic' | 'pro' | 'premium' | '',
        valid_until: string | null,
        available_zones: string[],
        traffic_limit: number,
        maximum_devices: number,
        last_subcription_days: number,
    },
    devices: DeviceInterface[],
}
