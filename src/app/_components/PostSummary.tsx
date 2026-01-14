"use client";
import type { Post } from "@/app/_types/Post";

type Props = {
  post: Post;
};

const PostSummary: React.FC<Props> = (props) => {
  const { post } = props;
  return (
    <div className="rounded-xl border border-pink-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-2 text-lg font-bold text-pink-500">{post.title}</div>
      {/* <div>{post.content}</div> */}
      <div
        className="line-clamp-3"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default PostSummary;
