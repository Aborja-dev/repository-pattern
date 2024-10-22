export interface UserModelObject {
    id: number,
    name: string,
    email: string,
    password: string,
    refreshtoken: string | null,
    resettoken: string | null
}

export type UserObject = UserModelObject