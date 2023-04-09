import { useQuery } from "@tanstack/react-query";

import "./styles.css";
import { getDataRespositories } from "../../api/User";
import Repo from "../Repo";

const Repositories = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["dataRespositories"],
    queryFn: getDataRespositories,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>An error has occurred</p>;

  return (
    <div className="container-repos">
      {data?.length && data?.length > 0 ? (
        data?.map((repo) => <Repo key={repo.id} {...repo} />)
      ) : (
        <p>sem repo</p>
      )}
    </div>
  );
};

export default Repositories;
