import { CONSTS } from "."

export const addList = (title) =>{
    return {
        type: CONSTS.ADD_LIST,
        payload: title
    };
}

export const addCard = (idList, text) =>{
    return {
        type: CONSTS.ADD_CARD,
        payload: {text, idList}
    };
}