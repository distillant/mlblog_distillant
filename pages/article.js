/**
 * Created by patrick conroy on 2/6/18.
 */
import ArticleContent from '../components/ArticleContent/ArticleContent';
const article = require("../testData/article");
import Layout from '../components/Layout/index';

const ArticlePage = () => (
    <div>
        <Layout article={article}>
            <ArticleContent content={article.content} />
        </Layout>

    </div>
);

export default ArticlePage;