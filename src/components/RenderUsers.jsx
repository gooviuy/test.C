import { Button } from "primereact/button";
import { FooterButtons } from "./FooterButtons";
import "../styles/general.scss";

export const RenderUsers = ({ data }) => {
  return (
    <div>
      {data.map((user, index) => (
        <div className="display-user" key={index}>
          <Button>{user}</Button>
        </div>
      ))}
      <FooterButtons />
    </div>
  );
};
