import React, {useCallback, useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const axios = require('axios')

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
    case 1:
        return "Apr"
    case 2:
        return "May"
    case 3:
        return "Jun"
    case 1:
        return "Jul"
    case 2:
        return "Aug"
    case 3:
        return "Sep"
    case 1:
        return "Oct"
    case 2:
        return "Nov"
    case 3:
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
    dateString = tempDate.getDate()+'/'+(tempDate.getMonth()+1)+'/'+ tempDate.getFullYear()
    setText(dateString);
    callback((convertMonthToString(tempDate.getMonth()+1))+" "+tempDate.getDate() + ' - '+(parseInt(tempDate.getDate())+7));
    
}

const showMode = (currentMode)=>{
    setShow(true);
    setMode(currentMode);
}

function getArticles(){
   
    /*
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
    */
    console.log("----");
    console.log("----"); 
    console.log("----");


    console.log("getting benefits test");
    
    console.log("----");
    axios({
        method: 'get',
        url: 'http://10.0.2.2:3000/benefits/',
        responseType: 'json'
      })
    .then(function (response) {
        console.log("benefits  entire response: "+response+ JSON.stringify(response.data));
        console.log("----");
        console.log("benefit 1 data "+response+ JSON.stringify(response.data[0]));
        console.log("----"); 
        console.log("benefit 1: "+JSON.stringify(response.data[0].benefit));
        console.log("----");
        console.log("benefit 2 data "+response+ JSON.stringify(response.data[1]));
        console.log("----");
        console.log("benefit 2: "+JSON.stringify(response.data[1].benefit));
    })
    .catch(error => console.log(error));


    console.log("----");
    console.log("----"); 
    console.log("----");


   
    console.log("getting symptoms");
    
    console.log("----");
    
    axios({
        method: 'get',
        url: 'http://10.0.2.2:3000/symptoms',
        responseType: 'json'
      })
    .then(function (response) {
        console.log("symptoms response: "+ JSON.stringify(response.data));
    })
    .catch(error => console.log(error));

/*


app.use('/userdetails', userRouter);
app.use('/usergoals', goalRouter);
app.use('/symptoms', symptomRouter);


*/




   

}

return (

<View>
    
   
        <View>
            <Button  title = "Test server Add" onPress={()=>getArticles()}/>
        </View>

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

            />
        )}
</View>



);
}