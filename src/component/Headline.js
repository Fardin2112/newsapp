import React, { Component } from 'react'  // rcc shtct for class component
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types' // impt shortcut
import InfiniteScroll from 'react-infinite-scroll-component';


export default class Headline extends Component {
    //PropTypes used to define  checking the types passed in the props object against a specification we set beforehand and to raise a warning if the types passed don't match the types expected
    static defaultProps = {
        country: 'in',
        category: 'general'
    }

    static propsTypes = {
        country: PropTypes.string, // pts shtct
        category: PropTypes.string,

    }
    captalizeFirstLetter = (string) => {
        return string.at(0).toUpperCase() + string.slice(1);
    }

    // 1 st constructor run after that render or in last componentdidmount
    constructor(props) {
        super(props);
        // i defined state by the help of this i am changing variables 
        // this.article is define above
        this.state = {
            articles: [],
            totalResults :0 ,
            loading: true,
            page: 1
        }
        document.title = `Flash-${this.captalizeFirstLetter(this.props.category)}`
    }
    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_MY_KEY}&page=${this.state.page}&pageSize=15`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loading: false,
            totalResults: parsedData.totalResults
        })
    }

    // here i am fetching API
    async componentDidMount() {
        this.updateNews();
    }

    handleNext = async () => {
        this.setState({ page: this.state.page + 1 })
        this.updateNews();

    }
    handlePrevious = async () => {
        this.setState({ page: this.state.page + 1 })
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({page:this.state.page + 1})
        this.updateNews()
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_MY_KEY}&page=${this.state.page}&pageSize=9`;
        // this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            // concat used to add new data with previous one also
            articles: this.state.articles.concat(parsedData.articles),
            loading: false,
            totalResults: parsedData.totalResults
        })
    }

    render() {
        return (
            <div >
                <h2 className="container text-center my-2"
                    style={{ border: "3px solid black", width: 'fit-content', backgroundColor: '#fa3f3f', color: "white", fontFamily: "fantasy" }}>
                    Flash - Top {this.captalizeFirstLetter(this.props.category)} Headlines</h2>
                {/* spinner when loading is true then it will render */}
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<h4><Spinner/></h4>}
                >
                    <div className="container text-center">
                        <div className="container row ">
                            {/* if loading is false then render map */}
                            {this.state.articles.map((element) => {
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
                </InfiniteScroll>
            </div>
        )
    }
}
