import PostListItem from './PostListItem';

function PostList({ posts }) {
  return (
    <div>
      {posts.map(post => <PostListItem key={post.id} post={post} />)}
    </div>
  );
  /*
  posts.map(...) : 글 배열을 반복해서 하나씩 보여줌
  PostListItem : 각각의 글을 보여주는 작은 컴포넌트 
  */
}

export default PostList;
