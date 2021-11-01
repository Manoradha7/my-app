import "./App.css"

function Msg({name},{id}) {
  return(
    <div>
      <img className="img-pic" src="https://www.seekpng.com/png/detail/506-5061704_cool-profile-avatar-picture-cool-picture-for-profile.png" alt="profile-pic" />
      <h1> Hello {name} {id}</h1>
    </div>
  )
}

export default function App(){
  console.log("HI");
  const names=["Mano","Saha","Viru","Mega","Mukesh"];
  return(
    <div className="App">
      {/* <Msg name="Mano" id="01"/>
      <Msg name="Saha" id="02"/>
      <Msg name="Viru" id="03"/> */}
      {names.map(n => <Msg name={n} />)}
    </div>
  )
}