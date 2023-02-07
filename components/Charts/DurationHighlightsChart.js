import React from 'react';
import { View } from 'native-base';
import {VictoryBar, VictoryChart, VictoryGroup} from 'victory-native';
import { green } from 'react-native-redash';



const data = {
    
    days:
    [
        {x: 'Mon', y:20},
        {x: 'Tue', y:10},
        {x: 'Wed', y:0},
        {x: 'Thur', y:30},
        {x: 'Fri', y:60},
        {x: 'Sat', y:10},
        {x: 'Sun', y:45}
    ]
}


const  DurationHighlightsChart = () => {
    return <View>

        <VictoryChart>
            <VictoryGroup offset = {50}>
                <VictoryBar data = {data.days}
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