export interface ServerInterface {
    zones: ServerItem[],
}

export interface ServerItem {
    zone: string,
    type: string,
    active_users: number,
    sub_rank: string[],
}
