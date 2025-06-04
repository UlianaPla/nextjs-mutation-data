import { createPost } from "@/actions/post-actions";
import PostForm from "@/components/post-form";

export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
