//components to display smurfs returnign on 1st call
import React from 'react';
import { connect } from 'react-redux';
import {fetchSmurfs} from '../actions/smurfActions'
const Smurfs = props =>{
    console.log('smurf props', props)
return(
    <div className = "smurf-cont">
       <h1>Smurf Fam!</h1> 
       <button onClick = {props.fetchSmurfs}>See the Fam</button>
       {!props.gettingSmurfs && !props.loading && ( <h4>View family</h4>)}

       {props.gettingSmurfs && !props.loading && (   <div className ="smurf-map">
               {props.gettingSmurfs.map(smurf =>{
                   return(
                          <div>
                   <h3>Name: {smurf.name}</h3>
                
               <p>Age: {smurf.age}</p>
                   <p>Height(or lack of): {smurf.height}</p>
                   </div>
                   )

               })}


               </div>
       )}
    </div>
)


}


const mapStateToProps =state =>{
    return{
        loading:state.loading,
        gettingSmurfs: state.gettingSmurfs,
        error: state.error
    };
}


export default connect(mapStateToProps, {fetchSmurfs})(Smurfs);