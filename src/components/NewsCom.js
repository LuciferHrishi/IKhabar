import React, { Component } from 'react'

export class newscom extends Component {
  
  render() {

    let {title, des, ImgUrl,NewsUrl}=this.props;

    return (
      <div>
        <div className="card" style={{width: "24rem"}}>
        <img src={ImgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{des}...</p>
            <a href={NewsUrl} target="_blank "className="btn btn-sm btn-success">Read more</a>
        </div>
        </div>
        
      </div>
    )
  }
}

export default newscom
