import Footer from "./components/footer/footer";
import Header from "./components/header/header";

function App() {
  return (
    <div
      style={{
        display: "flex",
        // flexDirection: "column",
        height: "100%",
        justifyContent: "center",
      }}
      className="App"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          maxWidth: 1280,
          width: "100%",
        }}
      >
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
