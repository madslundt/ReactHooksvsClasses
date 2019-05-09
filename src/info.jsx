import React from 'react';

const Info = ({
    width,
    height,
    x,
    y,
}) => (
    <div>
        <h2>Window size</h2>
        <p>Width: {width}</p>
        <p>Height: {height}</p>

        <br />

        <h2>Mouse position</h2>
        <p>X: {x}</p>
        <p>Y: {y}</p>
    </div>
);

export default Info;