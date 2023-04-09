import gsap from 'gsap';

export const scrollAnimation = (position, target, onUpdate, isMobile) => {
    const timeline = gsap.timeline();

    timeline.to(position, {
        // these values are the position of the model obtained from the website
        // from which the model can be played around with, position can be changed
        x: !isMobile ? -3.38 : -7.0,
        y: !isMobile ? - 10.74 : -12.2,
        z: !isMobile ? -5.93 : -6.0,
        // trigger animation upon scrolling
        scrollTrigger: {
            // trigger the animation based on this section of the page
            trigger: '.sound-section',
            // bottom viewport touches top part of .sound-section
            start: 'top bottom',
            // top part of viewport touches top part of .sound-section
            end: 'top top',
            scrub: 2,
            immediateRender: false,
        },
        onUpdate
    })
        .to(target, {
            // these values are the position of the model obtained from the website
            // from which the model can be played around with, position can be changed
            x: !isMobile ? 1.52 : 0.7,
            y: !isMobile ? 0.77 : 1.9,
            z: !isMobile ? -1.08 : 0.7,
            // trigger animation upon scrolling
            scrollTrigger: {
                // trigger the animation based on this section of the page
                trigger: '.sound-section',
                // bottom viewport touches top part of .sound-section
                start: 'top bottom',
                // top part of viewport touches top part of .sound-section
                end: 'top top',
                scrub: 2,
                immediateRender: false,
            },
        })
        .to('.jumbotron-section', {
            opacity: 0,
            // trigger animation upon scrolling
            scrollTrigger: {
                // trigger the animation based on this section of the page
                trigger: '.sound-section',
                // bottom viewport touches top part of .sound-section
                start: 'top bottom',
                // top part of viewport touches top part of .sound-section
                end: 'top top',
                scrub: 2,
                immediateRender: false,
            },
        })
        .to('.sound-section-content', {
            opacity: 1,
            // trigger animation upon scrolling
            scrollTrigger: {
                // trigger the animation based on this section of the page
                trigger: '.sound-section',
                // bottom viewport touches top part of .sound-section
                start: 'top bottom',
                // top part of viewport touches top part of .sound-section
                end: 'top top',
                scrub: 2,
                immediateRender: false,
            },
        })
        .to(position, {
            x: !isMobile ? 1.56 : 9.36,
            y: !isMobile ? 5.0 : 10.95,
            z: !isMobile ? 0.01 : 0.09,
            scrollTrigger: {
                trigger: '.display-section',
                start: 'top bottom',
                end: 'top top',
                scrub: 2,
                immediateRender: false,
            },
            onUpdate
        })
        .to(target, {
            x: !isMobile ? -0.55 : -1.62,
            y: !isMobile ? 0.32 : 0.02,
            z: !isMobile ? 0.0 : -0.06,
            scrollTrigger: {
                trigger: '.display-section',
                start: 'top bottom',
                end: 'top top',
                scrub: 2,
                immediateRender: false,
            },
        })
        .to('.display-section', {
            opacity: 1,
            scrollTrigger: {
                trigger: '.display-section',
                start: 'top bottom',
                end: 'top top',
                scrub: 2,
                immediateRender: false,
            },
        })
}