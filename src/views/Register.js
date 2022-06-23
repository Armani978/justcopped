import React from 'react'
import { Container } from 'react-bootstrap'
import  Register  from '../components/Register'
import { AuthContextProvider } from '../context/AuthContext';
export default function RegisterPage() {
  return (
    <>
     <AuthContextProvider>

     
    <Container>
    
    <Register />
    </Container>
    </AuthContextProvider>
    </>
  )
}
