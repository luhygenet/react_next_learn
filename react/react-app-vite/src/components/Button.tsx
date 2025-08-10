type btn = {
  children: string;
  color?: "primary" | "secondary" | "success";
  handleThis: () => void;
};
const Button = ({ children, color = "primary", handleThis }: btn) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={handleThis}>
      {children}
    </button>
  );
};

export default Button;
