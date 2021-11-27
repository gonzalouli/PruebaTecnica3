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

export const deleteCard = (id, idList) => {
    return {
      type: CONSTS.DELETE_CARD,
      payload: { id, idList }
    };
  };

export const editCard = (id, idList, newText) => {
return {
    type: CONSTS.EDIT_CARD,
    payload: { id, idList, newText }
};
};

export const sort =(
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
)=>{
    return {
        type: CONSTS.DRAG,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type
        }
    }
}
