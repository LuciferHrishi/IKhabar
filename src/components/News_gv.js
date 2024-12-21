import React, { Component } from 'react'
import NewsCom from './NewsCom';
import Spinner from './Loader';
export class News_gv extends Component {



    gv_articles=[]
    page=1;
    constructor(){
        super();
        this.state={
            gv_articles:this.gv_articles,
            page:this.page,
            loading:false
        }
      }


      async componentDidMount(){

        console.log("cdm");
        this.props.setProgress(10);
        let url="https://newsapi.org/v2/everything?q=politics+india&apiKey=f4206a7f17cc4cd5aa6c137918e9ceb4&page=1&pageSize=20";
        this.setState({loading:true});
        let data=await fetch(url);
        this.props.setProgress(30);
        let parsedData=await data.json();
        this.props.setProgress(100);
        this.setState({
            gv_articles:parsedData.articles,
            loading:false
        })

      }


      handleNext = async  ()=>{
        console.log("next");
        this.props.setProgress(10);
        let url =`https://newsapi.org/v2/everything?q=politics+india&apiKey=f4206a7f17cc4cd5aa6c137918e9ceb4&page=${this.state.page+1}&pageSize=20`;
        this.setState({loading:true});
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        console.log(parsedData);
        this.props.setProgress(70);
        console.log("next button clicked");
        this.props.setProgress(100);
        this.setState({
          page: this.state.page+1,
          gv_articles:parsedData.articles,
          loading:false
        })
    
      }
    
      handleBack = async ()=>{
        let url =`https://newsapi.org/v2/everything?q=politics+india&apiKey=f4206a7f17cc4cd5aa6c137918e9ceb4&page=${this.state.page-1}&pageSize=20`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        console.log("next button clicked");
        this.setState({
          page: this.state.page-1,
          gv_articles:parsedData.articles,
          loading:false
        })
      }
  render() {



    return (
      <div>
        <div className="container my-4">
                      <h2 className="text-center">Top Political Headlines of the day</h2>
                      {this.state.loading && <Spinner/>}
                      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} onClick={this.handleBack} style={{borderRadius:"20px"}} type="button" class="btn btn-dark">&larr; Previous</button>
      <button style={{borderRadius:"20px"}}  onClick={this.handleNext} type="button" class="btn btn-dark">Next &rarr;</button>
    </div>
                  <div className="row my-2">
                  {!this.state.loading && this.state.gv_articles.map((element)=>{
                    return <div className="col-md-3 my-3" key ={element.url}>
                    <NewsCom source={element.source.name} author={element.author} update={element.publishedAt}   des={element.description?element.description.slice(0,88):"Politics News"} title={element.title?element.title.slice(0,50):""} ImgUrl={!element.urlToImage?"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_of_India_logo.svg/2560px-Government_of_India_logo.svg.png":element.urlToImage} NewsUrl={element.url}/>
                    </div>
              
              
                  })}
                  </div>
                  </div>
        
      </div>
    )
  }
}

export default News_gv
