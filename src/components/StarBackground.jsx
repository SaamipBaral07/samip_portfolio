import React, { useEffect, useState } from 'react';

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [lightParticles, setLightParticles] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
        generateLightParticles();

        const handleResize = () => {
            generateStars();
            generateLightParticles();
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 8000);

        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 2.5 + 0.5,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.2,
                animationDuration: Math.random() * 5 + 3,
            })
        }

        setStars(newStars);
    };
    const generateMeteors = () => {
        const numberOfMeteors = 2;

        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 0.8 + 0.2,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 4,
            })
        }
        setMeteors(newMeteors);
    };

    const generateLightParticles = () => {
        const numberOfParticles = Math.min(60, Math.floor(window.innerWidth * window.innerHeight / 20000));
        const newParticles = [];

        for (let i = 0; i < numberOfParticles; i++) {
            newParticles.push({
                id: i,
                size: Math.random() * 5 + 2,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.22 + 0.08,
                animationDuration: Math.random() * 14 + 14,
                animationDelay: Math.random() * 8,
            });
        }

        setLightParticles(newParticles);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100/70 via-white to-rose-50/45 dark:from-primary/5 dark:via-background dark:to-background transition-colors duration-700">

            {/* DARK MODE: Stars & Meteors */}
            <div className="hidden dark:block">
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
                    <div key={meteor.id} className="meteor animate-meteor opacity-20"
                        style={{
                            width: `${meteor.size * 60}px`,
                            height: `${meteor.size * 1.5}px`,
                            left: `${meteor.x}%`,
                            top: `${meteor.y}%`,
                            animationDelay: meteor.delay,
                            animationDuration: `${meteor.animationDuration}s`,
                        }}></div>
                ))}
            </div>

            {/* LIGHT MODE: Ambient Overlays */}
            <div className="block dark:hidden">
                <div
                    className="absolute inset-0 opacity-90"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 18% 12%, rgba(56, 189, 248, 0.20), transparent 38%), radial-gradient(circle at 82% 16%, rgba(251, 113, 133, 0.18), transparent 36%), radial-gradient(circle at 16% 86%, rgba(34, 197, 94, 0.16), transparent 34%), radial-gradient(circle at 78% 78%, rgba(147, 51, 234, 0.14), transparent 36%)',
                    }}
                />

                <div className="absolute -top-[22%] -left-[12%] h-[52rem] w-[52rem] rounded-full bg-sky-300/30 blur-[150px] mix-blend-multiply animate-float" style={{ animationDuration: '16s' }} />
                <div className="absolute -bottom-[28%] -right-[14%] h-[58rem] w-[58rem] rounded-full bg-rose-300/25 blur-[170px] mix-blend-multiply animate-pulse-subtle" style={{ animationDuration: '15s' }} />
                <div className="absolute top-[22%] right-[15%] h-[30rem] w-[30rem] rounded-full bg-emerald-200/35 blur-[130px] mix-blend-multiply animate-float" style={{ animationDuration: '20s', animationDelay: '1.5s' }} />

                <div className="absolute inset-0 opacity-[0.14]"
                    style={{
                        backgroundImage:
                            'linear-gradient(115deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0) 42%, rgba(14, 165, 233, 0.24) 72%, rgba(244, 114, 182, 0.16) 100%)',
                    }}
                />

                <div className="absolute inset-0 opacity-[0.12]"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at center, rgba(255,255,255,0.45) 0 1px, transparent 1px)',
                        backgroundSize: '3px 3px',
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-transparent to-white/60" />

                {lightParticles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute rounded-full bg-white/80 shadow-[0_0_24px_rgba(255,255,255,0.8)] animate-float"
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            opacity: particle.opacity,
                            animationDuration: `${particle.animationDuration}s`,
                            animationDelay: `${particle.animationDelay}s`,
                        }}
                    />
                ))}
            </div>

        </div>
    );
}  