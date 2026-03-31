class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let left = 0;
        let right = cleanStr.length - 1;

        console.log("left: " + s[left] + "- right: " + s[right]);

        while (left < right){
            if (cleanStr[left] !== cleanStr[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
