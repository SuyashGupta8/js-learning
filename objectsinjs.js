//-------------------1-----------------------------------------
//this referes to current function object, understand below

function learn(str){
    this.name = str;
    this.functionObj = {name:str};
    let prop = "its private variable";
    return this;
   }
   let obj = learn("suyash");
   console.log("name is ", obj.name);
   console.log("object fnction is", obj.functionObj.name);
   console.log("global this object is", this);
   try{
    console.log("prop is private not exposed ", obj.prop);
   }catch(err){
       console.log(err);
   }


//--------------------------------2-----------------------
//while creating object via new, no need to return *this*

function learnWithNew(str){
    this.name = str;
    this.functionObj = {name:str};
    let prop = "its private variable";
   }
   let newObject = new learnWithNew("cs");
   console.log("name with new object:::: ", newObject.name);
   console.log("object function with new is:::", newObject.functionObj.name);
   try{
    console.log("prop is private not exposed", newObject.prop);
   }catch(err){
       console.log(err);
   }

//-----------------3----------------------
//:::Note:::
//The *new keyword* is used in javascript to create a object from a constructor function. The new keyword has to be placed before the constructor function call and will do the following things:
//1) Creates a new object
//2) Sets the prototype of this object to the constructor function's prototype property
//3) Binds the this keyword to the newly created object and executes the constructor function
//4) Returns the newly created object

//understanding prototype
learn.prototype.play = function(){
    console.log("lets play cricket");
}

new learn("suyash").play();












//system model//

