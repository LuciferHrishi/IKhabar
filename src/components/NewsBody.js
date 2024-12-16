import React, { Component } from 'react'
import NewsCom from './NewsCom'
export class NewsBody extends Component {
  render() {
    return (
      <div class="container my-4">
        <h2 class="center">Top Headlines</h2>
    <div class="row">
      <div class="col-md-4">
      <NewsCom title="I-Khabar2" ImgUrl="https://www.thehindu.com/sport/uvmmr0/article35481908.ece/ALTERNATES/LANDSCAPE_615/thnak1330128994jpg"/>
      </div>
      <div class="col-md-4">
      <NewsCom title="I-Khabar"/>
      </div>
      <div class="col-md-4">
      <NewsCom title="I-Khabar"/>
      </div>
      
    </div>
    </div>
    )
  }
}

export default NewsBody
