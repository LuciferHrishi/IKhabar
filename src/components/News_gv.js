import React, { Component } from 'react'
import NewsCom from './NewsCom';
export class News_gv extends Component {



    gv_articles=[]
    page=1;
    constructor(){
        super();
        this.state={
            gv_articles:this.gv_articles,
            page:this.page,
        }
      }


      async componentDidMount(){

        console.log("cdm");
        let url="https://newsapi.org/v2/everything?q=politics+india&apiKey=0e90f373ab3f4b0f9c8aafa82c3be839&page=1&pageSize=20";
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({
            gv_articles:parsedData.articles
        })

      }


      handleNext = async  ()=>{
        console.log("next");
        let url =`https://newsapi.org/v2/everything?q=politics+india&apiKey=0e90f373ab3f4b0f9c8aafa82c3be839&page=${this.state.page+1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        console.log("next button clicked");
        this.setState({
          page: this.state.page+1,
          gv_articles:parsedData.articles,
        })
    
      }
    
      handleBack = async ()=>{
        let url =`https://newsapi.org/v2/everything?q=politics+india&apiKey=0e90f373ab3f4b0f9c8aafa82c3be839&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        console.log("next button clicked");
        this.setState({
          page: this.state.page-1,
          gv_articles:parsedData.articles,
        })
      }
  render() {



    return (
      <div>
        <div className="container my-4">
                      <h2 className="text-center">Top Political Headlines of the day</h2>
                      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} onClick={this.handleBack} style={{borderRadius:"20px"}} type="button" class="btn btn-dark">&larr; Previous</button>
      <button style={{borderRadius:"20px"}}  onClick={this.handleNext} type="button" class="btn btn-dark">Next &rarr;</button>
    </div>
                  <div className="row my-2">
                  {this.state.gv_articles.map((element)=>{
                    return <div className="col-md-3 my-3" key ={element.url}>
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
