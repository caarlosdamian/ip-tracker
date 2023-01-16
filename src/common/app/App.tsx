import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchIpAddress } from "../../redux/slices/trackerSlice";
import { AppThunkDispatch } from "../../redux/store";
import { Bottom } from "../../sections/bottom/Bottom";
import { Top } from "../../sections/top/Top";
import "./App.scss";

function App() {
  const dispatch = useDispatch<AppThunkDispatch>();
  useEffect(() => {
    dispatch(fetchIpAddress("render"));
  }, [dispatch]);

  return (
    <main className="App">
      <Top />
      <Bottom />
    </main>
  );
}

export default App;
