import { useNavigate } from 'react-router-dom';

function PostListItem({ post }) {
  const navigate = useNavigate();

  return (
    <div 
    className="post-item"
    onClick={() => navigate(`/post/${post.id}`)} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px', margin: '5px 0' }}>
      {post.title}
    </div>
  );
  //클릭하면 navigate(`/post/${post.id}`)를 통해 글 상세보기 페이지로 이동
}

export default PostListItem;
