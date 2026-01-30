import React from 'react';

function Person({persons,index}) {
  return (
    <div>
     {index} Iam {persons.name} Iam {persons.age} years old.I know {persons.Skill}
    </div>
  );
}

export default Person;
