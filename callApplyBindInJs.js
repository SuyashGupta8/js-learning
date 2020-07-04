//:::::Notes::::
// call, apply & bind are used to bind external object to a different object of function
function learn(name, lname, clas, add){
    console.log("my name is "+  name + " "+ lname + " my class is "+ clas + " my aaddress ", add + "with " + this.buddy + " all ");
}

let objc = {"buddy": "friends"};


//----------1-------------------
//:::learn call::::
// first parameter is object to which we want to bind
learn.call(objc, "suyash", "gupta", "half infinity", "123" );

//---------------2-------------
//:::learn apply::::
//It is simlar to call, we can  pass array of objects
let arr = ["c", "s", "half infinity", "123"];
learn.apply(objc, arr);


//------------3---------------------
//::::learn bind:::::
//bind is only used to bind object so it will not contain parameters, bind returns new object
let bnd = learn.bind(objc);
bnd( "suyash", "gupta", "half infinity", "123");

