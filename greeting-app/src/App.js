import logo from './logo.svg';
import './App.css';

let CDate=new Date()
CDate=CDate.getHours();
let Time=new Date().toLocaleTimeString();
let greeting="";
let cssStyle={
  backgroundColor:"Pink",
};
let cssStyle2={};
if(CDate>=0 && CDate<12){
  greeting="Good Morning! Have a nice Day.";
  cssStyle.color="green";
  cssStyle2.backgroundImage='url("https://images.app.goo.gl/QNnmW6ArB3dyBpCt7")';
}
if(CDate>=12 && CDate<16){
  greeting="Good Afternoon! God bless you.";
  cssStyle.color="yellow";
  cssStyle2.backgroundImage='url("https://images.app.goo.gl/vdcFrjkvu1L7gW1x9")';
}
if(CDate>=16 && CDate<20){
  greeting="Good Evening! Hoping that you had a wonderful day.";
  cssStyle.color="orange";
  cssStyle2.backgroundImage='url("https://images.app.goo.gl/UdLo3jKyQrTjAyUC8")';
}
if(CDate>=20){
  greeting="Good Night! Have some rest.";
  cssStyle.color="blue";
  cssStyle2.backgroundImage='url("https://picsum.photos/200/300")';
}
function App() {
  return (
    <div className="App" style={cssStyle2}>
      <h1 style={{marginTop:"300px"}}>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
      <h1 style={{opacity:"0.5",color:"white"}}>{Time}</h1>
    </div>
  );
}

export default App;
