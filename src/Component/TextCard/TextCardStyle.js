import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreContainer: {
    backgroundColor: '#aab1b7',
    flex: 1,
  },
  TitleContainer: {
    width: '100%',
    height: 40,
    marginBottom: 15,
    marginTop: 8,
    alignItems: 'center',
  },
  headContainer: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#194d33',
  },
  noteContainer: {
    backgroundColor: '#65947c',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#194d33',
    width: '97%',
    height: 80,
    marginLeft: 5,

    flexDirection: 'row',
  },
  noteTextContainer: {
    flexDirection: 'row',
    marginLeft: 14,
    marginTop: 25,
    fontSize: 22,
    fontWeight: 330,
  },
  icon: {
    width: 16,
    height: 16,
    borderRadius: 100,
    backgroundColor: '#adbecd',
    borderWidth: 1.4,
    borderColor: '#194d33',
    marginTop: 30,
    marginLeft: 25,
  },
  deleteViewContainer: {
    backgroundColor: '#adbecd',
    borderWidth: 1,
    borderColor: '#194d33',
    width: 35,
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -70,
  },
  deleteTextContainer: {
    color: '#dc143c',
    fontSize: 15,
    fontWeight: 600,
  },
  container: {
    flexDirection: 'row',
    marginTop: 5,
  },
  direction: {
    height: 80,
    justifyContent: 'center',
    padding: 5,
    margin: 1,
  },
  allContainerText: {
    marginBottom: 80,
    backgroundColor: '#65947c',
    borderWidth: 1,
    borderColor: '#194d33',
    borderRadius: 20,
    margin: 8,
    position: 'absolute', // Mutlaka bu özelliği kullanın
    bottom: 0, // Bu, alt sınırı belirler
  },
  buttonViewTextContainer: {
    backgroundColor: '#194d33',
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 23,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#194d33',
    alignItems: 'center',
  },
  buttonTextContainer: {
    color: '#aab1b7',
    padding: 7,
    fontSize: 18,
    alignItems: 'center',
  },
  textInputContainer: {
    backgroundColor: '#65947c',
    height: 55,
    borderBottomWidth: 1,
    borderColor: '#194d33',
    width: 397,
    paddingLeft: 25,
    fontSize: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  keybordContainer: {},
});
export default styles;
