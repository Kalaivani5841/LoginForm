import { useNavigate} from "react-router-dom";
function Contact(){
  const Navigate=useNavigate();
 const gotoHome=()=>{
  Navigate('/Home');
 };
 const gotoAbout=()=>{
  Navigate('/about');
 };
 return(
  <>
  <button onClick={gotoHome}> Go to Home</button>
  <button onClick={gotoAbout}> Go to contact</button>
</>
 )
}
export default Contact