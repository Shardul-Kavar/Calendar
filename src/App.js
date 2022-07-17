import "./App.css";
import ActionButtons from "./Components/ActionButtons";
import Month from "./Pages/Month";

function App() {
  return (
    <div className="month_wrapper">
      <Month />
      <div className="actionButtons_wrapper">
        <ActionButtons />
      </div>
    </div>
  );
}

export default App;
