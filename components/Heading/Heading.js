/**
 * Created by patrick conroy on 2/4/18.
 */

import React, { Component } from 'react'

const HeroBlock=() =>(
     <div>
         <div className="hero-block" >
             <h1 className="page-title">PAGE_TITLE</h1>
         </div>
         <style jsx>{`
             .hero-block
             {
                position:relative;
                width:100%;
                background-color:black;
                background-image: url("/static/home-bg.jpg");
                height:448px;
                margin-right: 0;
                margin-left: 0;
                background-size:100%;
             }
             .page-title
             {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-50%);
                    color: #fff;
                    text-shadow: none;
                    font-size: 50px;
                    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
             }
             h1
             {
                margin:0;
             }
             @media only screen and (min-width: 768px)
            .page-title {
                font-size: 80px;
            }

         `}
         </style>
     </div>

);

export default HeroBlock;