/**
 * Created by patrick conroy on 2/4/18.
 */
const blogSettings=require('../../settings/settings.json');
const FontAwesome = require('react-fontawesome');
import Link from 'next/link'
import React, { Component } from 'react'

const PageLink= ({page}) =>
(
    <div className="page-link">
        <Link href={"/"+page.pageUrl}>
            <a>{(page.icon)? (<FontAwesome size="2x" name={page.icon}/>) : ""}
                {page.menuTitle}</a>
        </Link>
        <style jsx>{`
             a
             {
                color: white;
                text-decoration:none;
                text-transform: uppercase;
                font-size: 12px;
                font-weight: 800;
                letter-spacing: 1px;
                font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

             }
             a:active
             {
                color: white;
             }
             .page-link {
                padding: 20px;

                display: inline-block;
                font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

            }

             `
        }
        </style>
    </div>
)


const TopBar = () =>(
    <div id="topBar">
        <div className="blog-title">{blogSettings.blogTitle}</div>
        <div className="page-links">
            {blogSettings.pages.map((page,i) =>(
                <PageLink page={page} key={i}></PageLink>)
            )
            }
        </div>
        <style jsx>{`
             @media (min-width: 768px){
             #topBar
             {
                color:white;
                position:relative;
             }
             .blog-title
             {
                font-weight: 800;
                display:inline-block;
                position: absolute;
                left:0;
                font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                float: left;
                height: 50px;
                padding: 15px 15px;
                font-size: 18px;
                line-height: 20px;

             }
             .page-links
             {
                position: absolute;
                display:inline-block;
                right:0
             }
              }
             `}
             </style>
    </div>
);


const HeroBlock=({page}) =>(
     <div>
         <div className="hero-block" >
             <TopBar/>
             <h1 className="page-title">PAGE_TITLE</h1>
         </div>
         <style jsx>{`
             .hero-block
             {
                background-color:black;
                background-image: url("/static/home-bg.jpg");
                background-position:center;
                background-size: cover;
                position:relative;
                height:398px;
                margin-right: 0;
                margin-left: 0;
                margin-bottom:50px;

             }

             .page-title
             {
                    font-size: 50px;
                    font-weight: 800;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-50%);
                    color: #fff;
                    text-shadow: none;
                    font-size: 50px;
                    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
             }
             @media (min-width: 768px)
             {
                 .page-title
                 {
                    font-size: 80px;
                 }
             }
             h1
             {
                margin:0;
             }
             @media only screen and (min-width: 768px)
             {
                .page-title {
                    font-size: 80px;
                }
            }
         `}
         </style>
     </div>

);

export default HeroBlock;