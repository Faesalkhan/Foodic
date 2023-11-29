import Body from "./components/Body";
import Header from "./components/Header";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
