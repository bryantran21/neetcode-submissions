class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if (nums.length === 0) return 0;

        nums.sort(function(a, b){return a - b});

        let maxLen = 1;        
        let currentLen = 1;

        for(var i = 0; i < nums.length; i++){
            if(nums[i] === nums[i-1]){
                console.log("first -  nums i: " + nums[i] + " === nums[i-1]" + nums[i-1]);
                continue;
            } else if(nums[i] === nums[i-1]+1){
                console.log("second - nums i: " + nums[i] + " === nums[i-1]+ 1: " + (nums[i-1]+1));
                currentLen++;
            } else{
                currentLen = 1;
            } 
            console.log("currentLen: " + currentLen + " -- maxLen: " + maxLen);
            if(currentLen > maxLen){
                maxLen = currentLen; 
            } 
        }
        return maxLen;
 
    }        
}
