$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(300, 50, 20, 290);
createPlatform(1350, 200, 50, 50, "red");
createPlatform(500, 300, 20, 300);
createPlatform(320, 500, 100, 10);
createPlatform(200, 620, 100, 10);
createPlatform(400, 400, 100, 10);
createPlatform(800, 300, 100, 10);
createPlatform(520, 200, 50, 10);
createPlatform(1250, 300, 50, 400);
createPlatform(1100, 600, 50, 10);
createPlatform(1200, 500, 50, 10);
createPlatform(1100, 250, 100, 10);

  

    // TODO 4 - Create Cannons
createCollectable("steve", 1350, 50);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCannon("top", 200, 1000);
createCannon("right", 700, 800);
createCannon("top", 800, 1500);
createCannon("right", 300, 2500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
