import classes from "./MyButton.module.css";

const MyButton = ({ children, isActive, ...props }) => {
  const classList = `${classes.myBtn} ${isActive ? "active" : ""}`;
  return (
    <button {...props} className={classList}>
      {children}
    </button>
  );
};

export default MyButton;
