import React from 'react';
import './AboutUs.css'; // Import the CSS for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-header">
        <h1 style={{marginTop:"100px",color:"#ff6f61"}}>Welcome to BookHavenOnline</h1>
        <p>Your one-stop destination for a treasure trove of books in every genre.</p>
      </section>

      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          BookHavenOnline isn't just another virtual library. It’s a community of book lovers who
          come together to explore, discover, and share their love for stories that span
          generations, cultures, and genres.
        </p>

        <h2>Our Vision</h2>
        <p>
          We believe in the power of books to change lives. Whether you’re looking to escape into a
          fantasy world, learn something new, or find inspiration for your own story, we aim to
          provide a platform where every reader can find their next favorite read.
        </p>

        <h2>Why Choose BookHavenOnline?</h2>
        <ul style={{marginTop:"20px"}} className="unique-features">
          <li><strong>Vast Collection:</strong> From timeless classics to contemporary bestsellers, we offer something for everyone.</li>
          <li><strong>Downloadable Content:</strong> Enjoy easy access to downloadable books at your fingertips.</li>
          <li><strong>Interactive Experience:</strong> Explore curated reading lists, participate in discussions, and join a community of like-minded readers.</li>
          <li><strong>Multilingual Library:</strong> Dive into books from different languages and cultures, expanding your literary horizons.</li>
          <li><strong>Dynamic Content:</strong> Get recommendations, reviews, and even video previews of upcoming releases or award-winning movies.</li>
        </ul>

        <h2 style={{marginTop:"60px"}}>Our Journey</h2>
        <p>
          What started as a humble collection of books grew into a digital haven for book enthusiasts worldwide. Today, BookHavenOnline continues to expand its library and services, with an unwavering commitment to making reading accessible to all.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-member">
            <img src="https://images.pexels.com/photos/792725/pexels-photo-792725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team Member" />
            <h3>Nithyashree CS</h3>
            <p>Founder & Visionary</p>
          </div>
          <div className="team-member">
            <img src="https://images.pexels.com/photos/15390203/pexels-photo-15390203/free-photo-of-a-handsome-man-in-black-polo-shirt-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team Member" />
            <h3>Alex Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team Member" />
            <h3>Emily Turner</h3>
            <p>Content Curator</p>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <h2 style={{marginTop:"70px"}}>Our Mission</h2>
        <p style={{marginTop:"30px"}}>
          At BookHavenOnline, we strive to create an inclusive environment where every reader finds
          a book that speaks to them. We are committed to promoting diverse voices and genres,
          ensuring that literature from every corner of the world is just a click away.
        </p>
      </section>

      <section className="about-footer">
        <p>
          Join us on our journey as we build the world’s most vibrant virtual library.
        </p>
        <p>
          <strong>BookHavenOnline – Your Story Begins Here.</strong>
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
