
import axios from 'axios';

export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_ERROR = "SMURF_ERROR"

// POST
export const smurfForm = (smurfData) => dispatch => {
    dispatch({ type: SMURF_SUCCESS, payload: smurfData })
    axios
    .post('http://localhost:3333/smurfs', smurfData)
    
    .then(res => {
        console.log('POSTRES',res)
    })
    .catch(err => {
        console.log(err)
    })
}