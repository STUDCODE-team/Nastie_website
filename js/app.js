gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })
    

    gsap.fromTo('.first_section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.first_section',
            start: 'center',
            end: '820',
            scrub: true
        }
    })

    gsap.fromTo('.second_section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.second_section',
            start: 'center',
            end: '820',
            scrub: true
        }
    })

    gsap.fromTo('.third_section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.third_section',
            start: 'center',
            end: '820',
            scrub: true
        }
    })

    gsap.fromTo('.third_section', { opacity: 0 }, {
        opacity: 1,
        scrollTrigger: {
            trigger: '.third_section',
            start: '-800',
            end: '-100',
            scrub: true
        }
    })

    gsap.fromTo('.fourth_section', { opacity: 0 }, {
        opacity: 1,
        scrollTrigger: {
            trigger: '.fourth_section',
            start: '-800',
            end: '820',
            scrub: true
        }
    })

    gsap.fromTo('.second_section_picture', {x: -100, opacity: 0}, {
        opacity: 1, x:0,
        scrollTrigger: {
            trigger: '.second_section_picture',
            scrub: true
        }
    })

    gsap.fromTo('.second_section_words', {x: 100, opacity: 0}, {
        opacity: 1, x:0,
        scrollTrigger: {
            trigger: '.second_section_words',
            scrub: true
        }
    })

}