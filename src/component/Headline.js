import React, { Component } from 'react'  // rcc shtct for class component
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types' // impt shortcut


export default class Headline extends Component {
    //PropTypes used to define  checking the types passed in the props object against a specification we set beforehand and to raise a warning if the types passed don't match the types expected
    static defaultProps = {
        country : 'in',
        category : 'general'
    }

    static propsTypes = {
        country : PropTypes.string, // pts shtct
        category : PropTypes.string,

    }

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
    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_MY_KEY}&page=${this.state.page}&pageSize=15`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({                                  
            articles: parsedData.articles ,
            loading:false
        })
    }

    // here i am fetching API
    async componentDidMount() {
      this.updateNews();
    }

    handleNext = async () => {
            this.setState({page: this.state.page + 1})
            this.updateNews();

    }
    handlePrevious = async () => {
        this.setState({page:this.state.page + 1 })
        this.updateNews();
    }

    render() {
        return (
            <div >
                <h2 className="container text-center my-2"
                    style={{ border: "3px solid black", width: 'fit-content', backgroundColor: '#fa3f3f', color: "white", fontFamily: "fantasy" }}>
                    Flash-Top Headlines</h2>
                    {/* spinner when loading is true then it will render */}
                    {this.state.loading && <Spinner/>}
                <div className="container text-center">
                    <div className="container row ">
                        {/* if loading is false then render map */}
                        {! this.state.loading && this.state.articles.map((element) => {
                            //col-md-4 here used to divied col into 3 parts equally bec bootstrap have 12 col so 12/4=3
                            // key used to make every array element unique
                            return <div className="col-md-4  my-3" key={element.url}>
                                {/* here i fetched data variables from sourceData and acc to me define name */}
                                <Newsitems title={element.title ? element.title : " "}
                                    imageUrl={element.urlToImage ? element.urlToImage : "http://3.bp.blogspot.com/-_d6Vx1hSOGY/VTQCdEej5iI/AAAAAAAAATM/Fu5aBKq3U_Y/s1600/404.png"}
                                    url={element.url}
                                    description={element.description ? element.description.slice(0, 30) : " "}
                                    date={element.publishedAt}
                                />
                            </div>
                        })}
                    </div>
                </div>
                <div className='container d-flex justify-content-between my-4'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevious}> &larr; Previous </button> 

                    <button aria-disabled="true" type="button" className="btn btn-dark"> Page No: {this.state.page} </button>
                    <button aria-disabled="true" type="button" className="btn btn-dark">Total-Page: {this.state.totalResults}</button>

                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 15)} type="button" className="btn btn-dark" onClick={this.handleNext}> &rarr; Next; </button>
                </div>
            </div>
        )
    }
}
