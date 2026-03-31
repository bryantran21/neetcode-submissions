class Solution {
    /**
     * @param {number[]} customers
     * @param {number[]} grumpy
     * @param {number} minutes
     * @return {number}
     */
    maxSatisfied(customers, grumpy, minutes) {
        let output = 0;
        let maxGain = 0;
        let windowSum = 0;


        //for every customer
        for(let i = 0; i <  customers.length; i++){
                //not grumpy
                if(grumpy[i] === 0){
                    output = output + customers[i];
                    console.log("customers"+ i +": " + customers[i] + "-> into output:" + output)
                }

                //if grumpy, but
                windowSum = 0;
                for(let j = 0; j < minutes && (i + j) < customers.length; j++){
                        windowSum += grumpy[i+j] === 1 ? customers[i+j] : 0;                
                    }
                console.log("maxGain: " + maxGain + " - windowSum: " + windowSum);
                maxGain = Math.max(maxGain, windowSum);
            }
        return output + maxGain;
    }
}
