
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form gönderildi:', formData);
        // Burada bir e-posta hizmeti entegrasyonu yapabilirsiniz.
        alert('Mesajınız gönderildi!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="text-center mb-4">İletişim</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="name" placeholder="Adınız" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" name="email" placeholder="Email Adresiniz" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" name="message" rows="5" placeholder="Mesajınız" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Gönder</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
