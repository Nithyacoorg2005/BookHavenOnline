import React, { useState } from 'react';
import './NovelsSection.css';


const novelsByLanguage = {
  English: [
    { title: 'The Great Gatsby', pdf: '/the-great-gatsby.pdf', img: 'https://th.bing.com/th/id/OIP.jdUu47Ll9uvA5JiCwGjbHgHaLe?w=484&h=750&rs=1&pid=ImgDetMain' },
    { title: '1984', pdf: 'https://ia801207.us.archive.org/BookReader/BookReaderImages.php?zip=/21/items/GeorgeOrwells1984/1984_jp2.zip&file=1984_jp2/1984_0086.jp2&id=GeorgeOrwells1984&scale=4&rotate=0', img: 'https://th.bing.com/th/id/R.3ffafed02590ab68cfbea0e20ef4de54?rik=ojDheIm0VNobyw&riu=http%3a%2f%2fwww.vortexcultural.com.br%2fimages%2f2012%2f07%2f1984.jpg&ehk=V1eOL4eYWhVF9ffhc2juoP6yhKCzH1zxmS5hhtev050%3d&risl=&pid=ImgRaw&r=0' },
    { title: 'Pride and Prejudice', pdf: '/pride-prejudice.pdf', img: 'https://m.media-amazon.com/images/I/51DPoWNY28L.jpg' },
    { title: 'To Kill a Mockingbird', pdf: '/to-kill-a-mockingbird.pdf', img: 'https://blogger.googleusercontent.com/img/a/AVvXsEhS_bNwaldGVDCgoSKmV7ExtEMnCCA2--_ZncMtidcStQMX-gxhja-Qd4qlF-TeMq2YNqzHGjLuDj0wcxh_hSWQT1jH26OXsMIj6pYLPLYewghg4dpZMhf-ev40V7h2ps9VPDKnD-L3LftV3wDUCUBCx_3mkqms1iW65-DkVMYoLt78_K2ovMowJCjo=w262-h400' },
    { title: 'The Catcher in the Rye', pdf: '/catcher-in-the-rye.pdf', img: 'https://images.wtmfiles.com/Catcher-in-the-Rye-book-cover_WEB_477x746.jpg' },
  ],
  French: [
    { title: 'Le Petit Prince', pdf: '/le-petit-prince.pdf', img: 'https://th.bing.com/th/id/R.e59f99c9cc84de1272891e28c677901d?rik=zcvPSC7UPN8Ogw&riu=http%3a%2f%2ffr.web.img2.acsta.net%2fpictures%2f15%2f06%2f29%2f15%2f24%2f495551.jpg&ehk=OHvm38zdUuxKHfAj0mQrByVt%2ftBPc%2bIs0ab9TuM2fRo%3d&risl=&pid=ImgRaw&r=0' },
    { title: 'Les Misérables', pdf: '/les-miserables.pdf', img: 'https://i.pinimg.com/originals/e8/d5/bc/e8d5bca12fcb9e1dc0e82acee7beccbd.jpg' },
    { title: 'Madame Bovary', pdf: '/madame-bovary.pdf', img: 'https://th.bing.com/th/id/R.fa966306630a6d29a55dcbc9e4091e69?rik=IaNbie5AI4hC9Q&riu=http%3a%2f%2flanguagetrainers.com%2freviews%2fbook-reviews%2fuploads%2f5679-madame+bovary+cover.jpg&ehk=vE6m10XhLIOX5E8Xdhlw7V5TgKNXo5ROzpWctDJbLtg%3d&risl=&pid=ImgRaw&r=0' },
    { title: 'L’Étranger', pdf: '/l-etranger.pdf', img: 'https://th.bing.com/th/id/OIP.BJKVplwsInwR5AKLz8FB_gHaMO?rs=1&pid=ImgDetMain' },
    { title: 'Notre-Dame de Paris', pdf: '/notre-dame.pdf', img: 'https://www.globalgreyebooks.com/content/book-covers/victor-hugo_notre-dame-de-paris-large.jpg' },
  ],
  Spanish: [
    { title: 'Don Quixote', pdf: '/don-quixote.pdf', img: 'https://rupapublications.co.in/wp-content/uploads/2022/12/Don-Quixote-COVER-663x1024.jpg' },
    { title: 'One Hundred Years of Solitude', pdf: '/hundred-years-of-solitude.pdf', img: 'https://th.bing.com/th/id/R.8697cc74db5911afdc6e83680530401b?rik=1vDwtG3ci2QYLg&riu=http%3a%2f%2fdwcp78yw3i6ob.cloudfront.net%2fwp-content%2fuploads%2f2016%2f12%2f12162813%2f100_Years_First_Ed_Hi_Res-768x1153.jpg&ehk=%2b6OxuEL8iXKiqX9LZgGO6Tac3AslNULuU8MjLqgFkYU%3d&risl=&pid=ImgRaw&r=0' },
    { title: 'The Shadow of the Wind', pdf: '/shadow-of-the-wind.pdf', img: 'https://i.pinimg.com/736x/99/6b/1a/996b1a484ca909f8f92f71451f8913f7.jpg' },
    { title: 'The Alchemist', pdf: '/the-alchemist.pdf', img: 'https://th.bing.com/th/id/OIP.4e1QFdOlXG9h9tnoctE5eAHaLO?rs=1&pid=ImgDetMain' },
    { title: 'Love in the Time of Cholera', pdf: '/love-in-the-time-of-cholera.pdf', img: 'https://th.bing.com/th/id/OIP._YbI41vA7m75dX1UwEjSrAAAAA?rs=1&pid=ImgDetMain' },
  ],


};

const NovelSection = () => {
  return (
    <div className="novel-section">
      <h2 style={{fontSize:"40px",padding:"30px",textAlign:"center",color:"green"}}>Novels by Language</h2>

      {Object.keys(novelsByLanguage).map((language) => (
        <div key={language} className="language-section">
          <h3>{language}</h3>
          <div className="novels">
            {novelsByLanguage[language].map((novel, index) => (
              <div key={index} className="novel-card">
                <img src={novel.img} alt={novel.title} className="novel-image" />
                <h4>{novel.title}</h4>
                <a href={novel.pdf} download>
                  <button className="read-button">Download PDF</button>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  
  );
};

export default NovelSection;
