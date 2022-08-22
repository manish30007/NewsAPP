import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinning from './Spinning'
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'
export class News extends Component {
  static defaultProps = {
  country:"in",
  pageSize:8,
  category:"general"
  }
  static propTypes={
     country:PropTypes.string,
     pageSize:PropTypes.number,
     category:PropTypes.string
  }

  constructor(props){
    super(props);
    console.log("Hello,I am a constructor");
    this.state={
      articles:[],
      loading :true,
      page:1,
      totalResults:this.totalResults
    }
    console.log(this.state.totalResults);
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }
  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  async updateNew(){
    this.props.setProgress(15)
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    this.props.setProgress(35)
    let parsedData=await data.json();
    this.props.setProgress(55)
    // console.log(parsedData);
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,loading:false
   })
   this.props.setProgress(100)
  }
  async componentDidMount(){
    console.log("cdm");
    this.updateNew();
  }
  handlePrevclick=async()=>{
    this.setState({ page:this.state.page-1})
    this.updateNew();
  }
  handleNextclick=async()=>{
    this.setState({ page:this.state.page+1})
    this.updateNew();
  }
  fetchMoreData = async() => {
   this.setState({page:this.state.page+1})
   const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();
    // console.log(parsedData);
    this.setState({articles:this.state.articles.concat(parsedData.articles),
      totalResults:parsedData.totalResults
   })
  };
  render() {
    // let {pageSize}=this.props;
    console.log("render");
    return (
    <>
        <h4 className=' text-center'>NewsMonkey-Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h4>
        {/* {this.state.loading&&<Spinning/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinning/>}
          // scrollableTarget="scrollableDiv"
        >
          <div className="container">
       <div className="row">
       {this.state.articles.map((element)=>{
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
} 
export default News