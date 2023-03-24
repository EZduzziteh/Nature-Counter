import React, { useState } from 'react';
import { Image, ScrollView, ToastAndroid } from 'react-native';
import { View, Text, TouchableOpacity, Button, CheckBox } from 'native-base'; 
import { BLOOD_PRESSURE_ACTIVE, MEMORY_ACTIVE } from '../../assets/icons';
import { LOGIN_ICON } from '../../assets/Frame26.png';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

import styles from '../../components/Section/styles';
import ReportComponent from '../Documents/ReportComponent'

// Permissions and Plat form Variables for OS Validations and Asking permissions
import { PermissionsAndroid, Platform } from 'react-native'

// React Native Library for Exporting HTML to PDF 
import RNHTMLtoPDF from 'react-native-html-to-pdf';

import Data from '../../SampleData/Data3';

function ReportSharingSection() {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);
  const [phoneChecked, setPhoneChecked] = useState(false);
  const [filePath, setFilePath] = useState('');

  //It  isPermitted and is responssible for checking with permissions and requesting if no permission is given
  const isPermitted = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs access to Storage data',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        alert('Write permission err', err);
        return false;
      }
    } else {
      return true;
    }
  };

  // responsible for generating pdf and saving it to the specified path
  const createPDF = async () => {
    if (!phoneChecked) {
      if (await isPermitted()) {
        let options = {
          html:
            `
            <html>
            <head>
              <style>
                body {
                  font-family: 'Helvetica';
                  font-size: 12px;
                }
                header, footer {
                  height: 50px;
                  background-color: #fff;
                  color: #000;
                  display: flex;
                  justify-content: center;
                  padding: 0 20px;
                }
                table {
                  width: 100%;
                  border-collapse: collapse;
                }
                th, td {
                  border: 1px solid #000;
                  padding: 5px;
                }
                th {
                  background-color: #ccc;
                }
                .column {
                  float: left,
                  width: 33%,
                  padding: 10px
                }
                .row {
                  display: inline
                }
              </style>
            </head>
            <body>
              <h1 style="color: green;">NATURE COUNTER</h1>
              <div class="row">
              <h4 style="float: left;">Report Date :2023-03-20 </h4> <br>
              <h4 style="float: left;margin-top: 40px; margin-left: -130px;">User ID : USR-937487</h4>
              </div>
              
              <h4 class="row" style="float: right;">Health Report</h4><br>
              
              <header>
                <h1>Data of Daily/Weekly/Monthly Activity</h1>
              </header>
              <br><br>
              
              <table>
                <tr>
                  <th></th>
                  <th>Date</th>
                  <th>Start Time</th>
                  <th>Duration</th>
                  <th>Location</th>
                  <th>Weekly Goal</th>
                  <th>Percentage of goal reached</th>
                </tr>
                ${Data.days
                  .map(
                    (row, index) => `
                  <tr>
                    <td>${index + 1}</td>
                    <td>${row.date}</td>
                    <td>${row.startTime}</td>
                    <td>${row.duration}</td>
                    <td>${row.location}</td>
                    <td>${row.weeklyGoal}</td>
                    <td>${row.percentage}</td>
                  </tr>
                `,
                  )
                  .join('')}
              </table>
            </body>
            </html>
            `,
          fileName: 'Report',
          directory: 'Documents',
          width: 791,
          height: 612
        };
        let file = await RNHTMLtoPDF.convert(options);
        if (Platform.OS == 'android') {
          ToastAndroid.show(`Your file has been downloaded at - ${file.filePath}`, ToastAndroid.LONG)
        }
        setFilePath(file.filePath);
      }
    } else if (emailChecked) {
      ToastAndroid.show('Report sent to your registered email id.', ToastAndroid.LONG);
    } else {
      ToastAndroid.show('Please select one of the above option to get the report.', ToastAndroid.LONG);
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const handleConfirm = () => {
    if (phoneChecked) {
      navigation.navigate('ReportComponent'); // navigate to DownloadReport component
    }
  };

  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{alignSelf:'center',alignItems:'center',justifyContent:'center'}} source={require('../../assets/Frame26.png')}/>
      <Button onPress={() => console.log('change profile picture')} style={styles.Button}>
        {/* #TODO figure out why this doesnt work<Image source={LOGIN_ICON} />*/}
      </Button>
      <Text style={{ marginTop: 20, fontSize: 16, width: '100%' }}>Set Dates</Text>
      <Button onPress={showDatepicker} style={{ backgroundColor: 'green', color: 'green'}}>
        <Text style={{ fontSize: 16 }}>Set Dates</Text>
      </Button>
      {show && <DateTimePicker showIcon={true} testID="dateTimePicker" value={date} mode={mode} is24Hour={true} display="default" onChange={onChange} />}
      <View style={{ marginTop: 30, backgroundColor: '#0f0', height: 1, width: '100%' }} />
      <Text style={{ marginTop: 20, fontSize: 16 }}>Please confirm how you want to share your health report:</Text>
      <View style={{ flexDirection: 'row', marginTop: 10, width: '100%' }}>
        <Text style={{ marginLeft: 5, fontSize: 16, justifyContent: 'flex-start' }}>Send to email </Text>
        <CheckBox style={{ position: 'absolute', borderColor: 'green', marginLeft: 300 }} checked={emailChecked} onChange={() => setEmailChecked(!emailChecked)} />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10, width: '100%' }}>
        <Text style={{ fontSize: 16, marginLeft: 5 }}>Download to my phone</Text>
        <CheckBox style={{ position: 'absolute', borderColor: 'green', marginLeft: 300 }} checked={phoneChecked} onChange={() => setPhoneChecked(!phoneChecked)} />
      </View>
      <Button onPress={createPDF} style={{ flexDirection: 'row', color: 'green', marginTop: 60, backgroundColor: 'green', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', variant: 'rounded' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Confirm</Text>
      </Button>
    </View>
    </ScrollView>
  );
}

export default ReportSharingSection;
