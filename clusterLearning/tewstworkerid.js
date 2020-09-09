console.log(`Worker::::: ${process.pid} started and finished`);





{ "_id" : ObjectId("5f171100074edc3f9830d393"), "customersList" : [ ], "schedulerJobStatus" : { "ts" : 1595444400000 }, "alarms_hours" : { "startedAt" : ISODate("2020-07-22T17:00:00.230Z"), "status" : "Completed", "finishedAt" : ISODate("2020-07-22T17:00:00.235Z"), "lastTs" : 1595437200000 }, "stats_hours" : { "startedAt" : ISODate("2020-07-22T17:00:00.238Z"), "status" : "Completed", "finishedAt" : ISODate("2020-07-22T17:00:00.242Z"), "lastTs" : 1595437200000 }, "radios_hours" : { "startedAt" : ISODate("2020-07-22T17:00:00.244Z"), "status" : "Completed", "finishedAt" : ISODate("2020-07-22T17:00:00.251Z"), "lastTs" : 1595437200000 }, "ethport_hours" : { "startedAt" : ISODate("2020-07-22T17:00:00.253Z"), "status" : "Completed", "finishedAt" : ISODate("2020-07-22T17:00:00.258Z"), "lastTs" : 1595437200000 }, "interfaces_hours" : { "startedAt" : ISODate("2020-07-22T17:00:00.260Z"), "status" : "Completed", "finishedAt" : ISODate("2020-07-22T17:00:00.264Z"), "lastTs" : 1595437200000 }, "ports_hours" : { "startedAt" : ISODate("2020-07-22T17:00:00.266Z"), "status" : "Completed", "finishedAt" : ISODate("2020-07-22T17:00:00.273Z"), "lastTs" : 1595437200000 }, "alarm" : { "startedAt" : ISODate("2020-07-22T17:00:00.278Z"), "status" : "Completed", "finishedAt" : ISODate("2020-07-22T17:00:00.653Z"), "lastTs" : 1595437200000 }, "mesh_clients" : { "startedAt" : ISODate("2020-07-22T17:00:00.657Z"), "status" : "Completed", "finishedAt" : ISODate("2020-07-22T17:00:00.661Z"), "lastTs" : 1595437200000 }, "interfaces" : { "startedAt" : ISODate("2020-07-22T17:00:00.663Z"), "status" : "Completed", "finishedAt" : ISODate("2020-07-22T17:00:00.665Z"), "lastTs" : 1595437200000 }, "ethport" : { "startedAt" : ISODate("2020-07-22T17:00:00.666Z"), "status" : "Completed", "finishedAt" : ISODate("2020-07-22T17:00:00.668Z"), "lastTs" : 1595437200000 }, "wlans" : { "startedAt" : ISODate("2020-07-22T17:00:00.669Z"), "status" : "Completed", "finishedAt" : ISODate("2020-07-22T17:00:00.672Z"), "lastTs" : 1595437200000 }, "auditlogs" : { "startedAt" : ISODate("2020-07-22T17:00:00.675Z"), "status" : "Completed", "finishedAt" : ISODate("2020-07-22T17:00:00.677Z"), "lastTs" : 1595437200000 }, "ports_groups" : { "startedAt" : ISODate("2020-07-22T17:00:00.678Z"), "status" : "Completed", "finishedAt" : ISODate("2020-07-22T17:00:00.682Z"), "lastTs" : 1595437200000 }, "Clean_AutoClear_Alarms" : { "finishedAt" : ISODate("2020-07-22T00:00:00.267Z"), "lastTs" : 1595376000000, "status" : "Completed" } }





cnsGlobalModel = require('../../../common/model/system');

const BULK_INSERT_RATE = getInsertRate();

var logger = require('../../../common/logger').getLogger('server.scheduler.metrics.hourToDay');

//Constants Declaration
var WILDKEY = '*', amqpHelper,
  cDocs = 0, uDocs = 0, acDocs = 0, auDocs = 0;
var common = new Common();
var eDetectObj = null,