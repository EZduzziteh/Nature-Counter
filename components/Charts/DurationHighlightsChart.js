import React, {UseState} from 'react';
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

    const [dateRangeIndex, getDateRangeIndex] = React.useState(1);
    const [dateRange, setDateRange] = React.useState('may 3 - june 5');
    const goalInMinutes = data.currentGoal;


    return <View elevation={5} style={styles.graphContainer}>

    {/*set the callbacks in our date picker and week selector ui elements*/}
    <DatePicker callback = {setDateRange}/>
    <WeekButtongroup callback = {getDateRangeIndex}/>


    <Text style={styles.dateRange}>{dateRange}</Text>


    {/* set the data values in our overview section*/}
   
     <OverviewSection goalInMinutes = {200} currentInMinutes = {69} />



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