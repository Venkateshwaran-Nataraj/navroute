
import React, { useState, useEffect } from 'react';
import ListForm from './ListForm';
import './App.css';

function List () {
  const [List, setList] = useState([]);

  const addList = (List) => {
    setList([...List, List]);
  };

  useEffect(() => {
    console.log('List updated:', List);
  }, [List]);

  return (
    <div className="App">
      <h1>List </h1>
      <ListForm addList={addList} />
      <ul>
        {List.map((List, index) => (
          <li key={index}>{List}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
