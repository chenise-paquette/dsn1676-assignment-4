var blueberries = {
    fullName: 'Vaccinium Corymbosum',
    energy: 240,
    carbohydrates: 14.46,
    protein: 0.74,
    growsonshrub: true
};
console.log(blueberries.fullName);

var grapes = {
    fullName: 'Vitis Vinifera',
    energy: 288,
    carbohydrates: 18.1,
    protein: 0.72,
    growsonshrub: false
};
console.log(grapes.fullName);

var redcurrant = {
    fullName: 'Ribes Rubrum',
    energy: 234,
    carbohydrates: 13.8,
    protein: 1.4,
    growsonshrub: true
};
console.log(grapes.fullName);

var writeBerry = function (berry) {
   document.write('<h1>' + berry.fullName + '</h1>');
   
   document.write('<dl>');
   
   document.write('<dt>Energy</dt>');
   document.write('<dd>' + berry.energy + '</dd>'); 
    
     document.write('<dt>Carbohydrates</dt>');
   document.write('<dd>' + berry.carbohydrates + '</dd>'); 
    
    document.write('<dt>Protein</dt>');
   document.write('<dd>' + berry.protein + '</dd>');
    
    document.write('<dt>Grows on a shrub</dt>');
   document.write('<dd>' + berry.growsonshrub + '</dd>');
    
   document.write('<dl>');
  
};

var allBerry = [blueberries, grapes, redcurrant];
allBerry.forEach(writeBerry);
