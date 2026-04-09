class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # u suck and tapped out
        res = defaultdict(list)
        # attempt 2, u tapped. this is all im leaving you
        # took 3 tries bro...

        for s in strs:
            key = "".join(sorted(s))
            res[key].append(s)

        return list(res.values())