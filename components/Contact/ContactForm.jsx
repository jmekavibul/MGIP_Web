import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import './ContactForm.css'; // Ensure this CSS file has the required styles

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
        await emailjs.send('service_8y7ffb8', 'template_c0sp1un', data, '-xU3zwG88VafQaApn');
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
          <label htmlFor="title" className="form-label">Title (Optional)</label>
            <select            
                id="title"
                name="title"             
                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                {...register('title')}>
                    <option value="">Select</option>
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Dr">Dr</option>
            </select>
          {errors.title && <p className="error-message">{errors.title.message}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="firstname" className="form-label">First Name</label>
          <input
            id="firstname"
            name="firstname"
            placeholder="Enter your first name"
            type="text"
            className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
            {...register('firstname', { required: 'First name is required.' })}
          />
          {errors.firstname && <p className="error-message">{errors.firstname.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="lastname" className="form-label">Last Name (Optional)</label>
          <input
            id="lastname"
            name="lastname"
            placeholder="Enter your last name"
            type="text"
            className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
            {...register('lastname')}
          />
          {errors.lastname && <p className="error-message">{errors.lastname.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="company" className="form-label">Company Name (Optional)</label>
          <input
            id="company"
            name="company"
            placeholder="Enter your company name"
            type="text"
            className={`form-control ${errors.company ? 'is-invalid' : ''}`}
            {...register('company')}
          />
          {errors.company && <p className="error-message">{errors.company.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            name="email"
            placeholder="Enter your email"
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register('email', { required: 'Email is required.', pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            type="tel"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            {...register('phone', {
              required: 'Phone number is required.',
              pattern: /^\+?(\d+)?[\d\s]+$/i,
            })}
          />
          {errors.phone && <p className="error-message">{errors.phone.message}</p>}
        </div>

        <div className="form-group message full-width">
          <label htmlFor="content" className="form-label">Message</label>
          <textarea
            id="content"
            name="content"
            placeholder="Enter your message"
            className={`form-control message${errors.content ? 'is-invalid' : ''}`}
            {...register('content', { required: 'Message is required.' })}
          />
          {errors.content && <p className="error-message">{errors.content.message}</p>}
        </div>

        <div className="form-group full-width">
          <button type="submit" className="btn btn-send">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
