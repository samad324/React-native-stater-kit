import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../screens/Home";

const appNavigation = createStackNavigator({
  HomeScreen: { screen: Home }
});

const AppContainer = createAppContainer(appNavigation);

export default AppContainer;
