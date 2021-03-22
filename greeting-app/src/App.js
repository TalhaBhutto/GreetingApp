import logo from './logo.svg';
import './App.css';

let CDate=new Date()
CDate=Cdate.getHours();
let greeting="";
let cssStyle={};
if(CDate>=0 && CDate<12){
  greeting="Good Morning! Have a nice Day.";
}
if(CDate>=12 && CDate<16){
  greeting="Good Afternoon! God bless you.";
}
if(CDate>=16 && CDate<20){
  greeting="Good Evening! Hoping that you had a wonderful day.";
}
if(CDate>=20){
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
