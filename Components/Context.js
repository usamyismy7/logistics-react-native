import React, { createContext, useState } from 'react';

export const UserDataContext = createContext({
  tracks: [],
  addNewTrack: () => { },
  removeTrack: () => { }
});

export default function ContextProvider({ children }) {
  const [track, setTrack] = useState([
		{ 
      display: require('../assets/images/track/a.png'),
      id: 12101,
      address: "Wah, Punjab",
      reach_time: "04:00-09-01-2020",
    },
    { 
      display: require('../assets/images/track/b.png'),
      id: 12102,
      address: "Karachi, Sindh",
      reach_time: "07:00-20-01-2020",
    },
    { 
      display: require('../assets/images/track/a.png'),
      id: 12103,
      address: "Skardu, Gilgit",
      reach_time: "02:00-12-01-2020",
    },
    { 
      display: require('../assets/images/track/c.png'),
      id: 12104,
      address: "Peshawar, KPK",
      reach_time: "09:00-06-01-2020",
    },
    {
      display: require('../assets/images/track/b.png'),
      id: 12105,
      address: "Quetta, Balochistan",
      reach_time: "11:00-25-01-2020",
    },
  ])
  function addNewTrack(obj) {
    track.push(obj);
  }
  function removeTrack(id) {
    track.splice(id, 1);
  }
  const values = {
    tracks: track,
    addNewTrack: addNewTrack,
    removeTrack: removeTrack,
  }
  return (
    <UserDataContext.Provider value={values}>
      {children}
    </UserDataContext.Provider>
  )
}