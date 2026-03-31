class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0;
        let sumSoFar = 0;
        let map = new Map();

        map.set(0, 1);

        for(let i of nums){
            sumSoFar += i;
            if(map.has(sumSoFar - k)){
                count += map.get(sumSoFar - k); 
            }
            map.set(sumSoFar, (map.get(sumSoFar) || 0) + 1);
        }
        return count;
    }
}