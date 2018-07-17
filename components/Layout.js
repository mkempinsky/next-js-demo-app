import Header from './Header';

const layoutStyle = {
    border: '2px solid #ccc',
    padding: '10px 50px'
};

const Layout = props => {
    return (
        <div style={layoutStyle}>
            <Header />
            {props.children}
        </div>
    );
};
export default Layout;
