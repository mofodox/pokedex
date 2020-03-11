import SEO from './SEO'
import Header from './Header'

const Layout = props => {
    return (
        <div>
            <SEO title={props.pageTitle}/>
            <Header />
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default Layout