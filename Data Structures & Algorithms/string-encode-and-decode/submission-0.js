class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let map = {};
        for(let i = 0; i < strs.length; i++){
            map[i] = strs[i];
        }

        let str= JSON.stringify(map);
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return Object.values(JSON.parse(str));
    }
}