systemModel.getSystemModel({ cid: reqMsg.deviceInfo.cid, mcid: CONST.MSP_ACC.SUPER_ADMIN_MCID }, function (err, sysModel) {
    if (err || !sysModel) {
      logger.error('Error getting system model to process autoProv and auto SW Update', err || 'Model is invalid');
      return invokeCallback();
    }

    sysModel.find(sysModel.mergeData({}), function (sErr, sRes) {
      if (sErr) {
        sysModel.reportError(sErr);
        logger.error('Error occured to find system collection details', sErr);
        return invokeCallback();
      }

      if (!sRes || !sRes.length) {
        return invokeCallback();
      }

      // System collection is not empty

      /*
      NOTE: Needs to be removed once migration is added
      if (config.DEPLOYMENT === CONST.BUILD_ENV.NOC && !isUpdating) {
        // If autoUpd enabled, read the sw version to update from system collection, and set it to newSv
        // NOTE: newSv should be overridden, only if it is not defined by user manually. (autoUpd flag will be present in device object and set to false if user manually modified newSv)
        let isVersionSetByUser = (findRes && findRes[0] && findRes[0].onboarding.device && findRes[0].onboarding.device.autoUpd === false);
        if (!isVersionSetByUser && sRes[0] && sRes[0].autoUpd && sRes[0].autoUpd.enabled && sRes[0].autoUpd[device.eType] !== undefined) {
          _.set(device.onboarding, 'device.newSv', sRes[0].autoUpd[device.eType]);
          _.set(device.onboarding, 'device.autoUpd', true);
          logger.info('CN_AUTO_UPD: Set the software version to update for device', reqMsg.deviceInfo, 'Version to update:', sRes[0].autoUpd[device.eType]);
        }
      } */

      if (!isUpdating) {
        // If autoUpd(autoUpgrade) enabled, read the sw version to update from system collection, and set it to newSv
        // NOTE: newSv should be overridden, only if it is not defined by user manually. (autoUpd flag will be present in device object and set to false if user manually modified newSv)
        let type = ENTERPRISE_WIFI_FAMILY.includes(device.eType) ? ENTERPRISE_WIFI_FAMILY_NAME : device.eType;
        let isVersionSetByUser = (findRes && findRes[0] && findRes[0].onboarding.device && findRes[0].onboarding.device.autoUpd === false);
        if (!isVersionSetByUser && sRes[0] && sRes[0].autoUpgrade && sRes[0].autoUpgrade[type] && sRes[0].autoUpgrade[type].onboard && sRes[0].autoUpgrade[type].onboard.enabled) {
          _.set(device.onboarding, 'device.newSv', sRes[0].autoUpgrade[type].version);
          _.set(device.onboarding, 'device.autoUpd', true);
          logger.info('CN_AUTO_UPD: Set the software version to update for device', reqMsg.deviceInfo, 'Version to update:', sRes[0].autoUpgrade[type].version);
        }
      }

      if (!CONST.DEVICE.AUTO_PROV_ETYPE.includes(device.eType)) {
        return invokeCallback();
      }

      let autoProvExists = (config.DEPLOYMENT === CONST.BUILD_ENV.NOC && CONST.DEVICE.AUTO_PROV_ETYPE.includes(device.eType) && config.features.autoProv.enabled && sRes[0].autoProv && sRes[0].autoProv.length > 0);
      let autoConfigExists = (config.DEPLOYMENT === CONST.BUILD_ENV.CLOUD && CONST.DEVICE.ENTERPRISE_WIFI.includes(device.eType) && config.features.autoConfig.enabled && sRes[0].autoConfig);

      if (!autoProvExists && !autoConfigExists) {
        return invokeCallback();
      }

      if (!isUpdating && autoProvExists && reqMsg.deviceInfo.ip && !_.get(findRes[0], 'onboarding.device.siteProv')) {
        logger.info('CN_AUTO_PROV: system collection object', sRes[0]);
        let matcher, found = false;
        let autoProvRules = sRes[0].autoProv;

        if (!reqMsg.deviceInfo.isMSP) {
          // MSP is disabled, so we shouldn't consider rules which have target mcid specified
          autoProvRules = _.filter(autoProvRules, rule => !rule.mcid);
        }

        _.forEach(autoProvRules, function (v, k) {
          matcher = new CIDRMatcher([v.cidr]);
          if (!matcher.contains(reqMsg.deviceInfo.ip) || v.deviceType.indexOf(device.eType) === -1) {
            return; //continue
          }

          logger.info('CN_AUTO_PROV: device ip', reqMsg.deviceInfo.ip, 'matching rule object', v, 'reqMsg.deviceInfo', reqMsg.deviceInfo);
          found = true;
          updateAutoProvValues(reqMsg, device, v, findRes, function (opt) {
            invokeCallback(opt);
          });
        });

        if (!found) {
          invokeCallback();
        }
        return;
      }

      if (autoConfigExists && _.get(findRes[0], 'onboarding.device.autoConfig') !== false) {
        if (_.get(findRes[0], 'onboarding.device.config.tName')) {
          // If target APGroup is already selected, we will not override with autoConfig values
        } else {
          updateAutoConfigValues(device, sRes[0].autoConfig);
        }
      }

      return invokeCallback();
    });
  });

  unction getCbrsKeys(cid, callback) {
    systemModel.getSystemModel({ cid, mcid: CONST.MSP_ACC.SUPER_ADMIN_MCID }, function (err, model) {
      if (err || !model) {
        return callback(err || 'Error getting system model!');
      }
      var projection = {
        _id: 0,
        cbrsState: 1,
        cbrsStatus: 1,
        cbrsTokens: 1,
        cbrsTs: 1,
        sasVendor: 1,
        cbrsProxyUrl: 1
      };
      model.find(model.mergeData({}), { projection, limit: 1 }, function (err, res) {
        if (err) {
          systemModel.reportError(err, model);
          return callback(err);
        }
        if (res && !_.isEmpty(res)) {
          res = res[0];
        }
        return callback(null, res);
      });
    });
  }



  // scheduler.json

  //YEARS_SCHEDULER_METRICS_JOB_Q: 'years.scheduler.metrics.job',
  //SCHEDULER_METRICS_YEARS: 'scheduler.metrics.years',