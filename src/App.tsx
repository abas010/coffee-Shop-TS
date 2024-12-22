import Main from "./components/Main/Main";
import Header from "./components/Header";

function App() {
  return (
    <div className="font-Dana w-full h-screen bg-white dark:bg-zinc-700 transition-colors duration-1000">
      <Header />
      <Main />
    </div>
  );
}

export default App;
