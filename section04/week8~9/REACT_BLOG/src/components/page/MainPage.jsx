import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PostList from '../list/PostList';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';

function MainPage({ posts }) {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div>
      <h1>Jihun's Blog</h1>
      <TextInput
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
      <Button onClick={() => navigate('/write')} label="글 작성하기" />
      <PostList posts={filteredPosts} />
    </div>
  );
  /* navigate('/write') : 글쓰기 페이지로 이동
  PostList : 글 하나하나를 보여주는 컴포넌트
  Button : 버튼을 따로 만들어둔 UI 컴포넌트
  */
}

export default MainPage;
