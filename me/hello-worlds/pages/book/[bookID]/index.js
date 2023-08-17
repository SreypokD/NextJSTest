
// dynamic routing 

import { useRouter } from "next/router"

function BookDetail(){
    const router = useRouter()
    const bookID = router.query.bookID
    return <h1>hello detial of {bookID}</h1>
}
export default BookDetail