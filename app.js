// https://www.omnicalculator.com/health/drops-per-minute

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const dropsperminuteRadio = document.getElementById('dropsperminuteRadio');
const volumeRadio = document.getElementById('volumeRadio');
const timeRadio = document.getElementById('timeRadio');
const dropfactorRadio = document.getElementById('dropfactorRadio');

let dropsperminute;
let volume = v1;
let time = v2;
let dropfactor = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

dropsperminuteRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume';
  variable2.textContent = 'Time';
  variable3.textContent = 'Drop factor';
  volume = v1;
  time = v2;
  dropfactor = v3;
  result.textContent = '';
});

volumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Drops per minute';
  variable2.textContent = 'Time';
  variable3.textContent = 'Drop factor';
  dropsperminute = v1;
  time = v2;
  dropfactor = v3;
  result.textContent = '';
});

timeRadio.addEventListener('click', function() {
  variable1.textContent = 'Drops per minute';
  variable2.textContent = 'Volume';
  variable3.textContent = 'Drop factor';
  dropsperminute = v1;
  volume = v2;
  dropfactor = v3;
  result.textContent = '';
});

dropfactorRadio.addEventListener('click', function() {
  variable1.textContent = 'Drops per minute';
  variable2.textContent = 'Volume';
  variable3.textContent = 'Time';
  dropsperminute = v1;
  volume = v2;
  time = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(dropsperminuteRadio.checked)
    result.textContent = `Drops per minute = ${computedropsperminute().toFixed(2)}`;

  else if(volumeRadio.checked)
    result.textContent = `Volume = ${computevolume().toFixed(2)}`;

  else if(timeRadio.checked)
    result.textContent = `Time = ${computetime().toFixed(2)}`;

  else if(dropfactorRadio.checked)
    result.textContent = `Drop factor = ${computedropfactor().toFixed(2)}`;
})

// calculation

// dropsperminute = (volume * dropfactor) / (time)

function computedropsperminute() {
  return (Number(volume.value) * Number(dropfactor.value)) / Number(time.value);
}

function computevolume() {
  return (Number(dropsperminute.value) * Number(time.value)) / Number(dropfactor.value);
}

function computetime() {
  return (Number(volume.value) * Number(dropfactor.value)) / Number(dropsperminute.value);
}

function computedropfactor() {
  return (Number(dropsperminute.value) * Number(time.value)) / Number(volume.value);
}