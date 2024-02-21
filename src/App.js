import "./App.css";
import LoginButton from "./components/loginButton/LoginButton";
import LogOutButton from "./components/logOutButton/LogOutButton";

function App() {
  return (
    <div className="bg-sky-100 flex justify-center items-center h-screen px-5">
      <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-lg w-96">
        <div className="flex flex-col">
          <LoginButton />
          <LogOutButton />
        </div>
      </div>
    </div>
  );
}

export default App;
