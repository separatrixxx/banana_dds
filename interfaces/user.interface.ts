export interface UserInterface {
    id: number,
    plan: 'Basic' | 'Pro' | 'Marat' | 'None',
    duration: 'monthly' | 'yearly',
    price: number,
    datePlan: string,
    devices: string[],
}
