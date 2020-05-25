import React, { Component } from "react";
import SingleStop from "./SingleStop";

export default class FilterData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialStops: [],
      stops: [],
    };
  }

  filterList() {
    const stops = this.state.initialStops;
    console.log(stops);
    this.setState({ stops });
  }

  componentDidMount() {
    this.setState({
      initialStops: this.props.content,
      stops: this.props.content,
    });
    console.log(this.props.content);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search" onChange={this.filterList} />
        </form>

        <div>
          {this.state.stops.map((stop) => (
            <SingleStop key={stop.id} stop={stop} />
          ))}
        </div>
      </div>
    );
  }
}
