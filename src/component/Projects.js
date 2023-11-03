import React from 'react';
import ReactCardSlider from 'react-card-slider-component';


function Projects(props) {

  const churchClick = (slider)=>{
    window.open("https://www.clg.church/", "_blank");
  }
  const zippyClick = (slider)=>{
    window.open("http://zippy-react-app.s3-website-us-east-1.amazonaws.com/", "_blank");
  }

  const slides = [
    {
      image: "https://picsum.photos/700/600",
      title: "Church Of the Living God",
      //description: "This is a description",
      clickEvent: churchClick
    },
    {
      image: "https://picsum.photos/700/600",
      title: "Zippy App",
      //description: "This is a second description",
      clickEvent: zippyClick
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title",
      //description: "This is a third description"
      // clickEvent: sliderClick
    },   
    {
      image: "https://picsum.photos/700/600",
      title: "View More",
      //description: "This is a third description"
      // clickEvent: sliderClick
    }     
  ];

  return (
    <div style={{ marginTop: "5em" }}>
      <ReactCardSlider slides={slides} />
    </div>
  );
}

export default Projects;