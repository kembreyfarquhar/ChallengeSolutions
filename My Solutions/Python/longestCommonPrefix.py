class Solution:
    # input is a list of strings, expected output is a string
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # initialize result as empty string
        result = ""
        # if list is empyt, return empty string
        if not strs:
            return result

        # sort the list by length (smallest item to largest)
        ordered_list = sorted(strs, key=len)

        # initialize prefixes as empty list
        prefixes = []

        # initialize i at 0
        i = 0
        while i < len(ordered_list[0]):
            # list comprehension containing letter at index i for each element
            x = [item[i] for item in strs]
            # if there are equal amounts of same letters as there are elements in strs
            # append the letter to prefixes and increment i
            if x.count(x[0]) == len(strs):
                prefixes.append(x[0])
                i += 1
            # if not, break
            else:
                break

        # return the string value of all letters in prefixes
        # will return empty string if prefixes is empty
        return result.join(prefixes)
