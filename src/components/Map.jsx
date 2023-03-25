
import "../styles/Map.css";
import React from 'react'

const Map = () =>  {
  return (
    <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27608.891380880177!2d31.318160999999996!3d30.119625000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815a36ba05753%3A0x3f7d54e994f89f1a!2sHelmeyat%20AZ%20Zaytoun%2C%20Ain%20Shams%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1679252395455!5m2!1sen!2seg" width="900" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map