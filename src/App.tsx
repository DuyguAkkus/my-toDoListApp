import React from 'react';
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import TextCard from './Component/TextCard/TextCard';
import styles from './Component/TextCard/TextCardStyle';
import TextEntry from './Component/TextEntry/TextEntry';

function App() {
  const handlePress = () => {
    console.log('vay piç');
  };
  return (
    <SafeAreaView style={styles.safeAreContainer}>
      <View style={styles.TitleContainer}>
        <Text style={styles.headContainer}>My Notes</Text>
      </View>
      <TextCard Text="hello" />
      <TextCard Text="hello" />
      <TextCard Text="hello" />
      <View style={styles.allContainerText}>
        <TextEntry />
        <TouchableOpacity onPress={() => handlePress()}>
          <View style={styles.buttonViewTextContainer}>
            <Text style={styles.buttonTextContainer}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default App;
