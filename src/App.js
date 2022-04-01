import { useEffect, useState } from 'react';
import './App.css';
import LoadingPage from "./Components/LoadingPage";
import WebPage from "./Components/WebPage";

function App() {
  const [loading, setLoading] = useState(true)

  const handleLoading = () => {
    setLoading(false);
    }

  useEffect(() => {
    window.addEventListener("load",handleLoading);
    return () => window.removeEventListener("load",handleLoading);
  }, [])

  return (
    <div className="App">
      { loading ? <LoadingPage/> : <WebPage/>}
    </div>
  );
}

export default App;
