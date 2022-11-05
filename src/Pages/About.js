import React from "react"
export default function about(){
    return (
        <div className="sliderImage"> 
            <div className="FlexPage">
                <img alt="Passport" id ="Passport"/>
                <div className="pageTitle">Noah S. Kusaba</div>
                <div className="textBorder">
                    
                    <br/><div  className="bodyText" id="centeredText">I enjoy completing technical challenges.</div>
                        <br/><div className="bodyText">I am currently engrossed in computer programming and architecture, so that I can contribute to the digital infastructure being built.</div>
                    
           
                </div>
            </div>

            <div className="FlexPage hiddenPage">
            <img  alt="queens" id ="queens"/>
                <div className="pageTitle">Education</div>

                <div className="textBorder">
                    <ul><li className="bodyText">Queen's Univeristy: BASc Mechanical Engineering </li>

                    </ul>
                </div>
            </div>
    
            
        </div>
            )
}