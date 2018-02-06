/**
 * Created by patrick conroy on 2/6/18.
 */

import Heading from '../Heading/Heading';

const globalStyle=`
      @import url("http://fonts.googleapis.com/css?family=Open+Sans:300i,400i,600i,700i,800i,400,300,600,700,800");
      @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
      @import url('https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i');

      body {
            margin:0;
            padding: 0;
            rgb(64, 64, 64);
      }

    `;
const Layout=(props)=>(
    <div>
        <Heading article={props.article} page={props.page}/>
            {props.children}
        <style jsx global>{globalStyle}</style>

    </div>
)
export default Layout;
