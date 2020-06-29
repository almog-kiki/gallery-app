
/* eslint-disable */
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import * as Constants from '../common/constants';
 
export default class LightBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: true,
      images: []
    };
  }
 
  componentDidMount(){
    const {photos, index, isOpen} = this.props;
    this.setState({
      photoIndex: index || 0,
      isOpen:     isOpen,
      images:     photos
    });
  }

  componentDidUpdate(prevProps){
      const {photos, index, isOpen} = this.props;
      if(photos.length !== prevProps.photos.length || prevProps.index !== index || isOpen!== prevProps.isOpen){
            this.state = {
              photoIndex: index || 0,
              isOpen:  isOpen,
              images: photos
            };
      }
  }

  render() {
    const { photoIndex, isOpen, images } = this.state;
    const {handleClose} = this.props;
    return (
      <div>
        {   images.length>0 && isOpen && (
            <Lightbox
              mainSrc={Constants.BASIC_URL+images[photoIndex].filename}
              nextSrc={Constants.BASIC_URL+images[(photoIndex + 1) % images.length].filename}
              prevSrc={Constants.BASIC_URL+images[(photoIndex + images.length - 1) % images.length].filename}
              onCloseRequest={ handleClose() }
              onMovePrevRequest={() =>
                this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
        )}
      </div>
    );
  }
}