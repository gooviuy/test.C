import { Button } from "primereact/button";
import "../styles/general.scss";

const BUTTONS = [
  {
    label: "Delete",
    icon: "pi pi-trash",
    className: "p-button-danger",
  },
  {
    label: "Advice",
    icon: "pi pi-sun",
    className: "p-button-warning",
  },
  {
    label: "Create",
    icon: "pi pi-plus-circle",
    className: "p-button-info",
  },
  {
    label: "Submit",
    icon: "pi pi-chevron-right",
    className: "p-button-success",
  },
];

export const FooterButtons = () => {
  return BUTTONS.map((props) => {
    return (
      <div className="footer-buttons">
        <Button {...props} />
      </div>
    );
  });
};
