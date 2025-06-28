function CommentListItem({ comment }) {
  return <div className="comment">{comment.content}</div>;
}
 // 실제로 댓글의 content(내용)을 화면에 보여주는 부분
export default CommentListItem;
