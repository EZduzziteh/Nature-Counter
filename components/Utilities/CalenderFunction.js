import React from 'react';
import moment from 'moment';
let Timezone = new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1];

export function GMTtoLocalDate(date) {
    return (date + ' ' + Timezone);
}

export function UTCToLocalDate(date) {
    let localDate = moment.utc(date).local().format('YYYY-MM-DD')
    return localDate;
}

export function LocaltoUTCDate(date) {
    let utcDate = moment.local(date).utc().format()
    return utcDate;
}

export function currentDate() {
    const date = moment.local().format('YYYY-MM-DD');
    return (date);
}

export function getDaysDiff(dateOne, dateTwo) {
    return dateOne.diff(dateTwo, 'Days', true);
} 

export function dateConverter(ele) {
    let date = (new Date(ele)).toString().split(' ').splice(1, 3).join(' ');
    date = date.slice(0, -4);
    return (date);
}