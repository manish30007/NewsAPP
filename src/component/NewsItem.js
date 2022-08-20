import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageurl,newsurl}=this.props;
    return (
  <div className='my-3'>
  <div className="card" >
  <img src={!imageurl?"https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D":imageurl} className="card-img-top" alt=""/>
  <div className="card-body">
  <h5 className="card-title">{title}...</h5>
  <p className="card-text">{description}...</p>
  <a href={newsurl} target="_blank" rel="noreferrer"  className="btn btn-sm btn-dark">Read More</a>
  </div>
  </div>
  </div>    
    )
  }
}

export default NewsItem
