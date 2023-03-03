const Data = {
    //sample data, this will eventually be imported as json file from the users recorded data.
    days:
    [
        //this represents time spent in nature(in minutes) per day of the currently selected week
        {x: 'Mon', y:20},
        {x: 'Tue', y:10},
        {x: 'Wed', y:33},
        {x: 'Thur', y:30},
        {x: 'Fri', y:60},
        {x: 'Sat', y:10},
        {x: 'Sun', y:45}
    ],
    weeks:
    [
        //this represents time spent in nature(in minutes) per week of the currently selected month
        {x:'Week 1', y: 60},
        {x:'Week 2', y: 155},
        {x:'Week 3', y: 120},
        {x:'Week 4', y: 95}
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
    currentGoal: 120 //this is the goal for the user to spend time in nature and is represented in minutes

    

}

export default Data;