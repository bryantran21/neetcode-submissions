class Solution {
    /**
     * @param {string[]} words
     * @return {number}
     */
    countPrefixSuffixPairs(words) {
        let output = 0;

        for(var i = 0; i < words.length; i++){
            for(var j = i+1; j < words.length; j++){
                console.log("words i: " + words[i] + " words j: " + words[j]);
                if(words[j].startsWith(words[i]) && words[j].endsWith(words[i])){
                    output++;
                }
            }
        }

        return output;
    }
}
