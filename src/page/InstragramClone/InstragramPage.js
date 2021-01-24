import React, { useEffect, useState } from 'react';
import { Row, Col, message } from 'antd';
import './styles/Instragramm.less'
import Post from './components/Post';
import { db } from '../../config/firebase';
import AuthControl from '../Auth/AuthControl';
import PostCaption from './components/PostCaption';
import { useAuthContext } from '../../context/AuthContext';

// main
const InstragramPage = () => {
  const { user } = useAuthContext()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPost()
    // eslint-disable-next-line 
  }, [])

  const fetchPost = async () => {
    try {
      await db.collection('posts').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({
          id: doc.id,
          username: doc.data().username,
          caption: doc.data().caption,
          imageUrl: doc.data().imageUrl,

        })))
      })

    } catch (error) {
      const result = error.response
        ? error.response.data.message
        : error.message
      message.error(result)
    }

  }

  return (
    <div >
      <Row >
        <Col xs={24} md={8} style={{ padding: "1rem" }}>
          {user && <PostCaption user={user} />}
          <AuthControl />
        </Col>

        <Col xs={24} md={16} style={{ padding: "1rem" }}>
          {posts.map(post => <Post key={post.id} postId={post.id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />)}
        </Col>
      </Row>
    </div>
  );
}

export default InstragramPage;