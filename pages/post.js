//import {withRouter} from 'next/router';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

// import and use the 'withRouter()' function from 'next/router'
// this will inject the Next.js router as a property
// in this case, we use the router's 'query' object, which has the query string pararms
// now we can get the title with rops.router.query.title

// const Page = withRouter(props => (
//     <Layout>
//         <h1>{props.router.query.title}</h1>
//         <p>This is the blog post content.</p>
//     </Layout>
// ));

// export default Page;

const Post = props => (
    <Layout>
        <h1>{props.show.name}</h1>
    </Layout>
);

Post.getInitialProps = async function(context) {
    const {id} = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return {show};
};

export default Post;
