import { getStoredCart } from "../../utilities/fakedb"

export const DataLoad=async()=>{
    //get Products
    const productsData=await fetch('products.json')
    const productItem= await productsData.json()
    //get cart
    const savedCart=getStoredCart();
    const storedCart=[];
    for(const id in savedCart){
        const addedProduct= productItem.find(product => product.id === id);
        if(addedProduct){
            const quantity=savedCart[id];
            addedProduct.quantity=quantity;
            storedCart.push(addedProduct)
        }
    }
    return {productItem,storedCart};
}