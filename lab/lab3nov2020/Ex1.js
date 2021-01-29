function appendMyArray(arr1,arr2){
   try {
        arr1.push(arr2);
   }catch(error){
       console.log(error.message);
   }
   finally{
       console.log("exiting...arr1:"+arr1);
   }
}
appendMyArray([53,54],55);
appendMyArray('xyz',100);
appendMyArray({'make': 'Tesla','model':'S'},5);