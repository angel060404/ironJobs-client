import "./App.css";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";
import AppRoutes from "../routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <div className="appBody">
        <Navigation />

        <AppRoutes />

        <Footer />
      </div>
    </div>
  );
}

export default App;
