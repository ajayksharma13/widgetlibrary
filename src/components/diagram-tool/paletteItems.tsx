import {
  NodeModel,
  ConnectorModel,
  AnnotationConstraints,
  NativeModel,
} from "@syncfusion/ej2-react-diagrams";

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
  {
    id: "Document",
    shape: { type: "Flow", shape: "Document" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "PreDefinedProcess",
    shape: { type: "Flow", shape: "PreDefinedProcess" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "PaperTap",
    shape: { type: "Flow", shape: "PaperTap" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
  {
    id: "DirectData",
    shape: { type: "Flow", shape: "DirectData" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
  },
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

export var svgShapes: NodeModel[] = [
  {
    id: "node2",
    style: { fill: "none" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
    shape: {
      type: "Native",
      content:
        '<g xmlns="http://www.w3.org/2000/svg">	<g transform="translate(1 1)">		<g>			<path style="fill:#61443C;" d="M61.979,435.057c2.645-0.512,5.291-0.853,7.936-1.109c-2.01,1.33-4.472,1.791-6.827,1.28     C62.726,435.13,62.354,435.072,61.979,435.057z"/>			<path style="fill:#61443C;" d="M502.469,502.471h-25.6c0.163-30.757-20.173-57.861-49.749-66.304     c-5.784-1.581-11.753-2.385-17.749-2.389c-2.425-0.028-4.849,0.114-7.253,0.427c1.831-7.63,2.747-15.45,2.731-23.296     c0.377-47.729-34.52-88.418-81.749-95.317c4.274-0.545,8.577-0.83,12.885-0.853c25.285,0.211,49.448,10.466,67.167,28.504     c17.719,18.039,27.539,42.382,27.297,67.666c0.017,7.846-0.9,15.666-2.731,23.296c2.405-0.312,4.829-0.455,7.253-0.427     C472.572,434.123,502.783,464.869,502.469,502.471z"/>		</g>		<path style="fill:#8B685A;" d="M476.869,502.471H7.536c-0.191-32.558,22.574-60.747,54.443-67.413    c0.375,0.015,0.747,0.072,1.109,0.171c2.355,0.511,4.817,0.05,6.827-1.28c1.707-0.085,3.413-0.171,5.12-0.171    c4.59,0,9.166,0.486,13.653,1.451c2.324,0.559,4.775,0.147,6.787-1.141c2.013-1.288,3.414-3.341,3.879-5.685    c7.68-39.706,39.605-70.228,79.616-76.117c4.325-0.616,8.687-0.929,13.056-0.939c13.281-0.016,26.409,2.837,38.485,8.363    c3.917,1.823,7.708,3.904,11.349,6.229c2.039,1.304,4.527,1.705,6.872,1.106c2.345-0.598,4.337-2.142,5.502-4.264    c14.373-25.502,39.733-42.923,68.693-47.189h0.171c47.229,6.899,82.127,47.588,81.749,95.317c0.017,7.846-0.9,15.666-2.731,23.296    c2.405-0.312,4.829-0.455,7.253-0.427c5.996,0.005,11.965,0.808,17.749,2.389C456.696,444.61,477.033,471.713,476.869,502.471    L476.869,502.471z"/>		<path style="fill:#66993E;" d="M502.469,7.537c0,0-6.997,264.96-192.512,252.245c-20.217-1.549-40.166-5.59-59.392-12.032    c-1.365-0.341-2.731-0.853-4.096-1.28c0,0-0.597-2.219-1.451-6.144c-6.656-34.048-25.088-198.997,231.765-230.144    C485.061,9.159,493.595,8.22,502.469,7.537z"/>		<path style="fill:#9ACA5C;" d="M476.784,10.183c-1.28,26.197-16.213,238.165-166.827,249.6    c-20.217-1.549-40.166-5.59-59.392-12.032c-1.365-0.341-2.731-0.853-4.096-1.28c0,0-0.597-2.219-1.451-6.144    C238.363,206.279,219.931,41.329,476.784,10.183z"/>		<path style="fill:#66993E;" d="M206.192,246.727c-0.768,3.925-1.365,6.144-1.365,6.144c-1.365,0.427-2.731,0.939-4.096,1.28    c-21.505,7.427-44.293,10.417-66.987,8.789C21.104,252.103,8.816,94.236,7.621,71.452c-0.085-1.792-0.085-2.731-0.085-2.731    C222.747,86.129,211.653,216.689,206.192,246.727z"/>		<path style="fill:#9ACA5C;" d="M180.336,246.727c-0.768,3.925-1.365,6.144-1.365,6.144c-1.365,0.427-2.731,0.939-4.096,1.28    c-13.351,4.412-27.142,7.359-41.131,8.789C21.104,252.103,8.816,94.236,7.621,71.452    C195.952,96.881,185.541,217.969,180.336,246.727z"/>	</g>	<g>		<path d="M162.136,426.671c3.451-0.001,6.562-2.08,7.882-5.268s0.591-6.858-1.849-9.298l-8.533-8.533    c-3.341-3.281-8.701-3.256-12.012,0.054c-3.311,3.311-3.335,8.671-0.054,12.012l8.533,8.533    C157.701,425.773,159.872,426.673,162.136,426.671L162.136,426.671z"/>		<path d="M292.636,398.57c3.341,3.281,8.701,3.256,12.012-0.054c3.311-3.311,3.335-8.671,0.054-12.012l-8.533-8.533    c-3.341-3.281-8.701-3.256-12.012,0.054s-3.335,8.671-0.054,12.012L292.636,398.57z"/>		<path d="M296.169,454.771c-3.341-3.281-8.701-3.256-12.012,0.054c-3.311,3.311-3.335,8.671-0.054,12.012l8.533,8.533    c3.341,3.281,8.701,3.256,12.012-0.054c3.311-3.311,3.335-8.671,0.054-12.012L296.169,454.771z"/>		<path d="M386.503,475.37c3.341,3.281,8.701,3.256,12.012-0.054c3.311-3.311,3.335-8.671,0.054-12.012l-8.533-8.533    c-3.341-3.281-8.701-3.256-12.012,0.054c-3.311,3.311-3.335,8.671-0.054,12.012L386.503,475.37z"/>		<path d="M204.803,409.604c2.264,0.003,4.435-0.897,6.033-2.5l8.533-8.533c3.281-3.341,3.256-8.701-0.054-12.012    c-3.311-3.311-8.671-3.335-12.012-0.054l-8.533,8.533c-2.44,2.44-3.169,6.11-1.849,9.298    C198.241,407.524,201.352,409.603,204.803,409.604z"/>		<path d="M332.803,443.737c2.264,0.003,4.435-0.897,6.033-2.5l8.533-8.533c3.281-3.341,3.256-8.701-0.054-12.012    c-3.311-3.311-8.671-3.335-12.012-0.054l-8.533,8.533c-2.44,2.44-3.169,6.11-1.849,9.298    C326.241,441.658,329.352,443.737,332.803,443.737z"/>		<path d="M341.336,366.937c2.264,0.003,4.435-0.897,6.033-2.5l8.533-8.533c3.281-3.341,3.256-8.701-0.054-12.012    c-3.311-3.311-8.671-3.335-12.012-0.054l-8.533,8.533c-2.44,2.44-3.169,6.11-1.849,9.298    C334.774,364.858,337.885,366.937,341.336,366.937z"/>		<path d="M164.636,454.771l-8.533,8.533c-2.188,2.149-3.055,5.307-2.27,8.271c0.785,2.965,3.1,5.28,6.065,6.065    c2.965,0.785,6.122-0.082,8.271-2.27l8.533-8.533c3.281-3.341,3.256-8.701-0.054-12.012    C173.337,451.515,167.977,451.49,164.636,454.771L164.636,454.771z"/>		<path d="M232.903,429.171l-8.533,8.533c-2.188,2.149-3.055,5.307-2.27,8.271c0.785,2.965,3.1,5.28,6.065,6.065    c2.965,0.785,6.122-0.082,8.271-2.27l8.533-8.533c3.281-3.341,3.256-8.701-0.054-12.012    C241.604,425.915,236.243,425.89,232.903,429.171L232.903,429.171z"/>		<path d="M384.003,409.604c2.264,0.003,4.435-0.897,6.033-2.5l8.533-8.533c3.281-3.341,3.256-8.701-0.054-12.012    c-3.311-3.311-8.671-3.335-12.012-0.054l-8.533,8.533c-2.44,2.44-3.169,6.11-1.849,9.298    C377.441,407.524,380.552,409.603,384.003,409.604z"/>		<path d="M70.77,463.304l-8.533,8.533c-2.188,2.149-3.055,5.307-2.27,8.271s3.1,5.28,6.065,6.065    c2.965,0.785,6.122-0.082,8.271-2.27l8.533-8.533c3.281-3.341,3.256-8.701-0.054-12.012    C79.47,460.048,74.11,460.024,70.77,463.304L70.77,463.304z"/>		<path d="M121.97,446.238l-8.533,8.533c-2.188,2.149-3.055,5.307-2.27,8.271c0.785,2.965,3.1,5.28,6.065,6.065    c2.965,0.785,6.122-0.082,8.271-2.27l8.533-8.533c3.281-3.341,3.256-8.701-0.054-12.012    C130.67,442.981,125.31,442.957,121.97,446.238L121.97,446.238z"/>		<path d="M202.302,420.638c-1.6-1.601-3.77-2.5-6.033-2.5c-2.263,0-4.433,0.899-6.033,2.5l-8.533,8.533    c-2.178,2.151-3.037,5.304-2.251,8.262c0.786,2.958,3.097,5.269,6.055,6.055c2.958,0.786,6.111-0.073,8.262-2.251l8.533-8.533    c1.601-1.6,2.5-3.77,2.5-6.033C204.802,424.408,203.903,422.237,202.302,420.638L202.302,420.638z"/>		<path d="M210.836,463.304c-3.341-3.281-8.701-3.256-12.012,0.054c-3.311,3.311-3.335,8.671-0.054,12.012l8.533,8.533    c2.149,2.188,5.307,3.055,8.271,2.27c2.965-0.785,5.28-3.1,6.065-6.065c0.785-2.965-0.082-6.122-2.27-8.271L210.836,463.304z"/>		<path d="M343.836,454.771l-8.533,8.533c-2.188,2.149-3.055,5.307-2.27,8.271c0.785,2.965,3.1,5.28,6.065,6.065    c2.965,0.785,6.122-0.082,8.271-2.27l8.533-8.533c3.281-3.341,3.256-8.701-0.054-12.012    C352.537,451.515,347.177,451.49,343.836,454.771L343.836,454.771z"/>		<path d="M429.17,483.904c3.341,3.281,8.701,3.256,12.012-0.054s3.335-8.671,0.054-12.012l-8.533-8.533    c-3.341-3.281-8.701-3.256-12.012,0.054c-3.311,3.311-3.335,8.671-0.054,12.012L429.17,483.904z"/>		<path d="M341.336,401.071c2.264,0.003,4.435-0.897,6.033-2.5l8.533-8.533c3.281-3.341,3.256-8.701-0.054-12.012    s-8.671-3.335-12.012-0.054l-8.533,8.533c-2.44,2.441-3.169,6.11-1.849,9.298C334.774,398.991,337.885,401.07,341.336,401.071z"/>		<path d="M273.069,435.204c2.264,0.003,4.435-0.897,6.033-2.5l8.533-8.533c3.281-3.341,3.256-8.701-0.054-12.012    s-8.671-3.335-12.012-0.054l-8.533,8.533c-2.44,2.44-3.169,6.11-1.849,9.298C266.508,433.124,269.618,435.203,273.069,435.204z"/>		<path d="M253.318,258.138c22.738,7.382,46.448,11.338,70.351,11.737c31.602,0.543,62.581-8.828,88.583-26.796    c94.225-65.725,99.567-227.462,99.75-234.317c0.059-2.421-0.91-4.754-2.667-6.421c-1.751-1.679-4.141-2.52-6.558-2.308    C387.311,9.396,307.586,44.542,265.819,104.5c-28.443,42.151-38.198,94.184-26.956,143.776c-3.411,8.366-6.04,17.03-7.852,25.881    c-4.581-7.691-9.996-14.854-16.147-21.358c8.023-38.158,0.241-77.939-21.57-110.261C160.753,95.829,98.828,68.458,9.228,61.196    c-2.417-0.214-4.808,0.628-6.558,2.308c-1.757,1.667-2.726,4-2.667,6.421c0.142,5.321,4.292,130.929,77.717,182.142    c20.358,14.081,44.617,21.428,69.367,21.008c18.624-0.309,37.097-3.388,54.814-9.138c11.69,12.508,20.523,27.407,25.889,43.665    c0.149,15.133,2.158,30.19,5.982,44.832c-12.842-5.666-26.723-8.595-40.759-8.6c-49.449,0.497-91.788,35.567-101.483,84.058    c-5.094-1.093-10.29-1.641-15.5-1.638c-42.295,0.38-76.303,34.921-76.025,77.217c-0.001,2.263,0.898,4.434,2.499,6.035    c1.6,1.6,3.771,2.499,6.035,2.499h494.933c2.263,0.001,4.434-0.898,6.035-2.499c1.6-1.6,2.499-3.771,2.499-6.035    c0.249-41.103-31.914-75.112-72.967-77.154c0.65-4.78,0.975-9.598,0.975-14.421c0.914-45.674-28.469-86.455-72.083-100.045    c-43.615-13.59-90.962,3.282-116.154,41.391C242.252,322.17,242.793,288.884,253.318,258.138L253.318,258.138z M87.519,238.092    c-55.35-38.567-67.358-129.25-69.833-158.996c78.8,7.921,133.092,32.454,161.458,72.992    c15.333,22.503,22.859,49.414,21.423,76.606c-23.253-35.362-77.83-105.726-162.473-140.577c-2.82-1.165-6.048-0.736-8.466,1.125    s-3.658,4.873-3.252,7.897c0.406,3.024,2.395,5.602,5.218,6.761c89.261,36.751,144.772,117.776,161.392,144.874    C150.795,260.908,115.29,257.451,87.519,238.092z M279.969,114.046c37.6-53.788,109.708-86.113,214.408-96.138    c-2.65,35.375-17.158,159.05-91.892,211.175c-37.438,26.116-85.311,30.57-142.305,13.433    c19.284-32.09,92.484-142.574,212.405-191.954c2.819-1.161,4.805-3.738,5.209-6.76c0.404-3.022-0.835-6.031-3.25-7.892    c-2.415-1.861-5.64-2.292-8.459-1.131C351.388,82.01,279.465,179.805,252.231,222.711    C248.573,184.367,258.381,145.945,279.969,114.046L279.969,114.046z M262.694,368.017c15.097-26.883,43.468-43.587,74.3-43.746    c47.906,0.521,86.353,39.717,85.95,87.625c-0.001,7.188-0.857,14.351-2.55,21.337c-0.67,2.763,0.08,5.677,1.999,7.774    c1.919,2.097,4.757,3.1,7.568,2.676c1.994-0.272,4.005-0.393,6.017-0.362c29.59,0.283,54.467,22.284,58.367,51.617H17.661    c3.899-29.333,28.777-51.334,58.367-51.617c4-0.004,7.989,0.416,11.9,1.254c4.622,0.985,9.447,0.098,13.417-2.467    c3.858-2.519,6.531-6.493,7.408-11.017c7.793-40.473,43.043-69.838,84.258-70.192c16.045-0.002,31.757,4.582,45.283,13.212    c4.01,2.561,8.897,3.358,13.512,2.205C256.422,375.165,260.36,372.163,262.694,368.017L262.694,368.017z"/>	</g></g>',
    } as NativeModel,
  },
  {
    id: "syncfusion",
    style: { fill: "none" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
    shape: {
      type: "Native",
      content:
        '<g xmlns="http://www.w3.org/2000/svg">' +
        '<rect height="256" width="256" fill="#34353F"/>' +
        '<path id="path1" transform="rotate(0,128,128) translate(59,61.2230899333954) scale(4.3125,4.3125)  " fill="#FFFFFF" d="M18.88501,23.042998L26.804993,23.042998 26.804993,30.969001 18.88501,30.969001z M9.4360352,23.042998L17.358032,23.042998 17.358032,30.969001 9.4360352,30.969001z M0.014038086,23.042998L7.9360352,23.042998 7.9360352,30.969001 0.014038086,30.969001z M18.871033,13.609001L26.791016,13.609001 26.791016,21.535994 18.871033,21.535994z M9.4219971,13.609001L17.342041,13.609001 17.342041,21.535994 9.4219971,21.535994z M0,13.609001L7.9219971,13.609001 7.9219971,21.535994 0,21.535994z M9.4219971,4.1859968L17.342041,4.1859968 17.342041,12.113998 9.4219971,12.113998z M0,4.1859968L7.9219971,4.1859968 7.9219971,12.113998 0,12.113998z M25.846008,0L32,5.2310026 26.773987,11.382995 20.619019,6.155998z"/>' +
        "</g>",
    } as NativeModel,
  },
  {
    id: "network",
    style: { fill: "none" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
    shape: {
      type: "Native",
      content:
        '<g xmlns="http://www.w3.org/2000/svg">' +
        '<rect height="256" width="256" fill="#34353F"/>' +
        '<path id="path1" transform="rotate(0,128,128) translate(59.1078108549118,59) scale(4.3125,4.3125)  " fill="#FFFFFF" d="M12.12701,24.294998C12.75201,24.294998 13.258998,24.803009 13.258998,25.428009 13.258998,26.056 12.75201,26.563004 12.12701,26.563004 11.499019,26.563004 10.993007,26.056 10.993007,25.428009 10.993007,24.803009 11.499019,24.294998 12.12701,24.294998z M7.9750035,24.294998C8.6010101,24.294998 9.1090057,24.803009 9.1090057,25.428009 9.1090057,26.056 8.6010101,26.563004 7.9750035,26.563004 7.3480199,26.563004 6.8399942,26.056 6.8399942,25.428009 6.8399942,24.803009 7.3480199,24.294998 7.9750035,24.294998z M7.9750035,20.286011C8.6010101,20.286011 9.1090057,20.792999 9.1090057,21.419006 9.1090057,22.044006 8.6010101,22.552002 7.9750035,22.552002 7.3500035,22.552002 6.8420084,22.044006 6.8420084,21.419006 6.8420084,20.792999 7.3500035,20.286011 7.9750035,20.286011z M18.499994,19.317001C18.313013,19.317001,18.156,19.472,18.156,19.656006L18.156,27.01001C18.156,27.195007,18.313013,27.350006,18.499994,27.350006L29.521993,27.350006C29.707998,27.350006,29.865988,27.195007,29.865988,27.01001L29.865988,19.656006C29.865988,19.472,29.707998,19.317001,29.521993,19.317001z M17.243006,17.443008L30.778003,17.443008C31.425007,17.445007,31.947986,17.962006,31.950001,18.602997L31.950001,28.542007C31.947986,29.182999,31.425007,29.702011,30.778003,29.703003L25.654012,29.703003C25.511007,29.703003 25.399008,29.824997 25.413992,29.964996 25.430013,30.13501 25.452993,30.360001 25.477011,30.559998 25.506002,30.809998 25.727987,30.980011 25.976003,31.033997L27.756002,31.419006C27.907003,31.452011 28.015005,31.584 28.015005,31.738007 28.015005,31.883011 27.895986,32 27.74999,32L27.571005,32 20.450004,32 20.318016,32C20.171013,32 20.053001,31.883011 20.053001,31.738007 20.053001,31.585007 20.161003,31.452011 20.312004,31.419998L22.115989,31.033005C22.35601,30.98201 22.572014,30.815002 22.596,30.574005 22.616997,30.363007 22.636009,30.130997 22.648002,29.960007 22.658012,29.819 22.542015,29.70401 22.399986,29.70401L17.243006,29.703003C16.596002,29.702011,16.072992,29.182999,16.071008,28.542007L16.071008,18.602997C16.072992,17.962006,16.596002,17.445007,17.243006,17.443008z M7.9750035,16.133011C8.6020172,16.133011 9.1100128,16.641006 9.1100128,17.268005 9.1100128,17.893997 8.6020172,18.402008 7.9750035,18.402008 7.3489964,18.402008 6.8410013,17.893997 6.8410013,17.268005 6.8410013,16.641006 7.3489964,16.133011 7.9750035,16.133011z M24.027,13.762009C24.654014,13.762009 25.16201,14.270004 25.16201,14.895996 25.16201,15.522003 24.654014,16.029999 24.027,16.029999 23.400993,16.029999 22.892998,15.522003 22.892998,14.895996 22.892998,14.270004 23.400993,13.762009 24.027,13.762009z M24.027,9.6110077C24.653007,9.6110077 25.161003,10.119003 25.161003,10.74501 25.161003,11.37001 24.653007,11.878006 24.027,11.878006 23.402,11.878006 22.894005,11.37001 22.894005,10.74501 22.894005,10.119003 23.402,9.6110077 24.027,9.6110077z M24.027,5.6000061C24.654014,5.6000061 25.16201,6.1080017 25.16201,6.7350006 25.16201,7.3610077 24.654014,7.8690033 24.027,7.8690033 23.400993,7.8690033 22.892998,7.3610077 22.892998,6.7350006 22.892998,6.1080017 23.400993,5.6000061 24.027,5.6000061z M19.876001,5.6000061C20.503013,5.6000061 21.011009,6.1080017 21.011009,6.7350006 21.011009,7.3610077 20.503013,7.8690033 19.876001,7.8690033 19.249994,7.8690033 18.743006,7.3610077 18.743006,6.7350006 18.743006,6.1080017 19.249994,5.6000061 19.876001,5.6000061z M2.4290157,1.8740082C2.2420037,1.8740082,2.0850215,2.029007,2.0850215,2.2140045L2.0850215,9.5680084C2.0850215,9.753006,2.2420037,9.9069977,2.4290157,9.9069977L13.451014,9.9069977C13.637995,9.9069977,13.795008,9.753006,13.795008,9.5680084L13.795008,2.2140045C13.795008,2.029007,13.637995,1.8740082,13.451014,1.8740082z M1.1730042,0L14.706996,0C15.353999,0.0019989014,15.877009,0.51899719,15.878993,1.1600037L15.878993,11.100006C15.877009,11.740005,15.353999,12.26001,14.706996,12.26001L9.5830047,12.26001C9.4399994,12.26001 9.3290069,12.382004 9.3420074,12.52301 9.3600128,12.692001 9.3829925,12.917999 9.4060028,13.117004 9.4349945,13.367004 9.6570099,13.53801 9.9049957,13.591003L11.684994,13.975998C11.835994,14.009003 11.945003,14.141998 11.945003,14.294998 11.945003,14.440002 11.826015,14.557007 11.679012,14.557007L11.499996,14.557007 4.3789966,14.557007 4.2470081,14.557007C4.1000049,14.557007 3.9819935,14.440002 3.9819937,14.294998 3.9819935,14.141998 4.0899952,14.009003 4.2409961,13.977005L6.0450113,13.589996C6.2860086,13.539001 6.501005,13.373001 6.5249918,13.130997 6.5460184,12.921005 6.5650003,12.688004 6.5769937,12.516998 6.5870035,12.376999 6.4710062,12.262009 6.3290079,12.262009L1.1730042,12.26001C0.52499391,12.26001,0.0020143806,11.740005,0,11.100006L0,1.1600037C0.0020143806,0.51899719,0.52499391,0.0019989014,1.1730042,0z"/>' +
        "</g>",
    } as NativeModel,
  },
];

export var animatedShapes: NodeModel[] = [
  {
    id: "svg1",
    style: { fill: "none" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
    shape: {
      type: "Native",
      content:
        '<g viewBox="0 0 160 160" width="160" height="160"><circle cx="80" cy="80" r="50" /><g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)"><path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="#fff"><animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="1s" repeatCount="indefinite" /></path> </g> <path d="M 50,0 A 50,50 0 0,0 -50,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)" /></g>',
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
        '<g version="1.1" width="320" height="320" viewBox="0 0 320 320" fill="none" stroke="#000" stroke-linecap="round"     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">  <defs>    <path id="r1">      <animate id="p1" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite"/>      <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin"/>    </path>    <path id="r2">      <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+1s"/>      <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+1s"/>    </path>    <path id="r3">      <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+2s"/>      <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+2s"/>    </path>    <path id="r4">      <animate id="p1" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+3s"/>      <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+3s"/>    </path>    <path id="r5">      <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+4s"/>      <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+4s"/>    </path>    <path id="r6">      <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+5s"/>      <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+5s"/>    </path>  </defs>  <use xlink:href="#r1"/>  <use xlink:href="#r1" transform="rotate(60 160 160)"/>  <use xlink:href="#r1" transform="rotate(120 160 160)"/>  <use xlink:href="#r1" transform="rotate(180 160 160)"/>  <use xlink:href="#r1" transform="rotate(240 160 160)"/>  <use xlink:href="#r1" transform="rotate(300 160 160)"/>  <use xlink:href="#r2" transform="rotate(30 160 160)"/>  <use xlink:href="#r2" transform="rotate(90 160 160)"/>  <use xlink:href="#r2" transform="rotate(150 160 160)"/>  <use xlink:href="#r2" transform="rotate(210 160 160)"/>  <use xlink:href="#r2" transform="rotate(270 160 160)"/>  <use xlink:href="#r2" transform="rotate(330 160 160)"/>  <use xlink:href="#r3"/>  <use xlink:href="#r3" transform="rotate(60 160 160)"/>  <use xlink:href="#r3" transform="rotate(120 160 160)"/>  <use xlink:href="#r3" transform="rotate(180 160 160)"/>  <use xlink:href="#r3" transform="rotate(240 160 160)"/>  <use xlink:href="#r3" transform="rotate(300 160 160)"/>  <use xlink:href="#r4" transform="rotate(30 160 160)"/>  <use xlink:href="#r4" transform="rotate(90 160 160)"/>  <use xlink:href="#r4" transform="rotate(150 160 160)"/>  <use xlink:href="#r4" transform="rotate(210 160 160)"/>  <use xlink:href="#r4" transform="rotate(270 160 160)"/>  <use xlink:href="#r4" transform="rotate(330 160 160)"/>  <use xlink:href="#r5"/>  <use xlink:href="#r5" transform="rotate(60 160 160)"/>  <use xlink:href="#r5" transform="rotate(120 160 160)"/>  <use xlink:href="#r5" transform="rotate(180 160 160)"/>  <use xlink:href="#r5" transform="rotate(240 160 160)"/>  <use xlink:href="#r5" transform="rotate(300 160 160)"/>  <use xlink:href="#r6" transform="rotate(30 160 160)"/>  <use xlink:href="#r6" transform="rotate(90 160 160)"/>  <use xlink:href="#r6" transform="rotate(150 160 160)"/>  <use xlink:href="#r6" transform="rotate(210 160 160)"/>  <use xlink:href="#r6" transform="rotate(270 160 160)"/>  <use xlink:href="#r6" transform="rotate(330 160 160)"/></g>',
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
