import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClick: () => void;
}

const Alert = ({children}:Props) => {
  return (
    <div className="alert alert-primary">{children}</div>
  )
}

export default Alert