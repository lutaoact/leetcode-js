'use strict';

/*
435. Non-overlapping Intervals

Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Note:
You may assume the interval's end point is always bigger than its start point.
Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.
Example 1:
Input: [ [1,2], [2,3], [3,4], [1,3] ]

Output: 1

Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
Example 2:
Input: [ [1,2], [1,2], [1,2] ]

Output: 2

Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.
Example 3:
Input: [ [1,2], [2,3] ]

Output: 0

Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
*/

/**
 * Definition for an interval.
 */
function Interval(start, end) {
  this.start = start;
  this.end = end;
}
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
//属于区间调度算法系列，值得深入学习
//少即是多 最少需要去掉几个区间能使所有区间不重叠 => 最多有多少个不重叠的区间
var eraseOverlapIntervals = function(intervals) {
  let N = intervals.length;
  if (N === 0) return 0;
  intervals.sort((a, b) => a.end - b.end);

  //count为最多有多少个不重叠的区间
  let count = 1, end = intervals[0].end;
  for (let i = 1; i < N; i++) {
    if (intervals[i].start >= end) {
      count++;
      end = intervals[i].end;
    }
  }
  return N - count;
};

let intervals;
intervals = [new Interval(1, 2), new Interval(2, 3), new Interval(3, 4), new Interval(1, 3),];
console.log(eraseOverlapIntervals(intervals));
