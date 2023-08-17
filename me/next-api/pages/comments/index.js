import { useState } from "react";

function CommentPage(){
    const [comments, setComments] = useState([])
    const [enterText, setEnterText] = useState('');

    const fetchComments = async () =>{
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }
    const sumitText = async () =>{
        const response = await fetch('/api/comments', {method: "POST", body: JSON.stringify({ enterText: enterText}), headers: { 'Content-Type': 'application/json'}})
        const data = await response.json()
        console.log(data)
    }
    const deleteComment = async (commentId) =>{
        const response = await fetch(`/api/comments/${commentId}`, {method: "DELETE"})
        const data = await response.json()
        console.log(data)
        fetchComments()
    }

    return (
        <>
            <input type='text' value={enterText} onChange={(e)=> setEnterText(e.target.value)} />

            <button onClick={ sumitText }>Sumit Text</button>
            <button onClick={ fetchComments }>Load Click</button>
            {
                comments.map((comment)=>{
                    return (
                        <div key={comment.id}>
                            {comment.id}. { comment.text}
                            <button onClick={()=> deleteComment(comment.id) }>Delete</button>
                        </div>
                    )
                })
            }
        </>
    )
}
export default CommentPage;