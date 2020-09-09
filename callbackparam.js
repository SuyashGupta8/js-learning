
function tryParam(name){
    console.log(name);
}

function test(){
    let name = 'suyash';
    setTimeout(tryParam.bind(null, name), 2000);
}

function test2(name){
    setTimeout(tryParam, 2000);
}

test();
test2("hello");

//CONST.AGG_TYPE.DAYS_TO_YEARS
// CONST.AGG_TYPE.HOURS_TO_DAYS

//

//initialized amqp helper
//Skipped as already executed hour to day aggregation


all metric fields inside init metric fields {"fields":{"dev.dropCountDelta":1,"dev.status":1,"dev.down":1,"dev.off":1,"dev.ts":1,"dev.dnTime":1,"dev.upTime":1,"dev.devUpTime":1,"sys.cpus":1,"sys.chBond":1,"ul.kbitsDelta":1,"dl.kbitsDelta":1,"ul.kbitsRate":1,"dl.kbitsRate":1,"ul.pktsDelta":1,"dl.pktsDelta":1,"ul.kbits2Delta":1,"dl.kbits2Delta":1,"ul.kbits2Rate":1,"dl.kbits2Rate":1,"ul.pkts2Delta":1,"dl.pkts2Delta":1,"sys.nosta":1,"dl.retransPktsDelta":1,"dl.retransPktsPerDelta":1,"dl.retransPktsPer2Delta":1,"ul.retransPktsPerDelta":1,"ul.retransPktsPer2Delta":1,"dl.frmUtil":1,"ul.retransPktsDelta":1,"dl.eMCS":1,"ul.eMCS":1,"ul.eMCS2":1,"dl.eMCS2":1,"dl.rssi":1,"dl.rssi2":1,"ul.rssi":1,"dl.snr":1,"dl.snr2":1,"ul.snr":1,"dev.cpu":1,"ul.pktLossPerRate":1,"dl.pktLossPerRate":1,"ul.frmUtil":1,"dl.busyMin":1,"ul.busyMin":1,"totalBusyMinSample":1,"ul.sessionRate":1,"dl.sessionRate":1,"dl.rssiImbalance":1,"dl.qi":1,"dl.qiAvgRate":1,"ul.qi":1,"ul.qiAvgRate":1,"dl.snrv":1,"dl.snrh":1,"ul.snrv":1,"ul.snrh":1,"dev.mem":1,"sys.temperature":1,"txDataRate":1,"rxDataRate":1,"txChannelUtilPerDelta":1,"txRate":1,"txDelta":1,"mAggrxDelta":1,"mAggrxRate":1,"lnkLoss":1,"SSIRatio":1,"txPower":1,"rxPower":1,"vecErr":1,"MtxDataRate":1,"MrxDataRate":1,"MtxChannelUtilPerDelta":1,"MtxRate":1,"MtxDelta":1,"MvecErr":1,"MrxPower":1,"MSSIRatio":1,"MtxPower":1,"MlnkLoss":1,"pmac":1,"sys.power":1,"ul.errPkts":1,"ul.uCastPkts":1,"ul.bCastPkts":1,"ul.mCastPkts":1,"dl.errPkts":1,"dl.uCastPkts":1,"dl.bCastPkts":1,"dl.mCastPkts":1,"ul.MCS":1,"dl.MCS":1,"rf.sinr":1,"rf.sinr2":1,"rf.rsrp":1,"rf.rsrp2":1,"sys.rrhCount":1,"rf.rssi":1,"rf.rsrq":1,"sys.load":1,"sys.mem":1,"sys.storage":1,"wc.txRate":1,"wc.rxRate":1,"wap.txRate":1,"wap.rxRate":1,"cell.txRate":1,"cell.rxRate":1,"cell.rssi":1,"wc.rssi":1,"backhaul.txRate":1,"backhaul.rxRate":1,"sensor.txRate":1,"sensor.rxRate":1},"matchKeys":[]}





                                        
(get all 2000 customers) -->filter-->  (valid customers) ---> (one one customers)--> queue ---> processJobs


                    400 such groups
(every hour) ==>( Group of 5 cids) ===> queue ==> (query system db) ===> (filter) === process jobs
