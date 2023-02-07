import moment from 'moment';

export function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

export function getNested(obj, ...args) {
    return args.reduce((obj, level) => obj && obj[level], obj)
}

export function filterUserBenefits(benefit, goalTime) {     
    return benefit.filter((item) => item.gainTime <= goalTime + 1);  
}

export function filterHealthCategoryId(userBenefit) {   
    const filterIds = [];  
    userBenefit.map((item) => {
        filterIds.push(item.healthCategoryId);
        ([...filterIds]);
    });
    return filterIds;
}

export function filterArticleById(article, ids) {    
    return article.filter((obj) => ids.includes(obj.healthCategoryId))
}

export function selectedArticles(selArticles) {  
    return Array.from(new Set(selArticles.map(a => a.healthCategoryId)))
        .map(healthCategoryId => {
            selArticles.find(a => a.healthCategoryId === healthCategoryId);
    });
}

export function uniqueSelectedArticlesbyFeature(selArticles) {
    return selArticles.filter((item) => item.featured === true)
}

export function dailyActivityTime(dailyData) {   
    let userTime = {};  
    const dailyTimeList = dailyData.map(arr => {
        const arrDate = moment(arr.date).format('YYYY-MM-DD');
        let dailyTime = parseInt(arr.timeLog.mapTime) + parseInt(arr.timeLog.timerTime) + parseInt(arr.   timeLog.textTime);
        return {...userTime, date:arrDate, dailyTime: dailyTime}
    });
    return dailyTimeList;
}

export function UserDailyBenefit(benefits, dailyTimeList, date){
    const UserBenefit = benefits.map(benefit => {
        let userTotalTime = 0;
        const userDailyTime = 0;
        dailyTimeList.map(arr => {
            const benefitdailyGainTime = benefit.dailyGainTime;
            const arrDate =  moment(arr.date).format('YYYY-MM-DD');
            if(moment(arrDate).isSameOrBefore(moment(date))){
                console.log(`User Id is ${benefit._id} and date is ${arrDate}`)
                if(arr.dailyTime <= benefitdailyGainTime){
                    userTotalTime += arr.dailyTime;
                } else {
                    userTotalTime += benefitdailyGainTime;
                }
            }
        });
        return({...benefit, userTotalTime: userTotalTime, userDailyTime: userDailyTime });
      });
    return UserBenefit;
}
