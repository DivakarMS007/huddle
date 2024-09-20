import React from 'react'

export default function Content1(p) {
  return (
    <div style={{height: '440px',display:'flex',boxShadow:'0 0 10px rgba(0,0,0,0.4)', backgroundColor:'white' , borderRadius:'10px', alignItems:'center',justifyContent:'center',marginTop:'3.5rem'}}>
      <div style={{display:'flex',flexDirection:'column',padding:'0px 80px'}}>
        <h3 style={{fontSize:'32px',marginBottom:'8px'}}>{p.headline}</h3>
        <p style={{width:'32rem', fontSize:'21px', opacity:'0.6'}}>{p.text}</p>
      </div>
      <img src={p.img} width='440px'></img>
    </div>
  )
}
