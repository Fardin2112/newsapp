import React, { Component } from 'react'
import Newsitems from './Newsitems'

export default class Headline extends Component {
    render() {
        return (
            <div>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                           <Newsitems/>
                        </div>
                        <div className="col">
                            Column
                        </div>
                        <div className="col">
                            Column
                        </div>
                    </div>
                </div>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            Column
                        </div>
                        <div className="col">
                            Column
                        </div>
                        <div className="col">
                            Column
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}
