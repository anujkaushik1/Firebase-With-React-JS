import logo from './logo.svg';
import './App.css';
import Firebaseauth from './Components/Firebaseauth';
import Firestore from './Components/Firestore';
import Firestorage from './Components/Firestorage';


function App() {
  return (
    <>
      <Firebaseauth/>
      {/* <Firestore/> */}
      <Firestorage/>
    </>
  );
}

export default App;
