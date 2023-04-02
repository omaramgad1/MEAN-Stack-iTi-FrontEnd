export interface User {
    id?: number,
    /*     _id: number, */
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    photo?: string | File

}
