import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Hornedbeasts from "./Components/Hornedbeasts";
import data from "./data.json";

function App() {
  const horned1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Male_impala_profile.jpg/800px-Male_impala_profile.jpg"
  const horned2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Serengeti_Bueffel2.jpg/800px-Serengeti_Bueffel2.jpg"
  return (
    <div className="App">
      <Header></Header>
      <Main title="Big Horn 1" imgUrl={horned1} para="This animal has big horns"></Main>
      <Main title="Big Horn 2" imgUrl={horned2} para="This animal has cool horns"></Main>
      <h1>Hello World</h1>
   
    </div>
  );
let MyArr= [1,2,3,4,5,6]
MyArr.map(function(Hornedbeasts) {

}
data.map(obj),

}

export default App;

