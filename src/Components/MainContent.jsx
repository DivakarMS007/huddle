import React from 'react'
import Im2 from '../images/Hero.png'
import Button1 from './Button1'

export default function MainContent() {
  return (
      <div style={{width: '100%',height: '92vh',display:'flex', justifyContent:'space-between'}}>
        <div style={{paddingTop:'60px'}}>
            <h2 style={{width:'28rem', fontWeight:'bold',fontSize:'42px', lineHeight:'56px'}}>Build The Community Your Fans Will Love</h2>
            <p style={{width:'36rem', fontSize:'1.2rem', lineHeight:'28px',marginBottom:'32px'}}>Huddle re-imagines the way we build communities.You have 
              a voice, but so does your audience. Create connections 
              with your users as you engage in genuine discussion.  </p>
            <Button1 name="Get Started For Free" bc = "hsl(308, 71%, 50%)" hc="red" height ="56px "padding="10px" br="40px" border="1px solid grey" fw = "600"
            box="0 0 7px grey" color="white" op = "0px" width="280px" top = "518px" left= "80px" gap= "0px" opacity= "0px"/>
        </div>
        <img style={{marginRight:"92px", width:'700px', height:'490px'}} src={Im2}></img>
      </div>
  )
}
