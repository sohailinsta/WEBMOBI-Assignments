import Sidemenu from "./components/Sidemenu";
import HeaderMain from "./components/HeaderMain";
import EventComponent from "./components/EventComponent";
import ContentLeft from "./components/ContentLeft";
import MainMenu from "./components/MainMenu";
import RightMenu from "./components/RightMenu";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Sidemenu />
      <HeaderMain />
      <EventComponent />
      <ContentLeft />
      <MainMenu />
      <RightMenu />
    </div>
  );
}
