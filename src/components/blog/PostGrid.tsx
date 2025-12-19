import type { Post } from "@/data/posts";
import { PostCard } from "./PostCard";

interface PostGridProps {
  posts: Post[];
  highlightTerm?: string;
}

export function PostGrid({ posts, highlightTerm }: PostGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <PostCard
          key={post.id}
          post={post}
          delay={index * 100}
          highlightTerm={highlightTerm}
        />
      ))}
    </div>
  );
}
