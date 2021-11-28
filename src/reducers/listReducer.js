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

    if (action.type===CONSTS.ADD_LIST){

            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${idList}`
            }
            idList+=1
            return [...state, newList]
    }
    if(action.type===CONSTS.ADD_CARD){
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
    if(action.type===CONSTS.DRAG){
        console.log(action.payload)
        const {    
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type
            } = action.payload
            
        const modState = [...state]

        //si es lista
        if(type==="list"){
            const list = modState.splice(droppableIndexStart, 1)
            modState.splice(droppableIndexEnd,0,...list)
            return modState
        }


        //en la misma lista
        if(droppableIdStart===droppableIdEnd){
            const list = state.find( list =>
                droppableIdStart===list.id)
                const card = list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIndexEnd, 0, ...card)
        }
        //a otra lista
        if(droppableIdStart!==droppableIdEnd){
            const listStart = state.find(list => droppableIdStart ===list.id)

            const auxCard = listStart.cards.splice(droppableIndexStart, 1)

            const listDrop = state.find(list => droppableIdEnd=== list.id)

            listDrop.cards.splice(droppableIndexEnd, 0, ...auxCard)
        }

        return modState
    }

    if(action.type===CONSTS.DELETE_CARD){
        const { id, idList } = action.payload;
        
        const modState = [...state]

        const list = state.find(list=> idList===list.id)
        list.cards.splice(id,1)
        
        return modState
    }

    if(action.type===CONSTS.REMOVE_LIST){
        console.log("llega al reducer")
        const { idList } = action.payload;
        console.log(idList)

        const modState = state.filter(list=> list.id!==idList)

        return modState
    }

    // if(action.type===CONSTS.EDIT_CARD){
    //     const { id, newText } = action.payload;
    //     const card = state[id];
    //     card.text = newText;
    //     return { ...state, [`card-${id}`]: card };
    // }

    return state
}


export default listReducer