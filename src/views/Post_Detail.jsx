import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function PostDetail() {
  const [post, setPost] = useState({});

  const { id } = useParams();
  const getPost = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      const json = await response.json();
      setPost(json);
    } catch (error) {
      console.error("Errore durante il fetch del post:", error);
    }
  };

  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4">
          <h1 className="my-3">Dettaglio post {id}</h1>
          <p> {post.body} </p>
        </div>
      </div>
    </div>
  );
}
