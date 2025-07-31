
import React from 'react';

const Header = () => {
    return (
        <header id="home" className="bg-primary text-white text-center p-5">
            <div className="container">
                <h1 className="display-4">Merhaba, Ben Eymen</h1>
                <p className="lead">Yazılım Geliştirici | Web Tasarımcısı</p>
                <a href="#projects" className="btn btn-light btn-lg">Projelerimi Gör</a>
            </div>
        </header>
    );
}

export default Header;
