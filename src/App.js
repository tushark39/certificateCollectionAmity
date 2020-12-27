import Base from './Screens/Base'
import './App.css'
import DisplayPage from './Screens/DisplayPage';
import Form from './Screens/Form';
function App() {
  return (
    <Base>
     <div style={{backgroundColor:"#1a1a1a",color:'white',paddingTop:20,minHeight:'600px'}}>
     <DisplayPage/>
     <Form/>
     </div>
    </Base>
  );
}

export default App;
