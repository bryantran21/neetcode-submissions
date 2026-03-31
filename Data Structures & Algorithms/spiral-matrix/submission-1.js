class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const answer = [];
        
        let top = 0;
        let bottom = matrix.length;
        let left = 0;
        let right = matrix[0].length;

        while(top < bottom && left < right){
            //traverse top row: left -> right
            for(let i = left; i < right; i++){
                answer.push(matrix[top][i]);
            }
            top++;

            //traverse last col: top -> bottom
            for(let i = top; i < bottom; i++){
                answer.push(matrix[i][right - 1]);
            }
            right--;
            
            if (!(left < right && top < bottom)) {
                break;
            }
            //traverse bottom row: right -> left
            for(let i = right - 1; i >= left; i--){
                answer.push(matrix[bottom - 1][i]);
            }
            bottom--;

            //go up
            for(let i = bottom - 1; i >= top; i--){
                answer.push(matrix[i][left]);
            }
            left++;
        }

        return answer;
    }
}
