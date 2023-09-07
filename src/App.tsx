import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import TextCard from './Component/TextCard/TextCard';
import styles from './Component/TextCard/TextCardStyle';
import React, {useState} from 'react';

function App() {
  const [text, setText] = useState(''); // State'i düzgün şekilde başlatın.
  const [card, setCard] = useState([]);

  const handleTextChange = newText => {
    setText(newText);
  };

  const handlePress = () => {
    setCard([...card, text]);
    setText(''); // Metin girişini temizleyin
  };

  return (
    <SafeAreaView style={styles.safeAreContainer}>
      <View style={styles.TitleContainer}>
        <Text style={styles.headContainer}>My Notes: {card.length}</Text>
      </View>

      <TextCard text="go" />
      <View>
        {card.map((item, index) => {
          return <TextCard key={index} text={item} />;
        })}
      </View>

      <View style={styles.allContainerText}>
        <TextInput
          style={styles.textInputContainer}
          onChangeText={handleTextChange} // State'i güncellemek için bir işlev kullanın.
          value={text}
          placeholder={'Text Enter...'}
        />
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
