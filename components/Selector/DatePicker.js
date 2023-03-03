import React, {useCallback, useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function DatePicker({callback}) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState ('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');

function onChange  (event, selectedDate)  {
    const currentDate = selectedDate || date;
    setShow(Platform.OS==='android')
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let dateString = tempDate.getDate()+'/'+(tempDate.getMonth()+1)+'/'+ tempDate.getFullYear();
    setText(dateString);
    setShow(false);

    
    callback(tempDate.getDate() + ' - '+(parseInt(tempDate.getDate())+7));
    
}

const showMode = (currentMode)=>{
    setShow(true);
    setMode(currentMode);
}



return (

<View>
    
        <View >
            <Button  title = {text} onPress = {()=>showMode('date')}/>
            
        </View>
        {show &&(


            <DateTimePicker testID = 'dateTimePicker'
            value = {date}
            mode ={mode}
            is24Hour={true}
            display='default'
            onChange = {onChange}

        />)}
</View>



);
}