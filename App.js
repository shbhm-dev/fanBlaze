import React, {useContext, useEffect} from 'react';
import {BarIndicator} from 'react-native-indicators';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from './src/context/matchContext';
import MatchDetailScreen from './src/screens/MatchDetailScreen';
import TabComponent from './src/components/TabComponent';
import {Context} from './src/context/matchContext';
const App = () => {
  const {state, getData} = useContext(Context);
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
