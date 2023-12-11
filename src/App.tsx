import { Route, Routes } from "react-router-dom";
import Jobs from "./jobs/Jobs";
import JobDetails from "./jobs/JobDetails";
import Header from "./ui-common/Header";
import "./App.css";
const routes = [
  { path: "/", element: <Jobs />, index: true },
  { path: "job/:id", element: <JobDetails /> },
];

function App() {
  return (
    <div>
      <Header />
      <div className="p-4">
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
