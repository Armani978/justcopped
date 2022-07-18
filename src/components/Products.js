import { async } from '@firebase/util'
import React, { useEffect, useState} from 'react'
import {Table , Button} from 'react-bootstrap'
import ProductDataService from '../services/product.services'

const ProductList = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    getProducts();
    }, [])
    const getProducts = async () => {
      const data = await ProductDataService.getProducts();
      console.log(data.docs)
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    const deleteProduct = async (id) => {
      await ProductDataService.deleteProduct(id);
      getProducts();
    };
  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Price</th>
          <th>Image</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {products.map((doc, index) => {
          return (
          <tr key={doc.id}>
            <td>{index + 1}</td>
            <td>{doc.product}</td>
            <td>{doc.price}</td>
            <td>{doc.image}</td>
            <td>{doc.description}</td>

            <td></td>
            
          </tr>
        )})}
      </tbody>
    </Table>
  )

  }

  export default ProductList

