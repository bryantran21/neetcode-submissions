class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let index1 = 0;
        let index2 = numbers.length - 1;

        while(numbers[index1] + numbers[index2] !== target){
            console.log("index 1: " + numbers[index1] + " -- index 2: " + numbers[index2]);
            if(numbers[index1] + numbers[index2] > target){
                index2--;
            } else{
                index1++;
            }
        }
        return [index1 + 1, index2 + 1];
   }
}
