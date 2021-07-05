import "./App.css";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import NavbarComponent from "./components/Navbar";
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1020/1000/600/",
    thumbnail: "https://picsum.photos/id/1020/250/150/",
  },
  {
    original: "https://picsum.photos/id/1021/1000/600/",
    thumbnail: "https://picsum.photos/id/1021/250/150/",
  },
  {
    original: "https://picsum.photos/id/1022/1000/600/",
    thumbnail: "https://picsum.photos/id/1022/250/150/",
  },
  {
    original: "https://picsum.photos/id/1023/1000/600/",
    thumbnail: "https://picsum.photos/id/1023/250/150/",
  },
  {
    original: "https://picsum.photos/id/1024/1000/600/",
    thumbnail: "https://picsum.photos/id/1024/250/150/",
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: true,
      thumbnailPosition: "bottom",
      showVideo: {},
      useWindowKeyDown: true,
    };
  }
  render() {
    return (
      <section className="app">
        <NavbarComponent />
        <ImageGallery
          items={images}
          lazyLoad={false}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={
            this.state.showFullscreenButton &&
            this.state.showGalleryFullscreenButton
          }
          showPlayButton={
            this.state.showPlayButton && this.state.showGalleryPlayButton
          }
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          isRTL={this.state.isRTL}
          thumbnailPosition={this.state.thumbnailPosition}
          slideDuration={parseInt(this.state.slideDuration)}
          slideInterval={parseInt(this.state.slideInterval)}
          slideOnThumbnailOver={this.state.slideOnThumbnailOver}
          additionalClass="app-image-gallery"
          useWindowKeyDown={this.state.useWindowKeyDown}
        />
        <NavbarComponent footer={true} />
      </section>
    );
  }
}

export default App;
