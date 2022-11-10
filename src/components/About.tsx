import React from 'react'
import './About.css'

const About = () => {
    return (
        <section id="about-section">
            <div className="about-info">
                <p>I am a college student attending the Univeristy of Utah. Alongside of attending school, I'm an air force veteran, avid enjoyer of video games, skateboard/snowboarder, and of course a cat dad. Outside of web development, you will catch me skateboarding whenever i have the chance, or if its winter I'll be snowboarding. I also love spending my time playing video games, and playing with my cats.</p>
            </div>
            <div className="skill">
                <h2>My Skills</h2>
                <div className="skill-box">html</div>
                <div className="skill-box">css</div>
                <div className="skill-box">javascript</div>
                <div className="skill-box">terminal</div>
                <div className="skill-box">github</div>
                <div className="skill-box">git</div>
            </div>

        </section>
    )
}

export default About