// import React from "react";
// import Tour from "../Components/Content/Tour";
import "../Components/Content/Content.css";

import pic1 from "../img/tour/pic1.png";
import pic2 from "../img/tour/pic2.png";
import pic3 from "../img/tour/pic3.png";
import pic4 from "../img/tour/pic4.png";
import pic5 from "../img/tour/pic5.png";
import pic6 from "../img/tour/pic6.png";

const tourData = [
  {
    id: 1,
    img: pic1,
    pages: "12/15",
    name: "6D/4N Fun Tassie Vacation ...",
    price: "IDR. 12,398,000",
    location: "Australia",
  },
  {
    id: 2,
    img: pic2,
    pages: "14/15",
    name: "6D/4N Exciting Summer in ...",
    price: "IDR. 10,288,000",
    location: "South Korea",
  },
  {
    id: 3,
    img: pic3,
    pages: "10/15",
    name: "8D/6N Wonderful Autum ...",
    price: "IDR. 28,999,000",
    location: "Japan",
  },
  {
    id: 4,
    img: pic4,
    pages: "8/15",
    name: "4D/3N Overland Jakarta B...",
    price: "IDR. 3,188,000",
    location: "Indonesia",
  },
  {
    id: 5,
    img: pic5,
    pages: "14/15",
    name: "4D/3N Labuan Bajo Delight",
    price: "IDR. 10,488,000",
    location: "Indonesia",
  },
  {
    id: 6,
    img: pic6,
    pages: "10/15",
    name: "5D/4N Magic Tokyo Fun",
    price: "IDR. 11,188,000",
    location: "Japan",
  },
];
export default tourData;

// const TourData : () :> {
//   return (
//     <div className:"main">
//       <p>Group Tour</p>
//       <div className:"tourList">
//         <Tour
//           img:{pic1}
//           pages:"12/15"
//           name:"6D/4N Fun Tassie Vacation ..."
//           price:"IDR. 12,398,000"
//           location:"Australia"
//         />
//         <Tour
//           img:{pic2}
//           pages:"14/15"
//           name:"6D/4N Exciting Summer in ..."
//           price:"IDR. 10,288,000"
//           location:"South Korea"
//         />
//         <Tour
//           img:{pic3}
//           pages:"10/15"
//           name:"8D/6N Wonderful Autum ..."
//           price:"IDR. 28,999,000"
//           location:"Japan"
//         />
//         <Tour
//           img:{pic4}
//           pages:"8/15"
//           name:"4D/3N Overland Jakarta B..."
//           price:"IDR. 3,188,000"
//           location:"Indonesia"
//         />
//         <Tour
//           img:{pic5}
//           pages:"14/15"
//           name:"4D/3N Labuan Bajo Delight"
//           price:"IDR. 10,488,000"
//           location:"Indonesia"
//         />
//         <Tour
//           img:{pic6}
//           pages:"10/15"
//           name:"5D/4N Magic Tokyo Fun"
//           price:"IDR. 11,188,000"
//           location:"Japan"
//         />
//       </div>
//     </div>
//   );
// };
// export default TourData;
