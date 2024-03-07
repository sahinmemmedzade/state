// App.js

import React, { useState } from 'react';
import Form from './Form';
function App() {
  
const [name,setname]=useState('')
const[info,setinfo]=useState('')
const[surname,setsurname]=useState('')
const[age,setage]=useState('')
const[gender,setgender]=useState('')

  return (
    <div className="App">
    <Form
   
    setAge={setage}
    setGender={setgender}
    setInfo={setinfo}
    setName={setname}
    setSurname={setsurname}
    ></Form>
      <div>
       <p>name:{name} surname:{surname} age:{age} info:{info} gender:{gender}</p>
      </div>
    </div>
  );
}

export default App;
