import React, { createContext,useContext,useState} from 'react';
const UserContext = createContext();
function UseContext(){
    const [user,setUser]=useState("Varshika");
    return(
        <UserContext.Provider value={user}>
           <div>
          <h2>UseContext Example</h2>
          <p>Current User: {user}</p>
          <button onClick={()=>setUser("Studymasth")}>Change User</button>
          <ChildComponent/>
        </div>
        </UserContext.Provider>
        
    );
}
function ChildComponent(){
    const  user=useContext(UserContext);
    return <h3>Welcome, {user}!</h3> ;
}
export default UseContext;