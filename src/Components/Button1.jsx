import React from 'react'
import styled from 'styled-components';
function changeColor(e) {
  e.target.style.background = 'black';
  e.target.style.color = 'blue'
  e.target.style.cursor = 'pointer'
}

export let btnStyle;

export default function Button1(p) {

   btnStyle = `
    width:${p.width};
    padding:${p.padding};
    border-Radius:${p.br};
    border:${p.border};
    font-Weight:${p.fw}; 
    box-Shadow:${p.box};
    background-Color:${p.bc};
    color:${p.color};
    height:${p.height};

    &:hover{
      background-color: ${p.hc};
      cursor: pointer
    }`

  const Style = styled.button`${btnStyle}
   `
  return (
    <Style>{p.name}</Style>
  )
}
