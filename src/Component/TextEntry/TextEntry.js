import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from '../TextCard/TextCardStyle';

const TextEntry = () => {
  const [text, setText] = useState(''); // State'i düzgün şekilde başlatın.

  return (
    <View>
      <TextInput
        style={styles.textInputContainer}
        onChangeText={newText => setText(newText)} // State'i güncellemek için bir işlev kullanın.
        value={text}
        placeholder={'Text Enter...'}
      />
    </View>
  );
};

export default TextEntry;
