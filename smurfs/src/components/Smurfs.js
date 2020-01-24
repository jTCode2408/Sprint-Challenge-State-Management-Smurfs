//components to display smurfs returnign on 1st call
import React from 'react';
import { connect } from 'react-redux';

const Smurfs = props =>{
return(
    <div>
        Smurf Fam!
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


export default connect(mapStateToProps, {})(Smurfs);