import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Input from "./components/input/input";

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
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
              type="email"
              text="لطفا ایمیل خود را وادر کنید"
              placeholder="salam"
            />
            <Input
              type="email"
              text="لطفا ایمیل خود را وادر کنید"
              placeholder="salam"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
