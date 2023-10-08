import Navbar from "./components/Navbar";
import TodoHome from "./components/TodoHome";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Navbar/>
        <TodoHome/>
      </TodoContextProvider>
    </div>
  );
}

export default App;
