import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {
    // make props for change title, discription, image, url frequently
    let {title,description ,imageUrl,url,date} = this.props;
    return (
      <div className="card" >
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          {/* to change UST time to GMT new data(variable).toGMTString() */}
          <p className="card-text"><small className='text-muted'>{new Date(date).toGMTString()}</small></p>
          <a href={url} target='blank' className="btn btn-sm btn-primary">Read More...</a>
        </div>
      </div>
    )
  }
}
