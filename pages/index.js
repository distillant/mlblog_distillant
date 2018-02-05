import React, { Component } from 'react'
import Heading from '../components/Heading/Heading';

import {ArticleList} from '../components/ArticleList/ArticleList';

var articles=[{
    "id" : "2c0f759c-1440-4c95-9669-0dcfb364127d",
    "title" : "My Blog Post",
    "content" : "Some content for a blog post.",
    "username" : "sampleUser",
    "datetime" : "2016-06-30T19:13:39+00:00"
},{title:"Hello World!"}];
const ArticlesPage = () => (
    <div>
       <Heading></Heading>
        <ArticleList articles={articles} />
        <style jsx global>{`
      @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
      body {
            margin:0;
            padding: 0;
      }

    `}</style>
    </div>


);

export default ArticlesPage;
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