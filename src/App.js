import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import "./App.css"
import RowPost from "./Components/RowPost";
import {orginals,action,romance} from "./Components/Api/urls"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <RowPost title="Netflix Orginals" url={orginals} islarge />
      <RowPost title="Action" url={action}/>
      <RowPost title="Romance" url={romance}/>
    </div>
  )
}

export default App;
