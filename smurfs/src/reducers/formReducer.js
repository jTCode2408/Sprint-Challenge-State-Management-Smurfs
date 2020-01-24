import {ADDING_SMURF_START, ADDING_SMURF_FAIL, ADDING_SMURF_SUCCESS} from '../actions/formActions';

const initialState =[
{   name:'',
age:'',
height: ''
},

]

export const formReducer = (state=initialState,action)=>{
switch(action.type){

    case ADDING_SMURF_SUCCESS: 
    const newSmurf = {
        name: action.payload.name,
        age: action.payload.age,
        height:action.payload.height
    }
    return ([...state, newSmurf])

    default:
        return state
};

}
