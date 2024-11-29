import Login from "./Login/login";
import Admin from "./Login/admin";
import Customer from "./Login/customer";
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" Component={Login} />
    <Route path="/admin" Component={Admin} />
    <Route path="/customer" Component={Customer} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
