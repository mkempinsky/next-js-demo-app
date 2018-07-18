//import {withRouter} from 'next/router';
import React, {Component} from 'react';
import Link from 'next/link';
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

class Post extends Component {
    render() {
        const title = this.props.show.name;
        const premiered = this.props.show.premiered;
        const summary = this.props.show.summary;
        const network = this.props.show.network.name;

        return (
            <Layout>
                <Link href="/">
                    <a>Back</a>
                </Link>
                <h1>{title}</h1>
                <p>Network: {network}</p>
                <p>Premire Date: {premiered}</p>
                <p>{summary}</p>
                <img src={this.props.show.image.medium} />
                <style jsx>{`
                    li {
                        list-style: none;
                        margin: 5px 0;
                    }
                    h1,
                    p {
                        font-family: 'Arial';
                    }
                    a {
                        text-decoration: none;
                        color: blue;
                        font-family: 'Arial';
                    }

                    a:hover {
                        opacity: 0.6;
                    }
                    img {
                        box-shadow: -2px 3px 12px rgba(000, 000, 000, 0.5);
                        transition: all 0.3s;
                    }
                `}</style>
            </Layout>
        );
    }
}

Post.getInitialProps = async function(context) {
    const {id} = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
    console.log(show);
    console.log(`Fetched show: ${show.name}`);

    return {show};
};

export default Post;
