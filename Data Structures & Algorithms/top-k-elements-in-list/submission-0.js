class Solution {
    topKFrequent(nums, k) {
        const freq = new Map();

        for (let num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1); 
        }

        const freqCount = [...freq.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, k);

        console.log("Top K entries (num, count):", freqCount);

        return freqCount.map(([num, count]) => num); 
    }
}
