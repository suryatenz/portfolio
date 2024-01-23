import React from 'react';
import './Card.css'

const Card = ({ title, bio ,repo,frame}) => (
  <div className="card p-3 mr-3 bg-white">
    <h2 className=" flex justify-center text-xl font-semibol text-blue-950 py-2 my-1 font-bold">{title}</h2>
    <p className=" text-black px-1.5 font-semibold ">{bio}</p>
    <p className='text-black text-md px-2 py-3 font-semibold'>Tech Used : {frame}</p>
    <a href={repo} className='flex justify-center'><button className='flex outline-none bg-blue-700 text-white px-3 py-0.5 rounded-full'>Click here</button></a>
  </div>
);

const CardList = ({ dataList }) => (
  <div className="klo px-4" id='fi'>
    <br /><br /><br />
    <h1 className=' text-white font-serif text-center text-5xl'>PROJECTS</h1>
    <br /><br /><br />
  <div className="container justify-center items-center gap-4">
    <div className="flex flex-row">
      {dataList.map(items => (
        <Card key={items.title} {...items} />
      ))}
    </div>
  </div>
  <br /><br /><br />
  </div>
);

export default CardList;

