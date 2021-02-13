import React, {useContext} from 'react';
import {
  StyleSheet,
  Dimensions,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../context/matchContext';
const {width: screenWidth} = Dimensions.get('window');
const FilterComponent = ({value}) => {
  const {state} = useContext(Context);

  // console.log(state);
  if (!state) {
    return null;
  }

  return (
    <View style={{width: screenWidth, backgroundColor: 'white'}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator="false"
        data={state.header.series}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => value(`${item.id}`)}>
            <Text style={{paddingLeft: 8, paddingTop: 8}}>
              {item.short_name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const style = StyleSheet.create({
  header: {
    width: screenWidth,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
export default FilterComponent;
