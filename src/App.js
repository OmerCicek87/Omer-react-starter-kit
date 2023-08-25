import logo from "./logo.svg"

function App() {
  return (
    <div className="App">

      <p>
          {process.env.REACT_APP_API_URL}
      </p>
        <h3>{process.env.NODE_ENV}</h3>
      {process.env.NODE_ENV === 'production' && (
        <>
          <img src={logo}></img>
        </>
      )}
    </div>
  );
}

export default App;