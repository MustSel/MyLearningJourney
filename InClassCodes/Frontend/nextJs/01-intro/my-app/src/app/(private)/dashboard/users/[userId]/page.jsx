import GoBack from '@/components/GoBack'
import React from 'react'

const UserDetail = ({params}) => {
    //?client comp için useParams hooku ile yapabiliriz.
    const {userId} = params
  return (
    <div>
        <h1 className='text-2xl text-center'>UserDetail</h1>
        <p>user - {userId}</p>
        <GoBack/>
    </div>
  )
}

export default UserDetail