import "./styles.css";
import { DataUserRepository } from "../../api/User/types";

const Repo: React.FC<DataUserRepository> = ({
  name,
  description,
  clone_url,
}) => (
  <div className="container-repo">
    <h5>{name}</h5>
    <p>{description}</p>
    <a href={clone_url} target="_blank" rel="noreferrer">link</a>
  </div>
);

export default Repo;
