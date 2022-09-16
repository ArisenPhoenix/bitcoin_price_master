import { useUser } from "@auth0/nextjs-auth0/dist/frontend/use-user";
import Image from "next/image";
const Profile = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <Image
          src={user.picture}
          alt={user.name}
          loading="lazy"
          width={40}
          height={40}
        />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
