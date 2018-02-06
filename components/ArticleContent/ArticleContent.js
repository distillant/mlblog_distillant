/**
 * Created by patrick conroy on 2/6/18.
 */

const ArticleContent = ({content}) =>(
    <div className="article-content">
        <p dangerouslySetInnerHTML={{__html: content.replace(/\n/g,'<br/>')}}></p>

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

export default ArticleContent;
