import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/protected-route";
import PublicRoute from "./components/public-route";

export default function App() {
  return (
    <Router>
      <Routes>

        <Route
          path="/"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        
      </Routes>
    </Router>
  );
}