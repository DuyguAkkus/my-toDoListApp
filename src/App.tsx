import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import TextCard from './Component/TextCard/TextCard';
import styles from './Component/TextCard/TextCardStyle';
import React, {useState} from 'react';

function App() {
  const [text, setText] = useState(''); // State'i düzgün şekilde başlatın.
  const [card, setCard] = useState([]); // bir dizi tanımladım. oluştuğum kartalrı tutması için.

  const handleTextChange = newText => {
    setText(newText); //text değerime girilen text i atamamı sağlıyor.
  };

  const handlePress = () => {
    Keyboard.dismiss();
    setCard([...card, text]);
    setText(null); // Metin girişini temizleyin
  };

  return (
    <SafeAreaView style={styles.safeAreContainer}>
      <View style={styles.TitleContainer}>
        <Text style={styles.headContainer}>My Notes: {card.length}</Text>
      </View>
      <FlatList
        data={card}
        renderItem={({item}) => <TextCard text={item} />} // Her öğeyi TextCard bileşeni içinde görüntüleyin
        keyExtractor={(item, index) => index.toString()} // Her öğenin benzersiz bir anahtarını belirtin
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.allContainerText}>
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
export default App;
