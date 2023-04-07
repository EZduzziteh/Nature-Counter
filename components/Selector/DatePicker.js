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

   // console.log("getting articles test");
    /*
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


    console.log("getting journal test");
    
    console.log("----");

    //make post request with axios to our server
    //10.0.2.2 is basically localhost of the android emulated device
    //3000 is the port the server is running off of
    //benefits is a route defined in app.js

    /*
    axios({
        method: 'get',
        url: 'http://10.0.2.2:3000/journal/SomeUserID',
        responseType: 'json',
        headers: {

        },
        params: {
            //ID: 12345
        },
      })
    .then(function (response) {
        //return the entire response data (all available benefits from database)
        console.log("journal entire response: "+response.data+ JSON.stringify(response));
    })
    .catch(error => console.log(error));*/



/*

let startDate = new Date("2023-04-05T07:00:00.000Z");

let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://10.0.2.2:3000/journal/date?firebase_id=AIzaSyAqrpdh3Exhk73xyU4nBDAlzYSiitlgePs',
    headers: { 
        'Origin': '1', 
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQwNTU5YzU5MDgzZDc3YWI2NDUxOThiNTIxZmM4ZmVmZmVlZmJkNjIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbmF0dXJlLWNvdW50ZXItOTA4OGIiLCJhdWQiOiJuYXR1cmUtY291bnRlci05MDg4YiIsImF1dGhfdGltZSI6MTY3NDc5MTMyMCwidXNlcl9pZCI6IlNBeDB4dTF5Z2VXUzc1Y1FsSFVwbm1zUG9XNTMiLCJzdWIiOiJTQXgweHUxeWdlV1M3NWNRbEhVcG5tc1BvVzUzIiwiaWF0IjoxNjc0NzkxMzIwLCJleHAiOjE2NzQ3OTQ5MjAsImVtYWlsIjoiYW5kcmV3QHRlc3QuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFuZHJld0B0ZXN0LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TJn3gWMea9IvM2837TuWUkXeCNGLSa4sSB_7tPa9Xjlf9Erf6ljG0iypehPrebrOfHaNXvoMjh36uUOLQLyQFboKjUD_7yM6Ke713PKHgvo5OsdN1mHd6gkZZc14AZJ6pPuNGsnzseRrb8P2UGy8wJT68eTLQNmBlYIKOzHvsjeTLJ2vDVzw5ADXD05XBJz_V10iOsdvZ9HNbgN_S5WnLxy98SCQ0RviXIX4dz0YuapqINduoE9inAIbC1U-hiwwDkcTcA_iHz44CfY7Ylv5wGBsgO9zSNVsgLyZqd5j54PbyYrMJBsT1ilcOqghEwNG4JKtT2iN32dY7f4IwlWgtQ'
    },
    body:{
        start_time: 5,
        end_time: 10,
    }
    }; 
*/


/*{
    location: {
      latitude: { type: Number },
      longitude: { type: Number },
      name: { type: String },
      city: { type: String },
      stateInitials: { type: String,
        enum: {
          values:["AK","AL","AR","AZ","CA","CO","CT","DE","FL","GA","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VA","VT","WA","WI","WV","WY"],
          message: "{VALUE} is not a state"
          } },
      zip: { type: String },
      category: {type: String}
    },
    start_time: { type: Date, required: true },
    end_time: { type: Date, required: true },
    mongoId: { type: Schema.Types.ObjectId, ref: "UserDetail" },
    firebaseId: { type: String, required: [true, 'Firebase Id required'] } */



