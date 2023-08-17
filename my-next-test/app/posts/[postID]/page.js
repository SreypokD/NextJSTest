import React from 'react'
// catch id ==============================||
const page = ({params}) => {

  return (
    <div>
      post of :  {params.postID}
    </div>
  )
}

export default page

