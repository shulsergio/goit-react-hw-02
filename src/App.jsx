import { useState, useEffect } from 'react'

import './App.css'
import Options from './components/Options/Options.jsx'
import Feedback from "./components/Feedback/Feedback.jsx"
import Notification from './components/Notification/Notification.jsx';

function App() {

  const [items, setValues] = useState(() => {
    const savedItems = window.localStorage.getItem("items");
    console.log('savedItems-', savedItems);
        console.log('JSON.parse(savedItems)-',JSON.parse(savedItems));
    if (savedItems !== null) { 
      return JSON.parse(savedItems) } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    }
  });
  console.log('items- ', items);
  
  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const totalFeedback = items.good + items.neutral + items.bad;
  const positiveFeedback = totalFeedback > 0
    ? Math.round((items.good / totalFeedback) * 100)
    : 0;

  const updateFeedback = (type) => {
    setValues(item => ({
      ...item,
      [type]: item[type] + 1
    }));
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  // const valuesArray = Object.entries(values).map(([key, value]) => ({
  //   key,
  //   value
  // }));
  
  return (
    <>
      <h1>Sip Happens Café</h1>
      <p className="dataText">Please leave your feedback about our service by selecting one of the options below.</p>
      <Options text="Good" onClick={() => updateFeedback('good')} />
      <Options text="Neutral" onClick={() => updateFeedback('neutral')} />
      <Options text="Bad" onClick={() => updateFeedback('bad')} />

    {totalFeedback > 0 ?
        <>
          <button className='reset' onClick={resetFeedback}>Reset</button>
          <Feedback items={items}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}>
          </Feedback>
    </> : <Notification/> }
    </>
  );
}

export default App;