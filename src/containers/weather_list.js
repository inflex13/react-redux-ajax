import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityDate) {

        const name = cityDate.city.name;
        const temps = cityDate.list.map(weather => weather.main.temp);
        const pressures = cityDate.list.map(pressure => pressure.main.pressure);
        const humanities = cityDate.list.map(humidity => humidity.main.humidity);
        const { lon, lat } = cityDate.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}  /></td>
                <td><Chart data={temps} color="purple" units="K"/></td>
                <td><Chart data={pressures} color="orange" units="hPa"/></td>
                <td><Chart data={humanities} color="blue" units="%"/></td>
            </tr>
        )
    }


    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    };
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);