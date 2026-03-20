export const generateInsight = (stats) => {
  const { completedTasks, pendingTasks } = stats;

  if (pendingTasks > completedTasks) {
    return "High number of pending tasks. Focus on completion rate.";
  } else if (completedTasks > pendingTasks) {
    return " Great performance! Most tasks are completed.";
  } else {
    return " Balanced workload. Keep improving efficiency.";
  }
};