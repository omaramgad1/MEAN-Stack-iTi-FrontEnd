export interface Book {

    _id: number,
    name: string,
    categoryName: string,
    authorId: number,
    reviews?: {
        userId: number,
        review: string
    },
    rating?: {
        userId: number,
        rate: number,

    }


}