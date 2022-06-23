import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'


const LoginSchema = Yup.object({
    email: Yup.string().email('Type a valid email').required('Email is required'),
    password: Yup.string().password
})

const initialValues={
    email: '',
    password: ''
}

export default function LoginForm(){
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
            
            <Button onClick={handleSubmit}>Login</Button>
            </form>
            </div>
    )
}
