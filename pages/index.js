import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        backgroundColor: "#ffffff", // Set to white
        color: "#333",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh", // Ensure full height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
        Welcome to Our Games for Seniors
      </h1>
      <p style={{ fontSize: "20px", marginBottom: "40px" }}>
        Choose a game to play and enjoy!
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          flexDirection: "row",
        }}
      >
        {/* Memory Game Icon */}
        <div
          style={{
            backgroundColor: "#dff0d8",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <Link href="/memory-game">
            <div
              style={{
                fontSize: "60px",
                display: "block",
                marginBottom: "15px",
                color: "#3c763d",
              }}
            >
              🧠
            </div>
            <p style={{ fontSize: "24px", color: "#3c763d" }}>Memory Game</p>
          </Link>
        </div>

        {/* Number Matching Game Icon */}
        <div
          style={{
            backgroundColor: "#d9edf7",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <Link href="/number-game">
            <div
              style={{
                fontSize: "60px",
                display: "block",
                marginBottom: "15px",
                color: "#31708f",
              }}
            >
              🔢
            </div>
            <p style={{ fontSize: "24px", color: "#31708f" }}>
              Number Matching
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
