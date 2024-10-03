import React from 'react';
import './DramaPage.css'; // Add styles for the layout

const DramaPage = () => {
  return (
    <div className="drama-container">

      <div className="drama-content">
        <header className="drama-header">
          <h1 style={{marginTop:"20px"}}>Drama</h1>
          <p>Explore the world of intense emotions and thought-provoking stories in the drama genre.</p>
        </header>

        {/* Drama Books Section */}
        <section className="drama-books">
          <div className="book">
            <img src="https://m.media-amazon.com/images/M/MV5BMzcxMmU3ZjAtMGM1Yy00MTY3LWJjYzgtOTRiYzQzZGVjNGIwXkEyXkFqcGdeQXVyNzIzODM3ODQ@._V1_FMjpg_UX1000_.jpg" alt="Death of a Salesman" className="book-image" />
            <h2>Death of a Salesman</h2>
            <p>By Arthur Miller</p>
            {/* <p>A timeless drama about the American Dream and the struggles of an aging salesman.</p> */}
          </div>

          <div className="book">
            <img src="https://image.tmdb.org/t/p/original/9wcDK2lh9TlOy0hgf1wBi76SgBs.jpg" alt="A Streetcar Named Desire" className="book-image" />
            <h2>A Streetcar Named Desire</h2>
            <p>By Tennessee Williams</p>
            {/* <p>A story of class conflict, desire, and mental instability in New Orleans.</p> */}
          </div>

          <div className="book">
            <img src="https://th.bing.com/th/id/OIP.HPFIWkZiiBhhFaYBGCc72wHaLr?rs=1&pid=ImgDetMain" alt="Hamlet" className="book-image" />
            <h2>Hamlet</h2>
            <p>By William Shakespeare</p>
            {/* <p>A tale of revenge, tragedy, and moral dilemmas.</p> */}
          </div>

          <div className="book">
            <img src="https://th.bing.com/th/id/R.7ef826a82e027282c5f2ba74a707eaa7?rik=VHCY0pKAgNFurQ&riu=http%3a%2f%2fstatic.rogerebert.com%2fuploads%2fmovie%2fmovie_poster%2fthe-crucible-1996%2flarge_rROwZDWVosBicyARWwB1GAAnJqO.jpg&ehk=dSm1ghy4ly9hg%2bsxN5iL1mCd%2bDv%2buXVY4JvwxqyOfJU%3d&risl=&pid=ImgRaw&r=0" alt="The Crucible" className="book-image" />
            <h2>The Crucible</h2>
            <p>By Arthur Miller</p>
           
          </div>

          <div className="book">
            <img src="https://th.bing.com/th/id/R.0e51df1c57fa11719908a8bc46a54e3f?rik=32y4oFtB0TGDFA&riu=http%3a%2f%2fwww.judecollins.com%2fwp-content%2fuploads%2f2015%2f10%2fGodot2431.jpg&ehk=l3S1Vv%2fh1VmRVNfvUN05F7elXIUf%2fke815vb%2f%2fHf3Uw%3d&risl=&pid=ImgRaw&r=0" alt="Waiting for Godot" className="book-image" />
            <h2>Waiting for Godot</h2>
            <p>By Samuel Beckett</p>
            {/* <p>A groundbreaking play that explores existentialism and the human condition.</p> */}
          </div>

          <div className="book">
            <img src="https://th.bing.com/th/id/OIP.7u4Tn2JgyLILWFcwZPdRTQHaL1?rs=1&pid=ImgDetMain" alt="Othello" className="book-image" />
            <h2>Othello</h2>
            <p>By William Shakespeare</p>
            {/* <p>A story of jealousy, manipulation, and tragedy.</p> */}
          </div>

          <div className="book">
            <img src="https://m.media-amazon.com/images/M/MV5BMDkwNjk1YmUtYzcwMy00NmYwLWI4NjEtOWM0NTUyZDZjZjk4XkEyXkFqcGdeQXVyMjI3NDAyNg@@._V1_FMjpg_UX1000_.jpg" alt="Long Day's Journey Into Night" className="book-image" />
            <h2>Long Day's Journey Into Night</h2>
            <p>By Eugene O'Neill</p>
            {/* <p>A semi-autobiographical exploration of addiction and family dynamics.</p> */}
          </div>

          <div className="book">
            <img src="https://m.media-amazon.com/images/M/MV5BNDYwYTY4MzgtMDU4NC00ZGYyLTkzMDQtZjE4NTY0ZWIwMjgyXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_FMjpg_UX1000_.jpg" alt="Macbeth" className="book-image" />
            <h2>Macbeth</h2>
            <p>By William Shakespeare</p>
            {/* <p>A gripping story of ambition, power, and downfall.</p> */}
          </div>

          
         
        </section>
      </div>
    </div>
  );
};

export default DramaPage;
