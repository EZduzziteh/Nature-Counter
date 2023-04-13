const Data = {
    //sample data, this will eventually be imported as json file from the users recorded data.
    days:
    [
        //this represents time spent in nature(in minutes) per day of the currently selected week
        {x: 'Mon', y:15},
        {x: 'Tue', y:10},
        {x: 'Wed', y:0},
        {x: 'Thur', y:20},
        {x: 'Fri', y:15},
        {x: 'Sat', y:10},
        {x: 'Sun', y:5}
    ],
    weeks:
    [
        //this represents time spent in nature(in minutes) per week of the currently selected month
        //x: name y: total for the week
        {x:'Week 1', y: 110, days:[
                                    {name: "Mon", minutes: 30},
                                    {name: "Tue", minutes: 20},
                                    {name: "Wed", minutes: 10},
                                    {name: "Thu", minutes: 30},
                                    {name: "Fri", minutes: 25},
                                    {name: "Sat", minutes: 0},
                                    {name: "Sun", minutes: 5},
                                ]
        },
        {x:'Week 2', y: 107, days:[
                                {name: "Mon", minutes: 22},
                                {name: "Tue", minutes: 0},
                                {name: "Wed", minutes: 50},
                                {name: "Thu", minutes: 0},
                                {name: "Fri", minutes: 5},
                                {name: "Sat", minutes: 20},
                                {name: "Sun", minutes: 10},
                            ]
        },
        {x:'Week 3', y: 70, days:[
                                {name: "Mon", minutes: 15},
                                {name: "Tue", minutes: 6},
                                {name: "Wed", minutes: 12},
                                {name: "Thu", minutes: 0},
                                {name: "Fri", minutes: 2},
                                {name: "Sat", minutes: 15},
                                {name: "Sun", minutes: 20},
                            ]
        },
        {x:'Week 4', y: 120, days:[
                                {name: "Mon", minutes: 20},
                                {name: "Tue", minutes: 15},
                                {name: "Wed", minutes: 20},
                                {name: "Thu", minutes: 30},
                                {name: "Fri", minutes: 10},
                                {name: "Sat", minutes: 25},
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
    currentMonthlyGoal: 480, //goal in minutes for the month
    currentAnnualGoal: 2880,//goal in minutes for the year
    
    tips:[
        {id: 100, description:"Spending time in nature has both physical and mental health benefits."},
        {id: 200, description:"A US study showed that in places that have more greenery and nature, residents reported a lowered level of depression symptoms."},
        {id: 300, description:"This is a placeholder Tip"}
    ]
    

}

export default Data;