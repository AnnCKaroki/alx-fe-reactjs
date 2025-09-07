

function Footer() {
    const footerStyle = {
        backgroundColor: '#282c34',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
    };
    return (
        <footer style={footerStyle}>
            <p>© 2023 City Lovers</p>
        </footer>
    );
}

export default Footer;
