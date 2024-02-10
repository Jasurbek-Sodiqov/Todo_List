import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Hero from "./components/Hero";
import List from "./components/List";
import Enter from "./components/Enter";

const App=()=>{

  return (<Provider store={store}>
    <div className="app">
      <Hero/>
      <List/>
      <Enter/>
    </div>
  </Provider>
  )
}
export default App