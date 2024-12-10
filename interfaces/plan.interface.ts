export interface PlanInterface {
    name: 'Basic' | 'Pro' | 'Premium',
    servers: number,
    devices: number,
    traffic: number,
    priceM: number,
    priceY: number,
}

export interface PlanDurationInterface {
    name: 'monthly' | 'yearly',
    days: number,
}
