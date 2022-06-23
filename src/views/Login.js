import React from 'react'
import { Container, Card } from 'react-bootstrap'
import  Login  from '../components/Login'
import { AuthContextProvider } from '../context/AuthContext';
export default function RegisterPage() {
  return (
    <>
     <AuthContextProvider>

     <Card>

    <Container>
    
    <Login />
    </Container>
    </Card>
    </AuthContextProvider>
    </>
  )
}
