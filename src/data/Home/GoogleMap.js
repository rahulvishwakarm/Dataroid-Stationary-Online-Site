import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '60%',
    height: '60%'
};

export class GoogleMap extends Component {
    static propTypes = {

    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                {
                    lat: 19.18, 
                    lng: 72.86
                }
                }
            >
                <Marker position={{ lat: 19.18, lng: 72.86}} />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCu0gJqtcpBiL2ChnL4tsEnqnZoZMq8fz4'
  })(GoogleMap);
