// nested dynamic routing 
import { useRouter } from "next/router"

function ViewBook(){
    const router = useRouter();
    const {viewbookID, bookID} = router.query
    return (
        <h1>
            Book view on {viewbookID} and book id is {bookID}
        </h1>
    )
}
export default ViewBook