import React from 'react';
/*function Greetprops(props) {
    return <h1>Hello {props.name}!</h1>;
}*/
const Greetprops=(props)=>{
    return(
        <div>
     <h1>Hello {props.name} the {props.Profession}</h1>
    {props.children}
    </div>
)
}
export default Greetprops;