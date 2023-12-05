import { APIProvider, Map, Marker, } from '@vis.gl/react-google-maps'

const MapMarker = ({ offer }) => {

    const mapStyle = {
        height: '500px',
        width: '80%',
    }
    const mapContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <>
            {offer && <div style={mapContainerStyle}>
                <APIProvider apiKey={'AIzaSyAXrluxt6edH6GHzswvJd_nckU_vPeBjzc'}>
                    <Map zoom={12} center={{ lat: 40.4169177926384, lng: -3.7036169094295338 }} style={mapStyle}>
                        {offer && <Marker
                            key={offer._id}
                            id={offer._id}
                            position={{
                                lat: offer.location.coordinates[1],
                                lng: offer.location.coordinates[0],
                            }}
                        />}
                    </Map>
                </APIProvider>
            </div>}
        </>
    )
}
export default MapMarker