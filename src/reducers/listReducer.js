import { CONSTS } from "../actions";

let idList = 4
let idCard = 4

const initialState = [
    {
        title: "First list",
        id: 0,
        cards: [{
            id: -1,
            text: "This is the first task"
        }]
    },
    {
        title: "second list",
        id: 1,
        cards: [{
            id: 0,
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
                id: ++idList
            }
            return [...state, newList]

        case CONSTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: ++idCard,
            }

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

        default: 
            return state;
    }
}

export default listReducer