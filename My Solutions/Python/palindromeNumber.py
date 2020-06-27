class Solution:
    # input is an integer, expected output is a boolean value
    def isPalindrome(self, x: int) -> bool:
        # if the number is negaitve, the output will always be false (because of the "-" character)
        if x < 0:
            return False
        # initialize a list to store number values
        num_list = []
        # this calculation will continue until x reaches 0
        while x != 0:
            # by dividing by 10 to get the remainder, this will give you the last digit of the int
            # add it to num_list
            num_list = [x % 10] + num_list
            # floor divide by 10 to get the remaining digits to the left
            x = x // 10
        # calculate the middle index
        mid = len(num_list) // 2
        # initialize a reverse variable that will eventually hold the right half of the list
        reverse = None
        # if the list length is even, the right half will be all digits from the middle index on
        if len(num_list) % 2 == 0:
            reverse = num_list[mid:]
        # if the list length is odd, the right half will exclude the middle most digit
        else:
            reverse = num_list[mid+1:]
        # reverse the right half of the list
        reverse.reverse()
        # check to see if the left half and the right half are equal
        # if so, return True
        if num_list[:mid] == reverse:
            return True
        # if they are not equal, return False
        else:
            return False
