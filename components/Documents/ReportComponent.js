import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Data1 from '../../SampleData/Data1';
//import * as Print from 'expo-print';

function ReportComponent () {
  
const data = Data1;

  /*const handlePrint = async () => {
    try {
      // Print the component as a PDF document
      const pdf = await Print.printToFileAsync({
        html: '<html><body><h1>Sample Report</h1><p>Date: 01/01/2022</p><p>Amount Spent: $100</p></body></html>',
      });
      await Print.printAsync({ uri: pdf.uri });
    } catch (error) {
      console.log('Error printing report:', error);
    }
  };*/

  return (
<View style={styles.page}>
<View style={styles.subHeader2}>
  <Text style={styles.subHeaderText1}>NATURE COUNTER</Text>
</View>
<View style={styles.header}>
    <Text style={styles.headerText}>Data of daily/weekly/monthly activity</Text>
</View>
<View style={styles.subHeader1}>
  <Text style={styles.subHeaderText}>HealthReport</Text>
</View>
<View style={styles.subHeader}>
  <Text style={styles.subHeaderText}>Report Date: {new Date().toLocaleDateString()}</Text>
</View>
<View style={styles.subHeader}>
  <Text style={styles.subHeaderText}>UserId:ABCD</Text>
</View>

<View style={styles.table}>
<View style={styles.row}>
<View style={styles.column}>
<Text style={styles.columnHeader}>Date</Text>
</View>
<View style={styles.column}>
<Text style={styles.columnHeader}>Time</Text>
</View>
<View style={styles.column}>
<Text style={styles.columnHeader}>Duration Spent</Text>
</View>
<View style={styles.column}>
<Text style={styles.columnHeader}>Location</Text>
</View>
<View style={styles.column}>
<Text style={styles.columnHeader}>Weekly Goal</Text>
</View>
<View style={styles.column}>
<Text style={styles.columnHeader}>Percentage Reached</Text>
</View>
</View>
<View style={styles.row1}>
<View style={styles.column}>

<Text>{data.days[0].x}</Text>
</View>

<View style={styles.column}>
    <Text>10:00 AM</Text>
</View>

<View style={styles.column}>
<Text>{data.days[0].y}</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>Central Park</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>5 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>40%</Text>
</View>
</View>
<View style={styles.row}>
<View style={styles.column}>
<Text style={styles.column}>2/2/2023</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>2:00 PM</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>1 hour</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>Library</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>4 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>25%</Text>
</View>
</View>
<View style={styles.row1}>
<View style={styles.column}>
<Text style={styles.column}>2/3/2023</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>9:00 AM</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>3 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>Gym</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>6 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>50%</Text>
</View>
</View>
<View style={styles.row}>
<View style={styles.column}>
<Text style={styles.column}>2/3/2023</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>9:00 AM</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>3 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>Gym</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>6 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>50%</Text>
</View>
</View>
<View style={styles.row1}>
<View style={styles.column}>
<Text style={styles.column}>2/3/2023</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>9:00 AM</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>3 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>Gym</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>6 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>50%</Text>
</View>
</View>
<View style={styles.row}>
<View style={styles.column}>
<Text style={styles.column}>2/3/2023</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>9:00 AM</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>3 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>Gym</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>6 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>50%</Text>
</View>
</View>
<View style={styles.row1}>
<View style={styles.column}>
<Text style={styles.column}>2/3/2023</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>9:00 AM</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>3 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>Gym</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>6 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>50%</Text>
</View>
</View>
<View style={styles.row}>
<View style={styles.column}>
<Text style={styles.column}>2/3/2023</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>9:00 AM</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>3 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>Gym</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>6 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>50%</Text>
</View>
</View>
<View style={styles.row1}>
<View style={styles.column}>
<Text style={styles.column}>2/3/2023</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>9:00 AM</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>3 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>Gym</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>6 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>50%</Text>
</View>
</View>
<View style={styles.row}>
<View style={styles.column}>
<Text style={styles.column}>2/3/2023</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>9:00 AM</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>3 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>Gym</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>6 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>50%</Text>
</View>
</View>
<View style={styles.row1}>
<View style={styles.column}>
<Text style={styles.column}>2/3/2023</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>9:00 AM</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>3 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>Gym</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>6 hours</Text>
</View>
<View style={styles.column}>
<Text style={styles.column}>50%</Text>
</View>
</View>

</View>

</View>
  );

  
};

const styles = StyleSheet.create({
  page: {
  flex: 1,
  paddingHorizontal: 20,
  paddingVertical: 30,
  },
  header: {
  alignItems: 'center',
  marginBottom: 20,
  },
  headerText: {
  fontSize: 16,
  fontWeight: 'bold',
  },
  subHeader: {
  marginBottom: 20,
  },
  subHeader1: {
    
    textAlign:'right',
    },
    subHeader2: {
    
      textAlign:'left',
      },
  subHeaderText: {
  fontSize: 12,
  fontWeight:'bold'
  },
  subHeaderText1: {
    fontSize: 16,
    fontWeight:'bold'
    },
    subHeaderText1: {
      fontSize: 16,
      fontWeight:'bold',
      color:'green'
      },
  table: {
  borderWidth: 1,
  borderColor: '#fff',
  flexDirection: 'column',
  },
  row: {
  flexDirection: 'row',
  borderBottomWidth: 1,
  borderColor: '#fff',
  height:40,
  width:'100%',
  justifyContent:'center',
  textAlign:'center',
  alignSelf:'center'

  
  },
  row1: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#fff',
    backgroundColor:'#DCDCDC',
    height:40,
    textAlign:'center',
    width:'100%',
   justifyContent:'center',
   textAlign:'center',
   alignSelf:'center',
   

    
    },
  column: {
  flex: 1,
  paddingVertical: 10,
  paddingHorizontal: 5,
  },
  columnHeader: {
  fontWeight: 'bold',
  },
  report:{
    backgroundColor:'green',
    color:'green'
  }
  });
  

export default ReportComponent;