import { ImageSourcePropType } from "react-native"

type tabDataType = {
    id:number,
    imagePath:ImageSourcePropType
}

export const tabData:tabDataType[] = [
    {
        id:1,
        imagePath:require('../images/smart.png')
    },
    {
        id:2,
        imagePath:require('../images/store.png')
    },
    {
        id:3,
        imagePath:require('../images/insurance.png')
    },
    {
        id:4,
        imagePath:require('../images/rupee.png')
    },
    {
        id:5,
        imagePath:require('../images/transaction.png')
    }
]
