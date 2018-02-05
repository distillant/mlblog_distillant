/**
 * Created by patrick conroy on 2/4/18.
 */
import React, { Component } from 'react'
import moment from 'moment'
const formatArticleDate=(articleDate) =>{
    return moment(articleDate).format('MMMM Do YYYY, h:mm:ss a')
}

const ArticleListItem= ({article}) => (
    <li>
        <h2>
        {article.title}
        </h2>
        <p>{(article.username) ? "Posted by "+article.username + " on ": "" }

            {(article.datetime)? formatArticleDate(article.datetime):""}</p>
        <hr />
        <style jsx>{`
        hr
        {
            margin-top: 20px;
            margin-bottom: 20px;
            border: 0;
            border-top: 1px solid #eee;
            display: block;
            unicode-bidi: isolate;
            -webkit-margin-before: 0.5em;
            -webkit-margin-after: 0.5em;
            -webkit-margin-start: auto;
            -webkit-margin-end: auto;
            overflow: hidden;
        }
        h2
        {
            margin-top: 30px;
            margin-bottom: 10px;
            font-size: 36px;
            font-weight:800;
            font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;;

        }
        p
        {
        font-family: 'Lora', 'Times New Roman', serif;
            color: #808080;
            font-size: 18px;
            font-style: italic;
            margin-top: 0;
            line-height: 1.5;
            margin: 30px 0;
        }
        `}</style>
    </li>
)
const ArticleList= ({articles})=>(
    <div className="article-list">
        <ul>
            {articles.map((article, i) => (

                    <ArticleListItem article={article} key={i}></ArticleListItem>
            ))
            }
        </ul>
        <style jsx>
        {`
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
            }
            .article-list
            {
                margin-left:50px;
            }

        `}
        </style>

    </div>
)

//export default ArticleListItem
export { ArticleListItem, ArticleList};