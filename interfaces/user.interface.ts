export interface UserInterface {
    id: number,
    plan: 'Basic' | 'Pro' | 'Marat' | 'None',
    duration: 'monthly' | 'yearly',
    price: number,
    date_plan: string,
    devices: string[],
    current_server: string,
}
