import React, {useContext, useEffect} from 'react';
import {BarIndicator} from 'react-native-indicators';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from './src/context/MatchContext';
import MatchDetailScreen from './src/Screens/MatchDetailScreen';
import TabComponent from './src/components/TabComponent';
import {Context} from './src/context/MatchContext';
const App = () => {
  const {state, getData} = useContext(Context);
  useEffect(() => {
    getData();
  }, []);

  if (!state) {
    return <BarIndicator color="red" />;
  }
  return (
    <NavigationContainer>
      <TabComponent />
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
