import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import './ContactForm.css'; // Import the CSS file
const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const { name, email, content } = data;

    try {
      const templateParams = {
        to_name: "MGIP_MailRoom", // Replace with the recipient's name if needed
        from_name: name,
        from_email: email,
        message: content,
      };


      console.log('Sending email with parameters:', templateParams);
        await emailjs.send('service_8y7ffb8', 'template_c0sp1un', templateParams, '-xU3zwG88VafQaApn');

      alert('Message sent successfully!');
      reset(); // Reset form fields after submission
    } catch (e) {
      console.error('Failed to send email:', e);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
<div className="contact-form-container">
  <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
    <div className="form-group">
      <label htmlFor="name" className="form-label">Name:</label>
      <input
        id="name"
        name="name"
        placeholder="Input your Name"
        type="text"
        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
        {...register('name', { required: true })}
      />
      {errors.name && <p className="error-message">Name is required.</p>}
    </div>
    <div className="form-group">
      <label htmlFor="email" className="form-label">Email:</label>
      <input
        id="email"
        name="email"
        placeholder="Email"
        type="text"
        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        {...register('email', { required: true })}
      />
      {errors.email && <p className="error-message">Email is required.</p>}
    </div>
    <div className="form-group">
      <label htmlFor="content" className="form-label">Content:</label>
      <textarea
        id="content"
        name="content"
        className={`form-control ${errors.content ? 'is-invalid' : ''}`}
        {...register('content', { required: true })}
      />
      {errors.content && <p className="error-message">Content is required.</p>}
    </div>
    <button type="submit" className="btn btn-send">Send Email</button>
  </form>
</div>

  );
};

export default ContactForm;
