import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import AppRoutes from "./routes"
import { Provider } from "react-redux"
/* import store from "./store/store" */
function App() {
  return (
    <div className="container">

{/*       <Provider store={store}> */}
      <div className="Navbar">
        <NavBar />
      </div>

      <div className="Body">
        <AppRoutes />
      </div>

      <div className="Footer">
        <Footer />
      </div>

{/*       </Provider>*/}

    </div>
  )
}

export default App;
