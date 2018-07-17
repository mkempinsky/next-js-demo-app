import Link from 'next/link';

const headerStyles = {
    backgroundColor: 'lightBlue',
    padding: 20
};
const linkStyles = {
    padding: 10,
    color: '#fff'
};

const Header = () => {
    return (
        <div style={headerStyles}>
            <Link href="/">
                <a style={linkStyles}>Home</a>
            </Link>
            <Link href="/about">
                <a style={linkStyles}>About</a>
            </Link>
        </div>
    );
};
export default Header;
