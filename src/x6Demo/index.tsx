import React, { useEffect } from 'react';
import initGraph from './init';
const Index = () => {
  useEffect(() => {
    initGraph();
  }, []);

  return <div id="container" />;
};

export default Index;
