import React from 'react';
import teamImage from '../images/images (1).jpeg';

export const AboutUs = () => {
  return (
    <section id="about-us" style={styles.container}>
      <div style={styles.textContainer}>
        <h2>About Us</h2>
        <p>
          Welcome to [Your Company Name], your trusted partner in maintaining pristine and inviting pools. With over [X years] of experience, our certified professionals are dedicated to providing top-notch pool cleaning and maintenance services tailored to meet your unique needs.
        </p>
        <p>
          We pride ourselves on using eco-friendly products and state-of-the-art equipment to ensure your pool remains a safe and enjoyable oasis year-round. Our commitment to excellence and customer satisfaction has made us a preferred choice for homeowners and businesses alike.
        </p>
        <p>
          Discover the [Your Company Name] difference today and let us help you keep your pool sparkling clean!
        </p>
      </div>
      <div style={styles.imageContainer}>
        <img src={teamImage} alt="Our team at work" style={styles.image} />
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    flexWrap: 'wrap', // Ensures responsiveness
  },
  textContainer: {
    flex: 1,
    paddingRight: '20px',
  },
  imageContainer: {
    flex: 1,
    textAlign: 'center', // Centers the image on smaller screens
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    maxWidth: '500px', // Limits the image size for larger screens
  },
};

