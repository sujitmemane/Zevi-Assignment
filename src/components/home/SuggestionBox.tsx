import React , {useState,useEffect} from "react";
import { faker } from '@faker-js/faker';
import { Link } from "react-router-dom";



interface Product {
  id:number,
  name:string,
  image:string
}
interface ProductSuggestion {
  id:number,
  name:string
}

const SuggestionBox = () => {

  const [products,setProducts] = useState<Product[]>()
  const [productSuggestions,setProductSuggestion] = useState<ProductSuggestion[]>()
  const numberOfProduct  = 5
  const generateProduct = (count:number):Product[]=>{
    const products : Product[] = []
    for (let i = 0; i < count; i++) {
      const product : Product = {
        id:i ,
        name: faker.commerce.productName(),
        image:  faker.image.urlLoremFlickr({
          category: 'fashion',
          width: 640,
          height: 480,
        }),
      }
      products.push(product)
    }

    return products
  }
  
  const generateProductSuggestions =(count:number) : ProductSuggestion [] =>{
    const productNameList : ProductSuggestion[] = []
    for (let i = 0; i < count; i++) {
      
      const productName  = {
        id:i,
        name:faker.commerce.productName()
      }
      
      productNameList.push(productName)
    }

    return productNameList
  }

  useEffect(()=>{
    
    const generatedProduct = generateProduct(numberOfProduct)
    const generatedProductSuggestion = generateProductSuggestions(numberOfProduct)
    setProductSuggestion(generatedProductSuggestion)
    setProducts(generatedProduct)
  },[numberOfProduct])
 
  console.log('sujitmemane')
  console.log(products)
  console.log('sujitmemane')

  return (
    <div className="p-24 bg-red-400" >
      <div>
      {products?.map(product=> <Link to='/products' key={product.id} ><div ><img src={product.image} alt={product.name} /> <h1>{product.name}</h1></div> </Link> )}
      </div>
      <h1>Popular Suggestions</h1>
       {
        productSuggestions?.map(productName => <h1 key={productName.id}>{productName.name}</h1>)
       }
    </div>
  );
};

export default SuggestionBox;
