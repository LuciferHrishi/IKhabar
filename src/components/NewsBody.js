import React, { Component } from 'react';
import NewsCom from './NewsCom';

export class NewsBody extends Component {
  articles=[];
  tick_art=[];
  page=1;
  constructor(){
    super();
    
    this.state={
      tick_art:this.tick_art,
      articles:this.articles,
      page: this.page,
    }
  };


  async componentDidMount(){
    console.log("component did mount");

    let url ="https://newsapi.org/v2/top-headlines?apiKey=0e90f373ab3f4b0f9c8aafa82c3be839&q=india&page=1&pageSize=20";

    let url2="https://newsapi.org/v2/everything?q=stocks+in&apiKey=0e90f373ab3f4b0f9c8aafa82c3be839";
    let data = await fetch(url);
    let data2= await fetch(url2);
    let parsedData= await data.json();
    let parsedData2 = await data2.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles,
      tick_art:parsedData2.articles
    })
  }

  handleNext = async  ()=>{
    console.log("next");
    let url =`https://newsapi.org/v2/top-headlines?apiKey=0e90f373ab3f4b0f9c8aafa82c3be839&q=india&page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    console.log("next button clicked");
    this.setState({
      page: this.state.page+1,
      articles:parsedData.articles,
    })

  }

  handleBack = async ()=>{
    let url =`https://newsapi.org/v2/top-headlines?apiKey=0e90f373ab3f4b0f9c8aafa82c3be839&q=india&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    console.log("next button clicked");
    this.setState({
      page: this.state.page-1,
      articles:parsedData.articles,
    })
  }
  render() {
    return (
      <div className="container my-4">
        <div className="ticker-container bg-dark text-white">
  {this.state.tick_art.map((element)=>{
   return <div className="ticker">
      <span>{element.author}</span>
      <span>{element.title}</span>

  </div>
   })}
</div>
        <h2 className="text-center">Top Headlines of the day</h2>

        <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} onClick={this.handleBack} style={{borderRadius:"20px"}} type="button" className="btn btn-dark">&larr; Previous</button>
      <button disabled={this.state.page +1 >Math.ceil(this.state.totalResults/20)} style={{borderRadius:"20px"}}  onClick={this.handleNext} type="button" className="btn btn-dark">Next &rarr;</button>
    </div>

        
    <div className="row my-2">
    {this.state.articles.map((element)=>{
      return <div className="col-md-3 my-3" key ={element.url}>
      <NewsCom   des={element.description?element.description.slice(0,80):""} title={element.title?element.title.slice(0,50):""} ImgUrl={element.urlToImage} NewsUrl={element.url}/>
      </div>


    })}
    </div>
    <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} onClick={this.handleBack} style={{borderRadius:"20px"}} type="button" className="btn btn-dark">&larr; Previous</button>
      <button disabled={this.state.page +1 >Math.ceil(this.state.totalResults/20)} style={{borderRadius:"20px"}}  onClick={this.handleNext} type="button" className="btn btn-dark">Next &rarr;</button>
    </div>
    </div>
    )
  }
}

export default NewsBody
