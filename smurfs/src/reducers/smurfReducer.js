//reducer for handling smurfs returning
import {FETCHING_SMURFS_FAIL, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_START} from '../actions/smurfActions';

const initialState = {
loading:false,
gettingSmurfs: null,
error: ''

};

export const smurfReducer = (state= initialState, action)=>{
switch(action.type){
    case FETCHING_SMURFS_START:
        return{
            ...state,
            loading:true
        };

        case FETCHING_SMURFS_SUCCESS:
            return{
                ...state, 
                loading: false,
                gettingSmurfs: action.payload

            };

            case FETCHING_SMURFS_FAIL:
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