/*
    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://10.0.2.2:3000/journal/singleentry?firebase_id=AIzaSyAqrpdh3Exhk73xyU4nBDAlzYSiitlgePs',
    headers: { 
        'Origin': '1', 
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQwNTU5YzU5MDgzZDc3YWI2NDUxOThiNTIxZmM4ZmVmZmVlZmJkNjIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbmF0dXJlLWNvdW50ZXItOTA4OGIiLCJhdWQiOiJuYXR1cmUtY291bnRlci05MDg4YiIsImF1dGhfdGltZSI6MTY3NDc5MTMyMCwidXNlcl9pZCI6IlNBeDB4dTF5Z2VXUzc1Y1FsSFVwbm1zUG9XNTMiLCJzdWIiOiJTQXgweHUxeWdlV1M3NWNRbEhVcG5tc1BvVzUzIiwiaWF0IjoxNjc0NzkxMzIwLCJleHAiOjE2NzQ3OTQ5MjAsImVtYWlsIjoiYW5kcmV3QHRlc3QuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFuZHJld0B0ZXN0LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TJn3gWMea9IvM2837TuWUkXeCNGLSa4sSB_7tPa9Xjlf9Erf6ljG0iypehPrebrOfHaNXvoMjh36uUOLQLyQFboKjUD_7yM6Ke713PKHgvo5OsdN1mHd6gkZZc14AZJ6pPuNGsnzseRrb8P2UGy8wJT68eTLQNmBlYIKOzHvsjeTLJ2vDVzw5ADXD05XBJz_V10iOsdvZ9HNbgN_S5WnLxy98SCQ0RviXIX4dz0YuapqINduoE9inAIbC1U-hiwwDkcTcA_iHz44CfY7Ylv5wGBsgO9zSNVsgLyZqd5j54PbyYrMJBsT1ilcOqghEwNG4JKtT2iN32dY7f4IwlWgtQ'
    },
    body:{
       
            location: {
              latitude: 51.0447,
              longitude: 114.0719,
              name: "Walk 1 Test",
              city:  "Calgary",
              stateInitials: "CA",
                
              zip: "T2E3C6",
              category: "test"
            },
            start_time: new Date("2023-04-05T03:24:00"),
            end_time: new Date("2023-04-05T04:42:00"),
            mongoId: {email: "r3kt4ngl3@hotmail.com",
            firebaseId: "AIzaSyAqrpdh3Exhk73xyU4nBDAlzYSiitlgePs",
            name: "Sasha",
            gender: "Male",
            dob: new Date(),
            weekly_goal: 60,
            admin: false,
            userAgreementTAC: false
            },
            firebaseId: "AIzaSyAqrpdh3Exhk73xyU4nBDAlzYSiitlgePs" 
          
    }
    };

    */


    //SAx0xu1ygeWS75cQlHUpnmsPoW53
    // k66FFQGtKkN5fQc9HCJB7ABIuPh1

    console.log("---testing-");
    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://10.0.2.2:3000/journal/allentries?firebase_id=k66FFQGtKkN5fQc9HCJB7ABIuPh1',
    headers: { 
        'Origin': '1', 
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQwNTU5YzU5MDgzZDc3YWI2NDUxOThiNTIxZmM4ZmVmZmVlZmJkNjIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbmF0dXJlLWNvdW50ZXItOTA4OGIiLCJhdWQiOiJuYXR1cmUtY291bnRlci05MDg4YiIsImF1dGhfdGltZSI6MTY3NDc5MTMyMCwidXNlcl9pZCI6IlNBeDB4dTF5Z2VXUzc1Y1FsSFVwbm1zUG9XNTMiLCJzdWIiOiJTQXgweHUxeWdlV1M3NWNRbEhVcG5tc1BvVzUzIiwiaWF0IjoxNjc0NzkxMzIwLCJleHAiOjE2NzQ3OTQ5MjAsImVtYWlsIjoiYW5kcmV3QHRlc3QuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFuZHJld0B0ZXN0LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TJn3gWMea9IvM2837TuWUkXeCNGLSa4sSB_7tPa9Xjlf9Erf6ljG0iypehPrebrOfHaNXvoMjh36uUOLQLyQFboKjUD_7yM6Ke713PKHgvo5OsdN1mHd6gkZZc14AZJ6pPuNGsnzseRrb8P2UGy8wJT68eTLQNmBlYIKOzHvsjeTLJ2vDVzw5ADXD05XBJz_V10iOsdvZ9HNbgN_S5WnLxy98SCQ0RviXIX4dz0YuapqINduoE9inAIbC1U-hiwwDkcTcA_iHz44CfY7Ylv5wGBsgO9zSNVsgLyZqd5j54PbyYrMJBsT1ilcOqghEwNG4JKtT2iN32dY7f4IwlWgtQ'
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



   
   

/*


app.use('/userdetails', userRouter);
app.use('/usergoals', goalRouter);
app.use('/symptoms', symptomRouter);


*/




   

}

return (

<View>
    
        {/*#TODO SASHA REMEMBER TO REMOVE THIS ITS JUST FOR TESTING SERVER AND DATABASE CONNECTIONS 
        <View>
            
            <Button  title = "Test server Add" onPress={()=>getArticles()}/>
        </View>
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