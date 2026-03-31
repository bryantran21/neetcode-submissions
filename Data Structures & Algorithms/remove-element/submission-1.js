class Solution {
    /**
     * @param {number[]}
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0;
        
        for(var i = 0; i < nums.length; i++){
            if(nums[i] !== val){
                nums[k] = nums[i];

                k++
            } 
            else{
            }
        }
        return k;
    }
}
