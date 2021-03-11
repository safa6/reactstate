import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

class App extends Component {
  state = {
    Person:{
      fullName:"safa aloui",
      bio: "nothing" ,
      imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIK1QdUGfhbHISs4Zymz9TxS6IJjNxp0JRQ&usqp=CAU" , 
      profession: "nothing for now", 
    },
    isShow:true,
    count:0,
  }
  handelhide=()=>this.setState({isShow : !this.state.isShow, count:0})
  componentDidMount () {
    setInterval(()=>{
     this.setState(count => ({count:this.state.count +1}));
     } , 1000 )
  };
  
  render() {
    return (
      <div className="personne">
        <button onClick={()=> this.handelhide()} > {this.state.isShow ? "Hide" :"Show" } </button>
        { this.state.isShow ? (
        <>
        <h2>{this.state.Person.fullName}</h2>
        <h4>{this.state.Person.bio}</h4>
        <h4> {this.state.Person.profession}</h4>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIK1QdUGfhbHISs4Zymz9TxS6IJjNxp0JRQ&usqp=CAU"} alt="profile" />
        </>) : null}
        {this.state.isShow ? 
        <p>{this.state.count}</p>
        : null }
      </div>
    )
  }
}

 
export default App;
