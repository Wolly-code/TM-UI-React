import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedLayout from "./pages/SharedLayout";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
