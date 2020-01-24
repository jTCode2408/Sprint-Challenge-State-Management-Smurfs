import {SMURF_SUCCESS} from '../actions/formActions';

const initialState ={
    loading: '',
    smurfs: [],
    error:''
}

export const formReducer = (state=initialState,action)=>{
    switch(action.type){
    case SMURF_SUCCESS:
        const newSmurf = {
            ...action.payload,
            id: Date.now()
        }
        return {
            ...state,
            smurfs: [
                ...state.smurfs, newSmurf
            ]
        }
    default:
        return state
}
}
