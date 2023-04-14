import React, {useCallback, useState} from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { green } from 'react-native-redash';
const axios = require('axios')

const styles = StyleSheet.create({
    calender: {
      width: '100%',
      height: 45,
      flexDirection: 'row',
      borderRadius: 50,
      marginLeft: 0,
      marginTop: 10,
      
    },
    calenderButton:{
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 50,
        borderStyle:'solid',
        borderColor:'#459F5E',
        borderWidth:1,
        marginLeft:16
    }
  });



//this component displays a calender that the user can use to select a date range.
export default function DatePicker({callback}, {dateMode}) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState ('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Click Here To Select a Date');
    const [modeIndex, setModeIndex] = useState(dateMode);


    //this fucntions makes sure that the dates fall within range, if not then it caps it at the end of the month.
function makeSureDateIsInRange(Index, day){


    switch(index){

        default:
        return "day was negative, can not parse."
        case 1:
            // "Jan" 31 days
            if(day>31){
                return 31;
            }else{
                return day;
            }
        case 2:
            // "Feb" 28 days
            if(day>28){
                return 28;
            }else{
                return day;
            }
        case 3:
            
            // "Mar" 31 days
            if(day>31){
                return 31;
            }else{
                return day;
            }
        case 1:
            //"Apr" 30 days
            if(day>30){
                return 30;
            }else{
                return day;
            }
        case 2:
            // "May" 31 days
            if(day>31){
                return 31;
            }else{
                return day;
            }
        case 3:
            // "Jun" 30 days
            if(day>30){
                return 30;
            }else{
                return day;
            }
        case 1:
            // "Jul" 31 days
            if(day>31){
                return 31;
            }else{
                return day;
            }
        case 2:
            // "Aug" 31 days
            if(day>31){
                return 31;
            }else{
                return day;
            }
        case 3:
            // "Sep" 30
            if(day>30){
                return 30;
            }else{
                return day;
            }
        case 1:
            // "Oct" 31
            if(day>31){
                return 31;
            }else{
                return day;
            }
        case 2:
            // "Nov" 30
            if(day>30){
                return 30;
            }else{
                return day;
            }
        case 3:
           //  "Dec" 31
           if(day>31){
            return 31;
        }else{
            return day;
        }
    };

}



function convertMonthToString(index){


switch(index){

    default:
        return "month index out of range"
    case 1:
        return "Jan"
    case 2:
        return "Feb"
    case 3:
        return "Mar"
    case 4:
        return "Apr"
    case 5:
        return "May"
    case 6:
        return "Jun"
    case 7:
        return "Jul"
    case 8:
        return "Aug"
    case 9:
        return "Sep"
    case 10:
        return "Oct"
    case 11:
        return "Nov"
    case 12:
        return "Dec"
    
};

}

    //update date information when the selected date is changed
function onChange  (event, selectedDate)  {
    const currentDate = selectedDate || date;
    setShow(Platform.OS==='android')
    setDate(currentDate);
    let tempDate = new Date(currentDate);

    let dateString ="";
/*
    //todo find out why this is undefined 
    console.log(dateMode);
 

    //#TODO make this work so that it updates the date range accordingly.
    if(dateMode==0){

        dateString = tempDate.getDate()+'/'+(tempDate.getMonth()+1)+'/'+ tempDate.getFullYear()+"weekly";
        setText(dateString);
    }else if(dateMode==1){
    
        dateString = tempDate.getDate()+'/'+(tempDate.getMonth()+1)+'/'+ tempDate.getFullYear()+"monthly";
        setText(dateString);

    }else if(dateMode==2){


        dateString = tempDate.getDate()+'/'+(tempDate.getMonth()+1)+'/'+ tempDate.getFullYear()+"annual";
        setText(dateString);
    }
    //end of todo
    */
    
    setShow(false)
    dateString = (convertMonthToString(tempDate.getMonth()+1))+' '+tempDate.getDate();
    setText(dateString);
    callback((convertMonthToString(tempDate.getMonth()+1))+" "+tempDate.getDate() + ' - '+(parseInt(tempDate.getDate())+7));
    
}

