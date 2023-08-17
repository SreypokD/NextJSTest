import Link from "next/link";

function ProductList({productId = 100 }){
    return (
        <>
         <Link href="/" >
            Home
        </Link>
        <br></br>
        <Link href="/product/1" >
            Product 1
        </Link>
        <br></br>
        <Link href="/product/2" >
            Product 2
        </Link>
        <br></br>
        <Link href="/product/3" replace>
            Product 3
        </Link>
        <br></br>
        <Link href={`/product/${productId}`}>
            Product{productId}
        </Link>
        </>
    )
}
export default ProductList;