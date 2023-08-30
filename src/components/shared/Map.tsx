import React from 'react';

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.405397843084!2d-38.9512724!3d-12.2208068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x714384e82e44abd%3A0x3071487b3e913a30!2sTapetes%20%26%20Tal!5e0!3m2!1spt-BR!2sie!4v1691526953739!5m2!1spt-BR!2sie"
      className="w-[calc(100%)]"
      height="300"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default Map;
