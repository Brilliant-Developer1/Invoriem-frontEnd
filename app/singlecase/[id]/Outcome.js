import React from 'react'

const Outcome = ({singleCase}) => {
    const {outcomeText} = singleCase;
  return (
    <section className='mt-20 px-5 '>
      <div className="  flex flex-col md:flex-row  justify-around ">
      <h1 className="text-3xl font-extrabold grow">Outcome</h1>
      <div className="max-w-[30rem] lg:max-w-[42rem] mt-4 md:mt-0 text-gray-500 leading-loose pr-0 xl:pr-20">
        <p>
          {outcomeText}
        </p>
      </div>
    </div>
    </section>
  )
}

export default Outcome