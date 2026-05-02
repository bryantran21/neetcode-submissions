class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        left, right = 0, 1
        max_profit = 0

        while right < len(prices):
            print("left:", prices[left], " - right:", prices[right])
            if prices[left] >= prices[right]:
                left = right
                right += 1
                
            elif prices[right] > prices[left]:
                diff = prices[right] - prices[left]
                print("difference:", diff, " - max", max_profit)
                if diff > max_profit:
                    max_profit = diff
                    print("new max profit:", max_profit)
                right += 1

        print(max_profit)
        return max_profit