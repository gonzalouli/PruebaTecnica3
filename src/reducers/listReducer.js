import { CONSTS } from "../actions";

let idList = 1
let idCard = 1

const initialState = [
    {
        title: "First list",
        id: `list-${0}`,
        cards: [{
            id: `card-${0}`,
            text: "This is the first task"
        }]
    }
]


const listReducer = (state = initialState, action)=>{
    switch (action.type){
        case CONSTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${idList}`
            }
            idList+=1
            return [...state, newList]

        case CONSTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: `card-${idCard}`,
            }
            idCard+=1
            const newState = state.map(list => {
                if(list.id===action.payload.idList)
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                else
                    return list
            
            })
            return newState;
        case CONSTS.DRAGGING:
            const {    
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId} = action.payload
            const modState = [...state]
            //en la misma liusta
            if(droppableIdStart===droppableIdEnd){
                const newlist = state.find( list =>
                    droppableIdStart===list.id)
                const card = newlist.cards.splice(droppableIndexStart, 1)
                newlist.cards.splice(droppableIndexEnd, 0, ...card)
            }
            return modState

        case CONSTS.MOVE_TO_COL: 
            const {source, destination, droppableSource, droppableDestination} = action.payload
            const sourceClone = Array.from(source);
            const destClone = Array.from(destination);
            const [removed] = sourceClone.splice(droppableSource.index, 1);
        
            destClone.splice(droppableDestination.index, 0, removed);
        
            const result = {};
            result[droppableSource.droppableId] = sourceClone;
            result[droppableDestination.droppableId] = destClone;
        
            return result;


        default: 
            return state;
    }
}

export default listReducer