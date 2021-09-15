
//     initialState => store,
// view => 
// action => reducer(state, action) => newState

import  { createSrore } from 'redux';

const initialState = {
name:'Lola',
secondName:'Ivanova'
}

function reducer(state = initialState,action){
switch (action.type){
    case 'CHANGE_NAME':
        return { ...state, name:action.payload}
        case 'CHANGE_SECOND_NAME':
        return { ...state, secondName:action.payload}
}
return state
}
const store = createSrore(reducer)

console.log(store.getState())

const changeName = {
type:'CHANGE_NAME',
payload:'Mona'
}

const changeSecondName = {
    type:'CHANGE_SECOND_NAME',
    payload:'Pedrova'
}
store.dispatch(changeName)

console.log(store.getState())

store.dispatch(changeSecondName)