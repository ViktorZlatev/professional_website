import React, { useState, useEffect } from 'react';
import './Comments.css';

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const storedComments = JSON.parse(sessionStorage.getItem('comments')) || [];
    setComments(storedComments);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newComments = [...comments, { text: newComment }];
      setComments(newComments);
      setNewComment('');
    }
  };

  const handleDeleteComment = (index) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
  };

  const handleCommentChange = (index, newText) => {
    const newComments = [...comments];
    newComments[index].text = newText;
    setComments(newComments);
  };

  return (
    <div className="app">
      <h1>Comment Section</h1>
      <div className="comment-input">
        <textarea
          className="new-comment"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="add-comment-btn" onClick={handleAddComment}>
          Add Comment
        </button>
      </div>
      <div className="comment-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p className="comment-text">{comment.text}</p>
            <button className="delete-comment-btn" onClick={() => handleDeleteComment(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;

