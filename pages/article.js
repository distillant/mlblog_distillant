/**
 * Created by patrick conroy on 2/6/18.
 */
import ArticleContent from '../components/ArticleContent/ArticleContent';
const article = require("../testData/article");
import Layout from '../components/Layout/index';
import {loadArticle} from "../actions";
import {withReduxSaga} from "../store";

const ArticlePage = () => (
    <div>
        <Layout >
            <ArticleContent  />
        </Layout>

    </div>
);


ArticlePage.getInitialProps= async ({store}) => {
    store.dispatch(loadArticle(1))


}



export default withReduxSaga(ArticlePage)
