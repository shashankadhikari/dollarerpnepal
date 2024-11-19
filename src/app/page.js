export default function Page() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Under Construction</h1>
      <p style={styles.subtitle}>
        This webpage belongs to <strong>Best Nepal Software PVT. LTD.</strong>
      </p>
      <p style={styles.message}>
        We are working hard to bring something amazing soon. Stay tuned!
      </p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f8ff", // Light blue background
    fontFamily: "Arial, sans-serif",
    padding: "0 20px", // Padding for better spacing on small screens
  },
  title: {
    color: "#1e90ff", // Dodger blue
    fontSize: "3rem",
    fontWeight: "bold",
    margin: "10px",
    textAlign: "center", // Center text on mobile
  },
  subtitle: {
    color: "#ff4500", // Red-orange
    fontSize: "1.5rem",
    margin: "10px",
    textAlign: "center", // Center text on mobile
  },
  message: {
    color: "#555",
    fontSize: "1.2rem",
    textAlign: "center",
    marginTop: "20px",
    maxWidth: "600px", // Limit width on larger screens for better readability
  },

  // Media query for small screens (mobile)
  "@media (max-width: 600px)": {
    title: {
      fontSize: "2rem", // Smaller title for mobile screens
    },
    subtitle: {
      fontSize: "1.2rem", // Smaller subtitle font
    },
    message: {
      fontSize: "1rem", // Smaller message font
      marginTop: "15px", // Adjust margin for mobile
    },
  },
};
