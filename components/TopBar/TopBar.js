/**
 * Created by patrick conroy on 2/5/18.
 */
const blogSettings=require('../../settings/settings.json');
const FontAwesome = require('react-fontawesome');
import Link from 'next/link'

const PageLink= ({page, onClick}) =>
    (
        <div className="page-link">
            {(typeof onClick==='function') ? (
                <a onClick={function(event) {

                    event.preventDefault();
                    onClick();
                    return false;
                }}>{page.menuTitle}</a>
            ): (
            <Link href={page}>
                <a>{(page.icon)? (<FontAwesome size="2x" name={page.icon}/>) : ""}
                    {page.menuTitle}</a>
            </Link>)}
            <style jsx>{`
             a
             {
                color: white;
                text-decoration:none;
                text-transform: uppercase;
                font-size: 12px;
                font-weight: 800;
                letter-spacing: 1px;
                font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

             }
             a:active
             {
                color: white;
             }
             .page-link {
                padding: 20px;

                display: inline-block;
                font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

            }

             `
            }
            </style>
        </div>
    )



const TopBar = (props) =>(
    <div id="topBar">
        <div className="blog-title">{blogSettings.blogTitle}</div>
        <div className="page-links">
            { //////Menu bar
                blogSettings.pages.map((page,i) =>(
                <PageLink page={page} key={i}></PageLink>)
            )
            }

            { ////login/Logoout Button
                (props.user && props.user.userName) ?
                    (<PageLink onClick={props.actions.logout}
                        page={ {"menuTitle": "Sign Out", "pageUrl":"signout"}}>
                    </PageLink>) :
                    (<PageLink onClick={props.actions.login}
                        page={{"menuTitle": "Sign In","pageUrl":"signin"}}>
                    </PageLink>)
                }
        </div>
        <style jsx>{`
             @media (min-width: 768px){
             #topBar
             {
                color:white;
                position:relative;
             }
             .blog-title
             {
                font-weight: 800;
                display:inline-block;
                position: absolute;
                left:0;
                font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                float: left;
                height: 50px;
                padding: 15px 15px;
                font-size: 18px;
                line-height: 20px;

             }
             .page-links
             {
                position: absolute;
                display:inline-block;
                right:0
             }
              }
             `}
        </style>
    </div>
);

export default TopBar;