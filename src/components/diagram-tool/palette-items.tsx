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
      content: '<g id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.71 122.88"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>water-tank</title><path class="cls-1" d="M52.84,39.72c1.8,7.69,8.89,13.28,8.89,17.82,0,11.55-17.76,11.55-17.76,0,0-4.56,7.09-10.1,8.87-17.82Zm48.42-3.16H93.82V79.37a7.38,7.38,0,0,1-2.18,5.22h0A7.33,7.33,0,0,1,89.68,86v36.88H83v-1.3L52.82,106.14,22.7,121.52v1.36H16V86a7.43,7.43,0,0,1-4.13-6.64V36.56H4.44a4.43,4.43,0,0,1-2.31-8.22L47.26.64h0A4.43,4.43,0,0,1,51.66.52L103,28a4.44,4.44,0,0,1-1.73,8.54ZM75.17,86.78H30.51L52.82,98.2,75.17,86.78ZM60.58,102.17,83,113.64V90.72h0L60.58,102.17Zm-15.53,0L22.72,90.73h0v22.86l22.35-11.42ZM18.57,64.75A53.22,53.22,0,0,0,41,64.24a12.75,12.75,0,0,0,6.54,5.59,14.74,14.74,0,0,0,5.33,1v0a14.53,14.53,0,0,0,5.33-1,12.58,12.58,0,0,0,8.17-12.28c0-.31,0-.62,0-.92,7.12-1.57,13.85-1.34,20.82,3.73V36.56H18.57V64.75Zm28.87-8.51a.9.9,0,0,1,1.79-.16,8.62,8.62,0,0,0,.87,3.25,5.81,5.81,0,0,0,2.25,2.32.9.9,0,0,1-.91,1.55,7.39,7.39,0,0,1-2.93-3,10.32,10.32,0,0,1-1.07-3.93Z"/></g>'
    } as NativeModel,
  },
  {
    id: "tank-2",
    style: { fill: "none" },
    annotations: [
      { content: "", constraints: AnnotationConstraints.Interaction },
    ],
    shape: {
      type: "Native",
      content: '<g width="139" height="115" viewBox="0 0 139 115" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="139" height="115" fill="white"/><rect x="26" y="16" width="87" height="9" rx="4.5" fill="#505052"/><rect x="31" y="18" width="78" height="78" rx="11" fill="#1AA5E0" stroke="#505052" stroke-width="4"/><rect x="37" y="9" width="7" height="7" fill="#505052"/><rect id="level-3" x="32" y="22" width="76" height="19" fill="#4F5052" stroke="#4F5052" stroke-width="4"/></g>'

    } as NativeModel,
  },
  // {
  //   id: "network",
  //   style: { fill: "none" },
  //   annotations: [
  //     { content: "", constraints: AnnotationConstraints.Interaction },
  //   ],
  //   shape: {
  //     type: "Native",
  //     content:
  //       '<g xmlns="http://www.w3.org/2000/svg">' +
  //       '<rect height="256" width="256" fill="#34353F"/>' +
  //       '<path id="path1" transform="rotate(0,128,128) translate(59.1078108549118,59) scale(4.3125,4.3125)  " fill="#FFFFFF" d="M12.12701,24.294998C12.75201,24.294998 13.258998,24.803009 13.258998,25.428009 13.258998,26.056 12.75201,26.563004 12.12701,26.563004 11.499019,26.563004 10.993007,26.056 10.993007,25.428009 10.993007,24.803009 11.499019,24.294998 12.12701,24.294998z M7.9750035,24.294998C8.6010101,24.294998 9.1090057,24.803009 9.1090057,25.428009 9.1090057,26.056 8.6010101,26.563004 7.9750035,26.563004 7.3480199,26.563004 6.8399942,26.056 6.8399942,25.428009 6.8399942,24.803009 7.3480199,24.294998 7.9750035,24.294998z M7.9750035,20.286011C8.6010101,20.286011 9.1090057,20.792999 9.1090057,21.419006 9.1090057,22.044006 8.6010101,22.552002 7.9750035,22.552002 7.3500035,22.552002 6.8420084,22.044006 6.8420084,21.419006 6.8420084,20.792999 7.3500035,20.286011 7.9750035,20.286011z M18.499994,19.317001C18.313013,19.317001,18.156,19.472,18.156,19.656006L18.156,27.01001C18.156,27.195007,18.313013,27.350006,18.499994,27.350006L29.521993,27.350006C29.707998,27.350006,29.865988,27.195007,29.865988,27.01001L29.865988,19.656006C29.865988,19.472,29.707998,19.317001,29.521993,19.317001z M17.243006,17.443008L30.778003,17.443008C31.425007,17.445007,31.947986,17.962006,31.950001,18.602997L31.950001,28.542007C31.947986,29.182999,31.425007,29.702011,30.778003,29.703003L25.654012,29.703003C25.511007,29.703003 25.399008,29.824997 25.413992,29.964996 25.430013,30.13501 25.452993,30.360001 25.477011,30.559998 25.506002,30.809998 25.727987,30.980011 25.976003,31.033997L27.756002,31.419006C27.907003,31.452011 28.015005,31.584 28.015005,31.738007 28.015005,31.883011 27.895986,32 27.74999,32L27.571005,32 20.450004,32 20.318016,32C20.171013,32 20.053001,31.883011 20.053001,31.738007 20.053001,31.585007 20.161003,31.452011 20.312004,31.419998L22.115989,31.033005C22.35601,30.98201 22.572014,30.815002 22.596,30.574005 22.616997,30.363007 22.636009,30.130997 22.648002,29.960007 22.658012,29.819 22.542015,29.70401 22.399986,29.70401L17.243006,29.703003C16.596002,29.702011,16.072992,29.182999,16.071008,28.542007L16.071008,18.602997C16.072992,17.962006,16.596002,17.445007,17.243006,17.443008z M7.9750035,16.133011C8.6020172,16.133011 9.1100128,16.641006 9.1100128,17.268005 9.1100128,17.893997 8.6020172,18.402008 7.9750035,18.402008 7.3489964,18.402008 6.8410013,17.893997 6.8410013,17.268005 6.8410013,16.641006 7.3489964,16.133011 7.9750035,16.133011z M24.027,13.762009C24.654014,13.762009 25.16201,14.270004 25.16201,14.895996 25.16201,15.522003 24.654014,16.029999 24.027,16.029999 23.400993,16.029999 22.892998,15.522003 22.892998,14.895996 22.892998,14.270004 23.400993,13.762009 24.027,13.762009z M24.027,9.6110077C24.653007,9.6110077 25.161003,10.119003 25.161003,10.74501 25.161003,11.37001 24.653007,11.878006 24.027,11.878006 23.402,11.878006 22.894005,11.37001 22.894005,10.74501 22.894005,10.119003 23.402,9.6110077 24.027,9.6110077z M24.027,5.6000061C24.654014,5.6000061 25.16201,6.1080017 25.16201,6.7350006 25.16201,7.3610077 24.654014,7.8690033 24.027,7.8690033 23.400993,7.8690033 22.892998,7.3610077 22.892998,6.7350006 22.892998,6.1080017 23.400993,5.6000061 24.027,5.6000061z M19.876001,5.6000061C20.503013,5.6000061 21.011009,6.1080017 21.011009,6.7350006 21.011009,7.3610077 20.503013,7.8690033 19.876001,7.8690033 19.249994,7.8690033 18.743006,7.3610077 18.743006,6.7350006 18.743006,6.1080017 19.249994,5.6000061 19.876001,5.6000061z M2.4290157,1.8740082C2.2420037,1.8740082,2.0850215,2.029007,2.0850215,2.2140045L2.0850215,9.5680084C2.0850215,9.753006,2.2420037,9.9069977,2.4290157,9.9069977L13.451014,9.9069977C13.637995,9.9069977,13.795008,9.753006,13.795008,9.5680084L13.795008,2.2140045C13.795008,2.029007,13.637995,1.8740082,13.451014,1.8740082z M1.1730042,0L14.706996,0C15.353999,0.0019989014,15.877009,0.51899719,15.878993,1.1600037L15.878993,11.100006C15.877009,11.740005,15.353999,12.26001,14.706996,12.26001L9.5830047,12.26001C9.4399994,12.26001 9.3290069,12.382004 9.3420074,12.52301 9.3600128,12.692001 9.3829925,12.917999 9.4060028,13.117004 9.4349945,13.367004 9.6570099,13.53801 9.9049957,13.591003L11.684994,13.975998C11.835994,14.009003 11.945003,14.141998 11.945003,14.294998 11.945003,14.440002 11.826015,14.557007 11.679012,14.557007L11.499996,14.557007 4.3789966,14.557007 4.2470081,14.557007C4.1000049,14.557007 3.9819935,14.440002 3.9819937,14.294998 3.9819935,14.141998 4.0899952,14.009003 4.2409961,13.977005L6.0450113,13.589996C6.2860086,13.539001 6.501005,13.373001 6.5249918,13.130997 6.5460184,12.921005 6.5650003,12.688004 6.5769937,12.516998 6.5870035,12.376999 6.4710062,12.262009 6.3290079,12.262009L1.1730042,12.26001C0.52499391,12.26001,0.0020143806,11.740005,0,11.100006L0,1.1600037C0.0020143806,0.51899719,0.52499391,0.0019989014,1.1730042,0z"/>' +
  //       "</g>",
  //   } as NativeModel,
  // },
];

