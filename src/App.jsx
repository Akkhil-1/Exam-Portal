import AppRoutes from "./AppRoute";
import { Button } from "./components/ui/button";
import { ComplexNavbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <ComplexNavbar/>
      <AppRoutes/>
    </>
  );
}

export default App;
