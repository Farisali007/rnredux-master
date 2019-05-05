/*
import React from "react";
import { View } from "react-native";
//Redux specific
import { Provider } from "react-redux";
import { createStore } from "redux";
//Get Reducers
import reducers from "./reducers";
//Get the Header Component
import { Header } from "./components/common";
// import LibraryList from "./components/LibraryList";
*/
import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import { Header } from "./components/common";
import LibraryList from "./components/LibraryList";

const App = () => {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  };
 /* 
const App = () => {
return (
// Provider can only have one child component
<Provider store={createStore(reducers)}>
<View>
<Header headerText="Redux Demo -- Tech Stack" />
{ <LibraryList /> }
</View>
</Provider>
);
};
*/
export default App;
