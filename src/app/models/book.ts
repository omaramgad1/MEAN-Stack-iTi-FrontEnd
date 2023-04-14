export interface Book {
    id?: number,
    name: string,
    categoryName: string,
    AuthorId: {
        _id:string,
        firstName:string
    },
    photo: string,
    reviews?: {
        userId: number,
        review: string
    },
    rating?: {
        userId: number,
        rate: number,

    }


}