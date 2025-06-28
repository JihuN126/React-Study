import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/page/MainPage';
import PostWritePage from './components/page/PostWritePage';
import PostViewPage from './components/page/PostViewPage';
import rawData from './data.json';

function App() {
  const [posts, setPosts] = useState([]);
  /*
  posts : 글 목록을 담는 상태 변수
  setPosts : posts를 바꿀 때 사용하는 함수
  useState([]) : 처음에는 아무 글도 없도록 빈 배열로 시작
  */

  useEffect(() => { //UseEffect : 페이지가 처음 실행될 때 한 번만 실행
    const localData = localStorage.getItem('posts');
    /*
    localStorage.getItem('posts') : 브라우저에 저장된 글이 있는지 확인
    있으면 : setPosts로 글을 불러오고
    없으면 : 처음 불러온 rawData를 저장하고 그걸 posts에 넣어줌
    */
    if (localData) {
      setPosts(JSON.parse(localData));
    } else {
      setPosts(rawData);
      localStorage.setItem('posts', JSON.stringify(rawData));
    }
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem('posts', JSON.stringify(posts));
    /*
    posts가 바뀔 때마다 자동으로 localStorage에 저장
    글을 추가하거나 댓글을 달면 저장돼서 새로고침해도 남아있음!!
    */
    }
  }, [posts]);

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<MainPage posts={posts} />} />
        <Route path="/write" element={<PostWritePage posts={posts} setPosts={setPosts} />} />
        <Route path="/post/:id" element={<PostViewPage posts={posts} setPosts={setPosts} />} />
      </Routes>
    </BrowserRouter>
  );
  // BrowserRouter : 페이지를 전환할 수 있게 도와줌.
  // /write : PostWritePage(글 작성 페이지)
  // /post/:id : PostViewPage (해당 id의 글 보기)
}

export default App;
