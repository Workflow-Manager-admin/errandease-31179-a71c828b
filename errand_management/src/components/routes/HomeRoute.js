import React, { useState } from "react";
import TaskList from "../../features/tasks/TaskList";
import OptimizeRouteButton from "../../features/tasks/OptimizeRouteButton";
import FAB from "../FAB";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

// PUBLIC_INTERFACE
function HomeRoute() {
  // Placeholder: mock tasks (replace with data layer later)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Pick up groceries",
      time: "9:00 AM",
      location: "Trader Joe's"
    },
    {
      id: 2,
      name: "Drop off package",
      time: "10:30 AM",
      location: "UPS Store"
    },
    {
      id: 3,
      name: "Pharmacy pickup",
      time: "11:15 AM",
      location: "CVS"
    }
  ]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const navigate = useNavigate();

  function handleOptimize() {
    setIsOptimizing(true);
    // Simulate optimization delay (mock)
    setTimeout(() => {
      // Would reorder tasks here in real logic
      setIsOptimizing(false);
      // Optionally add route lines/map
    }, 1200);
  }

  function handleAddErrand() {
    navigate("/add");
  }

  function handleTaskClick(taskId) {
    navigate(`/edit/${taskId}`);
  }

  return (
    <div className="home-route" style={{
      maxWidth:"100%",
      minHeight:"68vh",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"flex-start",
      paddingTop:0
    }}>
      <Header
        title={<span>Today's Errands</span>}
        rightContent={
          <button
            aria-label="Settings"
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.35rem",
              cursor: "pointer"
            }}
            onClick={() => navigate("/settings")}
          ><span role="img" aria-label="settings">⚙️</span></button>
        }
      />
      <div style={{
        width: "100%",
        maxWidth: 440,
        margin: "0 auto",
        padding: "20px 0 0 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <OptimizeRouteButton onClick={handleOptimize} isOptimizing={isOptimizing}/>
        <div style={{
          width: "94%",
          maxWidth: 420,
          marginTop: 4,
          marginBottom: 10
        }}>
          <TaskList tasks={tasks} onTaskClick={handleTaskClick} />
        </div>
      </div>
      <FAB onClick={handleAddErrand} label="Add Errand" icon="+" />
    </div>
  );
}

export default HomeRoute;
