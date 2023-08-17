import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';

function Jobbs(props) {
    const ref = useRef(null)
    const mainControls = useAnimation();
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            const startAnimation = async () => {
                mainControls.start("visible")
            }
            console.log(isInView)

            startAnimation()
        }
    }, [isInView])
    return (
        <AnimatePresence>
            <motion.div
                variants={{
                    hidden: {scale: 0.25, opacity:0},
                    visible: {scale: 1, opacity: 1}
                }}
                initial="hidden" // Corrected syntax
                animate={mainControls} // Start from 0.25 and scale to 1
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                <div ref={ref} className='card'>
                    <div className="information">
                        <div className="name">
                            <h2>{props.name}</h2>
                            <h4>{props.work}</h4>
                        </div>
                        <div className="date">
                            <h5>{props.date}</h5>
                            <h5>{props.location}</h5>
                        </div>
                    </div>
                    <p>In the capacity of a Python Mentor, I facilitated the comprehensive understanding of Python fundamentals and sophisticated algorithms for aspiring learners. Concurrently, I fostered practical skills through project-based learning, equipping individuals to excel in the realm of Python programming</p>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Jobbs