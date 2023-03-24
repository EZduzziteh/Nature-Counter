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
      marginLeft: 10,
      marginTop: 10,
      
    },
    calenderButton:{
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 50,
        borderStyle:'solid',
        borderColor:'#459F5E',
        borderWidth:1,
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
    dateString = (convertMonthToString(tempDate.getMonth()+1))+' '+tempDate.getDate();
    setText(dateString);
    callback((convertMonthToString(tempDate.getMonth()+1))+" "+tempDate.getDate() + ' - '+(parseInt(tempDate.getDate())+7));
    
}

const showMode = (currentMode)=>{
    setShow(true);
    setMode(currentMode);
}

//test function to get
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

    //make post request with axios to our server
    //10.0.2.2 is basically localhost of the android emulated device
    //3000 is the port the server is running off of
    //benefits is a route defined in app.js
    axios({
        method: 'get',
        url: 'http://10.0.2.2:3000/user_goals_views',
        responseType: 'json',
        headers: {

        },
        params: {
            //ID: 12345
        },
      })
    .then(function (response) {
        //return the entire response data (all available benefits from database)
        console.log("benefits  entire response: "+response.data+ JSON.stringify(response));
    })
    .catch(error => console.log(error));


    console.log("----");
    console.log("----"); 
    console.log("----");


   
   

/*


app.use('/userdetails', userRouter);
app.use('/usergoals', goalRouter);
app.use('/symptoms', symptomRouter);


*/




   

}

return (

<View>
    
   {/*#TODO SASHA REMEMBER TO REMOVE THIS ITS JUST FOR TESTING SERVER AND DATABASE CONNECTIONS {
        <View>
            
            <Button  title = "Test server Add" onPress={()=>getArticles()}/>
        </View>
        <Button  color = '#459F5E' title = {text}  onPress = {()=>showMode('date')} />
        }*/}
    

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