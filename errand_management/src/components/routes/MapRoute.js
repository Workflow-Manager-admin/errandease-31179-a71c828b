import React, { useState } from "react";
import MapView from "../../features/map/MapView";
import BottomSheet from "../BottomSheet";
import ErrandMarker from "../ErrandMarker";

// PUBLIC_INTERFACE
function MapRoute() {
  // Mock errands/tasks (for demo)
  const [mockErrands] = useState([
    {
      id: 1,
      name: "Pick up groceries",
      eta: "09:15",
      location: "Trader Joe's"
    },
    {
      id: 2,
      name: "Drop off package",
      eta: "10:05",
      location: "UPS Store"
    },
    {
      id: 3,
      name: "Pharmacy pickup",
      eta: "10:55",
      location: "CVS"
    }
  ]);
  // Stub route array for possible lines
  const mockRoute = [mockErrands[0], mockErrands[1], mockErrands[2]];
  const [selectedIdx, setSelectedIdx] = useState(null);

  return (
    <div className="map-route" style={{
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#f8fafb",
      paddingBottom: 0
    }}>
      {/* Mobile sticky header */}
      <div style={{
        paddingTop: 18,
        width: "100%",
        maxWidth: 520,
        margin: "0 auto"
      }}>
        <h2 style={{
          color: "#222",
          fontWeight: 600,
          fontSize: "1.15rem",
          letterSpacing: "0.01em",
          marginBottom: 7
        }}>
          Today's Route
        </h2>
      </div>
      <div style={{
        width: "96%",
        maxWidth: 480,
        margin: "2px auto 12px auto",
        flex: "0 0 auto",
        display: "flex",
        justifyContent: "center"
      }}>
        {/* Map area with markers */}
        <MapView errands={mockErrands} route={mockRoute} style={{ minHeight: 380, marginTop: 4 }}>
          {mockErrands.map((errand, idx) => (
            <ErrandMarker
              key={errand.id}
              idx={idx + 1}
              name={errand.name}
              selected={selectedIdx === idx}
              onClick={() => setSelectedIdx(idx)}
            />
          ))}
        </MapView>
      </div>
      {/* BottomSheet for task list, appears over map bottom */}
      <BottomSheet isOpen={true} height={160}>
        <div>
          <div style={{
            color: "#4FC3F7",
            fontWeight: 600,
            fontSize: "1.03rem",
            marginBottom: 5
          }}>
            Upcoming Stops
          </div>
          <ol style={{
            padding: 0, margin: 0,
            listStyle: "decimal inside",
            fontSize: "1rem"
          }}>
            {mockErrands.map((errand, idx) => (
              <li
                key={errand.id}
                style={{
                  padding: "2px 0",
                  margin: "0 0 1px 0",
                  color: selectedIdx === idx ? "#81C784" : "#222",
                  fontWeight: selectedIdx === idx ? 600 : 400,
                  cursor: "pointer",
                  borderRadius: 6,
                  background: selectedIdx === idx ? "#eafbee" : "none",
                  transition: "background 0.12s, color 0.13s"
                }}
                onClick={() => setSelectedIdx(idx)}
              >
                <span style={{ marginRight: 9, color: "#4FC3F7"}}>{idx + 1}.</span>
                <span>{errand.name}</span>
                <span style={{ marginLeft: 15, color: "#81C784", fontSize: "0.97em" }}>{errand.eta}</span>
                <span style={{ marginLeft: 10, color: "#999", fontSize: "0.96em" }}>{errand.location}</span>
              </li>
            ))}
          </ol>
        </div>
      </BottomSheet>
    </div>
  );
}

export default MapRoute;
