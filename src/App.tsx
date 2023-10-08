import {useState} from 'react'

const App = ()=>{
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad]  = useState(0)
  const [all,setAll] = useState(0)
  const [average,setAverage] = useState(0)
  const [postive,setPercentage] = useState(0)
  
const handleClickGood = () =>{
  setGood(good+1)
  setAll(good+neutral+bad)
  setAverage((good+neutral+bad)/3)
  setPercentage((good/all)*100)
} 
const handleClickNeutral = () =>{ 
setNeutral(neutral+1)
setAll(good+neutral+bad)
setAverage((good+neutral+bad)/3)
}
const handleClickBad = () =>{
   setBad(bad+1)
   setAll(good+neutral+bad)
   setAverage((good+neutral+bad)/3)
}

return(
  <div>
    <h1>Give Feedback</h1>
    <button onClick={handleClickGood}>good</button>
    <button onClick={handleClickNeutral}>neutral</button>
    <button onClick={handleClickBad}>bad</button>
    <h1>Statistics</h1>
    <p>good: {good}</p>
    <p>neutral: {neutral}</p>
    <p>bad: {bad}</p>
    <p>All:{all} </p>
    <p>Average: {average} </p>
    <p>Postive {postive} </p>
  </div>
)
}
export default App