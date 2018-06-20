import { Component } from 'react';
import init from '@/utils/map';

class Map extends Component {
  componentDidMount() {
    init();
  }

  render() {
    return (
      <div className="block map__wrapper" id="map">
        <div className="map__text">
          Приходите к нам:{' '}
          <span className="map__address">Красноткацкая 27а, 1 этаж</span>
        </div>
        <div className="map" />
      </div>
    );
  }
}

export default Map;
