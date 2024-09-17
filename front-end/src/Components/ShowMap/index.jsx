

import React from "react";
import Mapir from "mapir-react-component";
const Map = Mapir.setToken({
  //factory parameters
  hash: true,
  logoPosition: "top-left",
  maxZoom: [16],
  transformRequest: url => {
    return {
      url: url,
      headers: {
        'x-api-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNlNzE4YWM2YjZhZTM5MWNhZjU3N2ZkOTcxYzM0ZmRkYzY2MThlMzg0ZGYyMjQ2OTQ1ZWJlYTRiZTlkNzgzMjJjYjVkMzQwZmUzYzNjODkzIn0.eyJhdWQiOiIyODY0NiIsImp0aSI6ImNlNzE4YWM2YjZhZTM5MWNhZjU3N2ZkOTcxYzM0ZmRkYzY2MThlMzg0ZGYyMjQ2OTQ1ZWJlYTRiZTlkNzgzMjJjYjVkMzQwZmUzYzNjODkzIiwiaWF0IjoxNzI1MzAyNjY3LCJuYmYiOjE3MjUzMDI2NjcsImV4cCI6MTcyNzg5NDY2Nywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.lpBua-jcp1CMJFA5o0ya7GticfV7l2AaCF71wHD6t33Gez_2rAy9ZMxilicf3xjM9J1BYpTA0yJ-FpWDWK5kah8JB69YnBricZSy9rzXGfn9EzPTIEZf6MIHGKiz8p92hQPsyCKLzsBkt0eafbdzJRgN7Esc4CMhMNfLw7QBSIqCAriTe10X48O-BnPlb_bSqeNhjhkJ4qPbSxdSGh-WLRNV62bj-t6ro82I7AFj0ojbcZ6bhyVRyX9GPkbBPK4yGgI_6390IGfQMBwhMjj9I2p6Gpc5QeHvX7Dto5BwYIaRz-6yjo9gqj3kRWvQiFHzP2puWypWIw6f_FMRlAgYnQ'
,
        "Mapir-SDK": "reactjs"
      }
    };
  }
});
const ShowMap = (props) => {
  return (
    <div className="App">
      <Mapir center={props.loc} Map={Map} userLocation />
    </div>
  );
};
export default ShowMap;