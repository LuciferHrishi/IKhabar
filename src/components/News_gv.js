import React, { Component } from 'react'
import NewsCom from './NewsCom';
export class News_gv extends Component {



    gv_articles=[]
    constructor(){
        super();
        this.state={
            gv_articles:this.gv_articles
        }
      }


      async componentDidMount(){

        console.log("cdm");
        let url="https://newsapi.org/v2/everything?q=politics+india&apiKey=f07c9d7c333846259030bf9474e1df78";
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({
            gv_articles:parsedData.articles
        })

      }
  render() {



    return (
      <div>
        <div className="container my-4">
                      <h2 className="text-center">Top Political Headlines of the day</h2>
                  <div className="row my-2">
                  {this.state.gv_articles.map((element)=>{
                    return <div className="col-md-4 my-3" key ={element.url}>
                    <NewsCom   des={element.description?element.description.slice(0,88):"Politics News"} title={element.title?element.title.slice(0,50):""} ImgUrl={!element.urlToImage?"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_of_India_logo.svg/2560px-Government_of_India_logo.svg.png":element.urlToImage} NewsUrl={element.url}/>
                    </div>
              
              
                  })}
                  </div>
                  </div>
        
      </div>
    )
  }
}

export default News_gv
