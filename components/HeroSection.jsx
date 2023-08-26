'use client'
import { animated, useSpring } from "@react-spring/web"

export const HeroSection = () => {

    const springHeading = useSpring({
        from: { 
            x: -100,
            opacity: 0
        },
        to: { 
            x: 0,
            opacity: 1,
        },
    })

    const springColoredText = useSpring({
        from: { 
            x: 100,
            opacity: 0
        },
        to: { 
            x: 0,
            opacity: 1,
        },
    })

    const springDescription = useSpring({
        from: {
            opacity: 0,
            y: 30,
        },
        to: {
            opacity: 1,
            y: 0,
        },
        delay: 400,
    })
    
    return (
        <div className="w-full h-[50vh] py-[15vh]">
            <animated.h2 
                className="font-bold text-black text-4xl md:text-9xl pb-4"
                style={{
                    ...springHeading
                }}
            >
                Discover & Share
            </animated.h2>
            <animated.h3 
                className="font-bold blue-gradient-text text-6xl md:text-8xl font-inter"
                style={{...springColoredText}}
            >
                AI-Powered Prompts
            </animated.h3>
            <animated.p 
                className="text-gray-600 text-lg py-4 p-5 mx-auto w-full md:w-[50%]"
                style={{...springDescription}}
            >
                Peer prompt is an open source tool that allow you share AI powered prompts with your peers<span className="hidden md:inline"> and build an active community of AI users around yourself</span>.
            </animated.p>
            
        </div>
    )
}
