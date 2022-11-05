import React from "react"
import data from "../PageData/Experience.json"

export default function experience(){


    return (
    
        <div className="sliderImage"> 
        {data.map((slide,idx) => {
            return(

                <div className={`FlexPage ${slide.hiddenPage}`} key={idx}>
             
                    <img  alt="experience" id={slide.imageID}/>
                    <div className="pageTitle">{slide.title}</div>
                    <ul  className="textBorder">
                    {slide.list.map((listElement,listIdx) => {
                        return(
                            <li key={slide.title.concat(listIdx)} className="bodyText">{listElement}</li>
                         
                        )
                    })}
                
                    </ul>
                </div>    
                
            )
        })}

        </div>
        )
}