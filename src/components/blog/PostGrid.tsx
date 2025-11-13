import type { Post } from "@/data/posts";
import { PostCard } from "./PostCard";

interface PostGridProps {
  posts: Post[];
}

export function PostGrid({ posts }: PostGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
