import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import AppRoutes from "./routes"

function App() {
  return (
    <div className="container">

      <div className="Navbar">
        <NavBar />
      </div>

      <div className="Body">
        <AppRoutes />
      </div>

      <div className="Footer">
        <Footer />
      </div>

    </div>
  )
}

export default App;
