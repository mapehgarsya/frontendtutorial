import React, {useState} from 'react'

const App = () => {
  // stating and setting initial states
  const [data, setData] = useState(0);
  const [values, setValues] = useState({firstName: 'Ryan', lastName: 'N'});

  // custom function code goes here
  const clickedMeFunction = () => {
    
    setData(data+1)
  }
  
  const handleChange = (e,requestField) => {
    console.log(e.target.value);
    setValues({...values, [requestField]: e.target.value})
  }

  return (
    <div>
      {console.log(values)}
      <h1>{data}</h1>
      <h1>{values.firstName}</h1>
      <input
        type='text'
        name='fname'
        value={values.firstName}
        onChange={e => {handleChange(e, 'firstName')}}
      />

      <button onClick={() => {clickedMeFunction()}}>Click Me!</button>
    </div>
  )
}
export default App;