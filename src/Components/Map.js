import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import { compose, withProps, withStateHandlers } from 'recompose'

const StyledMapWithAnInfoBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `300px`, width: '400px' }} />,
    containerElement: <div className="google-map-size" />,
    mapElement: <div style={{ height: `300px`, width: '100%' }}  />,
    center: { lat: 13.821483, lng: 100.515324 },
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap defaultZoom={18} defaultCenter={props.center}>
    <Marker
      position={{ lat: 13.821483, lng: 100.515324 }}
      onClick={props.onToggleOpen}
    />
  </GoogleMap>
);

export class Map extends React.Component{
  render() {
    return (
      <div className="Map">
        <div className="google-map-size">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.292081932643!2d100.51315341462198!3d13.821491790302392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b9c7c312857%3A0x5d07935904fe2fb8!2z4LiE4LiT4Liw4Lin4Li04LiX4Lii4Liy4Lio4Liy4Liq4LiV4Lij4LmM4Lib4Lij4Liw4Lii4Li44LiB4LiV4LmMIOC4oeC4q-C4suC4p-C4tOC4l-C4ouC4suC4peC4seC4ouC5gOC4l-C4hOC5guC4meC5guC4peC4ouC4teC4nuC4o-C4sOC4iOC4reC4oeC5gOC4geC4peC5ieC4suC4nuC4o-C4sOC4meC4hOC4o-C5gOC4q-C4meC4t-C4rQ!5e0!3m2!1sth!2sth!4v1526874085435"
            width="100%" height="100%" frameBorder="0" allowFullScreen
          ></iframe>
        </div>
      </div>
    )
  }
}