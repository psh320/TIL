//Create Interface Type for Person
export type IPerson = {
    id: string
    createdDate: Date
    modifiedDate: Date
    name: string
    email: string
    avatar: string
    image: string
    comments: string
    counts: {
        commnet: number
        retweet: number
        heart: number
    }
}