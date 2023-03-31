
import "../styles/Map.css";
import {Map, WrappedMap} from "google-map-react";

export class Mapp extends Component {
    render() {

    
      return (
            <Map
            google={this.props.google}
            style = {{with: "100%", height: "100%"}}
            zoom = {10}
            initialCenter = { {
                lat: 40.7128,
                lng: -73.9872
            } }
            />
            )
        }
    }


    
