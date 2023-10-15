import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {
    // make props for change title discription image url frequently
    let {title,description ,imageUrl,url} = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <a href={url} target='blank' className="btn btn-sm btn-primary">Read More...</a>
        </div>
      </div>
    )
  }
}
