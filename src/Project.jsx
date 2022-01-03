import React from 'react'

function Project() {
    return (
        <div className='projects--container'>
            <div style={{fontSize:'2.5rem', fontWeight:'bold'}}> Projects</div>

            <div style={{fontSize:'1.5rem', 
                padding: '1% 1%', 
                marginTop: '30px'}}>
                1. Covid-19 Tracker </div>
                <section style={{fontSize:'1.2rem', 
                padding: '1% 3%'}}>
                Tech used : ReactJS</section>
                <div style={{fontSize:'1.2rem', 
                padding: '1% 3%'}}>
                <section>Description</section>
                <section>This is a web application which shows numbers of cases, recoveries and deaths due to coronavirus.</section>
                <section>The data for this application has taken from an API from disease.sh.</section><br/>
                <a href='https://rupesh1101.github.io/React-Project-Covid-19-Tracker-/' target='_blank' style={{textDecoration: 'none', color: 'white'}}>Live demo</a>
                </div>

                <div style={{fontSize:'1.5rem', 
                padding: '1% 1%', 
                marginTop: '30px'}}>
                2. Netflix Clone </div>
                <section style={{fontSize:'1.2rem', 
                padding: '1% 3%'}}>
                Tech used : ReactJS</section>
                <div style={{fontSize:'1.2rem', 
                padding: '1% 3%'}}>
                <section>Description</section>
                <section>This is a web based application in which you can get information about the movies uploaded on the OTT platform Netflix and able to watch the trailers of individual movies.</section>
                <section>The data on this project has been fetched from an API provided by TMDB.</section><br/>
                <a href='https://netflix-clone-960c0.web.app/' target='_blank' style={{textDecoration: 'none', color: 'white'}}>Live demo</a>
                </div>
        </div>
    )
}

export default Project
