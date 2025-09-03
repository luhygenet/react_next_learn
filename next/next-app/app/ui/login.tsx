"use client";
export default function LoginPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFE4E1", // soft pink background
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "320px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#FF69B4",
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Welcome Back!
        </h1>

        <input
          type="email"
          placeholder="Email"
          style={{
            padding: "0.75rem",
            marginBottom: "1rem",
            borderRadius: "8px",
            border: "1px solid #FFB6C1",
            outline: "none",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            padding: "0.75rem",
            marginBottom: "1.5rem",
            borderRadius: "8px",
            border: "1px solid #FFB6C1",
            outline: "none",
          }}
        />

        <button
          style={{
            backgroundColor: "#FF69B4",
            color: "#fff",
            padding: "0.75rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#FF85C1")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#FF69B4")
          }
        >
          Login
        </button>

        <p
          style={{
            marginTop: "1rem",
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#888",
          }}
        >
          Don’t have an account?{" "}
          <a
            href="#"
            style={{
              color: "#FF69B4",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
