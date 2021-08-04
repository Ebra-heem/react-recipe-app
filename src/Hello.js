import React from 'react';

function Hello(){
    const sayHello=()=>{
        console.log('hello form new component you just added');
    }
    return(
        <div>
            <h3>I am from hello component</h3>
            <button onClick={sayHello}>sayHello</button>
        </div>
    );
}

export default Hello;