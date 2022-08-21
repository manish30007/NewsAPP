import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageurl,newsurl,author,date,source}=this.props;
    return (
  <div className='my-3'>
  <div className="card" >
  <img src={!imageurl?"https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D":imageurl} className="card-img-top" alt=""/>
  <div className="card-body">
  <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",left:"90%"}}>{source}
    {/* <span className="visually-hidden">unread messages</span> */}
  </span>
  <h5 className="card-title">{title}...</h5>
  <p className="card-text">{description}...</p>
  <p className="card-text"><small className="text-muted">{!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
  <a href={newsurl} target="_blank"  rel="noreferrer"  className="btn btn-sm btn-dark">Read More</a>
  </div>
  </div>
  </div>    
    )
  }
}

export default NewsItem
