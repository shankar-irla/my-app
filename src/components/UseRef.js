import React, {useRef,useEffect} from 'react';
function UseRef(){
    const inputRef=useRef(null);
    useEffect(()=>{inputRef.current.focus();},[]);
    return(
        <div>
         <h2>useRef Auto Focus Example</h2>
         <input ref={inputRef} type="text" placeholder="Cursor will appear here automatically"/>
        </div>
    );
}
export default UseRef;