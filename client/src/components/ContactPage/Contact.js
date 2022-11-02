import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_8ywc1rk', 'template_ka7ilwm', e.target, 'lqwVfpz-rZFrSOO8B')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div>
            <div className='container'>
                <form onSubmit={sendEmail}>
                    <div className='col-8 form-group mx-auto'>
                        <input type="text"
                            className='form-control'
                            placeholder='Name'
                            name='name' />
</div>
                        <div className='col-8 form-group pt-2 mx-auto'>
                            <input type="email"
                                className='form-control'
                                placeholder='Email address'
                                name='email' />
                        </div>

                        <div className='col-8 form-group pt-2 mx-auto'>
                            <input type="text"
                                className='form-control'
                                placeholder='Subject'
                                name='subject' />
                        </div>

                        <div className='col-8 form-group pt-2 mx-auto'>
                            <textarea type="text"
                                className='form-control'
                                placeholder='Message'
                                name='message'></textarea>
                        </div>
                        <div className='col-8 pt-3 mx-auto'>
                            <input type="submit" className='btn btn-info' value='Send Message'></input>
                        </div>
                </form>
            </div>
        </div>
    )
};
