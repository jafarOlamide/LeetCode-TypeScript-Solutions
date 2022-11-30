function topKFrequent(nums: number[], k: number): number[] {
    const map = {};
 
    for(let num of nums){
     if (map[num]) {
       map[num] +=1
     } else{
       map[num]  = 1
     }
   }
 
   const bucket: any = [];
     for(let i = 0; i <= nums.length; i++){
       bucket.push([]) as number[];
   }
    
   for(let key in map){
     let frequency = map[key];
     bucket[frequency].push(parseInt(key));
   }  
   
   const res: number[] = [];
   for (let i = bucket.length -1; i >= 0; i--){
     if(bucket[i].length ){
       for (let val of bucket[i]){
         res.push(val);
       }
       if(res.length === k){
         return res
       }
     }
   }
 }; 