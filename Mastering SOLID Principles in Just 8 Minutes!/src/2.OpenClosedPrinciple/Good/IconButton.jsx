// ✅ Good: You have not modified anything here.
const IconButton = ({ text, icon, onClick }) => {
  return (
    <button onClick={onClick}>
      <i className={icon} />
      <span>{text}</span>
    </button>
  );
};

export default IconButton;
