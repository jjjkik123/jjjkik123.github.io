import React, { useEffect, useState } from 'react';
import initGraph from './initGraph/init';
import CellDrawer from './components/nodeDrawer';
import { CellInfo } from './type';
import EventBus from '../util/eventBus';
import './index.less';

const Index = () => {
  const [cellInfo, setCellInfo] = useState<CellInfo>({
    visible: false,
    data: {},
  });
  useEffect(() => {
    const graph = initGraph();
    EventBus.addEventListener('config', setCellInfo);
  }, []);

  return (
    <div style={{ height: 500 }} id="container">
      <div id="stencil"></div>
      <div id="graph-container"></div>
      <div id="minimap" />
      <CellDrawer cellInfo={cellInfo} setCellInfo={setCellInfo} />
    </div>
  );
};

export default Index;
