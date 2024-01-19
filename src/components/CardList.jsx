import React from 'react';
import './Card.css'

const Card = ({ title, bio}) => (
  <div className="card p-4  mr-3 bg-white shadow-2xl hover:shadow-red-700">
   <a href="https://suryatenz.github.io/DrumsSound/"> <h2 className="text-xl font-semibol text-red-600">{title}</h2></a>
    <p className=" text-black">{bio}</p>
  </div>
);

const CardList = ({ dataList }) => (
  <div className="klo px-4">
    <br /><br /><br />
    <h1 className=' text-red-600 font-serif text-center text-5xl'>PROJECTS</h1>
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

