import React from 'react'

export default function DashboardPage() {
  return (
    <div className='w-8/12 mx-auto mt-12'>
      <div className='border border-gray-300 p-4 shadow-xl space-y-6'>

        <p className='text-3xl font-semibold text-center'>
          Create New Product
        </p>

        <div className='flex flex-col gap-1'>
          <label htmlFor="" className='text-lg font-semibold '>Product Name</label>
          <input type="text" placeholder='eg.Nice T-shirt' className='border border-gray-300 px-2 py-1 outline-none'/>
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="" className='text-lg font-semibold '>Product Category</label>
          <input type="text" placeholder='eg.T-shirt Category' className='border border-gray-300 px-2 py-1 outline-none'/>
        </div>


        <div className='flex flex-col gap-1'>
          <label htmlFor="" className='text-lg font-semibold '>Product price</label>
          <input type="number" placeholder='eg.1000$' className='border border-gray-300 px-2 py-1 outline-none'/>
        </div>


        <div className='flex flex-col gap-1'>
          <label htmlFor="" className='text-lg font-semibold '>Product Color</label>
          <input type="text" placeholder='eg.Red' className='border border-gray-300 px-2 py-1 outline-none'/>
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="" className='text-lg font-semibold '>Product Weight</label>
          <input type="text" placeholder='eg.10kg' className='border border-gray-300 px-2 py-1 outline-none'/>
        </div>


        <div className='flex flex-col gap-1'>
          <label htmlFor="" className='text-lg font-semibold '>Product Description</label>
          <input type="text" placeholder='eg.This is nice product' className='border border-gray-300 px-2 py-1 outline-none'/>
        </div>


        <div className='flex flex-col gap-1'>
          <label htmlFor="" className='text-lg font-semibold '>Product Image</label>
          <input type="file" placeholder='eg.Product Image' className='border border-gray-300 px-2 py-1 outline-none'/>
        </div>

      <div className='flex justify-end'>
      <button className='bg-orange-500 text-white px-8 py-2 hover:bg-orange-600 cursor-pointer duration-500'>
          Create Product
        </button> 
      </div>


      </div>
    </div>
  )
}
