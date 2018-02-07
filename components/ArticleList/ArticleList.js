/**
 * Created by patrick conroy on 2/4/18.
 */
import React, { Component } from 'react'
import {connect} from 'react-redux'
import ArticleListItem from './ArticleListItem';

const ArticleList= ({articles})=>{
    render:{
        return(
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
        );
    }
}



export default connect(state => state)(ArticleList)
