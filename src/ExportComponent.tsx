import { ButtonMsg } from "./components/ButtonMsg";
import Header from './components/Header'
type props = {
  name: string;
  props: any;
};
export default function GetComponent({ name, props }: props) {
  switch (name) {
    case "ButtonMsg":
      return <ButtonMsg {...props}/>;
    case "Header":
      return <Header {...props}/>;
    case "BlogEntryCard":
      return <Header {...props}/>;
    default:
      <h1>No haz seleccionado un componente</h1>;
  }
}
