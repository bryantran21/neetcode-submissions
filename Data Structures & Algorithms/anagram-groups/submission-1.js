class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let seen = new Map();

        for(let i = 0; i < strs.length; i++){

            let temp = strs[i].split('').sort().join('');
            if(!seen.has(temp)){
            //push values into an array
              seen.set(temp, []);
            }

            seen.get(temp).push(strs[i])
        }

        return Array.from(seen.values());
    }
}
