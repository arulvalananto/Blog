// ❌ Bad Practice: Violating the Open-Closed Principle

// Button.js
// Existing Button component

// const Button = ({ text, onClick }) => {
//   return (
//     <button onClick={onClick}>
//       {text}
//     </button>
//   );
// }

// Button.js
// Modified Existing Button component with additional icon prop (modification)
const Button = ({ text, onClick, icon }) => {
  return (
    <button onClick={onClick}>
      <i className={icon} />
      <span>{text}</span>
    </button>
  );
};

export default Button;
