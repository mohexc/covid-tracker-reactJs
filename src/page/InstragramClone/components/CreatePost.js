import { Form, Modal, Input, Button, message } from 'antd'
import React, { useState, useImperativeHandle, } from 'react'
import getBase64 from "../../../utils/getBase64"
import { storage, db, timestamp } from '../../../config/firebase';
import { useAuthContext } from '../../../context/AuthContext';

const CreatePost = (props, ref) => {
  const [visible, setVisible] = useState(false)
  const [submitButton, setSubmitButton] = useState(false)
  const [file, setFile] = useState(null)
  const [previewImage, setPreviewImage] = useState()
  const [error, setError] = useState(null)
  // eslint-disable-next-line
  const [progress, setProgress] = useState()
  const { user } = useAuthContext()
  useImperativeHandle(ref, () => {
    return {
      showModal: (data) => {
        setVisible(true)

      }
    }
  })

  const handleFile = (e) => {
    console.log(e.target.files[0])
    const types = ['image/png', 'image/jpeg']
    const selectedFile = e.target.files[0]
    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile)
      getBase64(selectedFile)
        .then(data => setPreviewImage(data))
        .catch(e => console.log(e))
      setError('')
    } else {
      setFile(null)
      setError('Please select an image file (png or jpeg) 💥')
    }

  }
  const onFinish = (values) => {
    setSubmitButton(true)
    if (file) {
      const storageRef = storage.ref(file.name)
      storageRef.put(file).on(
        "state_changed",
        (snap) => {
          let percenttage = (snap.bytesTransferred / snap.totalBytes) * 100
          setProgress(percenttage)
        },
        (err) => {
          message.error(err.message)
          setSubmitButton(false)
        },
        () => {
          storageRef.getDownloadURL().then((url) => {
            db.collection("posts")
              .add({
                timestamp: timestamp(),
                caption: values.caption,
                username: user.displayName ? user.displayName : user.email,
                imageUrl: url
              })
              .then(res => {
                setSubmitButton(false)
                setVisible(false)
                setPreviewImage()
                setFile()
              })
              .catch(e => message.error(e.message))

          })
        })
      return
    }
    if (values.caption && !file) {
      db.collection("posts")
        .add({
          timestamp: timestamp(),
          caption: values.caption,
          username: user.displayName ? user.displayName : user.email,
          imageUrl: null
        })
        .then(res => {
          console.log(res)
          setSubmitButton(false)
          setVisible(false)
          setPreviewImage()
          setFile()
        })
        .catch(e => message.error(e.message))
      return
    }
  };


  return (
    <Modal
      onCancel={() => setVisible(false)}
      title={<h3 style={{ textAlign: "center" }}><span>Create Post</span></h3>}
      visible={visible}
      footer={null}
      destroyOnClose={true}

    >
      <Form
        name="Create Post"
        onFinish={onFinish}
      >
        <Form.Item name="caption" rules={[{ required: true, message: 'Please input your Caption!', },]}>
          <Input.TextArea placeholder rows={7} />
        </Form.Item>
        {previewImage && <img src={previewImage} alt="previewImage" className="image-preview" />}
        {error && <div style={{ color: "red" }}>{error}</div>}
        {/* {file && <div>{file.name}</div>} */}
        <label className="label-input-image">
          <span style={{ display: "flex", justifyContent: "center", alignItems: "center", height: '100%' }}>
            <input type="file" onChange={handleFile}></input>
            <span>upload</span>
          </span>
        </label>


        <Form.Item >
          <Button shape="round" loading={submitButton} disabled={submitButton} type="primary" htmlType="submit">Post</Button>
          <Button shape="round"
            tyle={{ marginLeft: "1rem" }}
            onClick={() => {
              setPreviewImage()
              setVisible(false)
            }}>
            Cancle
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default React.forwardRef(CreatePost)
