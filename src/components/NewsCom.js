import React, { Component } from 'react'

export class newscom extends Component {
  
  render() {

    let {title, des, ImgUrl,NewsUrl,update,author,source}=this.props;

    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",left:"90%"}}>
    {source}
  </span>
        <img src={ImgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{des}...</p>
            <p className="card-text"><small className="text-body-secondary">By: {author} at {new Date(update).toGMTString()}</small></p>
            
            <a href={NewsUrl} target="_blank "className="btn btn-sm btn-success">Read more</a>
        </div>
        </div>
        
      </div>
    )
  }
}

export default newscom
