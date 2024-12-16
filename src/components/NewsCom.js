import React, { Component } from 'react'

export class newscom extends Component {
  render() {
    let {title, des, ImgUrl}=this.props;
    return (
      <div>
        <div class="card" style={{width: "18rem;"}}>
        <img src={ImgUrl} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" class="btn btn-sm btn-primary">More</a>
        </div>
        </div>
        
      </div>
    )
  }
}

export default newscom
