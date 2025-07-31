
import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="text-center mb-4">İletişim</h2>
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Adınız" />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Email Adresiniz" />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" rows="5" placeholder="Mesajınız"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Gönder</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
