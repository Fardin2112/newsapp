import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';

export default class Headline extends Component {
    // 1 st constructor run after that render or in last componentdidmount
    constructor() {
        super();
        // i defined state by the help of this i am changing variables 
        // this.article is define above
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    // here i am doing API fetch
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=${process.env.REACT_APP_MY_KEY}&pageSize=15`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // here i am defines variables
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults ,
            loading : false
        })
    }

    handleNext = async () => {
        console.log(process.env.REACT_APP_MY_KEY)
        // if total articles are availble then show page
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 15))) {
            // used to inc page size by 1
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=${process.env.REACT_APP_MY_KEY}&page=${this.state.page + 1}&pageSize=15`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading:false
            })
        } else {
            
        }

    }
    handlePrevious = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=${process.env.REACT_APP_MY_KEY}&page=${this.state.page - 1}&pageSize=15`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles ,
            loading:false
        })
    }

    render() {
        return (
            <div >
                <h2 className="container text-center my-2"
                    style={{ border: "3px solid black", width: 'fit-content', backgroundColor: '#fa3f3f', color: "white", fontFamily: "fantasy" }}>
                    Flash-Top Headlines</h2>
                <div className="container text-center">
                    <div className="container row ">
                        {/* if loading is false then render map */}
                        {! this.state.loading && this.state.articles.map((element) => {
                            //col-md-4 here used to divied col into 3 parts equally bec bootstrap have 12 col so 12/4=3
                            // key used to make every array element unique
                            return <div className="col-md-4  my-3" key={element.url}>
                                <Newsitems title={element.title ? element.title : " "}
                                    imageUrl={element.urlToImage ? element.urlToImage : "http://3.bp.blogspot.com/-_d6Vx1hSOGY/VTQCdEej5iI/AAAAAAAAATM/Fu5aBKq3U_Y/s1600/404.png"}
                                    url={element.url}
                                    description={element.description ? element.description.slice(0, 30) : " "}
                                />
                            </div>
                        })}
                    </div>
                    {/* spinner when loading is true then it will render */}
                    {this.state.loading && <Spinner/>}
                </div>
                <div className='container d-flex justify-content-between my-4'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevious}> &larr; Previous </button> 

                    <button aria-disabled="true" type="button" className="btn btn-dark"> Page No: {this.state.page} </button>
                    <button aria-disabled="true" type="button" className="btn btn-dark">Total-Page: {this.state.totalResults}</button>

                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 15)} type="button" className="btn btn-dark" onClick={this.handleNext}> Next &rarr; </button>
                </div>
            </div>
        )
    }
}
