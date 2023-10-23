

function time(ms){
  return new Promise((resolve,reject)=>{
    if(true){
      setTimeout(resolve,ms);
    }else{
      reject("Not Printing");
    }
  });
}

async function printImageSynchronous(){
  try{

    await time(1000); //if we remove await it will be asynchronous
    document.querySelector('#friedChicken').removeAttribute('hidden');

    await time(1000);
    document.querySelector('#frenchFries').removeAttribute('hidden');

    await time(1000);
    document.querySelector('#mozarellaSticks').removeAttribute('hidden');

  }catch(error){
    console.log("Not printing",error);
  }finally{
    console.log("Thank You.");
  
    setTimeout(() => {
      document.querySelector('#friedChicken').setAttribute('hidden', 'true');
      document.querySelector('#frenchFries').setAttribute('hidden', 'true');
      document.querySelector('#mozarellaSticks').setAttribute('hidden', 'true');
    }, 2000); // Adjust the delay as needed
  }
}

async function printImageAsynchronous(){
  try{

    //await time(1000); //if we remove await it will be asynchronous
    document.querySelector('#friedChicken').removeAttribute('hidden');

    //await time(2000);
    document.querySelector('#frenchFries').removeAttribute('hidden');

    //await time(3000);
    document.querySelector('#mozarellaSticks').removeAttribute('hidden');

  }catch(error){
    console.log("Not printing",error);
  }finally{
    console.log("Thank You.");
  
    setTimeout(() => {
      document.querySelector('#friedChicken').setAttribute('hidden', 'true');
      document.querySelector('#frenchFries').setAttribute('hidden', 'true');
      document.querySelector('#mozarellaSticks').setAttribute('hidden', 'true');
    }, 2000); // Adjust the delay as needed
  }
}