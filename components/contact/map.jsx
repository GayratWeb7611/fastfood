import React  from 'react';
import {GoogleMap, withGoogleMap, withScriptjs ,Marker} from 'react-google-maps';
import styles from '../../styles/contact.module.scss'

const Map = () => {
 
  const markers = [
    {
      lat: 31,
      lng: 20,
    },
    {
      lat: 30,
      lng: 21,
    },
    {
      lat: 41.346935,
      lng: 69.203763,
    },
  ];
  return (
    <GoogleMap
      defaultZoom={15}
      options={{
        scrollwheel: false,
      }}
      defaultCenter={{lat: 41.346935, lng: 69.203763}}
      >
        {
          markers.map((item , index) =>(
      <Marker key={index} position={{lat: item.lat, lng: item.lng}} />
          ))
        }
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function SimpleMap() {
  return (
    <div className={styles.map_container} id='contact' >
      <div className={styles.map_title}>
        <h2>ALOQADA QOLING</h2>
        <p>
          Biz doimo muloqotlar, takliflar va izohlarga tayyormiz. Biz
          mijozlarimiz har doim biz bilan boglanishlari va savollar
          berishlariga imkon berishlarini istaymiz. Siz bizning ofisimizni
          xaritadan topishingiz yoki bizning raqamimizga qongiroq qilishingiz
          mumkin va siz quyidagi sorovni maxsus shakl orqali yuborishingiz
          mumkin.
        </p>
      </div>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDRFZRguTlR0yMcl98M_9IuqlRILc2vhWE`}
        loadingElement={<h3>joylashuv yuklanmoqda</h3>}
        containerElement={<div style={{height: '100%'}}></div>}
        mapElement={<div style={{height: '100%'}}></div>}
      />
    </div>
  );
}
