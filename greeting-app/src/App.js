import logo from './logo.svg';
import './App.css';

let CDate=new Date()
CDate=CDate.getHours();
let Time=new Date().toLocaleTimeString();
let greeting="";
let cssStyle={
  backgroundColor:"Pink",
  backgroundImage: 'url("https://picsum.photos/200/300")'
};
if(CDate>=0 && CDate<12){
  greeting="Good Morning! Have a nice Day.";
  cssStyle.color="green";
}
if(CDate>=12 && CDate<16){
  greeting="Good Afternoon! God bless you.";
  cssStyle.color="yellow";
}
if(CDate>=16 && CDate<20){
  greeting="Good Evening! Hoping that you had a wonderful day.";
  cssStyle.color="orange";
}
if(CDate>=20){
  greeting="Good Night! Have some rest.";
  cssStyle.color="blue";
}
function App() {
  return (
    <div className="App">
      <h1 style={{marginTop:"300px"}}>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
      <h1 style={{opacity:"0.5",color:"white"}}>{Time}</h1>
    </div>
  );
}

export default App;
