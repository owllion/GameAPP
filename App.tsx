
import React, {useState} from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './src/store/index'
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/tab.js'
import navigationTheme from './src/navigation/navigationTheme'
import OfflineNotice from './src/components/OfflineNotice';
import AppLoading from 'expo-app-loading'

let persistor = persistStore(store);

const App = () => {
  const [isReady, setIsReady] = useState(false)
  
  if(!isReady) {
    return <AppLoading  
              startAsync={()=>console.log('開始')} 
              onFinish={()=> setIsReady(true)}
              onError={console.warn}
              />
  } 
  
  return (
    <Provider store={store}>
      <PersistGate  loading={null} persistor={persistor}> 
      <OfflineNotice/>
       <NavigationContainer theme={navigationTheme}>
         {/* 如果有user資料或是token就顯示Tabs */}
        {/* <AuthNavigator/> */}
        <Tabs/>
       </NavigationContainer>
       </PersistGate>
        </Provider> 
  );
}

export default App

