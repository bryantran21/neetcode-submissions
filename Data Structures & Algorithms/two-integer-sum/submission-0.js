class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(var i = 0; i < nums.length; i++){
        var first = nums[i];

        for(var j = i+ 1; j < nums.length; j++){
            var second = nums[j]

            var answer = first + second;
          //  console.log("first: " + first+ "second: " + second + " answer:" + answer);

                if(target == answer){
                    return [i, j];
                }
            }
        }
        return;
    }
}
