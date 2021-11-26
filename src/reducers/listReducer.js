import { CONSTS } from "../actions";

let idList = 2
let idCard = 2

const initialState = [
    {
        title: "First list",
        id: `list-${0}`,
        cards: [{
            id: `card-${0}`,
            text: "This is the first task"
        }]
    },
    {
        title: "second list",
        id: `list-${1}`,
        cards: [{
            id: `list-${1}`,
            text: "This is the second task"
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
            idList++
            return [...state, newList]

        case CONSTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: `card-${idCard}`,
            }
            idCard++
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

        default: 
            return state;
    }
}

export default listReducer