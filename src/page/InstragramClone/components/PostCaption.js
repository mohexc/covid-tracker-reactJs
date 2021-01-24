
import React, { useRef } from 'react'
import { Button, Card, Row, Col } from 'antd';
import UploadCaptionModal from './CreatePost';
import { useAuthContext } from '../../../context/AuthContext';


const PostCaption = ({ user }) => {
  const UploadCaptionModalRef = useRef()
  const { logout } = useAuthContext()
  return (
    <React.Fragment>

      <Card style={{ marginBottom: '1rem' }}>
        <Row gutter={[24, 24]} justify="start" style={{ marginBottom: '0rem', paddingBottom: '0rem' }}>

          <Col xs={6}>
            <strong>{user.displayName}</strong>
          </Col>
          <Col xs={18}>
            <Button onClick={() => UploadCaptionModalRef.current.showModal()} block type="primary">Post Caption</Button>
            <Button style={{ marginTop: "1rem" }} onClick={() => logout()} block >Logout</Button>
          </Col>

        </Row >
      </Card>
      <UploadCaptionModal ref={UploadCaptionModalRef} />

    </React.Fragment >
  )
}

export default PostCaption
