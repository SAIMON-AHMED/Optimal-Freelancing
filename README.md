# Optimal Freelancing

This repository contains an implementation of the optimalFreelancing function, which maximizes the total profit a freelancer can earn by scheduling jobs with deadlines over a 7-day week. The function ensures that the most profitable jobs are prioritized while adhering to the job deadlines.

**Problem Description**

You are given a list of freelancing jobs, each with a deadline and a payment. You can complete at most one job per day, and you have 7 days available. The goal is to select jobs in such a way that you maximize your total profit without exceeding the job deadlines.

**Input**

jobs: An array of objects where each object has two properties:

deadline: A number representing the last day (from 1 to 7) the job can be completed.

payment: A number representing the payment for completing the job.

**Output**

Returns an integer representing the maximum profit that can be obtained by scheduling jobs optimally over the 7-day period.

**Approach**

The function follows these steps to calculate the optimal freelancing profit:

Sort Jobs by Payment:

The jobs are sorted in descending order based on their payment. This ensures that the highest-paying jobs are considered first.

Allocate Jobs to Days:

A week array of 7 elements is initialized, representing each day of the week. Each day starts as unassigned (-1).
For each job, we check the latest available day (based on the job's deadline). If the day is free (unassigned), the job is assigned to that day, and its payment is added to the total profit.

Return the Total Profit: After all jobs have been processed, the total profit is returned.


Example Usage
	
	const jobs = [
	  { deadline: 2, payment: 100 },
	  { deadline: 1, payment: 50 },
	  { deadline: 7, payment: 200 },
	  { deadline: 7, payment: 150 },
	];

	const profit = optimalFreelancing(jobs);
	console.log(profit); // Output: 450
 
In this example, the freelancer can earn a total of 450 by scheduling the most profitable jobs within their respective deadlines.

**Time Complexity**

Sorting: Sorting the jobs takes O(n log n), where n is the number of jobs.

Assignment: Assigning jobs to the available days takes O(n), as we loop through each job and attempt to find an available day.

Overall time complexity is O(n log n) due to the sorting step.

**Space Complexity**

The space complexity is O(1), as we use a fixed array (week) of size 7, and no additional significant memory is required.
