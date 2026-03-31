class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let output = [nums]
        for(var i = 0; i < nums.length; i++){
            output.push(nums[i]);
        }
        return output;
    }
}
