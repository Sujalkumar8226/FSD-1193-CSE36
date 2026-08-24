import React from "react";

function add(a,b){
  return a+b;
}

// React component
function Welcome(){
  return <h2>welcome to my first react component</h2>

}
// Another component 
function info(){
  return(
    <div>
      <h3> What is  component</h3>
      <p>A component is a reusable piece of UI in React</p>
    </div>
  );
}
// main App component
fuction App(){
  return(
    <div style={{ padding:"20px",fontFamily:"Arial"}}>
      <h1>your first react component</h1>
      <welcome />
      <info/>
      <h3>How to use component</h3>
      <p>Normal function Result:{add((10,20))}</p>
      <h3>Interview question</h3>
      <p>Q:What is a React Component</p>
      <p>A:A reusable UI block written as a function or class</p>

    </div>
  );
}
export default App