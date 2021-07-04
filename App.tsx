import React, { useState } from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./src/store/index";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigation/tab.js";
import AuthNavigator from "./src/navigation/AuthNavigation";
import navigationTheme from "./src/navigation/navigationTheme";
import OfflineNotice from "./src/components/OfflineNotice";
import AppLoading from "expo-app-loading";
import COLORS from "./src/assets/color/colors";
import { navigationRef } from './src/navigationRef';
import { useSelector } from 'react-redux';

let persistor = persistStore(store);

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const token = useSelector(state=> state.auth.token)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={() => console.log("Ready")}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
      <>
        <OfflineNotice />
        <NavigationContainer 
          ref={navigationRef} 
          theme={navigationTheme}
        >   
        <StatusBar backgroundColor={COLORS.dark} barStyle="light-content" />

        { token ? <Tabs />: <AuthNavigator /> } 

        </NavigationContainer>
     </>  
  );
};
const AppWrapper = () => {
  return (
    <Provider store={store}> 
     <PersistGate loading={null} persistor={persistor}>
      <App/>
      </PersistGate>
    </Provider>
  )
}

export default AppWrapper;
