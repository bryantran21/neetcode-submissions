class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let total = 0;

        for(var i = 0; i < s.length -1; i++){
            let a = s.charCodeAt(i);
            let b = s.charCodeAt(i+1);

            total += Math.abs(a - b);
        }

        return total;
    }
}
