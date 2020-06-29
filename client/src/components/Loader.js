/* eslint-disable */
import React  from 'react';

export default class MyReactComponent extends React.Component {
    render(){
        return(
            <div className="ball-loader-container">
                <div  key={0} className="ball-loader">
                    <div className="ball-loader-ball ball1"></div>
                    <div className="ball-loader-ball ball2"></div>
                    <div className="ball-loader-ball ball3"></div>
                </div>
            </div>
        )
    }
}