import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';
import CommentList from '../list/CommentList';

function PostViewPage({ posts, setPosts }) {
  const { id } = useParams(); // :id에 해당하는 숫자를 읽어옴
  const navigate = useNavigate(); 
  const postId = Number(id);

  const post = posts.find(p => p.id === postId);
  const [comment, setComment] = useState(''); // 댓글 작성 중인 내용을 저장할 state
  const [showDeleteModal, setShowDeleteModal] = useState(false); // 삭제 모달 상태

  const handleAddComment = () => {
    if (!comment.trim()) return;

    const updatedPosts = posts.map(p =>
      p.id === postId
        ? {
            ...p,
            comments: [
              ...p.comments,
              {
                id: Date.now(), 
                content: comment
              }
            ]
          }
        : p
        /*
        postId에 해당하는 글을 찾고, 그 글에 comment 내용을 추가함
        전체 posts를 setPosts로 업데이트
        마지막엔 입력 칸을 비워둠
        */
    );

    setPosts(updatedPosts);
    setComment('');
  };

  const handleDeletePost = () => {
    const updatedPosts = posts.filter(p => p.id !== postId);
    setPosts(updatedPosts);
    navigate('/');
  };

  if (!post) return <div>글을 찾을 수 없습니다.</div>;

  return (
    <div>
      <h1>Jihun's Blog</h1>
      <Button onClick={() => navigate('/')} label="뒤로 가기" />
      <h2>{post.title}</h2>
      <p style={{ fontSize: '0.9rem', color: '#666' }}>작성일: {post.date}</p>
      <p>{post.content}</p>

      {/* 삭제 버튼 클릭 시 모달창을 보여주는 JSX */}
      <Button onClick={() => setShowDeleteModal(true)} label="삭제하기" />
      
      {/* 삭제 확인 모달창 */}
      {showDeleteModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <p>정말 삭제하시겠어요?</p>
            <Button onClick={handleDeletePost} label="삭제" />
            <Button onClick={() => setShowDeleteModal(false)} label="취소" />
          </div>
        </div>
      )}


      <h3>댓글</h3>
      <CommentList comments={post.comments} />
      <TextInput
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="댓글을 입력하세요"
      />
      <Button onClick={handleAddComment} label="댓글 작성하기" />
    </div>
  );
}

export default PostViewPage;
