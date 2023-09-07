import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TextCardStyle';
import React, {useState} from 'react';

const TextCard = props => {
  const [isDelete, setDelete] = useState(false);

  const handleDelete = () => {
    if (!isDelete) {
      console.log('Not Silindi', props.Text);
      setDelete(true);
    }
  };
  if (isDelete) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.noteContainer}>
        <View style={styles.icon} />
        <Text style={styles.noteTextContainer}>{props.Text}</Text>
      </View>
      <View style={styles.direction}>
        <View style={styles.deleteViewContainer}>
          <TouchableOpacity onPress={handleDelete}>
            <Text style={styles.deleteTextContainer}>SİL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default TextCard;
