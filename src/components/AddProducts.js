import React, {useState} from 'react';
import {Alert , InputGroup, Form, ButtonGroup , Button, Container } from 'react-bootstrap';
import ProductService from '../services/product.services';
import { db } from '../firebase';

const AddProduct = () => {
    const [product, setProduct] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [description , setDescription] = useState('')
    const [message, setMessage] = useState({ error: false, msg: "" });

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (product === "" || price === "" || image === "" || description === "") {
            setMessage({ error: true, msg: "Please fill all the fields" });
            return;
}

    const newProduct = { product, price, image, description };
    console.log(newProduct)
    try {
        await ProductService.addProduct(newProduct);
        setMessage({ error: false, msg: "Product added successfully" });

    } catch (error) {
        setMessage({ error: true, msg: error.message });
    }
    setProduct("");
    setPrice("");
    setImage("");
    setDescription("");
    
    return (
        <>
        <div className="p-4 box">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="form.Name">
            <Form.Label>Product</Form.Label>
            <Form.Control type="text" placeholder="Enter name of product" />
        </Form.Group>
        <Form.Group controlId="form.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="Price" placeholder="$0.00" />
        </Form.Group>
        <Form.Group controlId="form.Textarea">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="form.Image">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" placeholder="Select Image" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
        </div>
    </>
    );
    
    
}
}
export default AddProduct;