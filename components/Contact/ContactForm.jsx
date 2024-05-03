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
        <div className="form-row">        
            <div className="form-group">
                <input
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    type="text"
                    className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
                    {...register('firstname', { required: 'First name is required.' })}
                />
                {errors.firstname && <p className="error-message">{errors.firstname.message}</p>}
            </div>
            <div className="form-group">
                <input
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    type="text"
                    className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
                    {...register('lastname', { required: 'Last name is required.' })}
                />
                {errors.lastname && <p className="error-message">{errors.lastname.message}</p>}
            </div>
        </div>

        <div className="form-row">
            <div className="form-group">
                
            <input
                id="title"
                name="title"
                placeholder="Title"
                type="text"
                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                {...register('title')} // This field is not marked as required
            />
            {errors.title && <p className="error-message">{errors.title.message}</p>}
            </div>
            <div className="form-group">
            <input
                id="company"
                name="company"
                placeholder="Company"
                type="text"
                className={`form-control ${errors.company ? 'is-invalid' : ''}`}
                {...register('company')} // This field is not marked as required
            />
            {errors.company && <p className="error-message">{errors.company.message}</p>}
            </div>
        </div>

        <div className="form-row">
            <div className="form-group">
            <input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                {...register('email', { required: 'Email is required.', pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
            <div className="form-group">
            <input
                id="phone"
                name="phone"
                placeholder="Phone Number"
                type="tel"
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                {...register('phone', {
                required: 'Phone number is required.',
                pattern: /^\+?(\d+)?[\d\s]+$/i, // Example pattern for phone numbers
                })}
            />
            {errors.phone && <p className="error-message">{errors.phone.message}</p>}
            </div>
        </div>

        <div className="form-row">
            <div className="form-group">
            <input
                id="country"
                name="country"
                placeholder="Country"
                type="text"
                className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                {...register('country', { required: 'Country is required.' })}
            />
            {errors.country && <p className="error-message">{errors.country.message}</p>}
            </div>
            <div className="form-group">
                <div>
                    <textarea
                    id="content"
                    name="content"
                    placeholder="Message"
                    className={`form-control ${errors.content ? 'is-invalid' : ''}`}
                    {...register('content', { required: 'Content is required.' })}
                />
                </div>

            {errors.content && <p className="error-message">{errors.content.message}</p>}
            </div>
        </div>


        <div className="form-group">
          <button type="submit" className="btn btn-send">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