export var pipesSvg: NodeModel[] = Pipe.pipes.map((item) => (
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




// [
//   {
//     id: "09-svg",
//     style: { fill: "none" },
//     addInfo: [{ text: 'Close Open Tasks2' }],
//     annotations: [
//       { content: "", constraints: AnnotationConstraints.Interaction },
//     ],
//     shape: {
//       type: "Native",
//       content:
//         '<g xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">  <title>0</title>  <g>    <g>      <rect x="6.29" y="15.63" width="33.75" height="18.75" transform="translate(48.17 1.83) rotate(90)" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px"/>      <rect x="20.35" y="33.91" width="5.63" height="21.56" rx="1" ry="1" transform="translate(67.85 21.52) rotate(90)" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px"/>      <rect x="20.35" y="-5.47" width="5.63" height="21.56" rx="1" ry="1" transform="translate(28.48 -17.85) rotate(90)" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px"/>    </g>    <rect x="13.32" y="18.77" width="19.69" height="12.01" rx="1.61" ry="1.61" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px"/>    <rect x="13.32" y="18.29" width="19.69" height="12.01" rx="0.82" ry="0.82" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px"/>  </g>  <g>    <path d="M32.4,31.23c.55.41-1,2.5-1.59,2A19.2,19.2,0,0,0,24.38,28c-.56-.42,1.48-2.87,2-2.35C28.16,27.83,29.8,29.94,32.4,31.23Z" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>    <path d="M23.88,20.09c6.59.34,6.08,10.25-.51,9.91S17.29,19.75,23.88,20.09Z" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>    <ellipse cx="23.73" cy="24.96" rx="4.02" ry="4.06" transform="translate(-2.43 47.35) rotate(-87.02)" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px"/>    <path d="M21.61,25.94l1.7,1.53,2.12-.66.23-.29.43-2.17-1.7-1.53-2.12.66-.23.29Z" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>    <path d="M21.33,25.58,23,27.11l2.12-.66.23-.3L25.82,24l-1.7-1.53L22,23.11l-.23.3Z" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>    <polygon points="23.08 26.95 21.46 25.49 21.91 23.37 23.98 22.71 25.6 24.16 25.15 26.28 24.25 26.57 24.22 26.5 24 26.54 23.89 26.68 23.08 26.95" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>    <polygon points="22.83 23.08 22.91 22.89 23.29 22.77 23.18 22.97 23.77 24.85 24.25 26.57 24.22 26.5 24 26.54 23.89 26.68 22.83 23.08" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>    <polygon points="22.91 22.89 23.29 22.77 23.18 22.97 24.25 26.57 24.22 26.5 24 26.54 22.91 22.89" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>    <path d="M31.63,29.37c2.31,3.05,4.46,6,8,7.68.67.5-1.6,3.39-2.28,2.74a24.24,24.24,0,0,0-8.64-7.15C28,32.13,30.95,28.71,31.63,29.37Z" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>  </g></g>',
//     } as NativeModel,
//   },
//   {
//     id: "L-pipe",
//     style: { fill: "none" },
//     annotations: [
//       { content: "", constraints: AnnotationConstraints.Interaction },
//     ],
//     shape: {
//       type: "Native",
//       content:
//         '<g xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">  <title>0</title>  <g>    <rect x="11.4" y="-5.4" width="6.28" height="24.07" rx="1" ry="1" transform="translate(7.9 21.17) rotate(-90)" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px"/>    <rect x="41.22" y="24.43" width="6.28" height="24.07" rx="1" ry="1" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px"/>    <path d="M41.22,26V47.45A37.68,37.68,0,0,1,3.55,9.78H25A16.25,16.25,0,0,0,41.22,26Z" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>    <rect x="41.22" y="24.43" width="6.28" height="24.07" rx="1" ry="1" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px"/>    <path d="M41.22,26V47.45A37.68,37.68,0,0,1,3.55,9.78H25A16.25,16.25,0,0,0,41.22,26Z" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>  </g></g>'
//       ,
//     } as NativeModel,
//   },
//   {
//     id: "U-pipe",
//     style: { fill: "none" },
//     annotations: [
//       { content: "", constraints: AnnotationConstraints.Interaction },
//     ],
//     shape: {
//       type: "Native",
//       content:
//         '<g xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">  <title>0</title>  <g>    <path d="M32.07,25.93a9,9,0,0,0-9-8.86H19.71l0-.21c0-.31-.75-.56-1-.56H12v-11h6.66c.27,0,1-.25,1-.56l0-.21,3.35,0A21.51,21.51,0,0,1,44.64,25.91v0A21.5,21.5,0,0,1,23.09,47.4h0l-3.35,0,0-.21c0-.31-.76-.56-1-.56H12v-11h6.66c.27,0,1-.25,1-.56l0-.21h3.37A9,9,0,0,0,32.07,25.93Z" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>    <g>      <path d="M9.53,16.61V4.3H17c.52,0,1.41-.4,1.46-.89,11.11,0-7.43,0,3.68,0a31.47,31.47,0,0,1,0,14.13H18.48c-.05-.5-.94-.89-1.46-.89Z" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>      <path d="M9.53,16.61V4.3H17c.52,0,1.41-.4,1.46-.89h0v14.1h0c-.05-.5-.94-.89-1.46-.89Z" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>    </g>    <g>      <path d="M9.53,47.49V35.17H17c.52,0,1.41-.4,1.46-.89,11.11,0-7.43,0,3.68,0a31.47,31.47,0,0,1,0,14.13H18.48c-.05-.5-.94-.89-1.46-.89Z" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>      <path d="M9.53,47.49V35.17H17c.52,0,1.41-.4,1.46-.89h0v14.1h0c-.05-.5-.94-.89-1.46-.89Z" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>    </g>  </g></g>'
//       ,
//     } as NativeModel,
//   },
//   {
//     id: "U-2-pipe",
//     style: { fill: "none" },
//     annotations: [
//       { content: "", constraints: AnnotationConstraints.Interaction },
//     ],
//     shape: {
//       type: "Native",
//       content:
//         '<g xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">  <title>0</title>  <g>    <path d="M24.65,32.1a9,9,0,0,1-8.86-9V19.74l-.21,0c-.31,0-.56-.75-.56-1V12H4V18.7c0,.27-.25,1-.56,1l-.21,0,0,3.35A21.51,21.51,0,0,0,24.63,44.67h0A21.5,21.5,0,0,0,46.12,23.12v0l0-3.35-.21,0c-.31,0-.56-.76-.56-1V12h-11V18.7c0,.27-.25,1-.56,1l-.21,0v3.37A9,9,0,0,1,24.65,32.1Z" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>    <g>      <path d="M15.34,9.57H3V17c0,.52-.4,1.41-.89,1.46,0,11.11,0-7.43,0,3.68a31.47,31.47,0,0,0,14.13,0V18.51c-.5-.05-.89-.94-.89-1.46Z" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>      <path d="M15.34,9.57H3V17c0,.52-.4,1.41-.89,1.46h14.1c-.5-.05-.89-.94-.89-1.46Z" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>    </g>    <g>      <path d="M46.21,9.57H33.9V17c0,.52-.4,1.41-.89,1.46,0,11.11,0-7.43,0,3.68a31.47,31.47,0,0,0,14.13,0V18.51c-.5-.05-.89-.94-.89-1.46Z" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>      <path d="M46.21,9.57H33.9V17c0,.52-.4,1.41-.89,1.46H47.1c-.5-.05-.89-.94-.89-1.46Z" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px;fill-rule: evenodd"/>    </g>  </g></g>'
//       ,
//     } as NativeModel,
//   },
//   {
//     id: "l-2-pipe",
//     style: { fill: "none" },
//     annotations: [
//       { content: "", constraints: AnnotationConstraints.Interaction },
//     ],
//     shape: {
//       type: "Native",
//       content:
//         '<g xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">  <title>0</title>  <g>    <path d="M22.81,24.52h-14V45.45H25.52A20.93,20.93,0,0,0,46.45,24.52h0V7.78H25.52v14A2.71,2.71,0,0,1,22.81,24.52Z" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px"/>    <rect x="2.5" y="22.43" width="6.28" height="24.07" rx="1" ry="1" transform="translate(11.28 68.93) rotate(180)" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px"/>    <rect x="32.33" y="-7.4" width="6.28" height="24.07" rx="1" ry="1" transform="translate(30.83 40.1) rotate(-90)" style="fill: #ccc;stroke: gray;stroke-miterlimit: 10;stroke-width: 0.25px"/>  </g></g>'
//       ,
//     } as NativeModel,
//   },
// ];

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
