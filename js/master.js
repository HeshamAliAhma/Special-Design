// start change background

// select landing page element 
let LandingPage =  document.querySelector(".landing-page");

// Get Array of Imgs
let imgsArray = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];

setInterval(()=>{

  // get random number 
  let randomNumber = Math.floor(Math.random() * imgsArray.length);
  
  // change background image url 
  LandingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';

},9000)

// end change background














// Start A Open And Close Window 


// select Setting Box element 
let settingsBox =  document.querySelector(".settings-box");

// select Setting Box element 
let Gear =  document.querySelector(".fa-gear"); 

// select Toggle Setting element 
let toggleSettings =  document.querySelector(".toggle-settings"); 


// function to open and close window
toggleSettings.addEventListener("click", () =>{
  settingsBox.classList.toggle("open");
  Gear.classList.toggle("fa-spin")
});


// End A Open And Close Window 




// start switch colors 
const colorsLi = document.querySelectorAll(".colors-list li")

// Loop For All Li 
colorsLi.forEach(li => {
  li.addEventListener("click" , (e) => {

    // console.log(e.target.dataset.color);

    // set color on root
    document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
  
  })
});
// end switch colors 