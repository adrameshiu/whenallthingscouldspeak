//
//
// function preload() {
//   img = loadImage("/whenallthingscouldspeak/assets/images/HouseOfBlueLights.png");
// }
//
//
// function setup() {
//   var zindex = 50;
//   //let canvas = createCanvas(windowWidth, windowHeight);
//   let canvas = createCanvas(windowWidth, windowHeight);
//   // canvas.parent('sketch-container')\;
//   canvas.parent('midid');
//   canvas.style.zIndex = zindex;
// }
//
// function draw() {
//   background(220);
//   image(img,0, 0);
//   stars();
//
//   // noLoop();
// }
//
// function stars() {
//   fill(random(255));
//   circle(random(width), random(height), random(1, 3));
//   circle(random(width), random(height), random(1, 3));
// }


//https://www.youtube.com/watch?v=LoSJN9QYpz0


const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
    start()
    }
  });
});

observer.observe(document.querySelector('#currentFrame'));
observer.observe(document.querySelector('#currentFrame2'));
observer.observe(document.querySelector('#currentFrame3'));


const slot_frames = [],
  NUM_FRAMES = 3,
  timer = {
    delay: 100,
    spd: 10,
    inc: 0,
    nextTimer: 0,
    slowDown: 0.15 * (80 - 120) + 40,
  };

  NUM_FRAMES2 = 3,
  timer2 = {
    delay: 100,
    spd: 10,
    inc: 0,
    nextTimer: 0,
    slowDown: 0.15 * (80 - 120) + 40,
  };
  NUM_FRAMES3 = 3,
  timer3 = {
    delay: 100,
    spd: 10,
    inc: 0,
    nextTimer: 0,
    slowDown: 0.15 * (80 - 120) + 40,
  };


let t = ['There is no answer to the story that lies behind the history of the "House of Blue Lights."', "One can only accept as true what he is willing to investigate as such.", "Whether the legend is true or not would have to be decided in each individual’s own mind.", "These details are the ones that are always told."];

let t2 = ["During Arnold’s first ten years of marriage the house was immaculate,though it still gave off a deathly glow to passer bys.","But, with the death of his wife, the turning point of the legend began.","Ghostly blue lights lined the fence and on a clear night a mysterious blue glow could be detected from deep within the estate.","Many undaunted lads with, upon a dare, attempt to gain entry to the house where, due to the watch dogs, they are refused."];

let t3 = ["His eccentricity resulted in his placement of his wife’s casket in the picture window of their home.","I suppose one could say that fright just as misery, loves company.","At midnight Test killed her with a knife, stabbing her five times in the chest and abdomen.","She had on a blue nightgown and supposedly had been through quite a work out."]

let currentFrame = Math.floor(Math.random() * Math.floor(NUM_FRAMES));
let currentFrame2 = Math.floor(Math.random() * Math.floor(NUM_FRAMES2));
let currentFrame3 = Math.floor(Math.random() * Math.floor(NUM_FRAMES3));


function setup() {
  // noCanvas();

  const frames = t.length;
  for (let i = 0; i < frames.length; i++) {
    const data = frames[i].position;
  }

  timer.nextTimer = millis() + timer.delay;


}


function draw() {
    if (timer.delay != 2100) {
      if (millis() > timer.nextTimer) {
        timer.inc += 10;

        if (timer.inc >= timer.slowDown + 50) {
          timer.delay = 2100;
        } else if (timer.inc >= timer.slowDown + 20) {
          timer.delay += 250;
        } else if (timer.inc >= timer.slowDown) {
          timer.delay += 100;
        }

        currentFrame++;
        currentFrame2++;
        currentFrame3++;

        if (currentFrame >= t.length) {
          currentFrame = 0;
        }
        if(currentFrame2>=t2.length){
          currentFrame2 = 0
        }

        if(currentFrame3>=t3.length){
          currentFrame3 = 0
        }
        timer.nextTimer = millis() + timer.delay;
      }
    }


    select("#currentFrame").html(t[currentFrame]);

    select("#currentFrame2").html(t2[currentFrame2]);

    select("#currentFrame3").html(t3[currentFrame3]);

  }


function start() {
  timer.delay = 100;
  timer.spd = 10;
  timer.inc = 0;
  timer.nextTimer = 0;
  timer.slowDown = 0.15 * (80 - 120) + 40;


timer2.delay = 100;
timer2.spd = 10;
timer2.inc = 0;
timer2.nextTimer = 0;
timer2.slowDown = 0.15 * (80 - 120) + 120;

timer3.delay = 100;
timer3.spd = 10;
timer3.inc = 0;
timer3.nextTimer = 0;
timer3.slowDown = 0.15 * (80 - 120) + 80;

}
