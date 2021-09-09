import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Provider} from 'react-redux';
import store from './src/redux/store';
import BottomTab from './src/Component/BottomTab';
import LogedNavigation from './src/Component/LogedNavigation';


const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <LogedNavigation />
        <BottomTab/>
      </NavigationContainer>
    </Provider>
  );
}

export default App 


