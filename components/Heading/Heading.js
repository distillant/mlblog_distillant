/**
 * Created by patrick conroy on 2/4/18.
 */
import React, { Component } from 'react';
import TopBar from '../TopBar/TopBar';

import moment from 'moment'
const formatArticleDate=(articleDate) =>{
    return moment(articleDate).format('MMMM Do YYYY')
}

    const TitleBlock =(props)  => {

            if (typeof props.page !== 'undefined')
            {
                const page=props.page
                return (
                    <div className="page-title">
                        <h1 >PAGE_TITLE</h1>
                        {(page && page.subTitle) ? (<div class="subtitle">
                            <hr/>
                            {page.subTitle}</div>) : ("")}
                        <style jsx>{`
                    .page-title
                    {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translateX(-50%) translateY(-50%);
                        color: #fff;
                    }
                    h1
                    {
                        font-size: 50px;
                    font-weight: 800;
                    text-shadow: none;
                    font-size: 50px;
                    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                }
                @media only screen and (min-width: 768px)
                {
                    .page-title {
                        font-size: 80px;
                        margin:0;
                }
                }`
                    }
                    </style>
                </div>
            )
        }
    else
        if (typeof props.article != 'undefined') {
            const article=props.article;
            return (
                <div className="page-title">
                    <h1 >{article.title}</h1>
                    <p>{(article.username) ? "Posted by "+article.username + " on ": "" }
                        {(article.datetime)? formatArticleDate(article.datetime):""}</p>
                    <style jsx>{`

                .page-title
                {
                    position: absolute;
                    top: 50%;
                    left: 25%;

                    color: #fff;
                }
                h1
                {
                    font-size: 35px;
                    font-weight: 800;
                    text-shadow: none;
                    font-size: 50px;
                    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                }
                p
                {
                font-family: 'Lora', 'Times New Roman', serif;

                    font-size: 20px;
                    font-style: italic;
                    margin-top: 0;
                    line-height: 1.5;
                    margin: 10px 0;
                    font-weight: 300;

                }
                @media (min-width: 768px)
                    {
                    .h1
                        {
                            font-size: 55x;
                        }
                    }
                    h1
                    {
                        margin:0;
                    }
                }`
                    }
                    </style>
                </div>)
        }
        else
            return null;

}

const HeroBlock=(props) => {
    var titleBlock=null;

    return (<div>
        <div className="hero-block">
            <TopBar/>
            {TitleBlock(props) }
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
         `}</style>
    </div>)

};

export default HeroBlock;