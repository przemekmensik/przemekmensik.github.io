import React, { Component, PropTypes } from 'react';
import ReactTransitions from 'react-transitions';
import Transition from 'react-transition-group/Transition';
import AppDetails from './AppDetails.jsx'
import { StyleSheet, css } from 'aphrodite';
import { tinUpIn } from 'react-magic';

const styles = StyleSheet.create({
    magic: {
        animationName: tinUpIn,
        animationDuration: '2s'
    }
});


class Example2 extends Component {

    render() {
      console.log('komp WeatherAnimation')
        return (
            <div>
                <div className={css(styles.magic)}>
                    <AppDetails {...this.state}/>
                </div>
            </div>
        );
    }
}






export default Example2;
