import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/homepage';
import About from './pages/about';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from "@emotion/react"
import { extendTheme } from "@chakra-ui/react"
import Create from './pages/create';



const theme = extendTheme({
  fonts: {
    heading: "Open Sans, sans-serif",
    body: "Open Sans, sans-serif",
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/event" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </ChakraProvider>
  );
}

export default App;
