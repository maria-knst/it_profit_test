import "./App.css";
import {useState} from "react";
import MyForm from "./components/MyForm";

function App() {

    const [myAnswer, setMyAnswer] = useState({title: 'success', message: 'Nothing to send'})

    const getAnswer = (answer_) => {
        setMyAnswer({title: answer_.title, message: answer_.message});
    }

  return (
    <div className="App">
      <h1 className="FormTitle">Form</h1>
        <MyForm answer={getAnswer} />
        <p className="RequestAnswer"> {myAnswer.message}</p>
    </div>
  );
}

export default App;
