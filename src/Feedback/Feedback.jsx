export default function Feedback({ items, totalFeedback, positiveFeedback }) {
    const { good, neutral, bad } = items;
  return(  <>    
    <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>totalFeedback: {totalFeedback}</p> 
      <p>Positive: {positiveFeedback }%</p>
    </> ) }