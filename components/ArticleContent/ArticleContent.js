import {connect} from "react-redux";

/**
 * Created by patrick conroy on 2/6/18.
 */

const ArticleContent = ({article}) =>(
    <div className="article-content">
        <p >{article.content}</p>

    <style jsx>
        {`
        .article-content
        {
            margin-left:15%
            width:66.67%;
         }
         p
         {
            font-family: 'Lora', 'Times New Roman', serif;
            font-size: 20px;
            line-height: 1.5;
            margin: 30px 0;
            color:#404040;
         }
         `}
    </style>
    </div>
)



export default connect(state => state)(ArticleContent)
