
import styled from "styled-components";
import Button1 from "./Button1";
import { btnStyle } from "./Button1";

export default function Footerbutton() {
  const K = styled.button`${btnStyle}`
  return (
    <div style={{border:'1px solid grey',backgroundColor:'white',width: "700px",height: '280px',display:'flex',alignItems:'center',
    justifyContent:'center',flexDirection:'column',position:"absolute",top:'-150px',borderRadius:'9px'}}>
      <h2>Ready To Build Your Community ?</h2>
      {/* <K>asjdklfhalksdkjf;aldskjf</K> */}
      <Button1 name = "Get Started For Free" hc="green"  bc = "hsl(308, 71%, 50%)" height ="56px "padding="10px" br="40px" border="1px solid grey" fw = "600"
            box="0 0 7px grey" color="white" op = "0px" width="280px" top = "518px" left= "80px" gap= "0px" opacity= "0px"/>
    </div>
  )
}
