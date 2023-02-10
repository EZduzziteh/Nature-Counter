import React, {UseState} from 'react';
import { View } from 'native-base';
import {VictoryBar, VictoryChart, VictoryGroup, VictoryTheme } from 'victory-native';
import { green } from 'react-native-redash';

import WeekSelector from '../../components/Selector/WeekSelector';
import WeekButtongroup from '../../components/Selector/weekButtonGroup';
import Data from '../../SampleData/Data1'
import styles from '../Section/styles';

const data = Data;


function DurationHighlightsChart ()  {

    const [dateRange, getDateRangeIndex] = React.useState(1);
  

    return <View elevation={5} style={styles.graphContainer}>
    <WeekButtongroup callback = {getDateRangeIndex}/>
    <WeekSelector dateInterval={dateRange}/>
        <VictoryChart 
                    domainPadding={20} 
                    theme={VictoryTheme.material}>
            <VictoryGroup 
                        offset = {50}>
                <VictoryBar 
                            data = {dateRange===0?data.days:dateRange===1?data.weeks:data.months}
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