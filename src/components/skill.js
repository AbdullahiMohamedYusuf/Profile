import React, {useEffect, useRef} from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';

function Skill(props) {
    const ref = useRef(null)
    const mainControls = useAnimation();
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if(isInView) {
            const startAnimation = async () => {
                mainControls.start("visible")
            }
            startAnimation()
        }
    }, [isInView])

    return (
        <AnimatePresence>
            <motion.div
                variants={{
                    hidden: {scale: 0.25},
                    visible: {scale: 1}
                }}
                initial="hidden" // Corrected syntax
                animate={mainControls} // Start from 0.25 and scale to 1
                transition={{duration: 0.7, delay: 0.3}}
                exit={{ opacity: 0, x: "100%" }}
            >
                <div ref={ref} className="skill">
                    <h3>{props.name}</h3>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Skill;
