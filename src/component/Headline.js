import React, { Component } from 'react'
import Newsitems from './Newsitems'

export default class Headline extends Component {
    //  this articles is array which have all data about news
    articles = [
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Yahoo Sports Staff",
            "title": "Thursday Night Football: Chiefs vs. Broncos score, highlights, inactives, injuries and live tracker - Yahoo Sports",
            "description": "The defense that has allowed the most passing touchdowns has to face Patrick Mahomes in Week 6.",
            "url": "https://www.usatoday.com/story/sports/mlb/playoffs/2023/10/12/phillies-vs-braves-live-mlb-playoffs-pitchers-time-tv-channel-highlights/71158163007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/10/13/USAT/71164009007-usatsi-21633350.jpg?crop=3117,1753,x928,y0&width=3117&height=1753&format=pjpg&auto=webp",
            "publishedAt": "2023-10-13T01:51:18Z",
            "content": "PHILADELPHIA The Philadelphia Phillies just keep making history.\r\nThe Atlanta Braves are simply going home.\r\nIn another epic National League Division Series battle between the lNL East rivals, the Ph… [+15299 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Colorado officer found guilty in Elijah McClain death - BBC.com",
            "description": "The unarmed black man died after he was pinned down before a medic injected him with ketamine.",
            "url": "https://www.bbc.com/news/uk-67097118",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0767/production/_120359810__113100620_mediaitem113100619.jpg",
            "publishedAt": "2023-10-13T01:38:57Z",
            "content": "A Colorado officer has been found guilty in the death of Elijah McClain, who was pinned down before a medic injected him with ketamine and he died.\r\nA jury unanimously convicted officer Randy Roedema… [+2823 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jen Christensen",
            "title": "Gene-edited pig kidney keeps monkey alive for 2 years, trial finds, a step toward longer-lasting human transplants - CNN",
            "description": "About 13 people die every day while waiting for a kidney transplant because of a lack of organ donors, but some scientists think pigs could be the answer. In a new trial that researchers say is the largest of its kind, researchers transplanted kidneys from ge…",
            "url": "https://www.cnn.com/2023/10/12/health/pig-to-monkey-kidney-transplant-successful-scn/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231012204224-surgeon-tools-stock-image-restricted.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-10-13T01:01:00Z",
            "content": "About 13 people die every day while waiting for a kidney transplant because of a lack of organ donors, but some scientists think pigs could be the answer. In a new trial that researchers say is the l… [+5733 chars]"
        },{
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": null,
            "title": "Former IRS contractor accused of stealing Trump’s tax returns pleads guilty - CNN",
            "description": "The former IRS contractor accused of leaking former President Donald Trump’s tax returns and stealing tax information on thousands of the wealthiest people in the US pleaded guilty in federal court on Thursday.",
            "url": "https://www.cnn.com/2023/10/12/politics/littlejohn-trump-taxes-guilty-plea/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231012161302-01-charles-littlejohn-101223.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-10-12T20:55:00Z",
            "content": "The former IRS contractor accused of leaking former President Donald Trumps tax returns and stealing tax information on thousands of the wealthiest people in the US pleaded guilty in federal court on… [+1329 chars]"
            },
            {
                "source": {
                "id": null,
                "name": "The Times of Israel"
                },
                "author": null,
                "title": "Netanyahu’s office releases horrifying images of infants murdered by Hamas - The Times of Israel",
                "description": "Spokesman for prime minister says the decision to share shocking photos was made 'so that the world will see just a fraction of the horrors that Hamas carried out'",
                "url": "https://www.timesofisrael.com/netanyahus-office-releases-horrifying-images-of-infants-murdered-by-hamas/",
                "urlToImage": "https://static.timesofisrael.com/www/uploads/2023/10/F8J-_fwXQAAaL8C-1024x640.jpg",
                "publishedAt": "2023-10-12T20:48:45Z",
                "content": "The Prime Minister’s Office took the extraordinary step on Thursday of releasing gruesome photos of murdered babies to reporters and the public, seeking to underscore the atrocities carried out by Ha… [+3013 chars]"
                },
                {
                    "source": {
                    "id": null,
                    "name": "CNBC"
                    },
                    "author": "Hugh Son",
                    "title": "Bank earnings kick off with JPMorgan, Wells Fargo amid concerns about rising rates, bad loans - CNBC",
                    "description": "Higher rates are expected to lead to a jump in losses on banks' bond portfolios and contribute to funding pressures.",
                    "url": "https://www.cnbc.com/2023/10/12/bank-earnings-kick-off-after-another-period-of-rising-rates-bad-loans.html",
                    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107304358-16952965022023-02-08t223030z_562366603_rc277z9ieu1o_rtrmadp_0_jp-morgan-dimon-interview.jpeg?v=1697141817&w=1920&h=1080",
                    "publishedAt": "2023-10-12T20:16:57Z",
                    "content": "Jamie Dimon, Chairman of the Board and Chief Executive Officer of JPMorgan Chase &amp;amp; Co., gestures as he speaks during an interview with Reuters in Miami, Florida, U.S., February 8, 2023. \r\nAme… [+4295 chars]"
                    },    
    ]
    // 1 st constructor run after that render or in last componentdidmount
    constructor() {
        super();
        console.log("i am constrcutor");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    componentDidMount(){
        let url = 'https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'from=2023-10-13&' +
        'sortBy=popularity&' +
        'apiKey=c0c043e9faae4280b5bac64136302df6';
    }
    render() {
        return (
            <div >
                <h2 className="container text-center"
                style={{border:"3px solid black",width:'fit-content',backgroundColor:'#fa3f3f',color:"white",fontFamily:"fantasy"}}>
                Flash-Top Headlines</h2>
                <div className="container text-center">
                    <div className="container row ">
                        {this.state.articles.map((element) => {
                            //col-md-4 here used to divied col into 3 parts equally bec bootstrap have 12 col so 12/4=3
                            // key used to make every array element unique
                            return <div className="col-md-4  my-3" key={element.url}> 
                                <Newsitems  title={element.title.slice(0,45)} imageUrl={element.urlToImage} url={element.url} description={element.description.slice(0,30)} />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
