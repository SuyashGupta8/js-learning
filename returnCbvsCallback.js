//:::Notes::::
//callin callback without return

function playWithCB(cb){
    
    setTimeout(()=>{
        if(cb){
            cb('playing with call back');
        }
        cb('calling call back again');
    }, 6000 );

}


//calling call back with return
playWithCB((str)=>{
    console.log(str);
});

function playWithCBReturn(cb){
    
    setTimeout(()=>{
        if(cb){
            return cb('playing with call back with return');
        }
        cb('calling call back again');
    }, 6000 );

    //testing second part with return and callback
    console.log('testing callback inside timeout working with return i.e even after exit');
    return;
}

playWithCBReturn((str)=>{
    console.log(str);
});

//sftp://cambium@10.110.198.170/

 
