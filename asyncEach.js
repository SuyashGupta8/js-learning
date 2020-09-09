const async = require('async');

let names = ['suyash', 'gupta', 'chahat', 'secret'];



function callTimeOut(name, time, callback){
    setTimeout(function(){
        {
            console.log('name is ::', name);
            callback("done");
            return 'await value';
        }
    }, time );
}

// checking async iteration is parallel  on array elemets
async.each(names, function(name, callback){
    let random = Math.random() * (9) + 1;
    console.log('name is:::', name, 'random::::', random);
    callTimeOut(name, random * 1000,callback);
}, function(err){
    console.log('error is :::', err);
})


async function learnAwait(){
    let val = await callTimeOut('suyas', 8000, (param)=>{
        return param;
    });
    console.log('await value is::::', val);
    return val;
}

learnAwait().then( val =>{
    console.log(val);
}).catch(err =>{
    console.log(err);
});

//testing async on array of objects
async.each([{"name":"suyash", "designation":"SE"}, {"name":"yash", "designation":"kuchbhi"}],function(obj,cb){

    console.log(obj);
}, function(err){
    console.log(err);
} )