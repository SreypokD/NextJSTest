import Link from 'next/link';
function Home(){
  return (
    <div>
      <h1>Next JS pre-rendering!</h1>
      <div>
        <Link href='/posts'>Posts</Link>
      </div>
      <div>
        <Link href='/products'>Products</Link>
      </div>
    </div>
  )
}
export default Home;