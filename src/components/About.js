import React,{useState} from 'react';



const About = () => {
    const [style,setstyle] = useState({
            color: 'white',
            backgroundColor : 'black',
        })

    const [buttontext,setbuttontext] = useState('enable dark mode')
    const enabledarkmode=()=>{
        if(style.color==='white'){
            setstyle ({
                color: 'black',
                backgroundColor : 'white',
            }) 
            setbuttontext('enable dark mode')
        }else{
            setstyle  ({
                color: 'white',
                backgroundColor : 'black',
            })
            setbuttontext('enable light mode')
        }
    }

  return (
    <div className='container' style={style}>
    <h1>About Us</h1>
      <div class="accordion" id="accordionExample" >
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" style={style} data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" style={style} data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed"  style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" style={style} data-bs-parent="#accordionExample">
      <div class="accordion-body">



        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

<div className='container my-3' >
<button type='button' class='btn btn-primary' onClick={enabledarkmode}>{buttontext}</button>
</div>

    </div>
  );
}

export default About;
