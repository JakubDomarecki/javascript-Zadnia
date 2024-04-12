const timemachine = {
  shape: "circle",
  model: "T-800",
    run: function (date, place) {
      console.log(`przenieś nas do ${place} w dniu ${date}`);
    }
};

console.log(timemachine.run("10/4/2024", "online"));