/* eslint-disable */

import React, { Component  } from 'react';
import { InputGroup, InputGroupAddon,Button, Input } from 'reactstrap';
import * as Constants from '../common/constants';

export default class Search extends Component {

    constructor(props){
        super(props);
        this.state ={
            searchValue: "",
        }
        this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
    }

    handleSearchValueChange(event){
        this.setState({ searchValue: event.target.value });
    }

    render(){
        const { handleSearchAction } = this.props;
        const { searchValue } = this.state;
        return(
            <div className="search-container">
                <div className="search-input">
                    <InputGroup>
                        <Input placeholder={Constants.SEARCH_PLACEHOLDER}
                            value={searchValue}
                            onChange={(e)=>this.handleSearchValueChange(e)}
                        />
                        <InputGroupAddon addonType="append">
                            <Button color="primary" disabled={!searchValue} onClick={()=>handleSearchAction(searchValue)}>
                                {Constants.SEARCH_TITLE }
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </div>
        )
    }
}