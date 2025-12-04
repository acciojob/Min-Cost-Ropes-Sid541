let arr = [1, 2, 3, 4, 5];
 function minCost(arr){
     let mincost = 0;
     while(arr.length>1){
         arr.sort((a, b) => a - b);
         let sum = arr[0]+arr[1];
         mincost+=sum;
         arr.splice(0,2,sum);
 }
 return mincost;
 }
 console.log(minCost(arr));

module.exports=minCost;
