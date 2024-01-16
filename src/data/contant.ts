import { ImageSourcePropType } from "react-native"

type tabDataType = {
    id:number,
    imagePath:ImageSourcePropType,
    title:string
}

export const tabData:tabDataType[] = [
    {
        id:1,
        imagePath:require('../images/smart.png'),
        title:'Home'
    },
    {
        id:2,
        imagePath:require('../images/store.png'),
        title:'Store'
    },
    {
        id:3,
        imagePath:require('../images/insurance.png'),
        title:'Insurance'
    },
    {
        id:4,
        imagePath:require('../images/rupee.png'),
        title:'Credit'
    },
    {
        id:5,
        imagePath:require('../images/transaction.png'),
        title:'History'
    }
]
