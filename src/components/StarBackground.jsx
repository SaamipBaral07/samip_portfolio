import React, { useEffect, useState } from 'react';

export const StarBackground = () => { 
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth*window.innerHeight/8000);   
         
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id:i,
                size:Math.random() * 2.5 + 0.5,
                x:Math.random()*100,
                y:Math.random()*100,
                opacity:Math.random()*0.5+0.2, // Softer glow
                animationDuration:Math.random()*5+3, // Slower pulsing
            })
        }
    
        setStars(newStars);
    };
    const generateMeteors = () => {
        // Less meteors, and they will be much softer.
        const numberOfMeteors = 2; 
         
        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id:i,
                size:Math.random() * 0.8 + 0.2, // Significantly smaller
                x:Math.random()*100,
                y:Math.random()*20,
                delay:Math.random()*15,
                animationDuration:Math.random()*3+4, // Slower falling

            })
        }
        setMeteors(newMeteors);
    };
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">

            {stars.map(star => (
                <div key={star.id} className="star animate-pulse-subtle"  
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                      
                    }}></div>   
            ))}   
               {meteors.map(meteor => (
                <div key={meteor.id} className="meteor animate-meteor opacity-20"  // Reduced opacity to make it un-disturbing
                    style={{
                        width: `${meteor.size*60}px`, // Shorter trail
                        height: `${meteor.size*1.5}px`, // Thinner
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        animationDelay: meteor.delay,
                        animationDuration: `${meteor.animationDuration}s`,
                      
                    }}></div>   
            ))}  


        </div>
    );
}  