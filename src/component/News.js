import React, {useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinning from './Spinning'
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'
  const News=(props)=> {
  const[articles,setArticles]=useState([]);
  const[loading,setLoading]=useState(true);
  const[page,setPage]=useState(1);
  const[totalResults,settotalResults]=useState(0);
  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
    }
  // document.title=`${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    const  updateNew=async()=>{
    props.showprogress(15)
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data=await fetch(url);
    props.showprogress(35)
    let parsedData=await data.json();
    props.showprogress(65)
    // console.log(parsedData);
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setLoading(false);
    props.showprogress(100);
  }
  useEffect(()=>{
  updateNew();
  },[])
   
  // const handlePrevclick=async()=>{
  // setPage(page-1);
  // updateNew();
  // }
  // const handleNextclick=async()=>{
  // setPage(page+1);
  // updateNew();
  // }
  const fetchMoreData = async() => {
   setPage(page+1);                                                      
   const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${ page+1}&pageSize=${props.pageSize}`;
    // setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();
    // console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  };

    return (
    <>
        <h4 className=' text-center' style={{marginTop:'72px '}}>NewsMonkey-Top Headlines from {capitalizeFirstLetter(props.category)}</h4>
        
        {/* {loading&&<Spinning/>} */}
        <InfiniteScroll 
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinning/>}
          >
          <div className="container">
       <div className="row">
       {articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>
        <NewsItem title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
     </>
    ) 
} 
export default News
News. defaultProps = {
  country:"in",
  pageSize:8,
  category:"general"
  }
News.propTypes={
     country:PropTypes.string,
     pageSize:PropTypes.number,
     category:PropTypes.string
  }
