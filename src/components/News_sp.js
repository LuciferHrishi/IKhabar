import React, { Component } from 'react'
import NewsCom from './NewsCom';
export class news_sp extends Component {
  sp_art=[];
  tick_art=[];
  page=1;

  constructor(){
    super();
    this.state={
      tick_art:this.tick_art,
      sp_art:this.sp_art,
      page: this.page,
    }
  }


  async componentDidMount(){
    let url =`https://newsapi.org/v2/everything?q=olympics&apiKey=0e90f373ab3f4b0f9c8aafa82c3be839&page=1&pageSize=20`;
    let url2="https://newsapi.org/v2/everything?q=stocks+in&apiKey=0e90f373ab3f4b0f9c8aafa82c3be839";
    let data= await fetch(url);
    let data2= await fetch(url2);
    let parsedData= await data.json();

    let parsedData2= await data2.json();
    console.log(parsedData);
    this.setState({
      sp_art:parsedData.articles,
      tick_art:parsedData2.articles
    })

  }


  handleNext = async  ()=>{
    console.log("next");
    let url =`https://newsapi.org/v2/everything?q=olympics&apiKey=0e90f373ab3f4b0f9c8aafa82c3be839&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    console.log("next button clicked");
    this.setState({
      page: this.state.page + 1,
      sp_art:parsedData.articles
    })

  }
  DOCDZVOG2NDSWVIE
  handleBack = async ()=>{
    let url =`https://newsapi.org/v2/everything?q=olympics&apiKey=0e90f373ab3f4b0f9c8aafa82c3be839&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    console.log("next button clicked");
    this.setState({
      page: this.state.page - 1,
      sp_art:parsedData.articles
    })
  }
  render() {
    return (
      <div className="container my-4">
              <h2 className="text-center">Top Sports Headlines of the day</h2>
              <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} onClick={this.handleBack} style={{borderRadius:"20px"}} type="button" class="btn btn-dark">&larr; Previous</button>
      <button style={{borderRadius:"20px"}}  onClick={this.handleNext} type="button" class="btn btn-dark">Next &rarr;</button>
    </div>
          <div className="row my-2">
          {this.state.sp_art.map((element)=>{
            return <div className="col-md-3 my-3" key ={element.url}>
            <NewsCom   des={element.description?element.description.slice(0,88):"Sports News"} title={element.title?element.title.slice(0,50):""} ImgUrl={!element.urlToImage?"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3JtNjkyLXRvbi0wMDMtZWxlbWVudGdyb3VwLnBuZw.png":element.urlToImage} NewsUrl={element.url}/>
            </div>
      
      
          })}
          </div>
          <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} onClick={this.handleBack} style={{borderRadius:"20px"}} type="button" class="btn btn-dark">&larr; Previous</button>
      <button style={{borderRadius:"20px"}}  onClick={this.handleNext} type="button" class="btn btn-dark">Next &rarr;</button>
    </div>
          
          </div>
    )
  }
}

export default news_sp
