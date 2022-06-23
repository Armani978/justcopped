import React, {createContext, useState, useEffect} from 'react'
import { db } from '../firebase'

export const ProductsContextProvider = createContext()

export class ProductsContextProvider extends React.Component {
    state = {
        products: [],
    
    }
    