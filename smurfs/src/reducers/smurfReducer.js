//reducer for handling smurfs returning
import {FETCHING_SMURF_FAIL, FETCHING_SMURF_SUCCESS, FETCHING_SMURF_START} from '../actions/smurfActions';

const initialState = {
loading:false,
gettingSmurfs: null,
error: ''

};

export const smurfReducer = (state= initialState, action)=>{
switch(action.type){
    case FETCHING_SMURF_START:
        return{
            ...state,
            loading:true
        };

        case FETCHING_SMURF_SUCCESS:
            return{
                ...state, 
                loading: false,
                gettingSmurfs: action.payload

            };

            case FETCHING_SMURF_FAIL:
                return{
                    ...state,
                    loading: null,
                    gettingSmurfs: null,
                    error: 'SOMETHING WENT WRONG'
                }
default:
    return state
}

}