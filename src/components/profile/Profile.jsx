import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <article className="flex flex-col items-center">
        {user.picture && (
          <div className="flex justify-center">
            <img
              className="w-20 h-20 rounded-full"
              src={user.picture}
              alt={user.name}
            />
          </div>
        )}
        <h2 className="text-xl font-medium my-2">{user.name}</h2>
        {Object.keys(user).map((objKey, i) => {
          return (
            <p key={i} className="text-center">
              {objKey} : {user[objKey]}
            </p>
          );
        })}
      </article>
    )
  );
};

export default Profile;
