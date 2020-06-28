# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    # input has two head nodes to two linked lists, expected output is the head node of the new merged list
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        # head_ptr will be the head node of the output list
        # temp_ptr will be used to insert nodes into the output list
        head_ptr = temp_ptr = ListNode()

        # loop through until both lists have reached the end
        while l1 or l2:
            # while l1 has still not reached its end and l2 has either reached its end
            # or l1.val is less than or equal to l2.val
            # then add l1 to the output list as a ListNode
            # increment l1 node to its next
            if l1 and (not l2 or l1.val <= l2.val):
                temp_ptr.next = ListNode(l1.val)
                l1 = l1.next
            # otherwise, add l2 to the ouput list as a ListNode and increment l2 node to its next
            else:
                temp_ptr.next = ListNode(l2.val)
                l2 = l2.next
            # increment the temp_ptr pointer to its next
            temp_ptr = temp_ptr.next

        # return the output list
        return head_ptr.next
