import {db} from '../firebase';
import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore';

const productCollectionRef = collection(db, 'products');
class ProductDataService {
    addProducts=(newProduct) => {
        return addDoc(productCollectionRef, newProduct);
    }
    updateProduct = (id, updatedProduct) => {
        const productDoc = doc(db, "product" ,id)
        return updateDoc(productDoc, updatedProduct);
    }
    deleteProduct = (id) => {
        const productDoc = doc(db, "product" ,id)
        return deleteDoc(productDoc);
    }
    getProducts = () => {
        return getDocs(productCollectionRef);
    }   
    getProduct = (id) => {
        const productDoc = doc(db, "product" ,id)
        return getDoc(productDoc);
    }
}
export default new ProductDataService();