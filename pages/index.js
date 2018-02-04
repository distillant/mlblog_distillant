import React, { Component } from 'react'
import Heading from '../components/Heading/Heading';

//import ArticleList from '../components/ArticleList/ArticleList';

const ArticlesPage = () => (
    <div>
       <Heading></Heading>
        <style jsx global>{`
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