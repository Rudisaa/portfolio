import React from 'react'
import Typewriter from 'typewriter-effect';
import './Hero.css'

const Hero = () => {
    return (
        <section id="hero">
            <div className="welcome-msg">Welcome to my portfolio!</div>
            <h1> Hi! I'm Rudy a</h1>
            <h1>
                <Typewriter onInit={(typewriter) => {
                    typewriter.typeString('Computer Science Student')
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString('Cat Dad')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('Web Dev')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('skateborader')
                        .deleteChars(5)
                        .typeString('arder')
                        .pauseFor(1000)
                        .start();
                }} options={{ loop: true, autoStart: true }} />
            </h1>

        </section>
    )
}

export default Hero