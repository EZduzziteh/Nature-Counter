const Data = {
    //sample data, this will eventually be imported as json file from the users recorded data.
    days:
    [
        //this represents time spent in nature(in minutes) per day of the currently selected week
        {x: 'Mon', y:5},
        {x: 'Tue', y:80},
        {x: 'Wed', y:22},
        {x: 'Thur', y:60},
        {x: 'Fri', y:66},
        {x: 'Sat', y:15},
        {x: 'Sun', y:20}
    ],
    weeks:
    [
        //this represents time spent in nature(in minutes) per week of the currently selected month
        {x:'Week 1', y: 45},
        {x:'Week 2', y: 60},
        {x:'Week 3', y: 15},
        {x:'Week 4', y: 35}
    ],
    months:
    [
        //this represents time spent in nature(in minutes) per month of the currently selected year
        {x:'Jan', y: 33},
        {x:'Feb', y: 44},
        {x:'Mar', y: 120},
        {x:'Apr', y: 15},
        {x:'May', y: 20},
        {x:'Jun', y: 49},
        {x:'Jul', y: 90},
        {x:'Aug', y: 38},
        {x:'Sep', y: 25},
        {x:'Oct', y: 100},
        {x:'Nov', y: 54},
        {x:'Dec', y: 3},

    ],

    currentGoal: 60 //this is the goal for the user to spend time in nature and is represented in minutes

    
}

export default Data;