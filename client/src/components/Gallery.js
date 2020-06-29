/* eslint-disable */
import React , {Fragment} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import DataService from '../services/data.service';
import * as Constants from '../common/constants';
import Loader from './Loader';
import LightBox from './LightBox';
import Search from './Search';

const style = {
    display:"inline-block",
    margin: 6,
    padding: 8,
    height:200,
    width:200
};

export default class MyReactComponent extends React.Component {
    
    constructor(porps){
        super(porps);
        this.state = {
            photos: [],
            pageNumber:1,
            perPage: Constants.MAX_PHOTOS_PER_FETCH,
            searchValue:"default",
            photoIndex: 0,
            isOpen: false,
            isLoading: true
        };
        this.fetchMorePhotos = this.fetchMorePhotos.bind(this);
        this.handleSearchAction = this.handleSearchAction.bind(this);
    }
        
    componentDidMount(){
        this.fetchMorePhotos();
    }

    async fetchMorePhotos() {
        const { pageNumber, searchValue ,photos }= this.state;
        let newPhotos = await DataService.search(pageNumber, searchValue);
        const appendedNewPhotos = photos.concat(newPhotos)
        this.setState({
            photos: appendedNewPhotos,
            pageNumber: pageNumber+1,
            isLoading:false
        });
    }

    handleIsOpen(){
        this.setState({ isOpen: !this.state.isOpen });
    }

    openLightBox( photoIndex ){
        this.setState({
            isOpen: true,
            photoIndex: photoIndex
        })
    }

    handleSearchAction(searchValue){
        this.setState({
            searchValue: searchValue,
            pageNumber:1,
            photos: [],
            isLoading:true
        },()=>{
            this.fetchMorePhotos();
        });
    }

    drawSearchSection(){
        return (<Search handleSearchAction={this.handleSearchAction}></Search>)
    }

    drawLightBox(){
        const { photoIndex, isOpen } = this.state;
        return (
                <Fragment>
                    { isOpen && (
                        <LightBox photos={this.state.photos} 
                                index={photoIndex} 
                                isOpen={isOpen}
                                handleClose={()=>this.handleIsOpen.bind(this)}></LightBox>
                        )
                    }
                </Fragment>
        )
    }

    drawInfiniteScroll(){
        const { photos, isLoading } = this.state;
        return(
            <Fragment>
                {  !isLoading && photos.length> 0 &&
                    <InfiniteScroll
                        dataLength={photos.length}
                        next={()=>this.fetchMorePhotos()}
                        hasMore={true}
                        loader={<Loader></Loader>}
                        >
                        { photos.map((photo, index) => (
                                <div style={style} key={photo.filename + index}
                                    onClick={this.openLightBox.bind(this, index)}
                                >
                                    <img  height="200" width="200" 
                                        src={Constants.BASIC_URL+photo.filename}
                                        alt={photo.filename}/>
                                </div>
                        )) }
                    </InfiniteScroll>
                }
            </Fragment>
        )
    }

    render() {
        const { isLoading } = this.state;
        return (
            <Fragment>
                {this.drawSearchSection()}
                <hr/>
                { isLoading && <Loader></Loader> }
                {this.drawInfiniteScroll()}
                {this.drawLightBox()}
            </Fragment>
        );
    }
}