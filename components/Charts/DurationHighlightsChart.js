import React, {UseState, useEffect} from 'react';
import { View, Text } from 'native-base';
import {VictoryBar, VictoryChart, VictoryGroup, VictoryTheme } from 'victory-native';
import { green } from 'react-native-redash';
import WeekSelector from '../../components/Selector/WeekSelector';
import WeekButtongroup from '../../components/Selector/weekButtonGroup';
import Data from '../../SampleData/Data1'
import styles from '../Section/styles';
import OverviewSection from '../Section/OverviewSection'
import DatePicker from '../../components/Selector/DatePicker';


const data = Data;



function DurationHighlightsChart ()  {


    function updateCurrentInMinutes(index){
        if(index==0){
            var total = 0;
            /*
            data.days.forEach(day => {
                total+=parseInt(day)
            });*/
    
            setCurrentMinutes(total)
        }else if(index==1){
    
            var total = 0;
            /*
            data.weeks.forEach(week => {
                total+=parseInt(week)
            });
             */
            setCurrentMinutes(total)
        }else if(index==2){
            var total = 0;
            /*
            data.months.forEach(month => {
                total+=parseInt(month)
            });
            */
            console.log(data.months[0])
            setCurrentMinutes(total)
        }
    }

    const [dateRangeIndex, getDateRangeIndex] = React.useState(1);
    useEffect(() => {
        updateCurrentInMinutes(dateRangeIndex);
      }, [dateRangeIndex]); 


    const [dateRange, setDateRange] = React.useState('Select a date to see the range');
    const goalInMinutes = data.currentGoal;
    const [currentMinutesInRange, setCurrentMinutes] = React.useState(45);


    return <View elevation={5} style={styles.graphContainer}>

    {/*set the callbacks in our date picker and week selector ui elements*/}
    <DatePicker callback = {setDateRange} dateMode = {parseInt(dateRangeIndex)}/>
    <WeekButtongroup callback = {getDateRangeIndex}/>


    <Text style={styles.dateRange}>{dateRange}</Text>


    {/* set the data values in our overview section*/}
   
     <OverviewSection goalInMinutes = {goalInMinutes} currentInMinutes = {currentMinutesInRange} />



        <VictoryChart 
                    domainPadding={20} 
                    theme={VictoryTheme.material}>
            <VictoryGroup 
                        offset = {50}>
                <VictoryBar 
                            /* set the data to be relative to the date range index selected,
                            index 0 : represent days, index 1: represent weeks, index 2+: represent months*/
                            data = {dateRangeIndex===0?data.days:dateRangeIndex===1?data.weeks:data.months}
                            style = {{
                                       data:{
                                            fill:'green',
                                        },
                                    }}
                
                
                />
            </VictoryGroup>
        </VictoryChart>

        </View>
};

export default DurationHighlightsChart;