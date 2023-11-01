const NewPost = ({ postTitle, setBody, setPostBody, SetPostTitle, handleSubmit }) => {
    return (
      <main className="NewPost">
        <h2>New Post</h2>
        <form className="newPostForm" onSubmit={handleSubmit}>
          <label htmlFor="postTitle">Post Title</label>
          <input id="postTitle" type="text" required value={postTitle} onChange={(e.target.value)}/>
          <label htmlFor="postBody">Post Body</label>
          <textarea name="postBody" id="postBody"></textarea>

        </form>
      </main>
    )
}

export default NewPost