class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        // brute force initial answer
        // for(var i = 0; i < nums.length; i++ ){
        //     for(var j = i + 1; j < nums.length; j++){
        //         if (nums[i] == nums[j]){
        //             return true;
        //         }
        //     }
        // }
        // return false;

        //hash set attempt
        const seen = new Set()

        for(var i = 0; i < nums.length; i++){
            if(seen.has(nums[i])){
                return true;
            }
            seen.add(nums[i]);

        }
        return false;
    }
}
