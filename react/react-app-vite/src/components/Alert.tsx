import { ReactNode } from "react";

type prop = {
  children: ReactNode;
  onclose: () => void;
};

const Alert = ({ children, onclose }: prop) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onclose}
      ></button>
    </div>
  );
};

export default Alert;
