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
    console.log(action.type)
    switch (action.type){
        case CONSTS.ADD_LIST:{
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${idList}`
            }
            idList+=1
            return [...state, newList]
        }
        case CONSTS.ADD_CARD:{
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
        }
        case CONSTS.DRAG:{
            const {    
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId} = action.payload
            const modState = [...state]
            //en la misma lista
            if(droppableIdStart===droppableIdEnd){
                const list = state.find( list =>
                    droppableIdStart===list.id)
                    const card = list.cards.splice(droppableIndexStart, 1)
                    list.cards.splice(droppableIndexEnd, 0, ...card)
            }

            //a otra lista
            if(droppableIdStart!== droppableIdEnd){
                const listGet = modState.find(list => droppableIdStart ===list.id)
                const auxCard = listGet.cards.slice(droppableIndexStart, 1)
                const listDrop = modState.find(list =>droppableIdEnd=== list.id)

                listDrop.cards.splice(droppableIndexEnd, 0, ...auxCard)
            }

            return modState
        }

        default: 
            return state;
    }
}

export default listReducer