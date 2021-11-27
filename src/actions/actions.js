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

export const sort =(
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
)=>{
    return {
        type: CONSTS.DRAGGING,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId
        }
    }
}

export const move = (
    source, 
    destination, 
    droppableSource, 
    droppableDestination
    ) => {
    return {
        type: CONSTS.MOVE_TO_COL,
        payload: {
            source,
            destination, 
            droppableSource, 
            droppableDestination
        }
    }
  };