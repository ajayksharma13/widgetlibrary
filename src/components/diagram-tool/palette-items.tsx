import {
  NodeModel,
  ConnectorModel,
  AnnotationConstraints,
  NativeModel,
} from "@syncfusion/ej2-react-diagrams";
import Pipe from "./pipe.json";
import Valves from "./pipe-valves.json";
export var flowShapes: NodeModel[] = [
  {
    id: "Terminator",
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Process",
    shape: { type: "Flow", shape: "Process" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Sort",
    shape: { type: "Flow", shape: "Sort" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  // {
  //   id: "Document",
  //   shape: { type: "Flow", shape: "Document" },
  //   annotations: [
  //     { content: "", constraints: AnnotationConstraints.Interaction },
  //   ],
  // },
  // {
  //   id: "PreDefinedProcess",
  //   shape: { type: "Flow", shape: "PreDefinedProcess" },
  //   annotations: [
  //     { content: "", constraints: AnnotationConstraints.Interaction },
  //   ],
  // },
  // {
  //   id: "PaperTap",
  //   shape: { type: "Flow", shape: "PaperTap" },
  //   annotations: [
  //     { content: "", constraints: AnnotationConstraints.Interaction },
  //   ],
  // },
  // {
  //   id: "DirectData",
  //   shape: { type: "Flow", shape: "DirectData" },
  //   annotations: [
  //     { content: "", constraints: AnnotationConstraints.Interaction },
  //   ],
  // },
  {
    id: "SequentialData",
    shape: { type: "Flow", shape: "SequentialData" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Sort",
    shape: { type: "Flow", shape: "Sort" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "MultiDocument",
    shape: { type: "Flow", shape: "MultiDocument" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Collate",
    shape: { type: "Flow", shape: "Collate" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "SummingJunction",
    shape: { type: "Flow", shape: "SummingJunction" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  { id: "Or", shape: { type: "Flow", shape: "Or" } },
  {
    id: "InternalStorage",
    shape: { type: "Flow", shape: "InternalStorage" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  { id: "Extract", shape: { type: "Flow", shape: "Extract" } },
  {
    id: "ManualOperation",
    shape: { type: "Flow", shape: "ManualOperation" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Merge",
    shape: { type: "Flow", shape: "Merge" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "OffPageReference",
    shape: { type: "Flow", shape: "OffPageReference" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "SequentialAccessStorage",
    shape: { type: "Flow", shape: "SequentialAccessStorage" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Annotation",
    shape: { type: "Flow", shape: "Annotation" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Annotation2",
    shape: { type: "Flow", shape: "Annotation2" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "data",
    shape: { type: "Flow", shape: "Data" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Card",
    shape: { type: "Flow", shape: "Card" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Delay",
    shape: { type: "Flow", shape: "Delay" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
];

export var basicShapes: NodeModel[] = [
  {
    id: "Rectangle",
    shape: { type: "Basic", shape: "Rectangle" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Ellipse",
    shape: { type: "Basic", shape: "Ellipse" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Hexagon",
    shape: { type: "Basic", shape: "Hexagon" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Parallelogram",
    shape: { type: "Basic", shape: "Parallelogram" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Triangle",
    shape: { type: "Basic", shape: "Triangle" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Plus",
    shape: { type: "Basic", shape: "Plus" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Star",
    shape: { type: "Basic", shape: "Star" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Pentagon",
    shape: { type: "Basic", shape: "Pentagon" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Heptagon",
    shape: { type: "Basic", shape: "Heptagon" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Octagon",
    shape: { type: "Basic", shape: "Octagon" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Trapezoid",
    shape: { type: "Basic", shape: "Trapezoid" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Decagon",
    shape: { type: "Basic", shape: "Decagon" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "RightTriangle",
    shape: { type: "Basic", shape: "RightTriangle" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Cylinder",
    shape: { type: "Basic", shape: "Cylinder" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Diamond",
    shape: { type: "Basic", shape: "Diamond" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
];
export var svgShapes: NodeModel[] = Pipe.svgShapes.map((item) => ({
  id: item.id,
  style: { fill: "none" },
  annotations: [
    { content: "", constraints: AnnotationConstraints.Interaction },
  ],
  shape: {
    type: "Native",
    content: item.content
  } as NativeModel,
}

));

export var pipesSvg: NodeModel[] = Pipe.pipes.map((item) => (
  {
    id: item.id,
    width: 100,
    style: { fill: "none" },
    addInfo: [{ text: 'Close Open Tasks2' }],
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
    shape: {
      type: "Native",
      content: item.content
    } as NativeModel,
  }

));
export var valvesSvg: NodeModel[] = Valves.Valves.map((item) => (
  {
    id: item.id,
    style: { fill: "none" },
    addInfo: [{ text: 'Close Open Tasks2' }],
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
    shape: {
      type: "Native",
      content: item.content
    } as NativeModel,
  }

));






export var animatedShapes: NodeModel[] = [
  {
    id: "svg1",
    style: { fill: "none" },
    annotations: [
      { content: "revolver", constraints: AnnotationConstraints.Interaction },
    ],
    shape: {
      type: "Native",
      content:
        '<svg viewBox="0 0 160 160" width="160" height="160"><circle cx="80" cy="80" r="50" /><g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)"><path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="#fff"><animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="1s" repeatCount="indefinite" /></path> </g> <path d="M 50,0 A 50,50 0 0,0 -50,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)" /></svg>',
    } as NativeModel,
  },
  {
    id: "svg2",
    style: { fill: "none" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
    shape: {
      type: "Native",
      content:
        '<svg version="1.1" width="320" height="320" viewBox="0 0 320 320" fill="none" stroke="#000" stroke-linecap="round"     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">  <defs>    <path id="r1">      <animate id="p1" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite"/>      <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin"/>    </path>    <path id="r2">      <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+1s"/>      <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+1s"/>    </path>    <path id="r3">      <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+2s"/>      <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+2s"/>    </path>    <path id="r4">      <animate id="p1" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+3s"/>      <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+3s"/>    </path>    <path id="r5">      <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+4s"/>      <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+4s"/>    </path>    <path id="r6">      <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+5s"/>      <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+5s"/>    </path>  </defs>  <use xlink:href="#r1"/>  <use xlink:href="#r1" transform="rotate(60 160 160)"/>  <use xlink:href="#r1" transform="rotate(120 160 160)"/>  <use xlink:href="#r1" transform="rotate(180 160 160)"/>  <use xlink:href="#r1" transform="rotate(240 160 160)"/>  <use xlink:href="#r1" transform="rotate(300 160 160)"/>  <use xlink:href="#r2" transform="rotate(30 160 160)"/>  <use xlink:href="#r2" transform="rotate(90 160 160)"/>  <use xlink:href="#r2" transform="rotate(150 160 160)"/>  <use xlink:href="#r2" transform="rotate(210 160 160)"/>  <use xlink:href="#r2" transform="rotate(270 160 160)"/>  <use xlink:href="#r2" transform="rotate(330 160 160)"/>  <use xlink:href="#r3"/>  <use xlink:href="#r3" transform="rotate(60 160 160)"/>  <use xlink:href="#r3" transform="rotate(120 160 160)"/>  <use xlink:href="#r3" transform="rotate(180 160 160)"/>  <use xlink:href="#r3" transform="rotate(240 160 160)"/>  <use xlink:href="#r3" transform="rotate(300 160 160)"/>  <use xlink:href="#r4" transform="rotate(30 160 160)"/>  <use xlink:href="#r4" transform="rotate(90 160 160)"/>  <use xlink:href="#r4" transform="rotate(150 160 160)"/>  <use xlink:href="#r4" transform="rotate(210 160 160)"/>  <use xlink:href="#r4" transform="rotate(270 160 160)"/>  <use xlink:href="#r4" transform="rotate(330 160 160)"/>  <use xlink:href="#r5"/>  <use xlink:href="#r5" transform="rotate(60 160 160)"/>  <use xlink:href="#r5" transform="rotate(120 160 160)"/>  <use xlink:href="#r5" transform="rotate(180 160 160)"/>  <use xlink:href="#r5" transform="rotate(240 160 160)"/>  <use xlink:href="#r5" transform="rotate(300 160 160)"/>  <use xlink:href="#r6" transform="rotate(30 160 160)"/>  <use xlink:href="#r6" transform="rotate(90 160 160)"/>  <use xlink:href="#r6" transform="rotate(150 160 160)"/>  <use xlink:href="#r6" transform="rotate(210 160 160)"/>  <use xlink:href="#r6" transform="rotate(270 160 160)"/>  <use xlink:href="#r6" transform="rotate(330 160 160)"/></svg>',
    } as NativeModel,
  },

];

export var connectorShapes: ConnectorModel[] = [
  {
    id: "Link1",
    type: "Orthogonal",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
    cornerRadius: 5,
    targetDecorator: {
      shape: "Arrow",
      style: { strokeColor: "#000000", fill: "#000000" },
    },
    style: {
      strokeColor: "black",
      strokeDashArray: "8",
      strokeWidth: 3,
    },
  },
  {
    id: "link3",
    type: "Orthogonal",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    cornerRadius: 5,
    style: { strokeWidth: 5, strokeColor: "#A9A9A9", opacity: 0.5 },
    targetDecorator: { shape: "None" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "Link21",
    type: "Straight",
    sourcePoint: { x: 0, y: 0 },
    cornerRadius: 5,
    targetPoint: { x: 40, y: 40 },
    targetDecorator: {
      shape: "Arrow",
      style: { strokeColor: "#757575", fill: "#757575" },
    },
    style: { strokeWidth: 2, strokeColor: "#757575" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "link23",
    type: "Straight",
    sourcePoint: { x: 0, y: 0 },
    cornerRadius: 5,
    targetPoint: { x: 40, y: 40 },
    style: { strokeWidth: 2, strokeColor: "#757575" },
    targetDecorator: { shape: "None" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "link33",
    type: "Bezier",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    cornerRadius: 5,
    style: { strokeWidth: 2, strokeColor: "#757575" },
    targetDecorator: { shape: "None" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
];
