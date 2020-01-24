//form to add smurf via post req.
import React, {useState} from 'react'
import { connect } from 'react-redux';
import {addSmurfs} from '../actions/formActions';


const Form = props =>{

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
const submitForm = e =>{
    e.preventDefault();
    props.addSmurfs(newSmurfs);
    setNewSmurfs({name: '', age:'', height:''})
};
return(
<form onSubmit ={submitForm}>
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
<button onClick ={()=>props.addSmurfs(newSmurfs)}>Add A Smurf</button>

</form>
)
}

const mapStateToProps = state => {
    return{
        name: state.formReducer.name,
        age: state.formReducer.age,
        height:state.formReducer.height

    }
}

export default connect(mapStateToProps,{addSmurfs})(Form)