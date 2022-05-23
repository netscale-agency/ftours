import React from 'react';
import CarouselContainer from './../components/slider/CarouselContainer';
import Footer  from './../components/footer/footer';
import './../styles/Naslovnica.css'
import Top1 from './../components/assets/imgs/budimpesta.jpg'
import Top2 from './../components/assets/imgs/ohrid.jpg'
import greece from './../components/assets/imgs/greece.jpg'
import istanbul from './../components/assets/imgs/istanbul.jpg'
import venecija from './../components/assets/imgs/venecija.jpg'
import prague from './../components/assets/imgs/prague.jpg'
import { SubHeader } from './SubHeader'

function Naslovnica() {
  return (
    <>
      <SubHeader />
      <CarouselContainer />
      <div className='input-container'>
        <input type='text' placeholder='From' className='z-index'></input>
        <input type='text' placeholder='To' className='z-index'></input>
        <button className='z-index'>Check</button>
      </div>
      <div className='euro-putovanja'>
          <h2 className='euro-txt'><a href='./putovanja'>Popularne destinacije</a></h2>
      </div>
      <div className='top2'>
        <div style={{backgroundImage:`url(${Top1})`, width:'100%', height:'400px', backgroundSize:'cover', position:'relative', zIndex:0}} className='radius'>
          
        </div>
       {/*} <div style={{position:'absolute', top:'0', left:'0', backgroundColor:'black', opacity:1, height:'100%', width:'100%', zIndex:10,}} className='overlay'>
            asdf
  </div>{*/}
        <img src={Top2} alt='ohrid'  className='radius'/>
      </div>
      <div className='top4'>
        <img src={greece} alt='greece' className='radius2' />
        <img src={istanbul} alt='istanbul' className='radius2' />
        <img src={venecija} alt='venecija' className='radius2' />
        <img src={prague} alt='prague' className='radius2' />
      </div>
      <h3 className='lorem-head'>LOREM IPSUM</h3>
      <div className='info'>
        <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu nibh eu odio vulputate lacinia eu a turpis. Curabitur at convallis augue, sit amet maximus sapien. Donec posuere, sem id dictum rutrum, quam lorem porttitor est, ut pellentesque magna ante nec tortor. Integer ut sapien fermentum, posuere erat non, gravida dolor. Duis et felis at libero aliquam cursus eget nec libero. Phasellus eu sodales ante. Proin imperdiet a massa nec pharetra. Nullam sit amet orci vel elit pretium pellentesque quis ut ante. Quisque a pellentesque magna. Nulla a malesuada nunc, eu vehicula lacus. Duis eget eros vestibulum, sollicitudin orci quis, tristique neque. Duis efficitur tortor ante, ut maximus arcu accumsan in. Fusce ac tellus purus.

Nam feugiat eros ac sapien tristique dapibus. Mauris tristique faucibus diam, sit amet cursus mi rutrum in. Nullam et ligula sit amet massa placerat pellentesque nec sed lacus. Suspendisse rutrum metus interdum ante efficitur lobortis. Vestibulum tortor felis, dictum sit amet finibus a, volutpat id orci. Phasellus suscipit lectus auctor ultricies molestie. Suspendisse ac nunc laoreet libero maximus pretium ut ac erat. Duis in nunc ornare, porttitor risus vel, egestas mi. Fusce a nibh pulvinar, porta quam non, egestas dui. Phasellus ornare, urna quis tincidunt pharetra, ligula ante auctor dui, a bibendum magna magna sed dolor.

Ut ac ultrices metus, nec placerat dolor. Maecenas lacinia malesuada ante at hendrerit. Donec a sem dignissim, venenatis enim in, lobortis urna. Duis ut eros lacinia, venenatis elit non, pharetra justo. Nam ornare, risus et scelerisque interdum, mi nibh condimentum magna, ut egestas justo ex vitae mi. Pellentesque ultricies luctus nibh, et facilisis neque efficitur eget. Integer lectus sapien, faucibus quis dapibus a, faucibus eget dui. Praesent congue libero eu tortor efficitur, eu commodo nisl tristique.

Donec non tortor tempus, efficitur nisl ut, tempus diam. Praesent at est vestibulum, iaculis tellus nec, ultricies ante. Sed finibus consectetur velit non vestibulum. Mauris nunc est, faucibus in massa pretium, malesuada volutpat ligula. Quisque egestas, dolor ac posuere lacinia, neque mi consectetur nisi, sed sodales sem nunc quis leo. Cras sagittis ante risus, eu fermentum nunc faucibus nec. Curabitur posuere id nisi sed ultrices. Vestibulum venenatis id massa id ornare. Phasellus ullamcorper nibh ligula, et gravida nibh pharetra a. Nullam ac magna in quam ultrices vestibulum et sed neque.

Proin in lobortis neque. Nullam pretium ligula at porttitor aliquam. Nullam viverra elit ac ligula pulvinar congue. Quisque iaculis, sem sit amet vehicula sodales, nibh felis condimentum sem, nec luctus sapien mauris id mi. Curabitur dictum risus non enim aliquet laoreet. Nam ac cursus nisi. Quisque mollis nec est ac luctus. Aliquam tincidunt posuere elit, id lacinia quam rutrum ac. Phasellus est ipsum, sollicitudin at elementum id, vulputate aliquam ex.</p>
      </div>
      <Footer />
    </>
  );
}

export default Naslovnica;