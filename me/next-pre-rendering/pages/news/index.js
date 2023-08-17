function ArticleList({ articles }){
    return (
        <>
            <h1>List of new Articles!</h1>
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
export default ArticleList;

export async function getStaticProps(){
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()
    return{
        props:{
            articles: data
        }
    }
}