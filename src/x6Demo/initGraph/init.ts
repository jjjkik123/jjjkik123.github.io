import { Graph, Shape, Addon } from '@antv/x6';
import createNode from './createNode';
import initEvents from './initEvent';
import initStencil from './initStencil';

const initGraph = () => {
  const graph = new Graph({
    container: document.getElementById('graph-container')!,

    grid: true,
    mousewheel: {
      enabled: true,
      zoomAtMousePosition: true,
      modifiers: 'ctrl',
      minScale: 0.5,
      maxScale: 3,
    },
    connecting: {
      router: {
        name: 'manhattan',
        args: {
          padding: 1,
        },
      },
      connector: {
        name: 'rounded',
        args: {
          radius: 8,
        },
      },
      anchor: 'center',
      connectionPoint: 'anchor',
      allowBlank: false,
      snap: {
        radius: 20,
      },
      createEdge() {
        return new Shape.Edge({
          attrs: {
            line: {
              stroke: '#A2B1C3',
              strokeWidth: 2,
              targetMarker: {
                name: 'block',
                width: 12,
                height: 8,
              },
            },
          },
          zIndex: 0,
        });
      },
      validateConnection({ targetMagnet }) {
        return !!targetMagnet;
      },
    },
    minimap: {
      enabled: true,
      container: document.getElementById('minimap')!,
      scalable: false,
      graphOptions: {
        async: true,
        connecting: {
          router: 'manhattan',
          connector: {
            name: 'rounded',
            args: {
              radius: 8,
            },
          },
        },
      },
    },
    highlighting: {
      magnetAdsorbed: {
        name: 'stroke',
        args: {
          attrs: {
            fill: '#5F95FF',
            stroke: '#5F95FF',
          },
        },
      },
    },
    resizing: true,
    rotating: true,
    selecting: {
      enabled: true,
      rubberband: true,
      showNodeSelectionBox: true,
    },
    snapline: true,
    keyboard: true,
    clipboard: true,
  });
  initEvents(graph);
  const stencil = initStencil(graph);
  document.getElementById('stencil')!.appendChild(stencil.container);
  const { group1, group2 } = createNode(graph);
  stencil.load(group1, 'group1');
  stencil.load(group2, 'group2');
  return graph;
};

export default initGraph;
