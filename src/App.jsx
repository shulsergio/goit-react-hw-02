import { useState, useEffect } from 'react'

import './App.css'
import Options from './components/Options/Options.jsx'
import Feedback from "./components/Feedback/Feedback.jsx"
import Notification from './components/Notification/Notification.jsx';
import Description from './components/Description/Description.jsx';

function App() {

  const [items, setValues] = useState(() => {
    const lsItems = window.localStorage.getItem("items");
    console.log('savedItems-', lsItems);
        console.log('JSON.parse(savedItems)-',JSON.parse(lsItems));
    if (lsItems !== null) { 
      return JSON.parse(lsItems) } else {
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
      <Description/>
      <Options updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}>
                totalFeedback={totalFeedback}
      </Options>

    {totalFeedback > 0 ?
        <>
   <Feedback items={items}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}>
          </Feedback>
    </> : <Notification/> }
    </>
  );
}

export default App;