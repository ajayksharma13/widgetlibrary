import roundToNearestMinutesWithOptions from 'date-fns/esm/fp/roundToNearestMinutesWithOptions/index.js';
import { link } from 'fs';
import { debounce } from 'lodash';
import React from 'react';
import { withApollo } from 'react-apollo';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { Dropdown, Icon, Label, Image, Button, Grid } from 'semantic-ui-react';
import { UserContext } from '../../context';
import withRouterHOC from '../../hoc/with-router';
import withToastHOC from '../../hoc/with-toast';
import { TAlert, TClientRoute, TDropdownOption, TRouteProps } from '../../types';
import Utils, { StoreUtil } from '../../utils';
import LocationListComponent from '../stock-declaration/location-list';

/**
 * For Getting Latitude and Longitude
 */
class LocationTrackerComponent extends React.Component<TClientRoute<TProps> & TRouteProps, TState> {
  /**
   * user Context type
   */
  static contextType = UserContext;
  context!: React.ContextType<typeof UserContext>;

  /**
   * default state
   */
  state: Readonly<TState> = {
    userLocationOptions: [],
  };

  /**
   * component did mount
   */
  componentDidMount() {
    // if no latitude and longitude exists
    const { currentLatitude, currentLongitude } = this.context;
    if (!currentLatitude && !currentLongitude) this.getLatLng();
  }

  /**
   * for geting lat and lng of client side
   */
  private getLatLng = debounce(async () => {
    const { alert, update } = this.props;
    try {
      // todo : manage type in lat lng
      const response: any = await Utils.getLatLng();
      if (response) {
        // store latitude and longitude
        const { latitude, longitude } = response?.coords;

        // set latitude and longitude
        this.context?.onUpdate?.({ currentLatitude: latitude.toString(), currentLongitude: longitude.toString() });
        update({ q: { latitude, longitude } });
      } else {
        // this.clearLatLng();
        // await alert({
        //   type: 'warning',
        //   title: 'Info',
        //   description: 'Your browser is not support Geo location',
        //   time: 6000,
        // });
        this.context?.onUpdate?.({ currentLatitude: '0.00', currentLongitude: '0.00' });
        update({ q: { latitude: '0.00', longitude: '0.00' } });
      }
    } catch (error) {
      // this.clearLatLng();

      // if (error.code === error.PERMISSION_DENIED) {
      //   await alert({ type: 'warning', title: 'Please allow to get location', description: 'This will enable us to serve your better', time: 3000 });
      // }
      this.context?.onUpdate?.({ currentLatitude: '0.00', currentLongitude: '0.00' });
      update({ q: { latitude: '0.00', longitude: '0.00' } });
    }
  }, 800);

  /**
   * clear currect latitude nad longitude
   */
  clearLatLng() {
    this.context?.onUpdate?.({ currentLatitude: undefined, currentLongitude: undefined });
    this.props.update({ q: { latitude: undefined, longitude: undefined } });
  }
  /**
   * for geting all location of stock declare
   * @returns
   */
  locationListSidebar() {
    this.props.onChangeSidebar(true, LocationListComponent, { width: 'very wide' });
  }

  render() {
    const { user } = this.context;
    const { currentLatitude, currentLongitude } = this.context;

    return (
      <div className="location-component" style={{ display: 'none' }}>
        {// latitude and longitude exists
          currentLatitude && currentLongitude ? (
            <Grid textAlign="right" verticalAlign="middle">
              <Grid.Column className="lat-lng-col" onClick={() => user && this.locationListSidebar()}>
                {`${parseFloat(currentLatitude).toFixed(3)}, ${parseFloat(currentLongitude).toFixed(3)}`}
              </Grid.Column>
              <Grid.Column className="loction-icon-col">
                <Icon size="large" name="map marker alternate" className="map-marker"></Icon>
              </Grid.Column>
            </Grid>
          ) : (
            // <Image
            //   as={Link} to="#"
            //   onClick={this.getLatLng}
            //   className="user-pic"
            //   src="/assets/images/currentLocation.png" />
            <></>
          )}
      </div>
    );
  }
}
/**
 * default Props
 */
type TProps = {
  onChangeSidebar: Function;
};

/**
 * default state
 */
type TState = {
  currentLatitude?: number;
  currentLongitude?: number;
  userLocationOptions: Array<TDropdownOption>;
};

const LocationTracker = compose<TClientRoute<TProps> & TRouteProps, TProps>(
  withToastHOC,
  withRouterHOC,
  withApollo,
)(LocationTrackerComponent);

export { LocationTracker as default };
