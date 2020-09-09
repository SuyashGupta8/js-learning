'use strict';
var _ = require('lodash');

var async = require('async');

/**
 * will create index in days collection and
 * drop index for 2 months old collection.
 * 
 * @param {rop interval} ts 
 */

let cols = ["ethport.days.202008.fwb","interfaces.years","stats.days.202008.fwb","interfaces.hours","stats.days.202008","stats.years","interfaces.days.202008.fwb","alarms.days","stats.hours","alarms.hours","hrchy.days","radios.hours","ports.days.202008.ent","radios.days.202008.ent","ports.hours","stats.days.202008.iot","ethport.years","alarms.hrchy.days","ports.years","radios.years","radios.days.202008.fwb","radios.hrchy.days","stats.days.202008.ent"];

 async.eachSeries(cols, function(col, cb){

    console.log('cols is::::::::::::::::::::::', col);
    if(!col.includes('days')){
      return cb();
    }
    let colData = getModelData(col);

    if(!colData){
      return cb();
    }

    getDifference(colData.date, '202008');
    cb();
    },function (err){

    });

function getDifference(colDate, currColDate){ 
  let oldyear = Number(colDate.slice(0,4)),
  oldMonth = Number(colDate.slice(4,6)),
  currYear = Number(currColDate.slice(0,4)),
  currMonth = Number(currColDate.slice(4,6));

  console.log('currMonth', currMonth, 'currYear', currYear, 'oldMonth', oldMonth, 'oldYear', oldyear);

  currMonth = currMonth + (currYear - oldyear) * 12;

  console.log('Difference between month is::', (currMonth-oldMonth));
  return (currMonth - oldMonth);
}

function getModelData(collectionName){

  if(!collectionName){
    return false;
  }

  let types =  collectionName.split('.'), colData = {};

  console.log('alll types are', types);
  switch(types.length){
    case 4:
      let [dType, interval, date, ext] = types;
      colData.dType = dType;
      colData.interval = interval;
      colData.date = date;
      colData.ext = ext;
      break;
    default :
      return false;
  }

  console.log('Coldata from db is:', colData);
  return colData;
}