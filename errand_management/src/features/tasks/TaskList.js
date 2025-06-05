import React from "react";

// PUBLIC_INTERFACE
function TaskList({ tasks, onTaskClick }) {
  /** Renders a list of today's errands.
   * 
   * Props:
   * - tasks: Array of { id, name, time, location }
   * - onTaskClick: function(id) for clicking a task (optional)
   */
  if (!tasks || tasks.length === 0) {
    return (
      <div style={{
        color: "#4FC3F7",
        fontWeight: 500,
        marginBottom: 16
      }}>
        No errands yet. Tap "+" to add!
      </div>
    );
  }
  return (
    <ul style={{
      listStyle: "none",
      padding: 0,
      margin: 0,
      width: "100%"
    }}>
      {tasks.map((task, idx) => (
        <li
          key={task.id}
          onClick={onTaskClick ? () => onTaskClick(task.id) : undefined}
          style={{
            background: "#fff",
            borderRadius: 10,
            boxShadow: "0 1px 3px 0 rgba(130,199,132,0.08)",
            padding: "14px 12px",
            marginBottom: 12,
            display: "flex",
            alignItems: "center",
            cursor: onTaskClick ? "pointer" : "default",
            border: "1px solid #e0e0e0"
          }}
        >
          <span style={{
            marginRight: 14,
            background: "#e1f7fe",
            borderRadius: "50%",
            width: 32, height: 32,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: "600",
            color: "#4FC3F7",
            fontSize: "1.11rem"
          }}>
            {idx + 1}
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 600, color: "#222", fontSize: "1.06rem", whiteSpace: "nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>
              {task.name}
            </div>
            <div style={{ fontSize: "0.99rem", color: "#4FC3F7", fontWeight: 500 }}>
              {task.time}
              <span style={{ color: "#81C784", marginLeft: 12 }}>
                {task.location}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
