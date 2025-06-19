import { Route, Routes } from "react-router";
import { Footer, Navbar } from "./components/ui";
import { HomePage, LoginPage, MovieDetailsPage } from "./pages";
import  RegisterPage from "./pages/register-page.jsx";

function App() {
  return (
    <>
      <main className="flex-shrink-0">
        <Navbar />

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>

      <Footer className="mt-auto" />
    </>
  );
}

export default App;
