import React, { useState, useEffect } from 'react';
import './Comments.css';
import { styles } from "./styles";

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newReply, setNewReply] = useState(''); // State for reply input
  const [replyId, setReplyId] = useState(null);
  const [replies, setReplies] = useState({});

  useEffect(() => {
    fetch('https://backendserver-q6ws.onrender.com/comments')
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Error fetching comments:', error));
      
    fetch('https://backendserver-q6ws.onrender.com/replies')
      .then(response => response.json())
      .then(data => {
        const replyObj = data.reduce((acc, reply) => {
          if (!acc[reply.commentId]) {
            acc[reply.commentId] = [];
          }
          acc[reply.commentId].push(reply);
          return acc;
        }, {});
        setReplies(replyObj);
      })
      .catch(error => console.error('Error fetching replies:', error));
  }, []);

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newCommentObj = { text: newComment };
      fetch('https://backendserver-q6ws.onrender.com/comments', {
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
    if (newReply.trim() !== '') { // Use newReply for reply input
      const newReplyObj = { text: newReply, commentId };
      fetch('https://backendserver-q6ws.onrender.com/replies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReplyObj)
      })
        .then(response => response.json())
        .then(data => {
          setReplies({
            ...replies,
            [commentId]: replies[commentId] ? [...replies[commentId], data] : [data]
          });
        })
        .catch(error => console.error('Error adding reply:', error));
      setNewReply(''); // Clear newReply after adding reply
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
          <div key={comment.id} className="comment">
            <div className="comment-text">{comment.text}</div>
            <div className="reply-list">
              {replies[comment.id]?.map((reply, index) => (
                <div key={index} className="reply-text">
                  {reply.text}
                </div>
              ))}
            </div>
            <div className="reply-buttons">
              {!replyId && (
                <button
                  className="reply-comment-btn"
                  onClick={() => handleReplyComment(comment.id)}
                >
                  Reply
                </button>
              )}
              {replyId === comment.id && (
                <div className="reply-input">
                  <textarea
                    className="new-comment"
                    placeholder="Write a reply..."
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)} 
                  />
                  <div className="reply-actions">
                    <button className="add-comment-btn" onClick={() => handleAddReply(comment.id)}>
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
