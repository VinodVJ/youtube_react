import React from 'react'

const Search = () => {
  return (
    <div className='w-full m-4 text-left'>
        <input placeholder='Type to get suggestions' className='w-6/12 border border-black p-2 rounded-l-full' type="text" />
        <button className='bg-gray-200 p-2 border border-black rounded-r-full'>Search</button>
    </div>
  )
}

export default Search