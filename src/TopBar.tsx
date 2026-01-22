import './topBar.css'

function TopBar() {

  return (
    <>
    
        <div id="topBar">
            
            <div>
                <p style={{fontWeight: 'bold', fontSize: '2em'}}>Louay Helou</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.3em', paddingTop: '5px'}}>
                <p>Home</p>
                <p>About</p>
                <p>Skills</p>
                <p>Work</p>
                <p>Education</p>
                <p>Experience</p>
                <p>Contact</p> 
            </div>
            
        </div>

     
    </>
  )
}

export default TopBar
