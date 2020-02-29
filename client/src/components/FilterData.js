import React, { Component } from "react";
import SingleStop from "./SingleStop";

export default class FilterData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialStops: [],
      stops: []
    };
  }

  filterList = event => {
    let stops = this.state.initialStops;
    console.log(stops);
    // stops = stops.filter(stop => {
    //   return stop.search(event.target.value) !== -1;
    // });
    this.setState({ stops: stops });
  };

  componentDidMount = () => {
    this.setState({
      initialStops: this.props.content,
      stops: this.props.content
    });
    console.log(this.props.content);
  };

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search" onChange={this.filterList} />
        </form>
        <div>
          {this.state.stops.map(stop => (
            <SingleStop key={stop._id} stop={stop} />
          ))}
        </div>
      </div>
    );
  }
}
