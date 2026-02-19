import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import LifecycleB from './components/LifecycleB';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import Parentcomp from './components/Parentcomp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRInput from './components/FRInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter'; 
import ComponentC from './components/ComponentC';
import {UserProvider} from './components/UserContext';
import Hook from './components/Hook';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';
import UseMemo from './components/UseMemo';
import UseContext from './components/UseContext';
import UseReducer from './components/UseReducer';
function App(){
  return (
    <div className="App">
     {/*<FRParentInput/> */}
     {/*} <FocusInput/>*/}
     {/*<PortalDemo/>*/}
     {/*<ErrorBoundary>
     <Hero heroName="Batman"/>
     </ErrorBoundary>

     <ErrorBoundary>
     <Hero heroName="Superman"/>
     </ErrorBoundary>

     <ErrorBoundary>
      <Hero heroName="Joker"/>
    </ErrorBoundary>
     <ClickCounter/>
     <HoverCounter/>
     <UserProvider value="Varshika">
     <ComponentC/>
     </UserProvider>
     <Hook/>
     <UseEffect/>
     <UseRef/>
     <UseMemo/>
     <UseContext/>*/}
     <UseReducer/>
    </div>
  )
}
export default App;