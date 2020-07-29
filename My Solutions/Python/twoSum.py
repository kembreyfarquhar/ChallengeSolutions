class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        ht = {}
        for i, num in enumerate(nums):
            n = target - num
            if n not in ht:
                ht[num] = i
            else:
                return [ht[n], i]
