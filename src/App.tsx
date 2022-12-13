import { RouterMain as Route } from "../src/routes/index";
import { ProtectedRoute as Protected } from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <Route />
      <Protected />
    </>
  );
}

export default App;
