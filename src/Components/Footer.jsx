import Im6 from '..//images/logo.png'
import Footerbutton from './Footerbutton'
import Im7 from '..//images/location.png'
import Im8 from '..//images/Shape.png'
import Im9 from '..//images/mail.png'
import Ic1 from '..//images/Group 15.png'
import Ic2 from '..//images/Group 16.png'
import Ic3 from '..//images/Group 17.png'

export default function Footer() {
  return (
    <div style={{backgroundColor:'#00252E',height:'418px',display:'flex',justifyContent:'center',alignItems:'center',position:'relative',marginTop:'75px'}}>
      <Footerbutton/>
      <div style={{display:'flex',padding:'0',margin:'0 40px'}}>
            <div style={{display:'flex',flexDirection:'column',width:'25%',alignItems:'center',justifyContent:'center',lineHeight:'28px'}}>
              <ul>
                <li><img style={{filter:"invert()"}} src={Im6} alt="Logog" /></li>
                <li><img style={{padding:'5px'}} src={Im7} alt="Logog" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                <li><img style={{padding:'5px'}} src={Im8} alt="Logog" />+1-543-123-4567</li>
                <li><img style={{padding:'5px'}} src={Im9} alt="Logog" />example@huddle.com</li>
              </ul>
            </div>

            <div style={{display:'flex',flexDirection:'column',width:'25%',alignItems:'center',justifyContent:'center',lineHeight:'28px'}}>
              <ul>
                <li>About Us</li>
                <li>What We Do</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div style={{display:'flex',flexDirection:'column',width:'25%',alignItems:'center',justifyContent:'center',lineHeight:'28px'}}>
            <ul>
                <li>Career</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div style={{display:'flex',flexDirection:'column',width:'25%',alignItems:'center',justifyContent:'center',color:'white',lineHeight:'28px'}}>
              <div style={{display:'flex',flexDirection:'row'}}>
                  <img style={{padding:'5px'}} src={Ic3}></img>
                  <img style={{padding:'5px'}} src={Ic1}></img>
                  <img style={{padding:'5px'}} src={Ic2}></img>
              </div>
              <p>© Copyright 2018 Huddle. All rights reserved.</p>
            </div>
      </div>

    </div>
  )
}
