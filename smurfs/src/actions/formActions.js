
import axios from 'axios';

export const ADDING_SMURF_START = 'ADDING_SMURF_START';
export const ADDING_SMURF_SUCCESS = 'ADDING_SMURF_SUCCESS';
export const ADDING_SMURF_FAIL = 'ADDING_SMURF_FAIL';


export const addSmurfs =()=> dispatch =>{
dispatch({type: ADDING_SMURF_START});
axios
.post('http://localhost:3333/smurfs')
.then(res => {
    console.log ('SMurF POST',res)
    dispatch({type:ADDING_SMURF_SUCCESS, payload:res.data})
})
.catch(err =>{
    console.log('POST ERROR', err)
    dispatch({type:ADDING_SMURF_FAIL, payload:err.res})
})

}