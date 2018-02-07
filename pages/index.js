import React, { Component } from 'react'
import Layout from '../components/Layout/index';

import ArticleList from '../components/ArticleList/ArticleList';
import {loadArticles, connectToFirebase} from '../actions'
import {withReduxSaga} from '../store'

const HomePage = () => (
    <div>
        <Layout   >
        <ArticleList  />
        </Layout>
    </div>
);


HomePage.getInitialProps= async   ({store}) => {
    store.dispatch(loadArticles())


}

/*
HomePage.getInitialProps = async () =>  {
    const db = await connectToDB();


    const articles =await db.child('articles').once('value')
    return {articles: JSON.stringify(articles)}
}*/

export default withReduxSaga(HomePage)

