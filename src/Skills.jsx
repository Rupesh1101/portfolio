import React from 'react';
import {FaPython, FaJava, FaReact, FaDatabase, FaGithubAlt} from 'react-icons/fa'; 
import {IoLogoJavascript} from 'react-icons/io';
import {DiCodeBadge} from 'react-icons/di';
import {SiDjango} from 'react-icons/si';
import {GiCircuitry} from 'react-icons/gi';

function Skills() {
    return (
        <div className='skills--container'>
            <div style={{fontSize:'2.3rem', fontWeight:'bold'}}> Skills</div>

            <div className='skills--content'>
                <div  style={{fontSize:'1.5rem', 
                padding: '1% 1%', 
                marginTop: '30px'}}>Programming Languages </div>
                <div className='skills--programming'>
                <div className='language'>
                    <FaPython style={{fontSize: '40px',margin: '0px 15px'}}/>
                    <div>Python</div>
                </div>

                <div className='language'>
                    <FaJava style={{fontSize: '35px',margin: '0px 15px'}}/>
                    <div>Core Java</div>
                </div>
                
                <div className='language'>
                    <DiCodeBadge style={{fontSize: '40px',margin: '0px 15px'}}/>
                    <div>C</div>
                </div>
                
                <div className='language'>
                    <IoLogoJavascript style={{fontSize: '35px',margin: '0px 15px'}}/>
                    <div>JavaScript</div>
                </div>
                </div>

                {/* --Frameworks-- */}

                <div 
                style={{fontSize:'1.5rem', 
                padding: '1% 1%', 
                marginTop: '30px'}}>
                Frameworks </div>
                <div className='skills--programming'>
                <div className='language'>
                    <SiDjango style={{fontSize: '40px',margin: '0px 15px'}}/>
                    <div>Django</div>
                </div>

                <div className='language'>
                    <FaReact style={{fontSize: '35px',margin: '0px 15px'}}/>
                    <div>ReactJS</div>
                </div>
                </div>

                {/* --other skills-- */}
                
                <div 
                style={{fontSize:'1.5rem', 
                padding: '1% 1%', 
                marginTop: '30px'}}>
                Other Skills </div>
                <div className='skills--programming'>
                <div className='language'>
                    <FaDatabase style={{fontSize: '35px',margin: '0px 15px'}}/>
                    <div>SQL</div>
                </div>

                <div className='language'>
                    <FaGithubAlt style={{fontSize: '35px',margin: '0px 15px'}}/>
                    <div>Git</div>
                </div>

                <div className='language'>
                    <GiCircuitry style={{fontSize: '35px',margin: '0px 15px'}}/>
                    <div>IOT</div>
                </div>

                <div className='language'>
                    <GiCircuitry style={{fontSize: '35px',margin: '0px 15px'}}/>
                    <div>PCB Designing</div>
                </div>
                </div>

            </div>


            
        </div> 
    )
}

export default Skills
