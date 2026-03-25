import { useEffect, useState } from "react";
import Post from "../components/Post";

export default function Info() {
  const [posts, setPosts] = useState();
  const get_posts = async () => {
    try {
      const response = await fetch("http://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    get_posts();
  }, []);

  return (
    <>
      <h1 className="my-2">Info</h1>
      <ul className="list-group">
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
}
