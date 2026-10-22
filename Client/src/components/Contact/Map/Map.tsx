import React from "react";

const Map: React.FC = () => {
  return (
    <div id="map-area">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8526813127214!2d105.7776088!3d21.038579799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ca1345ab81%3A0x6e2bc2c06bf0f8d0!2zMzYgTmcuIDY2IMSQLiBI4buTIFTDuW5nIE3huq11LCBNYWkgROG7i2NoLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDA!5e0!3m2!1svi!2s!4v1768289939447!5m2!1svi!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        title="This is a unique title"
      ></iframe>
    </div>
  );
};

export default Map;
