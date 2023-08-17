import Link from "next/link";

function PostList({posts}) {
    return ( 
        <>
            <he>List of Posts</he>
            {
                posts.map((post)=>{
                    return (
                        <div key={post.id} style={{borderBottom: '1px solid black'}}>
                            <Link href={`posts/${post.id}`}>
                                <h1>{post.id}. {post.title}</h1>
                                <p>{post.body}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    );
}

export default PostList;

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {
        props: {
            posts: data
        }
    }
}