// A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company is the one with headID.

// Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1. Also, it is guaranteed that the subordination relationships have a tree structure.

// The head of the company wants to inform all the company employees of an urgent piece of news. He will inform his direct subordinates, and they will inform their subordinates, and so on until all employees know about the urgent news.

// The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e., After informTime[i] minutes, all his direct subordinates can start spreading the news).

// Return the number of minutes needed to inform all the employees about the urgent news.

// https://leetcode.com/problems/time-needed-to-inform-all-employees/description/
// https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22505040#overview

var numOfMinutes = function (n, headID, manager, informTime) {
  const adjList = {};

  //   Convert Graph to an adjacency list
  manager.forEach((emp, idx) => {
    if (emp === -1) return;
    if (adjList[emp]) adjList[emp].push(idx);
    else adjList[emp] = [idx];
  });

  return dfs(headID, adjList, informTime);
};

const dfs = (currId, adjList, informTime) => {
  //  when we reach the end of the graph
  if (!adjList[currId] || adjList[currId].length === 0) return 0;

  let max = 0;

  const emps = adjList[currId];
  for (let i = 0; i < emps.length; i++) {
    max = Math.max(max, dfs(emps[i], adjList, informTime));
  }

  return max + informTime[currId];
};
