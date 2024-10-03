import React, { useState } from 'react';
import './ContemporaryDramaPage.css';

const dramas = [
  {
    title: 'The Shape of Things',
    author: 'Neil LaBute',
    description: 'A sharp and provocative examination of relationships and the nature of art.',
  },
  {
    title: 'Clybourne Park',
    author: 'Bruce Norris',
    description: 'A powerful satire on race and real estate in America.',
  },
  {
    title: 'August: Osage County',
    author: 'Tracy Letts',
    description: 'A darkly comedic look at a dysfunctional family confronting their past.',
  },
  {
    title: 'The Humans',
    author: 'Stephen Karam',
    description: 'An intense and poignant family drama that takes place during a Thanksgiving dinner.',
  },
  {
    title: 'Sweat',
    author: 'Lynn Nottage',
    description: 'A gripping story of working-class Americans facing economic hardship and social division.',
  },
  { title: 'Curious Incident of the Dog in the Night-Time', author: 'Simon Stephens', description: 'A mystery surrounding the life of a boy with an extraordinary mind.' },
  { title: 'A Doll’s House, Part 2', author: 'Lucas Hnath', description: 'A modern take on the aftermath of the original classic.' },
  { title: 'Disgraced', author: 'Ayad Akhtar', description: 'A drama that delves into identity, race, and religion in modern America.' }

];

const faqs = [
  {
    question: 'What defines contemporary drama?',
    answer: 'Contemporary drama refers to plays written in the present day that reflect current societal issues and relationships. It tends to focus on realism and often portrays complex characters and situations.',
  },
  {
    question: 'What are some popular themes in contemporary drama?',
    answer: 'Common themes in contemporary drama include identity, race, family dynamics, economic hardship, and social justice.',
  },
  {
    question: 'How do contemporary plays differ from classic ones?',
    answer: 'Contemporary plays often deal with more modern issues, use more conversational language, and incorporate different storytelling techniques compared to classic plays, which typically follow stricter structures and focus on universal themes.',
  },
  {
    question: 'Why is contemporary drama important?',
    answer: 'Contemporary drama serves as a mirror of current society, offering insight into the struggles, joys, and complexities of modern life. It also encourages dialogue and reflection on social and political issues.',
  },
];

const ContemporaryDramaPage = () => {
  const [selectedDrama, setSelectedDrama] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  const openModal = (drama) => {
    setSelectedDrama(drama);
  };

  const closeModal = () => {
    setSelectedDrama(null);
  };

  const toggleFAQ = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="contemporary-drama-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src="https://videos.pexels.com/video-files/28041354/12289815_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay-content">
        <header className="contemporary-drama-header">
          <h1 style={{marginTop:"100px"}}>Contemporary Drama Highlights</h1>
          <p>Explore powerful narratives and themes in modern drama.</p>
        </header>

        {/* Drama Cards Section */}
        <section className="contemporary-drama-books">
          {dramas.map((drama, index) => (
            <div className="book" key={index} onClick={() => openModal(drama)}>
              <h2>{drama.title}</h2>
              <p><strong>By: {drama.author}</strong></p>
              <p>{drama.description.substring(0, 60)}...</p> {/* Preview text */}
            </div>
          ))}
        </section>

        {/* Modal for Drama Details */}
        {selectedDrama && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>{selectedDrama.title}</h2>
              <p><strong>Author: {selectedDrama.author}</strong></p>
              <p>{selectedDrama.description}</p>
            </div>
          </div>
        )}

        {/* FAQs Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span>{openQuestion === index ? '-' : '+'}</span>
              </div>
              {openQuestion === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ContemporaryDramaPage;
