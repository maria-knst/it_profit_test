import "./App.css";

function App() {


  return (
    <div className="App">
      <h1 className="FormTitle">Form</h1>
        <form className="MyForm">
          <input className="MyFormInput" type="text" pattern="[A-Za-z]{3,30}\s[A-Za-z]{3,30}" style={{textTransform: 'uppercase'}} placeholder="Full Name"/>
          <input className="MyFormInput" type="text" pattern="[\w-]+@[a-z]+.[a-z]+" placeholder="E-mail"/>
          <input className="MyFormInput" type="tel" placeholder="+7 (987) 654-32-10"/>
          <input className="MyFormInput" type="date" placeholder="Your Birthday"/>
          <textarea name="message" id="MyFormMessage" minLength="10" maxLength="300" placeholder="Message" cols="30" rows="10"></textarea>
          <button> Send Me</button>
        </form>
    </div>
  );
}

export default App;
