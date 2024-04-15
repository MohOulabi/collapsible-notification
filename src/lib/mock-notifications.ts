export const notifications = [
  {
    type: "message",
    title: "New Message!",
    message: "Sarah sent you a message.",
    time: "Just now",
  },
  {
    type: "reminder",
    title: "Reminder: Meeting Today",
    message: "Your team meeting starts in 30 minutes.",
    time: "10m ago",
  },
  {
    type: "message",
    title: "New Message!",
    message: "Jack sent you a message.",
    time: "10m ago",
  },
  {
    type: "achievement",
    title: "Level Up!",
    message: "You have unlocked a new achievement.",
    time: "1h ago",
  },
] as const;
