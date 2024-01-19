import React from 'react'
import './Resu.css'

export default function Resume() {
  return (
    <>
      <h2 className="jhk text-center font-serif text-5xl px-1">
        SKILLS
      </h2>
      <br />
      <br />
      <br />
      <div className="jhk pl-20">
        <div className="jhk1 pl-12 py-8">
          <label className=" text-2xl pl-36 font-serif">
            Python:
          </label>
          <input type="range" name="hj" id="jk" min={10} max={100} value={70} className='  h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700' />
          <label className="text-2xl pl-40">C++:</label>
          <input type="range" name="kk" id="" min={10} max={100} value={70} className=' h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700' />
          <label className=" text-2xl pl-40">DBMS:</label>
          <input type="range" name="kk" id="" min={10} max={100} value={60} className=' h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700' />
        </div>
        <div className="jhk1 pl-12 py-8">
        <label className=" text-2xl pl-36 font-serif">
          HTML:
          </label>
          <input type="range" name="hj" id="" min={10} max={100} value={100} className='  h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700' />
          <label className="text-2xl pl-40 ">CSS:</label>
          <input type="range" name="kk" id="" min={10} max={100} value={70} className='  h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700' />
          <label className=" text-2xl pl-44">JavaScript:</label>
          <input type="range" name="kk" id="" min={10} max={100} value={89}  className='  h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'/>
        </div>
        <div className="jhkl pl-12 py-8">
        <label className=" text-2xl pl-36 font-serif">
          React.js:
          </label>
          <input type="range" name="hj" id="" min={10} max={100} value={50} className='  h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'/>
          <label className=" text-2xl pl-36">Boostrap:</label>
          <input type="range" name="kk" id="" min={10} max={100} value={89} className=' h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700' />
          <label className="text-2xl pl-32">Tailwind:</label>
          <input type="range" name="kk" id="" min={10} max={100} value={89} className=' h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer  dark:bg-gray-700 '/>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
