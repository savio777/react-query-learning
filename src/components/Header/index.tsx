import { useQuery } from "@tanstack/react-query";

import "./styles.css";
import { getDataUser } from "../../api/User";

const Header = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["dataUser"],
    queryFn: getDataUser,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>An error has occurred</p>;

  return (
    <div className="container-header">
      <h1>{data?.name}</h1>
      <p>
        <strong>{data?.login}</strong>
      </p>
      <p>{data?.bio}</p>
    </div>
  );
};

export default Header;
