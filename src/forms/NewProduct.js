import React, { useState, useEffect} from 'react'
import { Form, Button, InputGroup, Alert } from 'react-bootstrap'
import ProductDataService from '../services/product.services'
import {  ref , uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebase'
export default function NewProduct() {
  const [product, setProduct] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [message, setMessage] = useState({ error: false, msg: "" })
  const [data, setData] = useState('')
  const [file , setFile] = useState('')
  useEffect(() => {
    const uploadFile = () => {
      const metadata = {
        contentType: 'image/jpg'
      };
      const storageRef = ref(storage, 'images/' + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    console.log(error);
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setData((prevData) => ({ ...prevData, image: downloadURL }))
    });
  }
);
    }
    image && uploadFile()
  }, [image])
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (product === "" || price === "" || description === "" || image === "") {
      setMessage({ error: true, msg: "Please fill all the fields" });
      return;
    }
  
  const newProduct = { product, price, description, image };
  console.log(newProduct)
  try {
    await ProductDataService.addProducts(newProduct);
    setMessage({ error: false, msg: "Product added successfully" });
  }
  catch (err) {
    setMessage({ error: true, msg: "Error adding product" });
  }
  setProduct("");
  setPrice("");
  setDescription("");
  setImage("");

  }
  return (
    <>
     <div className= "p-4 box-shadow">
    {message?.msg &&  (<Alert variant={message?.error ? "danger" : "success"} dismissible onClose={() => setMessage("")}>
     {message?.msg}
     </Alert>)}
   
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <InputGroup>
      <InputGroup.Text>Product Name</InputGroup.Text>
      <Form.Control type="text"
      placeholder="Enter product name"
      value= {product}
      onChange={(e) => setProduct(e.target.value)}/>
     </InputGroup>
        
    
    </Form.Group>
  
    <Form.Group className="mb-3" >
      <Form.Label>Asking price</Form.Label>
      <Form.Control 
      type="text"
      placeholder="$0.00"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      />
      
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Image</Form.Label>
      <Form.Control type="file" placeholder="$0.00" value={image} onChange={(e) => setImage(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Description</Form.Label>
      <Form.Control type="text" placeholder="Product description" value={description}
      onChange={(e) => setDescription(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div>
    </>
  )
}
