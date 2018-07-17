import {withRouter} from 'next/router';
import Layout from '../components/Layout';

// import and use the 'withRouter()' function from 'next/router'
// this will inject the Next.js router as a property
// in this case, we use the router's 'query' object, which has the query string pararms
// now we can get the title with rops.router.query.title

const Page = withRouter(props => (
    <Layout>
        <h1>{props.router.query.title}</h1>
        <p>This is the blog post content.</p>
    </Layout>
));

export default Page;
