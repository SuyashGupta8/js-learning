let proceed = false;
        setTimeout(() =>{
          proceed = true;
          console.log('proceed value updated', proceed);
        }, 1000);

        while(true){
            if(proceed === true){
              break;
            }
            //console.log('in progress');
          }
        