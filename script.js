const countdown = (count, callback) => {
  if (count > 0) {
    setTimeout(() => {
      var count1 = document.getElementById("count");
      var count2 = document.createElement("p");
      count2.textContent = count;
      count1.appendChild(count2);
      
      countdown(count - 1, callback);
    }, 1000);
  } else {
    callback();
  }
};

countdown(10, () => {
  var Ind1 = document.getElementById("Ind");
  var NewPara = document.createElement("p");
  NewPara.textContent= "Happy Independence Day!"
  Ind1.appendChild(NewPara);
});
