// Comments.jsx
import React, { useState, useEffect } from 'react';
import './Comments.css';

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetch('https://myjsonserver-sa4i.onrender.com/comments')
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Error fetching comments:', error));
  }, []);

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newCommentObj = { text: newComment };
      fetch('https://myjsonserver-sa4i.onrender.com/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCommentObj)
      })
        .then(response => response.json())
        .then(data => setComments([...comments, data]))
        .catch(error => console.error('Error adding comment:', error));
      setNewComment('');
    }
  };

  const handleDeleteComment = (id) => {
    fetch(`https://myjsonserver-sa4i.onrender.com/comments/${id}`, {
      method: 'DELETE'
    })
      .then(() => setComments(comments.filter(comment => comment.id !== id)))
      .catch(error => console.error('Error deleting comment:', error));
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
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <p className="comment-text">{comment.text}</p>
            <button
              className="delete-comment-btn"
              onClick={() => handleDeleteComment(comment.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
