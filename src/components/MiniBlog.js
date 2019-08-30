import React from 'react';
import MiniBlogCreate from './MiniBlogCreate';
import MiniBlogList from './MiniBlogList';



const MiniBlog = () => {

  return (
    <div className="MiniBlog container">
      <MiniBlogCreate />
      <MiniBlogList />
    </div>
  ) 

};


export default MiniBlog;