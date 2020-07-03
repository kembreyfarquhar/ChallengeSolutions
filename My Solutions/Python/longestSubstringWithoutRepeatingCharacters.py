class Solution:
    # input is a string, expected output is an integer
    def lengthOfLongestSubstring(self, s: str) -> int:
        i = 0
        j = 0
        seen = {}
        result = 0
        while j < len(s):
            if s[j] not in seen or i > seen[s[j]]:
                result = max(result, (j - i+1))
                seen[s[j]] = j
            else:
                i = seen[s[j]] + 1
                result = max(result, (j - i+1))
                j -= 1
            j += 1
        return result
