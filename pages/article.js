/**
 * Created by patrick conroy on 2/6/18.
 */
import ArticleContent from '../components/ArticleContent/ArticleContent';


import Heading from '../components/Heading/Heading';

const content=`This is the excerpt.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget urna vitae velit eleifend interdum at ac nisi. In nec ligula lacus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu cursus erat, ut dapibus quam. Aliquam eleifend dolor vitae libero pharetra adipiscing. Etiam adipiscing dolor a quam tempor, eu convallis nulla varius. Aliquam sollicitudin risus a porta aliquam. Ut nec velit dolor. Proin eget leo lobortis, aliquam est sed, mollis mauris. Fusce vitae leo pretium massa accumsan condimentum. Fusce malesuada gravida lectus vel vulputate. Donec bibendum porta nibh ut aliquam.

    Sed lorem felis, congue non fringilla eu, aliquam eu eros. Curabitur orci libero, mollis sed semper vitae, adipiscing in lectus. Aenean non egestas odio. Donec sollicitudin nisi quis lorem gravida, in pharetra mauris fringilla. Duis sit amet faucibus dolor, id aliquam neque. In egestas, odio gravida tempor dictum, mauris felis faucibus purus, sit amet commodo lacus diam vitae est. Ut ut quam eget massa semper sodales. Aenean non ipsum cursus, blandit lectus in, ornare odio. Curabitur ultrices porttitor vulputate.`
const article={
    "id" : "2c0f759c-1440-4c95-9669-0dcfb364127d",
    "title" : "My Blog Post",
    "content" : content,
    "username" : "sampleUser",
    "datetime" : "2016-06-30T19:13:39+00:00"
};


const ArticlePage = () => (
    <div>
        <Heading article={article}></Heading>
        <ArticleContent content={article.content} />
        <style jsx global>{`
      @import url("http://fonts.googleapis.com/css?family=Open+Sans:300i,400i,600i,700i,800i,400,300,600,700,800");
      @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
      @import url('https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i');

      body {
            margin:0;
            padding: 0;
            rgb(64, 64, 64);
      }

    `}</style>
    </div>
);

export default ArticlePage;