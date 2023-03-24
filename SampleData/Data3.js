const Data = {
    //sample data, this will eventually be imported as json file from the users recorded data.
    days:
    [
        //this represents time spent in nature(in minutes) per day of the currently selected week
        {day: 'Mon', duration:28, date: '2023-03-01', startTime: '10:30 AM', location: 'Canada', weeklyGoal: '120 minutes', percentage: '39%'},
        {day: 'Tue', duration:10, date: '2023-03-01', startTime: '10:30 AM', location: 'Canada', weeklyGoal: '120 minutes', percentage: '39%'},
        {day: 'Wed', duration:33, date: '2023-03-01', startTime: '10:30 AM', location: 'Canada', weeklyGoal: '120 minutes', percentage: '39%'},
        {day: 'Thur', duration:30, date: '2023-03-01', startTime: '10:30 AM', location: 'Canada', weeklyGoal: '120 minutes', percentage: '39%'},
        {day: 'Fri', duration:60, date: '2023-03-01', startTime: '10:30 AM', location: 'Canada', weeklyGoal: '120 minutes', percentage: '39%'},
        {day: 'Sat', duration:10, date: '2023-03-01', startTime: '10:30 AM', location: 'Canada', weeklyGoal: '120 minutes', percentage: '39%'},
        {day: 'Sun', duration:45, date: '2023-03-01', startTime: '10:30 AM', location: 'Canada', weeklyGoal: '120 minutes', percentage: '39%'}
    ],
    weeks:
    [
        //this represents time spent in nature(in minutes) per week of the currently selected month
        //x: name y: total for the week
        {x:'Week 1', y: 160, days:[
                                    {name: "Mon", minutes: 24},
                                    {name: "Tue", minutes: 20},
                                    {name: "Wed", minutes: 10},
                                    {name: "Thu", minutes: 30},
                                    {name: "Fri", minutes: 26},
                                    {name: "Sat", minutes: 45},
                                    {name: "Sun", minutes: 5},
                                ]
        },
        {x:'Week 2', y: 157, days:[
                                {name: "Mon", minutes: 22},
                                {name: "Tue", minutes: 15},
                                {name: "Wed", minutes: 60},
                                {name: "Thu", minutes: 45},
                                {name: "Fri", minutes: 0},
                                {name: "Sat", minutes: 20},
                                {name: "Sun", minutes: 15},
                            ]
        },
        {x:'Week 3', y: 143, days:[
                                {name: "Mon", minutes: 15},
                                {name: "Tue", minutes: 6},
                                {name: "Wed", minutes: 12},
                                {name: "Thu", minutes: 50},
                                {name: "Fri", minutes: 30},
                                {name: "Sat", minutes: 10},
                                {name: "Sun", minutes: 20},
                            ]
        },
        {x:'Week 4', y: 225, days:[
                                {name: "Mon", minutes: 20},
                                {name: "Tue", minutes: 30},
                                {name: "Wed", minutes: 20},
                                {name: "Thu", minutes: 30},
                                {name: "Fri", minutes: 70},
                                {name: "Sat", minutes: 50},
                                {name: "Sun", minutes: 5},
                            ]
        },
    ],
    months:
    [
        //this represents time spent in nature(in minutes) per month of the currently selected year
        {x:'Jan', y: 10},
        {x:'Feb', y: 60},
        {x:'Mar', y: 155},
        {x:'Apr', y: 45},
        {x:'May', y: 120},
        {x:'Jun', y: 100},
        {x:'Jul', y: 90},
        {x:'Aug', y: 78},
        {x:'Sep', y: 50},
        {x:'Oct', y: 25},
        {x:'Nov', y: 10},
        {x:'Dec', y: 5},

    ],
    currentGoal: 120, //this is the goal for the user to spend time in nature and is represented in minutes
    currentMonthlyGoal: 300, //goal in minutes for the month
    currentAnnualGoal: 1000,//goal in minutes for the year
    

    

}

export default Data;