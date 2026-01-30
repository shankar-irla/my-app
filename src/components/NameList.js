import React from 'react';
import Person from './Person';
function NameList() {
    const persons=[
        {
            id:4,
            name:'Reddie',
            age:25,
            Skill:'JavaScript'
        },
        {
            id:1,
            name:'Varshika',
            age:19,
            Skill:'Java'
        },
         {
            id:2,
            name:'Divya',
            age:20,
            Skill:'React'
        },
         {
            id:3,
            name:'Koumya',
            age:19,
            Skill:'C++'
    }
        
     
    ]
   const personList=persons.map((persons,index)=>(<Person key={index} persons={persons} index={index}/>

   ))
    return <div>{personList}</div>
}
export default NameList;
