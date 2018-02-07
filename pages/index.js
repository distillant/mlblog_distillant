import React, { Component } from 'react'
import Layout from '../components/Layout/index';
import {ArticleList} from '../components/ArticleList/ArticleList';

const articles=require("../testData/articles")

const HomePage = () => (
    <div>
        <Layout page={{}}>
        <ArticleList articles={articles.articles} />
        </Layout>
    </div>
);

export default HomePage;
/*import connectToDB from '../db/connectToDB';



var Index= ({articles}) => (
    <div>Welcome to next.js!
    <p>Articles:
        {articles}
    </p>
    </div>
)

Index.getInitialProps = async () =>  {
    const db = await connectToDB();
    console.log("db",db);

    const articles =await db.child('articles').once('value')
    return {articles: JSON.stringify(articles)}
}

export default Index;

*/