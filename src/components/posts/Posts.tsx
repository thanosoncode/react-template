import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/posts";

const Posts = () => {
  const { data } = useQuery({ queryKey: ["posts"], queryFn: getPosts });

  return (
    <div>
      {data?.slice(0, 5).map((post) => <div key={post.id}>{post.title}</div>)}
    </div>
  );
};

export default Posts;
