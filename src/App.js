import './App.css';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ArtistList from './pages/ArtistList';
import SingleArtist from './components/SingleArtist';
import Error from './pages/Error';
import { ChakraProvider } from "@chakra-ui/react";
import ArtistDetail from './components/ArtistDetail';
import Deatils from './pages/Details';

function App() {
  return (
    <ChakraProvider>
      <Fragment>
    <Navbar />
    <Routes>
      <Route path="/" element={<ArtistList />} />
      {/* <Route path="/artist/:artist_url" element={<Deatils />} /> */}
      <Route path="/artist/:id" element={<Deatils />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </Fragment>
    </ChakraProvider>
  );
}

export default App;
