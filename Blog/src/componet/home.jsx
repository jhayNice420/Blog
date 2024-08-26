import images from './pic/woman.avif'
import profile from './pic/profile.jpg'
import cardPic1 from './pic/cardPic1.jpg'
import cardPic2 from './pic/cardPic2.jpg'
import cardPic3 from './pic/cardPic3.png'
import cardPic4 from './pic/cardPic4.png'
import sidepic1 from './pic/sidepic1.png'
import sidepic2 from './pic/sidepic2.png'
import sidepic3 from './pic/sidepic3.png'
import sidepic4 from './pic/sidepic4.png'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'

export default function Home (){
  
    return(
        <>
        <div className="homeDiv">
            {/* -------------------------Main Div----------------- */}
            <div className="mainDiv">
                <div style={{ textAlign:'center'}} className='imgDiv'> 
                    <img  src={images} alt="" />
                    <h4 style={{textTransform:'uppercase', margin:'25px 0'}}> Life Style</h4>
                    <h3 style={{fontSize:'25px',opacity:'0.8'}}> The Greatest Thing in The World is to Know <br />How to Belong to oneself</h3>
                    <p style={{margin:'10px 0',opacity:'0.6'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, doloribus id? Omnis magnam cupiditate maiores voluptatum quia reprehenderit rem dolores, ea nobis corrupti a cumque placeat at! Tenetur, saepe quas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ab cum, qui eligendi, molestias quaerat, quibusdam et non eius aliquid dolorem eveniet velit pariatur neque? Expedita rerum voluptatem amet sed. </p>
                    <button style={{color:'white', backgroundColor:'black', width:'120px', height:'40px', margin:'9px 0'}}> Click</button>
                </div>
                <div className='flex'>
                    <div className='fontList'>
                    <FontAwesomeIcon style={{padding:'0 10px '}} icon={faLinkedin}/>
                    <FontAwesomeIcon style={{padding:'0  10px '}}icon={faInstagram}/>
                    <FontAwesomeIcon  style={{padding:'0 10px '}}icon={faTwitter}/>
                    <FontAwesomeIcon style={{padding:'0 10px '}} icon={faFacebook}/>
                    </div>
                    <div className='fontList2'>
                    <FontAwesomeIcon style={{fontSize:'',color:'gray'}} icon={faFacebookMessenger}/>
                    {/* <FontAwesomeIcon icon={faHtml5}/> */}
                    </div>
                    <div className='navList' >
                        <ul>
                        <a href="">Classes </a>
                        <a href="">Discover</a>
                        <a href="">News</a>
                        </ul>
                    </div>
                </div>
                <div  className='mainCard'>
                    
                    <div   className='card2'> 
                        <img src={cardPic1} alt="" />
                        <div>
                            <h4 style={{textTransform:'uppercase', fontWeight:'bold',fontSize:'',margin:'25px 0'}}> Life Style</h4>
                            <h3 style={{opacity:'0.8'}}> The Greatest Thing in The  World is to Know How to Belong to oneself</h3>
                            <p style={{margin:'10px 0',opacity:'0.6'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, doloribus id? Omnis magnam cupiditate maiores voluptatum quia reprehenderit rem dolores, ea nobis corrupti a cumque placeat at! Tenetur, saepe quas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ab cum, qui eligendi, molestias quaerat, quibusdam et non eius aliquid dolorem eveniet velit pariatur neque? Expedita rerum voluptatem amet sed. </p>
                            <button style={{color:'white', backgroundColor:'black', width:'120px', height:'40px', margin:'9px 0'}}> Click</button>
                        </div>
                    </div> 

                    <div className='card2'>
                        <img src={cardPic2} alt="" />
                        <div>
                        <h4 style={{textTransform:'uppercase', fontWeight:'bold',fontSize:'',margin:'25px 0'}}> Life Style</h4>
                    <h3 style={{opacity:'0.8'}}> The Greatest Thing in The World is to Know How to Belong to oneself</h3>
                    <p style={{margin:'10px 0',opacity:'0.6'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, doloribus id? Omnis magnam cupiditate maiores voluptatum quia reprehenderit rem dolores, ea nobis corrupti a cumque placeat at! Tenetur, saepe quas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ab cum, qui eligendi, molestias quaerat, quibusdam et non eius aliquid dolorem eveniet velit pariatur neque? Expedita rerum voluptatem amet sed. </p>
                    <button style={{color:'white', backgroundColor:'black', width:'120px', height:'40px', margin:'9px 0'}}> Click</button>
                        </div>
                    </div>
                    <br />
                    <div className='card2'>
                         <img src={cardPic3} alt="" />
                        <div>
                        <h4 style={{textTransform:'uppercase', fontWeight:'bold',fontSize:'',margin:'25px 0'}}> Life Style</h4>
                    <h3 style={{opacity:'0.8'}}> The Greatest Thing in The World is to Know How to Belong to oneself</h3>
                    <p style={{margin:'10px 0',opacity:'0.6'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, doloribus id? Omnis magnam cupiditate maiores voluptatum quia reprehenderit rem dolores, ea nobis corrupti a cumque placeat at! Tenetur, saepe quas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ab cum, qui eligendi, molestias quaerat, quibusdam et non eius aliquid dolorem eveniet velit pariatur neque? Expedita rerum voluptatem amet sed. </p>
                    <button style={{color:'white', backgroundColor:'black', width:'120px', height:'40px', margin:'9px 0'}}> Click</button>
                        </div>
                    </div>
                    <div className='card2'>
                        <img src={cardPic4} alt="" />
                        <div>
                        <h4 style={{textTransform:'uppercase', fontWeight:'bold',fontSize:'',margin:'25px 0'}}> Life Style</h4>
                    <h3 style={{opacity:'0.8'}}> The Greatest Thing in The World is to Know How to Belong to oneself</h3>
                    <p style={{margin:'10px 0',opacity:'0.6'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, doloribus id? Omnis magnam cupiditate maiores voluptatum quia reprehenderit rem dolores, ea nobis corrupti a cumque placeat at! Tenetur, saepe quas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ab cum, qui eligendi, molestias quaerat, quibusdam et non eius aliquid dolorem eveniet velit pariatur neque? Expedita rerum voluptatem amet sed. </p>
                    <button style={{color:'white', backgroundColor:'black', width:'120px', height:'40px', margin:'9px 0'}}> Click</button>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* ---------------------------------Side Div----------------------- */}
            <div className="sideDiv">
                <div className='card'>
                    <h2 style={{margin:' 10px 0'}}>Profile</h2>
                    <img style={{margin:' 15px 0'}} src={profile} alt="" />
                    <strong style={{margin:' 15px 0', textTransform:'uppercase'}}><p>timothy jacob</p></strong>
                    <p style={{margin:' 20px 0'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto a aperiam quis eveniet sit eaque ratione voluptas architecto at delectus excepturi labore, laboriosam sunt atque, molestiae ipsam. Illo, libero et. </p>
                    <FontAwesomeIcon style={{padding:'10px'}} icon={faLinkedin}/>
                    <FontAwesomeIcon style={{padding:'10px'}}icon={faInstagram}/>
                    <FontAwesomeIcon  style={{padding:'10px'}}icon={faTwitter}/>
                    <FontAwesomeIcon style={{padding:'10px'}} icon={faFacebook}/>
                </div>
                <div className='sideDiv2'>
                    <p > Life Style</p>
                    <img src={sidepic1} alt="" />
                    <p> Flower</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nulla neque impedit hic accusantium asperiores dolore sapiente suscipit repudiandae incidunt nisi illum, eaque error doloremque! At labore totam et sequi?</p>
                    <button style={{color:'white', backgroundColor:'black', width:'100px', height:'30px', margin:'7px 0' }}> Click</button>
                </div>
                <div className='sideDiv3 '>
                        <p className='pp' style={{borderTop:'2px solid  rgb(221, 216, 216)'}}>life style</p>
                       
                        <div className='sideDiv3-0'> 
                             <div className='sideDiv3-1 '> 
                                <img style={{display:''}} src={sidepic3} alt="" /> 
                                <div className='TextBlock'>
                                     <p> life style</p>
                                </div>
                            </div>
                        </div>
                        <div className='sideDiv3-0'> 
                             <div className='sideDiv3-1 '> 
                                <img style={{display:''}} src={sidepic2} alt="" /> 
                                <div className='TextBlock'>
                                     <p> life style</p>
                                </div>
                            </div>
                        </div>
                        <div className='sideDiv3-0'> 
                             <div className='sideDiv3-1 '> 
                                <img style={{display:''}} src={sidepic4} alt="" /> 
                                <div className='TextBlock'>
                                     <p> life style</p>
                                </div>
                            </div>
                        </div>
                     
                </div>
                
                <div className='sideDiv2'>
                    <p> life style</p>
                   <FontAwesomeIcon className='sideicon' icon={faTwitter}/>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias amet aliquam exercitationem voluptatem saepe odio, nulla voluptas consectetur suscipit dicta esse? Veniam delectus debitis soluta in explicabo blanditiis excepturi cupiditate.</p>
                   <p>Since 1947</p>
                </div>
            </div>
        </div>
        
        </>
    )
} 