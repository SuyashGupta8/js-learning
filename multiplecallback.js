function multiCallback(name, cb){

    let arr = [3000, 3000, 2000 ];

    arr.forEach(t )
    function timeOut(t){
        setTimeout(()=>{
            cb(`callback multiple time by ${name} with time ${t}`);
        }, t);
    }
}