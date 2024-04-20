import React, { useState } from 'react';

const ReactComponent = ({ dataFromAngular }) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Dados do AngularJS: {dataFromAngular}</p>
            <p>Contador React: {count}</p>
            <button onClick={handleClick}>Incrementar</button>
        </div>
    );
};

export default ReactComponent;
