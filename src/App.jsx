import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/AppStore";

function App() {
  console.count("MyComponent rendered");
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
