import Tips from '../../components/Section/Tips';
import DateTimePicker from '@react-native-community/datetimepicker';

import { BLOOD_PRESSURE_ACTIVE, MEMORY_ACTIVE } from '../../assets/icons';
import {  LOGIN_ICON } from '../../assets/Frame26.png';
import React, {UseState} from 'react';
import { View, Text, TouchableOpacity, Image, CheckBox, Button, StyleSheet, Right } from 'native-base';
import { Benefit } from '../../components/ListItem/BenefitListItem';

import styles from '../../components/Section/styles';
import { Row } from 'react-native-easy-grid';

function ReportSharingSection ()  {



    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = React.useState("date");
    const [show, setShow] = React.useState(false);
    const [emailChecked, setEmailChecked] = React.useState(false);
    const [phoneChecked, setPhoneChecked] = React.useState(false);
      const onChange = (event, selectedDate) => { const currentDate = selectedDate || date;
                                                  setShow(Platform.OS === 'ios');
                                                  setDate(currentDate); 
                                                }; 
      const showMode = (currentMode) => { 
                                        setShow(true);
                                        setMode(currentMode);
                                      };
      const showDatepicker = () => { showMode("date"); };
//<Image source={BLOOD_PRESSURE_ACTIVE} style={{ width: 120, height: 120, borderRadius: 60, borderWidth: 2, borderColor: '#000' }} />
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         
         
               <Button onPress={() => console.log("change profile picture")} style={styles.Button}>
            
               {/* <View>
        <Image
        //   style={styles.loginLogo}
          source={LOGIN_ICON}
        />
      </View> */} 
                 
 
                    
                </Button>
                <Button onPress={showDatepicker} style={{backgroundColor:'green',color:'green'}}>
                <Text style={{fontSize:16}}>Set Dates</Text>
                </Button>

                {show && (<DateTimePicker showIcon={true} testID="dateTimePicker" value={date}mode={mode}is24Hour={true}display='default' onChange={onChange} /> )}

                <View style={{ marginTop: 30, backgroundColor: '#0f0', height: 1, width: '100%' }} />

                <Text style={{ marginTop: 20, fontSize: 16 }}>Please confirm how you want to share your health report:</Text>
                
                <View style={{ flexDirection: 'row', marginTop: 10,width:'100%' }}>
                
                    <Text style={{ marginLeft: 5, fontSize: 16, justifyContent:'flex-start'}}>Send to email </Text>
                    
                    <CheckBox style={{position:'absolute',borderColor:'green',marginLeft:300}} value={emailChecked} onValueChange={setEmailChecked} />
                    
                </View>

                <View style={{ flexDirection:'row', marginTop: 10,width:'100%' }}>
                  
                    <Text style={{ fontSize:16,marginLeft:5}}>Download to my phone</Text>
                    <CheckBox style={{position:'absolute',borderColor:'green',marginLeft:300}} value={phoneChecked} onValueChange={setPhoneChecked} />
                </View>
                
                <Button style={{flexDirection:'row',color:'green', marginTop: 30, backgroundColor:'green',justifyContent:'center', alignSelf:'center',alignItems:'center',variant:'rounded'}} onPress={() => console.log("cancel")}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Confirm</Text>
                </Button>
                



             </View>

};

/*

 
               

                
                

           

                

*/


export default ReportSharingSection;

