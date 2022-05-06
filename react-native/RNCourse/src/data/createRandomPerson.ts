import type {IPerson} from './Iperson'
import * as F from './faker'
import * as U from './util'

export const createRandomPerson = (): Iperson => {
    const name = F.randomName()
    return {
        id: F.randomId(),
        createdDate: F.randomDate(),
        modifiedDate: new Date,
        name,
        email: F.randomEmail(),
        avatar: F.randomAvatarUrl(name),
        image: F.randomImage(),
        comments: F.randomParagraphs(4),
        counts: {
            comment: U.random(10,100),
            retweet: U.random(10,100),
            heart: U.random(100,1000)
        }
    }
}
