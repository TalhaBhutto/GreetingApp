import logo from './logo.svg';
import './App.css';

let CDate=new Date()
CDate=Cdate.getHours();
let greeting="";
let 
if(CDate>0 && CDate<12){
  greeting="Hello jee, Good Morning!";
}
function App() {
  return (
    <div className="App">
      <h1>{CDate}</h1>
    </div>
  );
}

export default App;
