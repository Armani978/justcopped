import * as React from 'react';
import {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { primaryTheme } from '../themes/primaryTheme'
import {db} from '../firebase'
import { collection, doc, getDocs } from 'firebase/firestore';
import { Table } from 'react-bootstrap';

export default function MultiActionAreaCard() {
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            let list = [];
            try{
                const querySnapshot = await getDocs(collection(db, "products"));
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, '=>', doc.data());
                    list.push(doc.data());
                });
                setData(list);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])
  return (
    <Table striped bordered hover>
    