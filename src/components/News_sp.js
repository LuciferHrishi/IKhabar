import React, { Component } from 'react'
import NewsCom from './NewsCom';
import Spinner from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";
export class news_sp extends Component {
  sp_art = [];
  tick_art = [];
  page = 1;
  totalResults=0;

  constructor() {
    super();
    this.state = {
      tick_art: this.tick_art,
      sp_art: this.sp_art,
      page: this.page,
      loading: false,
      totalResults:this.totalResults
    }
  }


  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=olympics&apiKey=f4206a7f17cc4cd5aa6c137918e9ceb4&page=1&pageSize=10`;
    let url2 = "https://newsapi.org/v2/everything?q=stocks+in&apiKey=f4206a7f17cc4cd5aa6c137918e9ceb4";
    this.props.setProgress(10);
    this.setState({ loading: true });
    let data = await fetch(url);
    let data2 = await fetch(url2);
    this.props.setProgress(30);
    let parsedData = await data.json();

    let parsedData2 = await data2.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.props.setProgress(100);
    this.setState({
      sp_art: parsedData.articles,
      tick_art: parsedData2.articles,
      loading: false,
    })

  }


  // handleNext = async () => {
  //   console.log("next");
  //   let url = `https://newsapi.org/v2/everything?q=olympics&apiKey=f4206a7f17cc4cd5aa6c137918e9ceb4&page=${this.state.page + 1}&pageSize=20`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   console.log("next button clicked");
  //   this.setState({
  //     page: this.state.page + 1,
  //     sp_art: parsedData.articles,
  //     totalResults:parsedData.totalResults,
  //   })

  // }
  // handleBack = async () => {
  //   let url = `https://newsapi.org/v2/everything?q=olympics&apiKey=f4206a7f17cc4cd5aa6c137918e9ceb4&page=${this.state.page - 1}&pageSize=20`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   console.log("next button clicked");
  //   this.setState({
  //     page: this.state.page - 1,
  //     sp_art: parsedData.articles,
  //     loading: false
  //   })
  // }

  fetchMoreData = async () => {
    this.setState({page:this.state.page+1})
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/everything?q=olympics&apiKey=f4206a7f17cc4cd5aa6c137918e9ceb4&page=${this.state.page}&pageSize=10`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(70);
    console.log("next button clicked");
    this.props.setProgress(100);
    this.setState({
      page: this.state.page + 1,
      sp_art: this.state.sp_art.concat(parsedData.articles),
      totalResults:parsedData.totalResults,
    })

  };
  render() {
    return (
      <div className="container my-4">
        <h2 className="text-center">Top Sports Headlines of the day</h2>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.sp_art.length}
          next={this.fetchMoreData}
          hasMore={this.state.sp_art.length!== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="row my-2">
            {this.state.sp_art.filter((element) => element?.url).map((element) => {
              return <div className="col-md-3 my-3" key={element?.url}>
                <NewsCom source={element?.source?.name ? element.source.name : "Unknown"} author={element?.author || "Unknown Author"} update={element?.publishedAt|| "Unknown"} des={element?.description ? element.description.slice(0, 88) : "Sports News"} title={element?.title ? element.title.slice(0, 50) : ""} ImgUrl={!element?.urlToImage ? "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3JtNjkyLXRvbi0wMDMtZWxlbWVudGdyb3VwLnBuZw.png" : element.urlToImage} NewsUrl={element?.url||"#"} />
              </div>
      
          })}
      </div>
      </InfiniteScroll>
          
          </div >
    )
  }
}

export default news_sp
