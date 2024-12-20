import React, { Component } from 'react';
import NewsCom from './NewsCom';

export class NewsBody extends Component {
  articles=[]
  constructor(){
    super();
    
    this.state={
      articles:this.articles
    }
  };


  async componentDidMount(){
    console.log("component did mount");

    let url ="https://newsapi.org/v2/top-headlines?apiKey=f07c9d7c333846259030bf9474e1df78&q=india";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles

    })
  }
  render() {
    return (
      <div className="container my-4">
        <h2 className="text-center">Top Headlines of the day</h2>
    <div className="row my-2">
    {this.state.articles.map((element)=>{
      return <div className="col-md-4 my-3" key ={element.url}>
      <NewsCom   des={element.description?element.description.slice(0,88):""} title={element.title?element.title.slice(0,50):""} ImgUrl={element.urlToImage} NewsUrl={element.url}/>
      </div>


    })}
    </div>
    </div>
    )
  }
}

export default NewsBody
