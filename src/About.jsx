import { useNavigate} from "react-router-dom";
function About(){
  const Navigate=useNavigate();
 const gotoHome=()=>{
  Navigate('/Home');
 };
 const gotoContact=()=>{
  Navigate('/Contact');
 };
 return(
  <>
  <button onClick={gotoHome}> Go to Home</button>
  <button onClick={gotoContact}> Go to contact</button>
</>
 )
}
export default About