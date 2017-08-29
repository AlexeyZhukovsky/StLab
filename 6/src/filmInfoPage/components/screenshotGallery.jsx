import React from 'react';
import 'filmInfoPage/styles/screenshotGallery';
const mask = "https://image.tmdb.org/t/p/w533_and_h300_bestv2/"

const ScreenshotGallery = ({galery}) => {
    let imgs = galery.map((img, index)=>{
    return (<img className="screenshotGallery__img" key={index} src= { mask + img.file_path }/>)})
    if(imgs.length > 5){
        imgs = imgs.slice(0,5);
    }
    return (
        <div className="screenshotGallery">
            {imgs}
        </div>
    );
};

export default ScreenshotGallery;