import Image from "next/image";


const getPostsData = async () =>{
    const res = await fetch("http://jsonplaceholder.typicode.com/users");
    return res.json();
}

//get dog api 

const getDogData  = async () =>{
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {cache: "no-store"});
  return res.json();
}

const ListOfPost = async () =>{
  const [posts , dogs] = await Promise.all ([getPostsData() , getDogData()]);
  return (
    <div>
      {posts.map((post)=>{
        return (
          <>
          {/* <p>{post.id}</p> */}
          <p>{post.name}</p>
          </>
        )
      })}
      <Image src={dogs.message} width={300} height={300}/>

    </div>
  )
}

export default ListOfPost
