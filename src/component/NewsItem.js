import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageurl,newsurl,author,date,source}=this.props;
    return (
  <div className='my-3'>
  <div className="card" >
  <div style={{
    display:'flex',
    justifyContent:'flex-end',
    position:'absolute',
    right:'0'
  }
  }>
  <span className=" badge rounded-pill bg-danger" >{source}
    {/* <span className="visually-hidden">unread messages</span> */}
  </span></div>
 <img style={{height:"300px"}}src={!imageurl?"https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D":imageurl} className="card-img-top" alt=""/>
  <div className="card-body">
    
  <h5 className="card-title">{title}...</h5>
  <p className="card-text">{description}...</p>
  <p className="card-text"><small className="text-muted">{!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
  <a href={newsurl} target="_blank"  rel="noreferrer"  className=" btn-sm btn-dark">Read More</a>
  </div>
  </div>
  </div>    
    )
  }
}

export default NewsItem
