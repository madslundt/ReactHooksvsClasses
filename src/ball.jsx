import React from 'react'
import { useTrail, animated } from 'react-spring';
import './style.css'

const options = {
    fast: { mass: 2, tension: 500, friction: 30 },
    slow: { mass: 10, tension: 200, friction: 50 },
};

const Ball = () => {
    const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? options.fast : options.slow) }))

    const trans = (x, y) =>
        `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

    const mouseMove = (event) => {
        const currentTargetRect = event.currentTarget.getBoundingClientRect();
        const x = event.pageX - currentTargetRect.left;
        const y = event.pageY - currentTargetRect.top;

        if (y > 0) {
            set({ xy: [x, y] });
        }
    }

    return (
        <div style={{border: '1px solid #000'}}>
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="goo">
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
                </filter>
            </svg>
            <div className="hooks-main" onMouseMove={e => mouseMove(e)}>
                {trail.map((props, index) => (
                    <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
                ))}
            </div>
        </div>
    );
}

export default Ball;