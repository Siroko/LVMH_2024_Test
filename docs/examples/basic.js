// install plugin
Matter.use(
  'matter-attractors' // PLUGIN_NAME
);

var Example = Example || {};
window.isAttraction = true;
window.inertiaInfinite = true;
window.globalDensity = 0.0003;
window.globalScale = 1;
window.currentYear = 0;

Example.basic = function() {
  // module aliases
  var Engine = Matter.Engine,
      Events = Matter.Events,
      Runner = Matter.Runner,
      Render = Matter.Render,
      World = Matter.World,
      Body = Matter.Body,
      Mouse = Matter.Mouse,
      Common = Matter.Common,
      Bodies = Matter.Bodies;
      Composite = Matter.Composite;

  var currentBody = null;
  // create engine
  var engine = Engine.create();

  const countries = [];
  const continents = [];
  const continentPositions = {
    "europe": Matter.Vector.create(0.5, 0.35),
    "asia": Matter.Vector.create(0.7, 0.3),
    "africa": Matter.Vector.create(0.5, 0.7),
    "north-america": Matter.Vector.create(0.3, 0.4),
    "south-america": Matter.Vector.create(0.35, 0.7),
    "oceania": Matter.Vector.create(0.7, 0.7),
  };
  var participants_2023 = [
    {
      image: "2023/aaron-esh.png",
      country: "uk",
      continent: "europe"
    },
    {
      image: "2023/anne-isabella.png",
      country: "france",
      continent: "europe"
    },
    {
      image: "2023/bettter.png",
      country: "ukraine",
      continent: "europe"
    },
    {
      image: "2023/bloke.png",
      country: "nigeria",
      continent: "africa"
    },
    {
      image: "2023/burc-akyol.png",
      country: "france",
      continent: "europe"
    },
    {
      image: "2023/charlie-constaninou.png",
      country: "uk",
      continent: "europe"
    },
    {
      image: "2023/diotima.png",
      country: "jamaica",
      continent: "north-america"
    },
    {
      image: "2023/joao-maraschio.png",
      country: "brazil",
      continent: "south-america"
    },
    {
      image: "2023/johanna-parv.png",
      country: "estonia",
      continent: "europe"
    },
    {
      image: "2023/juntae-kim.png",
      country: "south-korea",
      continent: "asia"
    },
    {
      image: "2023/karu-research-scaled.jpg",
      country: "india",
      continent: "asia"
    },
    {
      image: "2023/kusikohc.png",
      country: "south-korea",
      continent: "asia"
    },
    {
      image: "2023/louis-shengtao-chen.png",
      country: "china",
      continent: "asia"
    },
    {
      image: "2023/luar.png",
      country: "us",
      continent: "north-america"
    },
    {
      image: "2023/marrknull.png",
      country: "china",
      continent: "asia"
    },
    {
      image: "2023/magliano.png",
      country: "italy",
      continent: "europe"
    },
    {
      image: "2023/namesake.png",
      country: "taiwan",
      continent: "asia"
    },
    {
      image: "2023/paolina-russo.png",
      country: "canada",
      country2: "france",
      continent: "north-america",
      continent2: "europe"
    },
    {
      image: "2023/quira.png",
      country: "italy",
      continent: "europe"
    },
    {
      image: "2023/setchu.png",
      country: "japan",
      continent: "asia"
    },
    {
      image: "2023/stinarand.png",
      country: "sweden",
      continent: "europe"
    },
    {
      image: "2023/wataru-tominaga.png",
      country: "japan",
      continent: "asia"
    }
  ];

  var participants_2022 = [
    {
      image: "2022/airei.png",
      country: "us",
      continent: "north-america"
    },
    {
      image: "2022/amesh.png",
      country: "sri-lanka",
      continent: "asia"
    },
    {
      image: "2022/ashlyn.png",
      country: "south-korea",
      continent: "asia"
    },
    {
      image: "2022/bluemarble.png",
      country: "france",
      continent: "europe"
    },
    {
      image: "2022/chenpeng.png",
      country: "china",
      continent: "asia"
    },
    {
      image: "2022/erl.png",
      country: "us",
      continent: "north-america"
    },
    {
      image: "2022/goomheo.png",
      country: "south-korea",
      continent: "asia"
    },
    {
      image: "2022/knwls.png",
      country: "uk",
      continent: "europe"
    },
    {
      image: "2022/meryl-rogge.png",
      country: "belgium",
      continent: "europe"
    },
    {
      image: "2022/niccolo-pasqualetti.png",
      country: "italy",
      continent: "europe"
    },
    {
      image: "2022/palomo-spain.png",
      country: "spain",
      continent: "europe"
    },
    {
      image: "2022/paula-canova.png",
      country: "spain",
      continent: "europe"
    },
    {
      image: "2022/roisin-pierce.png",
      country: "irland",
      continent: "europe"
    },
    {
      image: "2022/ryunosuke.png",
      country: "japan",
      continent: "asia"
    },
    {
      image: "2022/ss-daley.png",
      country: "uk",
      continent: "europe"
    },
    {
      image: "2022/tokyo-james.png",
      country: "nigeria",
      continent: "africa"
    },
    {
      image: "2022/weinsanto.png",
      country: "france",
      continent: "europe"
    },
    {
      image: "2022/winnie-ny.png",
      country: "us",
      continent: "north-america"
    },
    {
      image: "2022/yueqi-qi.png",
      country: "china",
      continent: "asia"
    }
  ];

  var participants_2021 = [
    {
      image: "2021/agr-portrait.jpg",
      country: "uk",
      continent: "europe"
    },
    {
      image: "2021/bianca_portrait.jpg",
      country: "uk",
      continent: "europe"
    },
    {
      image: "2021/capture.jpg",
      country: "nigeria",
      continent: "africa"
    },
    {
      image: "2021/charles-de-vilmorin-portrait-2.jpg-scaled.jpg",
      country: "france",
      continent: "europe"
    },
    {
      image: "2021/christopher_portrait.jpg",
      country: "us",
      continent: "north-america"
    },
    {
      image: "2021/conner_portrait.jpg",
      country: "us",
      continent: "north-america"
    },
    {
      image: "2021/federico-cina-portrait-2.jpg",
      country: "italy",
      continent: "europe"
    },
    {
      image: "2021/kidsuper_portrait-nb.jpg",
      country: "us",
      continent: "north-america"
    },
    {
      image: "2021/kika_portrait.jpg",
      country: "colombia",
      continent: "south-america"
    },
    {
      image: "2021/lukhanyo_portrait-nb.jpg",
      country: "south-africa",
      continent: "africa"
    },
    {
      image: "2021/midorikawa-portrait-2.jpg",
      country: "japan",
      continent: "asia"
    },
    {
      image: "2021/nensi_portrait-nb.jpg",
      country: "albania",
      continent: "europe"
    },
    {
      image: "2021/post-archive-faction-portrait-scaled.jpg",
      country: "south-korea",
      continent: "asia"
    },
    {
      image: "2021/renaissance-renaissance-portrait-scaled.jpg",
      country: "lebanon",
      continent: "asia"
    },
    {
      image: "2021/rier-portrait-2.jpg",
      country: "austria",
      continent: "europe"
    },
    {
      image: "2021/rui_portrait-nb.jpg",
      country: "china",
      continent: "asia"
    },
    {
      image: "2021/saul-nash-portrait-2.jpg",
      country: "uk",
      continent: "europe"
    },
    {
      image: "2021/shuting-qiu-portrait-scaled.jpg",
      country: "china",
      continent: "asia"
    },
    {
      image: "2021/taak-portrait-2.jpg",
      country: "japan",
      continent: "asia"
    },
    {
      image: "2021/wed-portrait-2.jpg",
      country: "uk",
      continent: "europe"
    }
  ];
  var participants_2020 = [
    {
      image: "2020/ahluwalia-960-x-1080-1.jpg",
      country: "uk",
      continent: "europe"
    },
    {
      image: "2020/alled_martinez-960-x-1080.jpg",
      country: "spain",
      continent: "europe"
    },
    {
      image: "2020/area-960x1080-2.jpg",
      country: "netherlands",
      continent: "europe"
    },
    {
      image: "2020/casablanca-960-x-1080-1.jpg",
      country: "france",
      continent: "europe"
    },
    {
      image: "2020/chopova_lowena-920x2160-2.jpg",
      country: "uk",
      continent: "europe"
    },
    {
      image: "2020/ester-manas-duo960x1080.jpg",
      country: "belgium",
      continent: "europe"
    },
    {
      image: "2020/helmsted-960-x-1080.jpg",
      country: "denmark",
      continent: "europe"
    },
    {
      image: "2020/kaushik_velendra-960-x-1080.jpg",
      country: "india",
      continent: "asia"
    },
    {
      image: "2020/nicholas_daley-960-x-1080-1.jpg",
      country: "uk",
      continent: "europe"
    },
    {
      image: "2020/nous_etudions-960-x-1080.jpg",
      country: "argentina",
      continent: "south-america"
    },
    {
      image: "2020/peter_do-960-x-1080-1.jpg",
      country: "us",
      continent: "north-america"
    },
    {
      image: "2020/piero_dangelo-960-x-1080.jpg",
      country: "italy",
      continent: "europe"
    },
    {
      image: "2020/rave-960x1080-1.jpg",
      country: "sweden",
      continent: "europe"
    },
    {
      image: "2020/samuel-gui-duo960x1080.jpg",
      country: "china",
      continent: "asia"
    },
    {
      image: "2020/sindiso_khumalo-960-x-1080-1.jpg",
      country: "south-africa",
      continent: "africa"
    },
    {
      image: "2020/supriya_lele-960-x-1080-1.jpg",
      country: "india",
      continent: "asia"
    },
    {
      image: "2020/tomo_koizumi-960-x-1080-1.jpg",
      country: "japan",
      continent: "asia"
    },
    {
      image: "2020/vaqar-duo-960x1080-1.jpg",
      country: "iran",
      continent: "asia"
    },
    {
      image: "2020/yuhan_wang-960x1080-1.jpg",
      country: "china",
      continent: "asia"
    }
  ];
  var participants_2019 = [
    {
      image: "2019/anrealage-960-x-1080-2.jpg",
      country: "japan",
      continent: "asia"
    },
    {
      image: "2019/bethany-williams-960-x-1080-2.jpg",
      country: "uk",
      continent: "europe"
    },
    {
      image: "2019/bode-960-x-1080-2.jpg",
      country: "us",
      continent: "north-america"
    },
    {
      image: "2019/boramy-viguier-960-x-1080.jpg",
      country: "france",
      continent: "europe"
    },
    {
      image: "2019/duran-lantink-960-x-1080.jpg",
      country: "netherlands",
      continent: "europe"
    },
    {
      image: "2019/eftychia-960-x-1080.jpg",
      country: "greece",
      continent: "europe"
    },
    {
      image: "2019/germanier-960-x-1080.jpg",
      country: "switzerland",
      continent: "europe"
    },
    {
      image: "2019/hed-mayner-960-x-1080-2.jpg",
      country: "israel",
      continent: "asia"
    },
    {
      image: "2019/hu-960-x-1080.jpg",
      country: "china",
      continent: "asia"
    },
    {
      image: "2019/kanghyuk-960-x-1080.jpg",
      country: "south-korea",
      continent: "asia"
    },
    {
      image: "2019/kenneth-ize-960-x-1080-2.jpg",
      country: "nigeria",
      continent: "africa"
    },
    {
      image: "2019/kiko-kostadinov-960-x-1080.jpg",
      country: "bulgaria",
      continent: "europe"
    },
    {
      image: "2019/lecavalier-960-x-1080.jpg",
      country: "canada",
      continent: "north-america"
    },
    {
      image: "2019/paradis-960-x-1080.jpg",
      country: "france",
      continent: "europe"
    },
    {
      image: "2019/paria-farzaneh-960-x-1080.jpg",
      country: "uk",
      continent: "europe"
    },
    {
      image: "2019/phipps-960-x-1080-2.jpg",
      country: "us",
      continent: "north-america"
    },
    {
      image: "2019/richard-malone-960-x-1080.jpg",
      country: "ireland",
      continent: "europe"
    },
    {
      image: "2019/stefan-cooke-960-x-1080-1.jpg",
      country: "uk",
      continent: "europe"
    },
    {
      image: "2019/susan-fang-960-x-1080.jpg",
      country: "china",
      continent: "asia"
    },
    {
      image: "2019/thebe-magugu-960-x-1080-2.jpg",
      country: "south-africa",
      continent: "africa"
    }
  ];
  var participants_2018 = [
    {
      image: "2018/akiko-960-x-1080.jpg",
      country: "japan",
      continent: "asia"
    },
    {
      image: "2018/botter-960-x-1080-1.jpg",
      country: "netherlands",
      continent: "europe"
    },
    {
      image: "2018/charles-jeffrey-960-x-1080.jpg",
      country: "uk",
      continent: "europe"
    },
    {
      image: "2018/doublet-960-x-1080-1.jpg",
      country: "japan",
      continent: "asia"
    },
    {
      image: "2018/eckhaus-latta-960-x-1080-1.jpg",
      country: "us",
      continent: "north-america"
    },
    {
      image: "2018/edda-960-x-1080.jpg",
      country: "norway",
      continent: "europe"
    },
    {
      image: "2018/ernest-w-bake-960-x-1080.jpg",
      country: "us",
      continent: "north-america"
    },
    {
      image: "2018/faustine-steinmetz-960-x-1080.jpg",
      country: "france",
      continent: "europe"
    },
    {
      image: "2018/ludovic-st-sernin-960-x-1080-1.jpg",
      country: "france",
      continent: "europe"
    },
    {
      image: "2018/magdalena-960-x-1080.jpg",
      country: "poland",
      continent: "europe"
    },
    {
      image: "2018/marta-960-x-1080.jpg",
      country: "germany",
      continent: "europe"
    },
    {
      image: "2018/matthew-dolan-960-x-1080-1.jpg",
      country: "us",
      continent: "north-america"
    },
    {
      image: "2018/neil-960-x-1080.jpg",
      country: "us",
      continent: "north-america"
    },
    {
      image: "2018/ottolinger-960-x-1080.jpg",
      country: "switzerland",
      continent: "europe"
    },
    {
      image: "2018/rok-960-x-1080-1.jpg",
      country: "south-korea",
      continent: "asia"
    },
    {
      image: "2018/samuel-ross-960-x-1080-1.jpg",
      country: "uk",
      continent: "europe"
    },
    {
      image: "2018/serhat-isik-benjamin-alexander-960-x-1080.jpg",
      country: "germany",
      continent: "europe"
    },
    {
      image: "2018/snow-960-x-1080.jpg",
      country: "china",
      continent: "asia"
    },
    {
      image: "2018/younchan-960-x-1080.jpg",
      country: "south-korea",
      continent: "asia"
    }
  ];
  
  const years = [
    {
      year: 2023,
      participants: participants_2023
    },
    {
      year: 2022,
      participants: participants_2022
    },
    {
      year: 2021,
      participants: participants_2021
    },
    {
      year: 2020,
      participants: participants_2020
    },
    {
      year: 2019,
      participants: participants_2019
    },
    {
      year: 2018,
      participants: participants_2018
    }
  ];
  // create renderer
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      wireframes: false,
      background: "#FFFFFF"
    }
  });


  Render.setPixelRatio(render, "auto");

  // create runner
  var runner = Runner.create();
  
  Runner.run(runner, engine);
  Render.run(render);

  // create demo scene
  var world = engine.world;
  world.gravity.scale = 0.0;
  
  
  var mouse = Mouse.create(render.canvas);
  const mouseConstraint = Matter.MouseConstraint.create(
    engine, {
      mouse: mouse,
      element: document.body,
      constraint: {
        render: {
          visible: false
        }
      }
    }
  );

  Composite.add(world, mouseConstraint);
  
  for( var k = 0; k < years.length; k++) {
    // create a body with an attractor
    var attractiveBody = Bodies.circle(
      (((k % 3) / 3) * render.options.width * 0.8) + render.options.width * 0.2,
      (Math.floor(k / 3) * render.options.height * 0.5) + render.options.height * 0.25,
      50, {
        isStatic: true,
        render: {
          fillStyle: "#F0F0F0"
        },
        // example of an attractor function that 
        // returns a force vector that applies to bodyB
        plugin: {
          attractors: [
            function(bodyA, bodyB) {
              if(bodyB.label === bodyA.label && isAttraction){
                var force = {
                  x: (bodyA.position.x - bodyB.position.x) * 3e-5,
                  y: (bodyA.position.y - bodyB.position.y) * 3e-5,
                };
              
                // apply force to both bodies
                Body.applyForce(bodyA, bodyA.position, Matter.Vector.neg(force));
                Body.applyForce(bodyB, bodyB.position, force);
              }
            }
          ]
        }
    });
    attractiveBody.label = "year" + k;
    attractiveBody.year = years[k].year;
    years[k].body = attractiveBody;

    World.add(world, attractiveBody);

    var center = years[k].body.position;
    const radius = 100;
    // add some bodies that to be attracted
    for (var i = 0; i < years[k].participants.length; i += 1) {
      const currentAngle = (i / years[k].participants.length) * Math.PI * 2;

      const scale = 10 * (render.options.width / 2560);
      var body = Bodies.circle(
        center.x + (Math.sin(currentAngle) * radius),
        center.y + (Math.cos(currentAngle) * radius),
        9.60 * scale * 0.5,
        // 10.80 * scale,
        {
          inertia: window.inertiaInfinite ? Infinity : 10000.0,
          density: window.globalDensity,
          render : {
            sprite: {
              texture: "./images/"+ years[k].participants[i].image,
              xScale: 0.01 * scale,
              yScale: 0.01 * scale,
              initXscale: 0.01 * scale,
              initYScale: 0.01 * scale
            }
          }
        }
      );

      body.label = "year" + k;
      body.year = years[k].year;
      body.country = years[k].participants[i].country;
      body.continent = years[k].participants[i].continent;
      body.lastScale = 1;
      body.initSize = Matter.Vector.create(9.60 * scale * 0.5, 10.80 * scale);

      years[k].participants[i].body = body;
      World.add(world, body);

      // create a new attractor for country if there is a country defined
      if(body.country && countries[body.country] == null){
        const position = continentPositions[body.continent];
        const attractiveCountryBody = Bodies.circle(
          position.x * render.options.width,
          position.y * render.options.height,
          20, {
            isStatic: true,
            render: {
              fillStyle: "#FF99CC"
            },
            // example of an attractor function that 
            // returns a force vector that applies to bodyB
            plugin: {
              attractors: [
                function(bodyA, bodyB) {
                  if(bodyB.country === bodyA.country && isAttraction){
                    var force = {
                      x: (bodyA.position.x - bodyB.position.x) * 3e-5,
                      y: (bodyA.position.y - bodyB.position.y) * 3e-5,
                    };
                  
                    // apply force to both bodies
                    Body.applyForce(bodyA, bodyA.position, Matter.Vector.neg(force));
                    Body.applyForce(bodyB, bodyB.position, force);
                  }
                }
              ]
            }
        });
        
        attractiveCountryBody.country = body.country;
        countries[attractiveCountryBody.country] =  attractiveCountryBody;
      }
    }
  }

  // add mouse control
  var mouse = Mouse.create(render.canvas);

  Events.on(mouseConstraint, "mousedown", (e)=>{
    if(currentBody) {
      if(!currentBody.isStatic) {
        const scale = window.globalScale;
        const body = currentBody;
        body.render.sprite.xScale = body.render.sprite.initXscale * scale;
        body.render.sprite.yScale = body.render.sprite.initYScale * scale;
        body.render.zIndex = 0;
        Matter.Body.scale( body, scale / body.lastScale, scale / body.lastScale);
        currentBody.lastScale = scale;
        currentBody = null;
      }
    }
    if(e.source.body) {
      if(!e.source.body.isStatic){
        const scale = 5.5;
        const body = e.source.body;
        currentBody = body;
        body.render.sprite.xScale = body.render.sprite.xScale * scale;
        body.render.sprite.yScale = body.render.sprite.yScale * scale;
        body.render.zIndex = 100;
        Matter.Body.scale( body, scale / body.lastScale, scale / body.lastScale);
        body.lastScale = scale;
      }
    }

    engine.world.bodies.sort((a, b) => {
      const zIndexA = a.render && typeof a.render.zIndex !== 'undefined' ? a.render.zIndex : 0;
      const zIndexB = b.render && typeof b.render.zIndex !== 'undefined' ? b.render.zIndex : 0;
      return zIndexA - zIndexB;
    });
  });

  Events.on(mouseConstraint, "mousemove", (e)=>{
    if(e.source.body){
      Body.setPosition(e.source.body, {
        x: mouse.position.x,
        y: mouse.position.y
      });
    }
  });

  Events.on(engine, 'afterUpdate', function() {
      if (!mouse.position.x) {
        return;
      }
  });

  Events.on(engine, 'tick', (e)=>{
    for( var k = 0; k < years.length; k++){
      for (var i = 0; i < years[k].participants.length; i++){
        Matter.Body.set(years[k].participants[i].body, "inertia", window.inertiaInfinite ? Infinity : 10000.0);
        
      }
    }
  });

  window.onCircleClick = () => {
    for( var k = 0; k < years.length; k++){
      var center = years[k].body.position;
      const radius = 300;
      for (var i = 0; i < years[k].participants.length; i++){
        const currentAngle = (i / years[k].participants.length) * Math.PI * 2;
        Matter.Body.set(years[k].participants[i].body, "inertia", window.inertiaInfinite ? Infinity : 10000.0);
        Matter.Body.setPosition(years[k].participants[i].body, Matter.Vector.create(
          center.x + (Math.sin(currentAngle) * radius),
          center.y + (Math.cos(currentAngle) * radius)
        ));
        
      }
    }
  };

  window.updateDensity = () => {
    for( var k = 0; k < years.length; k++){
      for (var i = 0; i < years[k].participants.length; i++){
        Matter.Body.setDensity(years[k].participants[i].body, window.globalDensity);
      }
    }
  };

  window.updateScale = () => {
    for( var k = 0; k < years.length; k++){
      for (var i = 0; i < years[k].participants.length; i++){
        const body = years[k].participants[i].body;
        body.render.sprite.xScale = body.render.sprite.initXscale * window.globalScale;
        body.render.sprite.yScale = body.render.sprite.initYScale * window.globalScale;
        Matter.Body.scale( body, window.globalScale / body.lastScale, window.globalScale / body.lastScale);
        body.lastScale = window.globalScale;
      }
    }
  };

  window.onShowYear = (year) => {
    for( var prop in countries ) {
      World.remove(world, countries[prop]);
    }
    for( var k = 0; k < years.length; k++) {
      let body = years[k].body;
      World.remove(world, body);
      if(body.year === year || year === 0){
        World.add(world, body);
        if(year !== 0){
          Matter.Body.setPosition(body, Matter.Vector.create(
            window.innerWidth / 2,
            window.innerHeight / 2
          ));
        } else {
          Matter.Body.setPosition(body, Matter.Vector.create(
            (((k % 3) / 3) * render.options.width * 0.8) + render.options.width * 0.2,
            (Math.floor(k / 3) * render.options.height * 0.5) + render.options.height * 0.25
          ));
        }
      }
      for (var i = 0; i < years[k].participants.length; i++){
        body = years[k].participants[i].body;
        World.remove(world, body);
        if(body.year === year || year === 0){
          World.add(world, body);
        }
      }
    }
    window.onCircleClick();
    window.currentYear = year;
  };

  window.onShowCountries = () => {

    for( var prop in countries ) {
      World.add(world, countries[prop]);
    }

    for( var k = 0; k < years.length; k++) {
      let body = years[k].body;
      World.remove(world, body);
      
      for (var i = 0; i < years[k].participants.length; i++){
        body = years[k].participants[i].body;
        World.remove(world, body);
        if(body.year === currentYear || currentYear === 0){
          World.add(world, body);
        }
      }
    }
    
  };

  // return a context for MatterDemo to control
  return {
    engine: engine,
    runner: runner,
    render: render,
    canvas: render.canvas,
    stop: function() {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    }
  };
};