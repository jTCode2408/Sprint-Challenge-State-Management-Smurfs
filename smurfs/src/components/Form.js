//form to add smurf via post req.
import React, {useState} from 'react'
import { connect } from 'react-redux';
import {smurfForm} from '../actions/formActions';


const Form = (props) =>{
 const [newSmurfs, setNewSmurfs] = useState({
     name: '',
     age: '',
     height:''
 });

 
const handleChanges =e =>{
setNewSmurfs({
    ...newSmurfs, 
    [e.target.name] : e.target.value
});
console.log (e.target.value)
}
const handleSubmit = e =>{
    e.preventDefault();
    setNewSmurfs(newSmurfs);
    }




return(
<form onSubmit ={handleSubmit}>
<input 
type="text"
placeholder = "name"
name = "name"
value={newSmurfs.name}
onChange ={handleChanges}
/>
<input 
type="text"
name = "age"
placeholder= "age"
value={newSmurfs.age}
onChange ={handleChanges}
/>
<input 
type="text"
name = "height"
placeholder = "height"
value={newSmurfs.height}
onChange ={handleChanges}
/>
<button onClick ={()=>props.smurfForm(newSmurfs)}>Add A Smurf</button>

{props.smurfs.map(smurf => {
    return (
        <ul>
       <li> Name: {smurf.name}</li>
       <li> Age: {smurf.age}</li>
       <li> Height: {smurf.height}</li>

    </ul>
)
    })}; 
    {/*map for displaying post data on screen*/}
</form>


)

}
const mapStateToProps = state => {
    return{
        loading: state.formReducer.loading,
        smurfs: state.formReducer.smurfs,
        eror: state.formReducer.error

    }
}

export default connect(mapStateToProps,{smurfForm})(Form)