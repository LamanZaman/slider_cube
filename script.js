const packageConfig = {
    devDependencies: {
      serve: "^11.2.0",
    },
    main: "index.html",
    name: "swiper-effect-cube",
    scripts: {
      build: "echo This is a static template, there is no bundler or bundling involved!",
      start: "serve",
    },
    tags: ["swiper"],
  };
  
  // JSON obyektinin işlənməsi üçün misal
  console.log("Layihə adı:", packageConfig.name);
  console.log("Əsas fayl:", packageConfig.main);
  console.log("Start əmri:", packageConfig.scripts.start);
  console.log("İstifadə edilən taglar:", packageConfig.tags.join(", "));
  