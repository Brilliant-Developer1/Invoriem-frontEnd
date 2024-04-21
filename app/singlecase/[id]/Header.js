import React from 'react'

const Header = ({singleCase}) => {
    const {name} = singleCase;
  return (
    <header className=' mt-10'>
      <div className='p-5 sm:p-2'>
        <h1 className="text-teal mb-3 text-4xl sm:text-5xl font-bold ">{name}</h1>
      <p className="mb-5 text-gray-600">Augue eget nisi, turpis vel nibh urna, ut quam odio libero.</p>
      </div>
    </header>
  )
}

export default Header