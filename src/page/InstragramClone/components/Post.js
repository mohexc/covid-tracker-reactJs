import React, { useState, useEffect } from 'react'
import { Row, Avatar } from 'antd';
import { db, timestamp } from '../../../config/firebase';
import { useAuthContext } from '../../../context/AuthContext';

const Post = ({ postId, username, caption, imageUrl }) => {
  const { user } = useAuthContext()
  const [comments, setComments] = useState()
  const [comment, setComment] = useState()
  useEffect(() => {
    let unsubscribe
    if (postId) {
      unsubscribe = db
        .collection('posts')
        .doc(postId)
        .collection('comments')
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()))
        })
    }
    return () => {
      unsubscribe()
    }
  }, [postId])

  const postComment = async (e) => {
    e.preventDefault()
    const result = await db
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .add({
        comment: comment,
        username: user.displayName ? user.displayName : user.email,
        timestamp: timestamp()
      }).then(res => res).catch(e => console.log(e.message))
    setComment('')
    debugger
    return result
  }
  return (
    <div className="post">
      <Row align="middle" className="post-header">
        <Avatar style={{ marginRight: '1rem' }} />
        <strong >{username}</strong>
      </Row>
      <img src={imageUrl} alt="" className="post-image" />
      <div className="post-body">
        <strong>{caption}</strong>
      </div>
      {comments &&
        comments.map(comment => {
          return (
            <React.Fragment>
              <p style={{ marginLeft: '1.5rem' }}>
                <strong>{comment.username} : </strong>
                <span>{comment.comment}</span>
              </p>
            </React.Fragment>
          )
        }
        )}
      {user &&
        <form className="post-comment-box">
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add comment"
            className="post-input"
            type="text"
          />
          <button
            onClick={postComment}
            disabled={!comment}
            className={comment ? "post-btn-active" : "post-btn"}
            type="submit">
            Post
                    </button>
        </form>
      }
    </div>
  )
}

export default Post
