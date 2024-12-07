export interface PlanInterface {
    id: number,
    name: string,
    priceM: number,
    priceY: number,
    devices: number,
    servers: number,
    speed: 'normal' | 'limited' | 'increased',
}
