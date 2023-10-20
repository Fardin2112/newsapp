import React, { useEffect, useState } from 'react'  // rcc shtct for class component
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types' // impt shortcut
// import InfiniteScroll from 'react-infinite-scroll-component';


const Headline = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [page, setPage] = useState([1]);
    const [totalResults, settotalResults] = useState([0]);

    const captalizeFirstLetter = (string) => {
        return string.at(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c0c043e9faae4280b5bac64136302df6&page=${page}&pageSize=12`;
        setLoading(true )
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setLoading(false);
        settotalResults(parsedData.totalResults);
    }

    useEffect(() => {
        document.title = `Flash-${captalizeFirstLetter(props.category)}`
        updateNews();
    }, [])

    // fetchMoreData works after when we again req for next data
    const fetchMoreData = async () => {
        setPage( page + 1 )
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c0c043e9faae4280b5bac64136302df6&page=${page}&pageSize=12`;
        // setLoading({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setLoading(false)
        settotalResults(parsedData.totalResults)
    }
    return (
        <div >
            <h2 className="container text-center my-2"
                style={{ border: "3px solid black", width: 'fit-content', backgroundColor: '#fa3f3f', color: "white", fontFamily: "fantasy" }}>
                Flash - Top {captalizeFirstLetter(props.category)} Headlines</h2>
            {loading && <Spinner/>}             
            {/* <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            > */}
                <div className="container text-center">
                    <div className="container row ">
                        {articles.map((element) => {
                            //col-md-4 here used to divied col into 3 parts equally bec bootstrap have 12 col so 12/4=3
                            // key used to make every array element unique
                            return <div className="col-md-4  my-3" key={element.url}>
                                {/* here i fetched data variables from sourceData and acc to me define name */}
                                <Newsitems title={element.title ? element.title :""}
                                    imageUrl={element.urlToImage ? element.urlToImage : "http://3.bp.blogspot.com/-_d6Vx1hSOGY/VTQCdEej5iI/AAAAAAAAATM/Fu5aBKq3U_Y/s1600/404.png"}
                                    url={element.url}
                                    description={element.description ? element.description.slice(0, 30) : " "}
                                    date={element.publishedAt}
                                />
                            </div>
                        })}
                    </div>
                </div>
                <button onClick={fetchMoreData}>More..</button>
            {/* </InfiniteScroll> */}
        </div>
    )
}

//PropTypes used to define  checking the types passed in the props object against a specification we set beforehand and to raise a warning if the types passed don't match the types expected
Headline.defaultProps = {
    country: 'in',
    category: 'general'
}

Headline.propsTypes = {
    country: PropTypes.string, // pts shtct
    category: PropTypes.string,

}

export default Headline
