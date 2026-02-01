import './home.css'
import Face from './assets/Face.png'

function Home() {

  return (
    <>
    
        <div id="home">
            <div className="home-box">
                <div >
                  <p style={{fontSize: '30px', fontWeight: 'bold'}}>About Louay Helou's Portfolio!</p>
                  <p>This space offers a snapshot of my journey, skills, and the projects I have built along the way. Here, you will find information about my background, education, and professional experience, as well as an overview of my technical skills and the work I have contributed to across different fields. Each project reflects not only what I have built, but also how I approach problem-solving, learning, and continuous improvement.

<br></br><br></br>Beyond my professional work, this site also offers a more personal look at who I am. I share my interests, hobbies, and activities that inspire me outside of work, as they play an important role in shaping how I think, create, and grow. Whether you are here to explore my projects, learn more about my skills, or simply get to know me better, I hope this site gives you a clear and authentic picture of my journey.</p>
                </div>
                <div className='face'>
                  <img style={{borderRadius: '50%', border: '2px solid white',  backgroundColor: 'grey'}} src={Face} alt="Face" />
                </div>
            </div>
           
            
        </div>

     
    </>
  )
}

export default Home
