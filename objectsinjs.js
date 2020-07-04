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