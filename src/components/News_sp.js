import React, { Component } from 'react'
import NewsCom from './NewsCom';
export class news_sp extends Component {
  sp_art=[]

  constructor(){
    super();
    this.state={
      sp_art:this.sp_art
    }
  }

  async componentDidMount(){
    let url ="https://newsapi.org/v2/everything?q=olympics&apiKey=f07c9d7c333846259030bf9474e1df78";
    let data= await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({
      sp_art:parsedData.articles
    })

  }
  render() {
    return (
      <div className="container my-4">
              <h2 className="text-center">Top Sports Headlines of the day</h2>
          <div className="row my-2">
          {this.state.sp_art.map((element)=>{
            return <div className="col-md-4 my-3" key ={element.url}>
            <NewsCom   des={element.description?element.description.slice(0,88):"Sports News"} title={element.title?element.title.slice(0,50):""} ImgUrl={!element.urlToImage?"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3JtNjkyLXRvbi0wMDMtZWxlbWVudGdyb3VwLnBuZw.png":element.urlToImage} NewsUrl={element.url}/>
            </div>
      
      
          })}
          </div>
          </div>
    )
  }
}

export default news_sp
