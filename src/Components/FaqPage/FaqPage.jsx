import React, { useState } from 'react';
import './FaqPage.css'; // Import custom CSS for styling

const faqData = [
  {
    question: 'What is BookHavenOnline?',
    answer: 'BookHavenOnline is a virtual library offering an extensive collection of books in various genres. It aims to create a haven for readers across the world by providing easy access to literature and fostering a reading community.',
    media: 'https://media.tenor.com/RXEE5ub9R58AAAAi/confused-confused-face.gif'
  },
  {
    question: 'How can I download books?',
    answer: 'Simply navigate to the genre of your choice, select a book, and click the download button. You can download books in multiple formats like PDF, ePub, and more.',
    media: 'https://media1.tenor.com/m/GKefuiBm-GgAAAAC/im-downloading-nathan-brown.gif'
  },
  {
    question: 'Are there any membership fees?',
    answer: 'No, BookHavenOnline is completely free! However, users are welcome to support us through donations to keep the platform growing.',
    media: 'https://media1.tenor.com/m/ioszuS_e9tUAAAAC/no-fees-ryan-bergara.gif'
  },
  {
    question: 'Can I suggest books to add to the library?',
    answer: 'Yes, absolutely! We welcome recommendations from our readers. You can submit book suggestions through our contact page.',
    media: 'https://media1.tenor.com/m/Ia-DIiW9d-0AAAAC/the-book-of-pooh-suggestion-box.gif'
  }
];

const FaqPage = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className="faq-page-container">
      <header className="faq-header">
        <h1 style={{marginTop:"100px"}}>Frequently Asked Questions</h1>
        <p>Your questions, our answers — all in one place.</p>
      </header>

      <section className="faq-section">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              <h2>{faq.question}</h2>
              {selectedQuestion === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                  <img src={faq.media} alt="FAQ media" className="faq-media" />
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      <div className="video-section">
        <h2>BookHavenOnline - Learning Journey never ends....</h2>
        <video autoPlay loop muted className="faq-video">
          <source src="https://videos.pexels.com/video-files/5088104/5088104-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default FaqPage;
