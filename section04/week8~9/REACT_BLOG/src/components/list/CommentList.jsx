import CommentListItem from './CommentListItem';

function CommentList({ comments }) {
  return (
    <div>
      {comments.map((c, idx) => (
        <CommentListItem key={idx} comment={c} />
      ))}
    </div>
  );
} // 댓글 하나하나를 CommentListItem으로 보여줌

export default CommentList;
