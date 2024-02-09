import React, { useEffect, useState } from 'react';
import Context from './Context';


const ContextProvider = (props) => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [type, setType] = useState();
  const [noOfSeats, setNoOfSeats] = useState(); 
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const [alreadyBooked, setAlreadyBooked] = useState(new Map());
  const [full, setFull] = useState(false);

  useEffect(() => {
    const storedAlreadyBooked = localStorage.getItem('alreadyBooked');
    if (storedAlreadyBooked) {
      setAlreadyBooked(new Map(JSON.parse(storedAlreadyBooked)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('alreadyBooked', JSON.stringify(Array.from(alreadyBooked)));
  }, [alreadyBooked]);

  const movies = [
    {
      "title": "Laal Salam",
      "image_url": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NDIuOEsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00359069-pgbblujnce-portrait.jpg"
    },
    {
      "title": "Eagle",
      "image_url": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICAxMi44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00361924-upplmandsj-portrait.jpg"
    },
    {
      "title": "Lover",
      "image_url": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTYuNksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00385185-nshxaznahe-portrait.jpg"
    },
    {
        "title":"Hanu-Man",
        "image_url":"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICA0MTcuOEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00311673-bcmpxxhayj-portrait.jpg"
    }
  ];

  const buyHandler = () => {
    if (!selectedMovie || !type || !noOfSeats) {
      return;
    }

    if (!alreadyBooked.has(selectedMovie)) {
      alreadyBooked.set(selectedMovie, []);
    }

    const bookedSeats = alreadyBooked.get(selectedMovie);
    selectedSeats.forEach(seat => {
      bookedSeats.push(seat);
    });
    setAlreadyBooked(new Map(alreadyBooked)); 
    setSelectedSeats(new Set()); 
    setFull(false); 
    setNoOfSeats(); 
//setSelectedMovie(); 
    setType();
  };

  const obj = {
    movies,
    selectedMovie,
    setSelectedMovie,
    type,
    setType,
    noOfSeats,
    setNoOfSeats,
    selectedSeats,
    setSelectedSeats,
    full, 
    setFull,
    buyHandler,
    alreadyBooked,
  };

  return (
    <Context.Provider value={obj}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
