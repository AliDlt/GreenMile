import React, { Component } from 'react'
import './map.css'
import Mapir from 'mapir-react-component';
const Map = Mapir.setToken({
    transformRequest: (url) => {
        return {
            url: url,
            headers: {
                'x-api-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNlNzE4YWM2YjZhZTM5MWNhZjU3N2ZkOTcxYzM0ZmRkYzY2MThlMzg0ZGYyMjQ2OTQ1ZWJlYTRiZTlkNzgzMjJjYjVkMzQwZmUzYzNjODkzIn0.eyJhdWQiOiIyODY0NiIsImp0aSI6ImNlNzE4YWM2YjZhZTM5MWNhZjU3N2ZkOTcxYzM0ZmRkYzY2MThlMzg0ZGYyMjQ2OTQ1ZWJlYTRiZTlkNzgzMjJjYjVkMzQwZmUzYzNjODkzIiwiaWF0IjoxNzI1MzAyNjY3LCJuYmYiOjE3MjUzMDI2NjcsImV4cCI6MTcyNzg5NDY2Nywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.lpBua-jcp1CMJFA5o0ya7GticfV7l2AaCF71wHD6t33Gez_2rAy9ZMxilicf3xjM9J1BYpTA0yJ-FpWDWK5kah8JB69YnBricZSy9rzXGfn9EzPTIEZf6MIHGKiz8p92hQPsyCKLzsBkt0eafbdzJRgN7Esc4CMhMNfLw7QBSIqCAriTe10X48O-BnPlb_bSqeNhjhkJ4qPbSxdSGh-WLRNV62bj-t6ro82I7AFj0ojbcZ6bhyVRyX9GPkbBPK4yGgI_6390IGfQMBwhMjj9I2p6Gpc5QeHvX7Dto5BwYIaRz-6yjo9gqj3kRWvQiFHzP2puWypWIw6f_FMRlAgYnQ', //Mapir api key

                'Mapir-SDK': 'reactjs'
            },
        }
    }
});

class Maps extends Component {
    constructor(props) {
    super(props);
    this.state = {
      markerArray: [],
      lat: 35.72,
      lon: 51.42
    }
    this.reverseFunction = this.reverseFunction.bind(this);
  }
   async reverseFunction(map, e) {
    let addres ;
    var url = `https://map.ir/reverse/no?lat=${e.lngLat.lat}&lon=${e.lngLat.lng}`
    await fetch(url,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNlNzE4YWM2YjZhZTM5MWNhZjU3N2ZkOTcxYzM0ZmRkYzY2MThlMzg0ZGYyMjQ2OTQ1ZWJlYTRiZTlkNzgzMjJjYjVkMzQwZmUzYzNjODkzIn0.eyJhdWQiOiIyODY0NiIsImp0aSI6ImNlNzE4YWM2YjZhZTM5MWNhZjU3N2ZkOTcxYzM0ZmRkYzY2MThlMzg0ZGYyMjQ2OTQ1ZWJlYTRiZTlkNzgzMjJjYjVkMzQwZmUzYzNjODkzIiwiaWF0IjoxNzI1MzAyNjY3LCJuYmYiOjE3MjUzMDI2NjcsImV4cCI6MTcyNzg5NDY2Nywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.lpBua-jcp1CMJFA5o0ya7GticfV7l2AaCF71wHD6t33Gez_2rAy9ZMxilicf3xjM9J1BYpTA0yJ-FpWDWK5kah8JB69YnBricZSy9rzXGfn9EzPTIEZf6MIHGKiz8p92hQPsyCKLzsBkt0eafbdzJRgN7Esc4CMhMNfLw7QBSIqCAriTe10X48O-BnPlb_bSqeNhjhkJ4qPbSxdSGh-WLRNV62bj-t6ro82I7AFj0ojbcZ6bhyVRyX9GPkbBPK4yGgI_6390IGfQMBwhMjj9I2p6Gpc5QeHvX7Dto5BwYIaRz-6yjo9gqj3kRWvQiFHzP2puWypWIw6f_FMRlAgYnQ'
        }
      })
      .then(response => response.json())
      .then(data => {addres= data })
    const array = [];
    array.push(<Mapir.Marker
      coordinates={[e.lngLat.lng, e.lngLat.lat]}
      anchor="bottom">
    </Mapir.Marker>);
    this.props.setMap({lat: e.lngLat.lat,lon: e.lngLat.lng , addres :addres
     })
    this.setState({ markerArray: array, lat: e.lngLat.lat,lon: e.lngLat.lng });
  } 
    render() {
        return (
            <div className="map">
            
            <Mapir
          center={[this.state.lon, this.state.lat]}
          Map={Map}
          onClick={this.reverseFunction}
        >
          {this.state.markerArray}
        </Mapir>

            </div >
        )
    }
}
export default Maps