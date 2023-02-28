import Tips from '../../components/Section/Tips';
import DateTimePicker from '@react-native-community/datetimepicker';

import { BLOOD_PRESSURE_ACTIVE, MEMORY_ACTIVE } from '../../assets/icons';
import React, {UseState} from 'react';
import { View, Text, TouchableOpacity, Image, CheckBox, Button, StyleSheet } from 'native-base';
import { Benefit } from '../ListItem/BenefitListItem';
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
               <Button onPress={() => console.log("change profile picture")}>
               <Benefit label={''} source={BLOOD_PRESSURE_ACTIVE} />
                    
                </Button>

                <Button onPress={showDatepicker}>
                    <Text style={{ marginTop: 20, fontSize: 16 }}>Set Date</Text>
                </Button>

                {show && (<DateTimePicker testID="dateTimePicker" value={date}mode={mode}is24Hour={true}display="default" onChange={onChange} /> )}

                <View style={{ marginTop: 30, backgroundColor: '#0f0', height: 1, width: '100%' }} />

                <Text style={{ marginTop: 20, fontSize: 16 }}>Please confirm how you want to share your health report:</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <CheckBox value={emailChecked} onValueChange={setEmailChecked} />
                    <Text style={{ marginLeft: 10, fontSize: 16 }}>Send to email </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <CheckBox value={phoneChecked} onValueChange={setPhoneChecked} />
                    <Text style={{ marginLeft: 10, fontSize: 16 }}>Download to my phone</Text>
                </View>

                <Button style={{ marginTop: 30 }} onPress={() => console.log("cancel")}>
                    <Text style={{ color: '#f00', fontSize: 16 }}>Cancel</Text>
                </Button>



             </View>

};

/*

 
               

                
                

           

                

*/


export default ReportSharingSection;

