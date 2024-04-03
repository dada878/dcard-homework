export default function validatePost(post: Post) {
  if (!post.title.trim()) {
    throw new Error("標題欄位不可為空！");
  }
  if (post.content.trim().length < 30) {
    throw new Error("太短了！內容不可少於 30 字！");
  }
}
