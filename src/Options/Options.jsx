import css from "./Options.module.css"
export default function Options({ text, onClick }) {
  return (
      <button className={css.buttonMainApp} onClick={onClick}>
      {text}
    </button>
  );
};