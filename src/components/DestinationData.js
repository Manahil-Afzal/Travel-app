import React, { Component } from "react";

class DestinationData extends Component {
  render() {
    const boxClass = this.props.reverse
      ? "destination-box reverse"
      : "destination-box";

    return (
      <div className={boxClass}>
        {!this.props.reverse && (
          <div className="destination-detail">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>
        )}

        <div className="destination-images">
          <img src={this.props.img1} alt="Destination 1" />
          <img src={this.props.img2} alt="Destination 2" />
        </div>

        {this.props.reverse && (
          <div className="destination-detail">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>
        )}
      </div>
    );
  }
}

export default DestinationData;
