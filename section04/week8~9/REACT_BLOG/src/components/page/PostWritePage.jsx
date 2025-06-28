import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

function PostWritePage({ posts, setPosts }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newPost = {
      id: posts.length + 1,
      title,
      content,
      comments: [],
      date: new Date().toLocaleString(),
    };
    setPosts([...posts, newPost]);
    navigate('/');
  };

  /*
  사용자가 제목과 내용을 입력하면 handleSubmit( )이 호출되고
  새로운 post객체를 만들어서 posts에 추가
  그 후 메인페이지('/')로 이동
  */

  return (
    <div>
      <h1>Jihun's Blog</h1>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} placeholder="제목을 입력하세요" />
      <TextInput value={content} onChange={e => setContent(e.target.value)} placeholder="내용을 입력하세요" multiline />
      <Button onClick={handleSubmit} label="글 작성하기" />
    </div>
  );
}

export default PostWritePage;
