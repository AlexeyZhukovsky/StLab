const initialState = [
    {
        id: '284053',
        comments: [
            { 
                userName: 'Roma',
                date: '22/12/2019',
                commentText: 'film super!'  
            },
            { 
                userName: 'Andrey',
                date: '23/12/2019',
                commentText: 'mne ne zashlo(('  
            }
        ] 
    }
];

const init = {    
    
}

export default function filmInfoReducer(state = initialState, action){ 
    switch(action.type){
        case 'TEST':
            return action.payload;
        case 'ADD_COMMENT':
            let findId = state.find(el => el.id == action.payload.id);
            let ind = state.findIndex(el => el.id == action.payload.id);
            if(findId !== undefined){
                let newState =  Object.assign({},state[ind], {comments:[...state[ind].comments, action.payload.comments[0]]});
                return state.map(a => {if(a.id = action.payload.id){return newState}else{return a}})
            }else{
                return [...state, action.payload]
            }
        default:
            return state
    }
}

