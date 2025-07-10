import Dummy from "./components/dummy";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    setTimeout(() => {
      setAppear(true);
    }, 2000);
  }, []);

  const changeHandler = () => {
    setAppear((prev) => {
      return !prev;
    });
  };

  if (loading === true) {
    alert("Page LOADED");
    return <p className="text-3xl text-center m-20">Loading.....</p>;
  }

  return (
    <div className="text-3xl w-fit mx-auto">
      <button
        onClick={changeHandler}
        className="bg-slate-700 text-white m-6 rounded-2xl p-4"
      >
        {appear ? "Close" : "Open"}
      </button>
      {appear && !loading && <Dummy appear={appear} setAppear={setAppear} />}
    </div>
  );
};

export default App;

// Conditional Rendering
// useState
// useEffect
// Prop Passing
// Async Await fetch
// prev -> call back parameter
///////////////////////////////////////////////////////////////////////////////////

// Form validation and Submission -> state Variable, React form hooks 
// Start a new project ->