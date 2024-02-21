import { useAuth0 } from "@auth0/auth0-react";

const LogOutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        onClick={() => logout()}
        className="flex justify-center items-center bg-sky-800 text-sky-100 rounded-lg px-4 py-2 w-full border border-sky-800 hover:bg-sky-100 hover:text-sky-800 transition-all ease-in-out delay-75"
      >
        <span>sign out</span>
      </button>
    )
  );
};

export default LogOutButton;
