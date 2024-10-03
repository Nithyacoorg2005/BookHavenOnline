import React from "react";
import "./FantasyPage.css"; // External CSS for styling

const awardWinningFantasy = [
  { title: "The Name of the Wind", author: "Patrick Rothfuss", cover: "https://tolstoytherapy.com/wp-content/uploads/2023/09/the-name-of-the-wind.jpg", award: "Best Debut Fantasy Novel" },
  { title: "The Way of Kings", author: "Brandon Sanderson", cover: "https://th.bing.com/th/id/OIP.eSmnpHz1iDcPYa1JhV5deQAAAA?rs=1&pid=ImgDetMain", award: "Epic Fantasy Award" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", cover: "https://assets.nflxext.com/us/boxshots/ghd/70281532.jpg", award: "Classic Fantasy Award" },
  { title: "A Game of Thrones", author: "George R.R. Martin", cover: "https://th.bing.com/th/id/OIP.lKpFxgZ-jNULlsim7p_PgAHaK-?rs=1&pid=ImgDetMain", award: "Fantasy World Building Award" },
  { title: "Mistborn", author: "Brandon Sanderson", cover: "https://lh6.googleusercontent.com/UaOgfyGPtkd6xqKCugqyzam2pBmbwOIGdebAdS9hNgEsrAkSzLMHg8-uBRGvLzy3-YJxiIKjHiBXz1yqzfeDrhMJPbeSqUvj28yPcn28t-LSdn44NJYT2ry04ctKfbMz_w2Oj8mZ", award: "High Fantasy Award" },
];

const FantasyPage = () => {
  return (
    <div className="fantasy-page">
      {/* Background video */}
      <video autoPlay muted loop className="background-video">
        <source src="https://videos.pexels.com/video-files/17564179/17564179-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <header className="fantasy-header">
        <h1 style={{marginTop:"50px"}} className="page-title">The World of Fantasy</h1>
        <p className="intro-text">
        Fantasy novels transport readers to magical worlds filled with epic adventures and powerful characters. These stories captivate with Book Haven Online. 
        </p>
      </header>

      {/* Fantasy Award-Winning Books Section */}
      <section className="fantasy-awards">
        <h2>Award-Winning Fantasy Novels</h2>
        <div className="award-novels-grid">
          {awardWinningFantasy.map((novel, index) => (
            <div key={index} className="novel-card">
              <img src={novel.cover} alt={novel.title} className="novel-cover" />
              <div className="novel-info">
                <h3>{novel.title}</h3>
                <p>by {novel.author}</p>
                <p className="award-text">Award: {novel.award}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fantasy Genre Paragraphs */}
      <section className="fantasy-paragraphs">
        <h2>Why We Love Fantasy</h2>
        <p>
          The fantasy genre allows us to escape into worlds where anything is possible. From epic quests to ancient prophecies, the genre has a way of reigniting our imagination.
        </p>
        <p>
          Whether you are new to fantasy or a long-time fan, the genre continues to evolve, offering fresh perspectives and groundbreaking stories.
        </p>
      </section>
    </div>
  );
};

export default FantasyPage;
