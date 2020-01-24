//actions for smurf reducer
//axios call here to dispatch to reducer

import axios from 'axios';

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAIL = 'FETCHING_SMURFS_FAIL';


export const fetchSmurfs =()=> dispatch =>{
dispatch({type: FETCHING_SMURFS_START});
axios
.get('http://localhost:3333/smurfs')
.then(res =>{
    console.log ('SMurF RES',res)
    dispatch({type:FETCHING_SMURFS_SUCCESS, payload:res.data})
})
.catch(err =>{
    console.log('GET ERROR', err)
    dispatch({type:FETCHING_SMURFS_FAIL, payload:err.res})
})

}