function ProductList({ products }){
    return (
        <>
            {
                products.map((product)=>{
                    return(
                        <div key={product.id}>
                            <h2>
                                { product.id }/ title - { product.title } and price - { product.price }
                            </h2>
                            <p>
                                { product.description }
                            </p>
                        </div>
                    )
                })
           }
        </>
    )
}
export default ProductList;

export async function getStaticProps(){
    console.log('Generating/Regenerating ProductList')
    const response = await fetch('http://localhost:4000/products');
    const data = await response.json();
    return{
        props: {
            products: data
        },
        revalidate: 10,
    }
}