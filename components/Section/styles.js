import { Left, Right } from 'native-base';
import { StyleSheet} from 'react-native';
import { Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  container:{
    marginLeft: 16,
  },
  SectionHeaderTitle:{
    fontSize: 16,
  },
  HeaderImage:{
  },
  evenRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: 16,
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
    margin: 16,
    backgroundColor:'#FFFFFF',
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
    backgroundColor: '#3A375F', 
    color: 'rgb(0, 204, 102)', 
    
    padding:10,
    borderRadius:13,
    marginLeft:16,
    marginRight:16,
  },
  tipsText:{
    margin: 10,
    color: '#FFFFFF',
    padding: 5,
    fontSize: 15,
  },
  tipImage:{
    marginLeft: '68%',
  },
  text:{
    color:'#94D39E',
    fontSize:20
  },
  Reports:{
    backgroundColor: "#FFFFFF",
  }
});

export default styles;
