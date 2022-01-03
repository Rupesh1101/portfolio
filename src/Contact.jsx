import React from 'react';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import {HiDocument} from 'react-icons/hi';

function Contact() { 
    return (
        <div className='contact--container'>
            <div style={{fontSize:'2.5rem', fontWeight:'bold'}}> Contact</div>
            <div className='contact--content'>
                <a href='https://drive.google.com/file/d/1T_y6qUsdhc9idUwbr70rJo4DKYfJ5za-/view?usp=sharing' 
                    target="_blank" 
                    style={{textDecoration:"none", color: 'black'}}>
                <HiDocument style={{fontSize:'3.2rem', color:'white' , cursor:'pointer'}}/>
                <section style={{fontSize:'1.2rem', color:'white'}}>Resume</section>
                </a>

                <a href='https://github.com/Rupesh1101' 
                    target="_blank" 
                    style={{textDecoration:"none", color: 'black'}}>
                    <BsGithub style={{fontSize:'3.3rem', color:'white', cursor:'pointer'}} />
                    <section style={{fontSize:'1.2rem', color:'white'}}>Github</section>
                </a>

                <a href='https://www.linkedin.com/in/rupesh-jha-8b01091a5' 
                    target="_blank" 
                    style={{textDecoration:"none", color: 'black'}}>
                <BsLinkedin style={{fontSize:'3rem', color:'white', cursor:'pointer'}}/>
                <section style={{fontSize:'1.2rem', color:'white'}}>Linkedin</section>
                </a>
            </div>
        </div>
    )
}

export default Contact
