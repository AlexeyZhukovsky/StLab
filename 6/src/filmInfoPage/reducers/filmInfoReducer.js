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
            // let aaa = state[ind];
             console.log(state);
            if(findId !== undefined){
                console.log('State', state);
              
                let ar = {ass:'adad'};
                let br = {ad: 'ada'};
                console.log("test", [...ar, br])

               let newState =  [...state, Object.assign({},...state, Object.assign([],state[ind], {comments:[...state[ind].comments, action.payload.comments[0]]}))];
               console.log("newState",newState);
               return Object.assign([],...state, Object.assign([],state[ind], {comments:[...state[ind].comments, action.payload.comments[0]]}));
               
            }else{
                console.log('BOBY')
                return Object.assign([],state)
            }
        default:
            return state
    }
}

