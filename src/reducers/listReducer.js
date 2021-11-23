const initialState = [
    {
        title: "First list",
        id: 0,
        cards: [{
            id: 0,
            text: "This is the first task"
        }]
    },
    {
        title: "second list",
        id: 1,
        cards: [{
            id: 1,
            text: "This is the second task"
        }]
    }
]


const listReducer = (state = initialState, action)=>{
    switch (action.type){

        default: 
            return state;
    }
}

export default listReducer