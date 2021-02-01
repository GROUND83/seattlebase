import { firestore } from "./firebase";
import { BrowserRouter } from "react-router-dom";
import Gate from "./screen/Gate";
function App() {
  return (
    <BrowserRouter>
      <Gate />
    </BrowserRouter>
  );
}

export default App;
