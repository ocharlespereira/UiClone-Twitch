import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Following from "./pages/Following";
import ComingSoon from "./pages/ComingSoon";

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator>
      <Screen name="Following" component={Following} />
      <Screen name="ComingSoon" component={ComingSoon} />
      {/* <Screen name="ComingSoon" component={ComingSoon} />
      <Screen name="ComingSoon" component={ComingSoon} /> */}
    </Navigator>
  </NavigationContainer>
);

export default Routes;
