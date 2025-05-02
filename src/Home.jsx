import { useNavigate} from "react-router-dom";
function Home(){
  const Navigate=useNavigate();
 const gotoAbout=()=>{
  Navigate('/About');
 };
 const gotoContact=()=>{
  Navigate('/Contact');
 };
 return(
  <>
  <button onClick={gotoAbout}> Go to About</button>
  <button onClick={gotoContact}> Go to contact</button>
</>
 )
}
export default Home