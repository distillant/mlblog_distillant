/**
 * Created by patrick conroy on 2/4/18.
 */
import React, { Component } from 'react'
const ArticleListItem= (props) => (
    <h3>
        {props.article.title}
    </h3>
)
const ArticleList= (props)=>(
    <div>
        <h2>Blog Posts </h2>
        <ul>
            {props.articles.map((article, i) => {
                <ArticleListItem article={article} key={i}/>
            })}
        </ul>
    </div>
)

//export default ArticleListItem
export { ArticleListItem, ArticleList};