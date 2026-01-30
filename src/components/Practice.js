import React from 'react';
function Practice(){
    function clickHandler(){
        console.log('Hello Sweetie');
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    );
}
export default Practice;