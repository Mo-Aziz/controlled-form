import React, { Component } from "react";
import "./styles.css";
class App extends Component{
constructor(){
  super()
  this.state={
firstName: "",
lastName: "",
age: "",
gender: "",
destination: "",
isVegan: false,
isKosher: false,
isLactoseFree: false
}

  
  this.handleChange=this.handleChange.bind(this)
}
handleChange(event){
const {name ,value, type, checked}= event.target
type === "checkbox" ? this.setState({[name]: checked}) :
this.setState({[name]: value})
}
render(){
  let dietry 
  if(this.state.isVegan){dietry= "Vegan"}
  else if(this.state.isKosher){dietry= "Kosher"}
  else{dietry="lactose free"}
  return(
<main> 
<form>
<input name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" /> <br/>
<input name="lastName"  value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" /> <br/>
<input name="age"  value={this.state.age} onChange={this.handleChange}placeholder="age" /> <br/>

<br/>
<label> 
  <input 
  type="radio" 
  name="gender" 
  value="male" 
  checked={this.state.gender === "male"}
  onChange={this.handleChange}
  /> 
 </label> Male

<br/>
<label>
<input type="radio" 
name="gender"
value="female"
checked={this.state.gender === "female"}
onChange={this.handleChange}
/> Female
</label>
<br/>
<select value={this.state.destination} name="destination" onChange={this.handleChange}>
  <option value="">-- please choose a destination-- </option>
  <option value="germany">Germany</option>
  <option value="norway">Norway </option>
  <option value="north pole">North Pole </option>
  <option value="South pole"> South pole </option>
</select>
<br/>
<label>
  <input
  type="checkbox"
  name="IsVegan"
  onChange={this.handleChange}
  checked={this.state.isVegan}/> vegan?
</label>
<br/>
<label>
  <input
  type="checkbox"
  name="IsKosher"
  onChange={this.handleChange}
  checked={this.state.isKosher}/> Kosher?
</label>
<br/>
<button>submit</button>
</form>
<hr/>
<h2> Entered Information:</h2>
<p> Your Name: {this.state.firstName} {this.state.lastName}</p>
<p> Your Age: {this.state.age} </p>
<p> Gender: {this.state.gender}</p>
<p> Your Destination: {this.state.destination} </p>
<p> your dietry Restrictions:{dietry}</p>

</main>
  )
}
}

export default App