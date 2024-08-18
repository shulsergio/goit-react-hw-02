import css from "./Options.module.css"
export default function Options({ updateFeedback, resetFeedback, totalFeedback }) {
  console.log("updateFeedback- ",updateFeedback);
  console.log("totalFeedback- ",totalFeedback);
  // console.log(positiveFeedback);
  return (
<>
  <button className={css.buttonMainApp} onClick={() => updateFeedback('good')} >Good  </button>
  <button className={css.buttonMainApp} onClick={() => updateFeedback('neutral')} >Neutral  </button>
  <button className={css.buttonMainApp} onClick={() => updateFeedback('bad')} >Bad </button>

{totalFeedback > 0 ? <button className={css.buttonMainApp} onClick={resetFeedback}>Reset</button>: null}
      

 </> );
};