import React from 'react'

interface Props {
    params : {
        id : number
        photoId : number
    }
}

function UserPhotoPage({ params : {id , photoId} } : Props) {
  return (
    <>
    <div>UserPhotoPage</div>
    <div>id : {id}</div>
    <div>photo id : {photoId}</div>
    </>
  )
}

export default UserPhotoPage