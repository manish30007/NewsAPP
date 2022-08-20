import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinning from './Spinning'
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

  constructor(){
    super();
    console.log("Hello,I am a constructor");
    this.state={
      articles:[],
      loading :false,
      page:1,
      totalResults:this.totalResults
    }
  }
  async componentDidMount(){
    console.log(Math.ceil(this.totalResults/20));
    
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d943f98512b045c6ada2b91021fe63aa&page=1&pageSize=${this.props.pageSize}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    // console.log(parsedData);
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults
   })
  }
  handlePrevclick=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d943f98512b045c6ada2b91021fe63aa&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();
    // console.log(parsedData);
    this.setState({articles:parsedData.articles, page:this.state.page-1,loading:false})
  }
  handleNextclick=async()=>{
   
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d943f98512b045c6ada2b91021fe63aa&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles, page:this.state.page+1,loading:false})
    
  }
  render() {
    // let {pageSize}=this.props;
    console.log("render");
    return (
      <div className='container my-3'>
        <h4 className=' text-center'>NewsMonkey-Top Headlines</h4>
        {this.state.loading&&<Spinning/>}
       <div className="row">
       {!this.state.loading&&this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url}/>
        </div>
        })}
        </div>
         <div className="conatainer d-flex justify-content-between">
         <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevclick}>&#x2190; prev</button>
         <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextclick}>next &#x2192;</button>
         </div>
      </div> 
    )
  }
} 
export default News
