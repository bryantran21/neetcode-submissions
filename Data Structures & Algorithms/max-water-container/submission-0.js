class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length-1;
        let max = 0;
        
        while(left < right){

            let width = right - left;
            let h = Math.min(heights[left], heights[right]);
            let area = width * h;        

            max = Math.max(max, area);

            console.log("heights[left] is =" + heights[left] + "- heights[right] is = " + heights[right]);
            if(heights[left] < heights[right]){
                left++
            } else{
                 right--;
            }

        }

        return max;

    }
}
