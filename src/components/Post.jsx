import { Link } from "react-router";

export default function Post( { post }) {
  return (
    <li className="list-group-item mb-2 rounded-3 shadow-sm border-0">
      <h3 className="fw-bold">{post.title}</h3>
      <Link to={`/posts/${post.id}`}>Dettaglio</Link>
    </li>
  );
}