import './App.css'
import upper from "./file1"; // importerer upper fra file1.js
import {text1, text2, text3} from "./file1"; //importerer text1, text2 og text3 fra file1.js
import person from './file2'
import {males, females} from './file2' //Destructuring, da vi hiver specifikke
import { MultiWelcome } from './file3';

function App() {

  let s = "Velkommen til 3 semesters frontend ballade"
  const {firstName, email} = person //fra file2.js
  console.log(firstName, email)
  console.log([...males, "Kurt", "Helle", ...females, "Tina"]) //Spread operator til at combine to arrays fra file2
  const names = [...males, "Kurt", "Helle", ...females, "Tina"]


  const personV2 = {
    ...person, 
    friends: [...males, ...females], 
    phone: 123456
  };
  

  return (
    <>
    
      <h1>Rasmus + React & Vite</h1>
      <h2>Onsdagstest</h2>
      <div style={{border: "1px solid red",  width: "500px", padding: "100px"}}>
        <p>
          {s}
          </p>
      </div>
      <div className="textbox">
        <p>
          {s}
          </p>
      </div>
      <p>{upper("please uppercase me")}</p>

      <h2>Exercise 1: </h2>
      <p>FirstName:</p>
      <p>{firstName}</p>

      <p>Exercise 2: </p>
      <p>Email:</p>
      <p>{email}</p>

      <p>Exercise 3: </p>
      <p>{names.map(name => `${name}, `)}</p>
      <p>{names.join(', ')}</p>

      <ul>
        {names.map(name => (

       <li key={name}>{name}</li>
        ))}
      
       </ul>

       <h2>MultiWelcome</h2>
       <MultiWelcome message="hej"/>

    </>
  );
  }
  


export default App
