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
    // Function to fetch comments and replies
    const fetchCommentsAndReplies = async () => {
      try {
        // Fetch comments from your MongoDB comments endpoint
        const commentsResponse = await fetch('http://localhost:3001/comments');
        const commentsData = await commentsResponse.json();
        setComments(commentsData);

        // Fetch replies for each comment
        const repliesPromises = commentsData.map(async (comment) => {
          const repliesResponse = await fetch(`http://localhost:3001/comments/${comment._id}/replies`);
          const repliesData = await repliesResponse.json();
          return { commentId: comment._id, replies: repliesData };
        });

        // Wait for all replies to be fetched and update state
        const fetchedReplies = await Promise.all(repliesPromises);
        const repliesObj = fetchedReplies.reduce((acc, { commentId, replies }) => {
          acc[commentId] = replies;
          return acc;
        }, {});
        setReplies(repliesObj);
      } catch (error) {
        console.error('Error fetching comments and replies:', error);
      }
    };

    // Call the fetch function to load comments and replies
    fetchCommentsAndReplies();
  }, []);

  const handleAddComment = async () => {
    if (newComment.trim() !== '') {
      const newCommentObj = { text: newComment };
      try {
        // Send a POST request to your MongoDB comments endpoint
        const response = await fetch('http://localhost:3001/comments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newCommentObj)
        });
        const data = await response.json();
        setComments([...comments, data]);
        setNewComment('');
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };

  const handleReplyComment = (id) => {
    setReplyId(id);
  };

  const handleAddReply = async (commentId) => {
    if (newReply.trim() !== '') {
      const newReplyObj = { text: newReply };
      try {
        // Send a POST request to your MongoDB replies endpoint
        const response = await fetch(`http://localhost:3001/comments/${commentId}/replies`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newReplyObj)
        });
        const data = await response.json();
        setReplies({
          ...replies,
          [commentId]: [...replies[commentId], data]
        });
        setNewReply('');
        setReplyId(null);
      } catch (error) {
        console.error('Error adding reply:', error);
      }
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
