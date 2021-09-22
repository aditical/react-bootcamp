import "./App.css";
import Test from "./Test";
import TestTwoClass from "./test2";
import ListAndKeys from "./listAndKeys";
import FormExample from "./form";
import HookExample from "./hooksExample";
import AxiosExample from "./axiosExample";
import ReduxExample from "./reduxExample";

function App() {
  const address = "Kathmandu";
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", width: "100%" }}>
          {/* <div style={{ border: "2px solid red", marginRight: "20px" }}>
            <h1>Class Examples</h1>
            <TestTwoClass />
          </div>
          <div style={{ border: "2px solid green", marginRight: "20px" }}>
            <h1> List and keys and form</h1>
            <ListAndKeys />
            <FormExample />
          </div>
          <div style={{ border: "2px solid yellow", marginRight: "20px" }}>
            <h1> Hooks Example</h1>
            <HookExample />
          </div>
          <div style={{ border: "2px solid blue", marginRight: "20px" }}>
            <h1>Composition [ HOC ]</h1>{" "}
            <Test name="Aditi" age="20" address={address} />
          </div>
          <div style={{ border: "2px solid pink" }}>
            <h1>Axios</h1> <AxiosExample />
          </div> */}
          <ReduxExample />
        </div>
      </header>
    </div>
  );
}

export default App;
