import React, { useState, useEffect } from 'react';
import './Comments.css';
import { styles } from "./styles";

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newReply, setNewReply] = useState('');
  const [replyId, setReplyId] = useState(null);
  const [replies, setReplies] = useState({});

  useEffect(() => {
    fetch('http://localhost:3001/comments') // Replace with your MongoDB comments endpoint
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Error fetching comments:', error));

    // Fetch replies for each comment
    comments.forEach(comment => {
      fetch(`http://localhost:3001/comments/${comment._id}/replies`) // Replace with your MongoDB replies endpoint
        .then(response => response.json())
        .then(data => {
          setReplies({
            ...replies,
            [comment._id]: data
          });
        })
        .catch(error => console.error('Error fetching replies:', error));
    });
  }, []);

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newCommentObj = { text: newComment };
      fetch('http://localhost:3001/comments', { // Replace with your MongoDB comments endpoint
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

  const handleReplyComment = (id) => {
    setReplyId(id);
  };

  const handleAddReply = (commentId) => {
    if (newReply.trim() !== '') {
      const newReplyObj = { text: newReply };
      fetch(`http://localhost:3001/comments/${commentId}/replies`, { // Replace with your MongoDB replies endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReplyObj)
      })
        .then(response => response.json())
        .then(data => {
          setReplies({
            ...replies,
            [commentId]: [...replies[commentId], data]
          });
        })
        .catch(error => console.error('Error adding reply:', error));
      setNewReply('');
      setReplyId(null);
    }
  };

  return (
    <div className="app">
      <h1 className={`${styles.sectionHeadText} mt-4 text-[#368BC1]`}>
        Питай <span className='text-[#0000FF]'>СимоНик</span>
      </h1>
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
          <div key={comment._id} className="comment">
            <div className="comment-text">{comment.text}</div>
            <div className="reply-list">
              {replies[comment._id]?.map((reply, index) => (
                <div key={index} className="reply-text">
                  {reply.text}
                </div>
              ))}
            </div>
            <div className="reply-buttons">
              {!replyId && (
                <button
                  className="reply-comment-btn"
                  onClick={() => handleReplyComment(comment._id)}
                >
                  Reply
                </button>
              )}
              {replyId === comment._id && (
                <div className="reply-input">
                  <textarea
                    className="new-comment"
                    placeholder="Write a reply..."
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)} 
                  />
                  <div className="reply-actions">
                    <button className="add-comment-btn" onClick={() => handleAddReply(comment._id)}>
                      Add Reply
                    </button>
                    <button className="cancel-reply-btn" onClick={() => setReplyId(null)}>
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
