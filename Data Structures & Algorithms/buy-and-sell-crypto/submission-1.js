class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyIn = Infinity;
        let max = 0;
        let temp = 0

        for(var i = 0; i < prices.length; i++){            
            buyIn = Math.min(buyIn, prices[i]);
            console.log(buyIn);

            if(prices[i] > buyIn){
                temp = prices[i] - buyIn
                if(temp > max){
                    max = temp;
                }
            }
        }

        if(max >= 1){
            return max;
        }

        return 0;
    }
}
