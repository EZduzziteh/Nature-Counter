import { StyleSheet} from 'react-native';
import { Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  evenRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  badge: {
    width: 120,
    height: 120,
  },
  overviewContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  graphContainer:{
    margin: 5,
    backgroundColor:'rgb(240, 240, 240)',
    borderStyle:'solid',
    borderColor:'rgb(100, 100, 100)',
    borderWidth: 1,
    
    borderRadius: 10,
    
  }
});

export default styles;
