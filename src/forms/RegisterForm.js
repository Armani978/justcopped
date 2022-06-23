import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import  TextField  from '@mui/material/TextField';
import Button from '@mui/material/Button';



const LoginSchema = Yup.object({
    email: Yup.string().email('Type a valid email').required('Email is required'),
    password: Yup.string().password
})

const initialValues={
    email: '',
    password: '',
    confirmPassword: ''
}

export default function RegisterForm(){
    const handleSubmit = (values)=> {
        console.log(values)
}
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: LoginSchema,
        onSubmit: (values)=> {
            handleSubmit(values)
    },
});
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                fullWidth
                id="password"
                type="password"
                name="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                fullWidth
                id="confirmPassword"
                type="password"
                name="password"
                label="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              />
            
            <Button onClick={handleSubmit}>Login</Button>
            </form>
            </div>
    )}
