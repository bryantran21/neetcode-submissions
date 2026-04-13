class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}

        for i in nums:
            if i in freq:
                freq[i] = freq[i] + 1
                print("freq added:", freq)
            else:
                freq[i] = 1
                print("just added:", freq)

        #got the elements, now i need to get the k elements

        sorted_items = sorted(freq.items(), key=lambda item: item[1], reverse = True)
        print(sorted_items)
        result = [item[0] for item in sorted_items[:k]]
        
        return result

