'use strict';

/*
160. Intersection of Two Linked Lists

Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗
B:     b1 → b2 → b3
begin to intersect at node c1.

Notes:
If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.
*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA === null && headB === null) return null;

  //值为null的时候，指向另一条列表的头指针，就相当于A后面接上B，B后面接上A，这样两个列表的节点数在相交的地方正好相等，于是即可找到交点
  let a = headA, b = headB;
  while (a !== b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  return a;
};

let headA = new ListNode(1);
headA.next = new ListNode(2);

let node4 = new ListNode(4);
let node5 = new ListNode(5);
headA.next.next = node4;
node4.next = node5;

let headB = new ListNode(6);
headB.next = new ListNode(7);
headB.next.next = new ListNode(8);
headB.next.next.next = node4;

console.log(headA, headB);
console.log(headA.next, headB.next);

console.log(getIntersectionNode(headA, headB));
