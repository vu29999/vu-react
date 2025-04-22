import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';

import routes from "./pages/index";



function App() {

  return (
    <div className="App wrap">
      <div className="container">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;

// const location = useLocation();

// useEffect(() => {
//   if (location.pathname === '/') {
//     document.body.classList.add('main');
//   } else {
//     document.body.classList.remove('main');
//   }
// }, [location]);
