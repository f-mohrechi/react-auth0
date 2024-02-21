import "./App.css";
import LoginButton from "./components/loginButton";
import LogOutButton from "./components/logOutButton";
import Profile from "./components/profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <div className="bg-sky-100 flex justify-center items-center h-screen px-5">
      <div className="flex flex-col items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-lg w-full max-w-xl">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-2xl font-bold text-sky-800 mb-5">Auth0 Login</h1>

          {error && (
            <div className="text-red-500">
              <p>Authentication Error</p>
            </div>
          )}

          {!error && isLoading && (
            <div className="text-green-500">
              <p>Loading ...</p>
            </div>
          )}

          {!error && !isLoading && (
            <>
              <LoginButton />

              <Profile />
              <div className="mt-5 w-full">
                <LogOutButton />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
