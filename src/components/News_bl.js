import React ,{useEffect, useState} from 'react'
import NewsCom from './NewsCom';
import Spinner from './Loader';
export default function News_bl(props) {

  let [article,setArticle]=useState([]);
  let [page, setPage]=useState(1);
  let [loading,setLoading]=useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      const url = "https://newsapi.org/v2/everything?q=bollywood+india&apiKey=f4206a7f17cc4cd5aa6c137918e9ceb4&page=1&pageSize=20";
      setLoading(true);
      const data = await fetch(url);
      const parsedData = await data.json();
      setArticle(parsedData.articles);
      setLoading(false);
    };

    fetchNews();
  }, []); 

  const handleNext = async () => {
    console.log('Next button clicked');
    const nxPage = page + 1; // Calculate the next page
    setPage(nxPage); // Calculate the next page number
    let url = `https://newsapi.org/v2/everything?q=bollywood+india&apiKey=f4206a7f17cc4cd5aa6c137918e9ceb4&page=${nxPage}&pageSize=20`;
  
    try {
      setLoading(true);
      const data = await fetch(url);
      const parsedData = await data.json();
  
      if (parsedData.articles) {
        setPage(nxPage); // Update the page state only after a successful fetch
        setArticle(parsedData.articles);
        setLoading(false);
        console.error('done'); // Update the articles state
      } else {
        console.error('No articles found for the next page.');
      }
    } catch (error) {
      console.error('Error fetching next page:', error);
    }
  };
  
  const handleBack = async () => {
    console.log('Back button clicked');
    if (page <= 1) return; // Prevent going to a page number less than 1
  
    const nxPage = page - 1; // Calculate the next page
    setPage(nxPage);
    let url = `https://newsapi.org/v2/everything?q=bollywood+india&apiKey=f4206a7f17cc4cd5aa6c137918e9ceb4&page=${nxPage}&pageSize=20`;
  
    try {
      setLoading(true);
      const data = await fetch(url);
      const parsedData = await data.json();
  
      if (parsedData.articles) {
        setPage(nxPage); // Update the page state only after a successful fetch
        setArticle(parsedData.articles);
        setLoading(false);
        console.error('done'); // Update the articles state
      } else {
        console.error('No articles found for the previous page.');
      }
    } catch (error) {
      console.error('Error fetching previous page:', error);
    }
  };
  
  return (
    <div>
      <div className="container">
              <h2 className="text-center">Bollywood Glam!</h2>
              {loading  && <Spinner/>}
              <div className="container d-flex justify-content-between">
      <button disabled={page<=1}  onClick={handleBack} style={{borderRadius:"20px"}} type="button" className="btn btn-dark">&larr; Previous</button>
      <button style={{borderRadius:"20px"}}  onClick={handleNext} type="button" className="btn btn-dark">Next &rarr;</button>
    </div>
              
          <div className="row my-2">
          {!loading && article.map((element)=>{
            return <div className="col-md-3 my-3" key ={element.url}>
            <NewsCom source={element.source.name} author={!element.author?"unkown":element.author} update={element.publishedAt}   des={element.description?element.description.slice(0,80):""} title={element.title?element.title.slice(0,50):""} ImgUrl={element.urlToImage} NewsUrl={element.url}/>
            </div>
      
      
          })}
          </div>
          <div className="container d-flex justify-content-between">
      <button disabled={page<=1} onClick={handleBack} style={{borderRadius:"20px"}} type="button" className="btn btn-dark">&larr; Previous</button>
      <button  style={{borderRadius:"20px"}}  onClick={handleNext} type="button" className="btn btn-dark">Next &rarr;</button>
    </div>
      
          </div>
    </div>
  )
}
