import React from 'react'
import Button1 from './Button1'
import Im from '../images/Head.png'

export default function Header() {
  return (
    <div style={{display:'flex',width: '95%',
       height: '48px',justifyContent:'space-between', marginBottom:'62px'}}>

      <img src={Im}></img>

      <Button1 name="Try It Free" bc = "White" hc="pink" width="160px" padding="10px" br="40px" border="1px solid white" fw = "600"
       box="0 0 7px grey" color="black" />
    </div> 
  )
}
