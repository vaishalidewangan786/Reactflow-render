// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Flow from './coponents/Flow';
function App() {
  return (
    <Router>
    <Routes>
    <Route path='/home' element={<Flow/>} />
    </Routes>
    </Router>
  );
}

export default App;
