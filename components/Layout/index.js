/**
 * Created by patrick conroy on 2/6/18.
 */

import Heading from '../Heading/Heading';
import {connect} from "react-redux";
import {login,logout} from '../../actions'
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
/*
const Layout=(props)=>(
    <div>
        <Heading actions={{login: props.login, store:props.logout}} user={props.user} article={props.article} page={props.page}/>
            {props.children}
        <style jsx global>{globalStyle}</style>

    </div>
)*/
const Layout=(props) =>{
    console.log("props",props)
    render:{
        return (
            <div>
                <Heading
                    actions={{login: function(){props.dispatch(login())},
                        logout: function(){props.dispatch(logout())}}}

                        user={props.user} article={props.article} page={props.page}/>
                {props.children}
                <style jsx global>{globalStyle}</style>

            </div>
        )
    }}


export default connect(state => state)(Layout)


