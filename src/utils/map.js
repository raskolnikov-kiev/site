import mapObject from './mapObject.json';

let isLoaded = false;
const onload = () => {
  isLoaded = true;
};

document.getElementById('google-maps-script').onload = onload;

const init = () => {
  if (isLoaded || (window.google && window.google.maps)) {
    initMap();
    return;
  }
  document.getElementById('google-maps-script').onload = () => {
    onload();
    initMap();
  };
};

export default init;

const initMap = () => {
  const element = document.querySelector('.map');

  const styledMapType = new google.maps.StyledMapType(mapObject, {
    name: 'Styled Map'
  });

  const coordinates = { lat: 50.4529523, lng: 30.6216459 };
  const map = new google.maps.Map(element, {
    center: coordinates,
    zoom: 14,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
    }
  });

  const marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    title: 'Красноткацкая 27а, 1 этаж, 106'
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
};
