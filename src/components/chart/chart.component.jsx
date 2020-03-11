import React, { Component } from "react";
import { connect } from "react-redux";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

// import "../../App.css";

class Chart extends Component {
  // static displayName = "RadarChartDemo";

  render() {
    const data = [
      {
        subject: "Acousticness",
        A: this.props.chartInfo.acousticness * 100
      },
      {
        subject: "Danceability",
        A: this.props.chartInfo.danceability * 100
      },
      { subject: "Energy", A: this.props.chartInfo.energy * 100 },
      {
        subject: "Instrumentalness",
        A: this.props.chartInfo.instrumentalness * 100
      },
      { subject: "Liveness", A: this.props.chartInfo.liveness * 100 },
      { subject: "Valence", A: this.props.chartInfo.valence * 100 }
    ];
    return (
      <div>
        {/* Specify chart elements from import list to use them ex. PolarAngleAxis are the subjects */}
        <RadarChart
          className="radar"
          label={{ fill: "white" }}
          value={{ color: "white" }}
          cx={188}
          cy={120}
          outerRadius={100}
          width={377}
          height={240}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis stroke="white" dataKey="subject" />

          <Radar
            id="canvas"
            className="radar"
            tick={{ fill: "transparent" }}
            dataKey="A"
            stroke="white"
            stroke-width="5%"
            fill="#E20351"
            fillOpacity={0.9}
          />
        </RadarChart>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chartInfo: state.chartInfo
});

export default connect(mapStateToProps)(Chart);
