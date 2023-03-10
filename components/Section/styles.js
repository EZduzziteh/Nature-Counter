import { Left } from 'native-base';
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
    margin: 2,
    backgroundColor:'rgb(240, 240, 240)',
    borderStyle:'solid',
    borderColor:'rgb(100, 100, 100)',
    borderWidth: 1,
    
    borderRadius: 5,
    
  },
  datePicker:{
    margin: 2,
    backgroundColor:'rgb(100, 300, 100)',
    borderStyle:'solid',
    borderColor:'rgb(100, 100, 100)',
    borderWidth: 1,
    
    borderRadius: 5,
  },
  dateRange:{

    alignContent:'center',
    justifyContent:'center',
    textAlign:'center',
    margin:2,
    paddingBottom:5,

  },
  tipsContainer:{
    backgroundColor: 'rgb(82, 59, 104)',
    color: 'rgb(0, 204, 102)',
  },
  tipsText:{
    
    color: 'rgb(102, 102, 153)',
  }
});

export default styles;
