'use strict';

/*
328. Odd Even Linked List

Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example:
Given 1->2->3->4->5->NULL,
return 1->3->5->2->4->NULL.

Note:
The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...
*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//odd都串起来，even串起来，然后把odd的尾指针指向even的头指针
var oddEvenList = function(head) {
  if (head === null) return null;

  let odd = head, even = head.next, evenHead = even;
  while (even && even.next) {
    odd.next  = odd.next.next;
    even.next = even.next.next;
    odd  = odd.next;
    even = even.next;
  }
  odd.next = evenHead;

  return head;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

console.log(oddEvenList(head));