const showMode = (currentMode)=>{
    setShow(true);
    setMode(currentMode);
}

//test function to get
function getJournal(){
   
    
    console.log("getting articles test");
    
        axios({
            method: 'get',
            url: 'http://10.0.2.2:3000/articles/',
            responseType: 'json'
          })
        .then(function (response) {
            console.log("articles response: "+ JSON.stringify(response));
        })
        .catch(error => console.log(error));
    
    console.log("----");

   

    console.log("getting journal test");
    
    console.log("----");

    //make post request with axios to our server
    //10.0.2.2 is basically localhost of the android emulated device
    //3000 is the port the server is running off of
    //benefits is a route defined in app.js



    //SAx0xu1ygeWS75cQlHUpnmsPoW53
    // k66FFQGtKkN5fQc9HCJB7ABIuPh1

    console.log("---testing-");
    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://10.0.2.2:3000/journal/allentries?firebase_id=k66FFQGtKkN5fQc9HCJB7ABIuPh1',
    headers: { 
        'Origin': '1', 
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImM4MjNkMWE0MTg5ZjI3NThjYWI4NDQ4ZmQ0MTIwN2ViZGZhMjVlMzkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbmF0dXJlLWNvdW50ZXItOTA4OGIiLCJhdWQiOiJuYXR1cmUtY291bnRlci05MDg4YiIsImF1dGhfdGltZSI6MTY4MTQyOTc1NCwidXNlcl9pZCI6IjhLQndWVVZ4WmFZRWd2a3BuTnpKckQxRDZWdzEiLCJzdWIiOiI4S0J3VlVWeFphWUVndmtwbk56SnJEMUQ2VncxIiwiaWF0IjoxNjgxNDI5NzU0LCJleHAiOjE2ODE0MzMzNTQsImVtYWlsIjoicjNrdDRuZ2wzQGhvdG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInIza3Q0bmdsM0Bob3RtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.n176adwg6dYbvEEZhgz1j9Orwsd4eRT05swW-CzoT_iV7hKNptGglpNZR-EG9DlE08XsZVEQVGXqBq7UI_ha4nrNuSlibr4Nv5rb3vgkAz6BAbu_W9uPX9NphaTEg42MppU42cPveGuqCOeW4XWw7WnebicxlUmgGVR4V9n-ViumzxcaFeGz5sSrTHbCD7K-dh2wdtQyUUpFYFrqFHmVfQwboiaoXj_zfEwu-qWZeu4VmUoKsNAiu_YF5PAuMNpIcAt95vacuh0nUGjlYa3lj9Ti2vb2EKj5L3nKqYHpUOznxthX7NaAviDL9g84j6mTejINDxddGElZRiQe-Zr9gg'
    }
    };

    axios.request(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
    console.log(error);
    });


    console.log("----"); 
    console.log("----");

}

return (

<View>
    
        {/*#TODO SASHA REMEMBER TO REMOVE THIS ITS JUST FOR TESTING SERVER AND DATABASE CONNECTIONS 
       
        <View>
            
            <Button  title = "Test server Add" onPress={()=>getJournal()}/>
        </View> 
        */}

{/*
        <Button  color = '#459F5E' title = {text}  onPress = {()=>showMode('date')} />
        */}

        <View style={styles.calender}>
            <TouchableOpacity style = {styles.calenderButton} onPress={() =>showMode('date') }><Text>{text}</Text></TouchableOpacity>
            
            
        </View>
        {show &&(


            <DateTimePicker testID = 'dateTimePicker'
            value = {date}
            mode ={mode}
            is24Hour={true}
            display='default'
            onChange = {onChange}

            />
        )}
</View>



);
}