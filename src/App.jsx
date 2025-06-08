import Navbar from "./components/nav";
import "./App.css";
import { FocusCards } from "./components/ui/focus-cards";






function App() {


  return (
    <>
      <Navbar currentStep={2} />
      
      <div className="min-h-screen bg-gray-100 dark:bg-black py-10">
        <FocusCards />
      </div>
    </>
  )
}

export default App;
