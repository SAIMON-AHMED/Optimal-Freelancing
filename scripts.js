// Time -> O(nlogn) | Space -> O(1)
function optimalFreelancing(jobs) {
  
  jobs.sort((a, b) => b.payment - a.payment);
  let week = [-1, -1, -1, -1, -1, -1, -1];
  let profit = 0;
  
  for (const job of jobs) {
    for (let day = Math.min(job.deadline, 7) - 1; day >= 0; day--) {
      if (week[day] === -1) {
        week[day] = job.payment;
        profit += job.payment;
        break;
      }
    }
  }
  
  return profit;
}
