function ArticleListByCategory({articles, category }){
    return(
        <>
            <h1>Showing news for category <i>{category}</i></h1>
            {
                articles.map(article=>{
                    return (
                        <div key={article.id}>
                            {article.id }/ title - { article.title } and Category | <strong>{ article.category }</strong>
                            <p>{article.description}</p>
                        </div>
                    )
                })
            }
        </>
    )
}
export default ArticleListByCategory;

export async function getServerSideProps(context) {
    const { params, req, res, query } = context;
    console.log(query)
    const { category } = params
    res.setHeader('Set-cookie', [category])
   const response = await fetch(`http://localhost:4000/news?category=${category}`)
   const data = await response.json();
   return {
    props: {
        articles:data,
        category,
    }
   }
}