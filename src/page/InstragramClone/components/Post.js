import React from 'react'
import { Row, Avatar } from 'antd';

const Post = ({ username, caption, imageUrl }) => {
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
    </div>
  )
}

export default Post
