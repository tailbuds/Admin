$('#textarea1').val('New Text');
M.textareaAutoResize($('#textarea1'));
$('#textarea2').val('New Text');
M.textareaAutoResize($('#textarea2'));
$('#textarea3').val('New Text');
M.textareaAutoResize($('#textarea3'));
$('#textarea4').val('New Text');
M.textareaAutoResize($('#textarea4'));
$('#textarea5').val('New Text');
M.textareaAutoResize($('#textarea5'));
$('#textarea6').val('New Text');
M.textareaAutoResize($('#textarea6'));
$('#textarea7').val('New Text');
M.textareaAutoResize($('#textarea7'));
$('#textarea8').val('New Text');
M.textareaAutoResize($('#textarea8'));
$('#textarea9').val('New Text');
M.textareaAutoResize($('#textarea9'));
$('#textarea10').val('New Text');
M.textareaAutoResize($('#textarea10'));
$('#textarea11').val('New Text');
M.textareaAutoResize($('#textarea11'));
$('#textarea12').val('New Text');
M.textareaAutoResize($('#textarea12'));
$('#textarea13').val('New Text');
M.textareaAutoResize($('#textarea13'));
$('#textarea14').val('New Text');
M.textareaAutoResize($('#textarea14'));
$('#textarea15').val('New Text');
M.textareaAutoResize($('#textarea15'));

function AddBreed() {
  var Breed = {
    breedId: null,
    name: document.getElementById('name'),
    tagline: document.getElementById('tagline'),
    bgImg: fileInfo.bgImg[0].path,
    puppyImg: fileInfo.puppyImg[0].path,
    minLife: document.getElementById('minLife'),
    maxLife: document.getElementById('maxLife'),
    learningRate: document.getElementById('learningRate'),
    minLitter: document.getElementById('minLitter'),
    maxLitter: document.getElementById('maxLitter'),
    size: document.getElementById('size'),
    weightUnit: document.getElementById('weightUnit'),
    minMaleWeight: document.getElementById('minMaleWeight'),
    maxMaleWeight: document.getElementById('maxMaleWeight'),
    minFemaleWeight: document.getElementById('minFemaleWeight'),
    maxFemaleWeight: document.getElementById('maxFemaleWeight'),
    heightUnit: document.getElementById('heightUnit'),
    minMaleHeight: document.getElementById('minMaleHeight'),
    maxMaleHeight: document.getElementById('maxMaleHeight'),
    minFemaleHeight: document.getElementById('minFemaleHeight'),
    maxFemaleHeight: document.getElementById('maxFemaleHeight'),
    originCountry: document.getElementById('originCountry'),
    otherNames: document.getElementById('otherNames'),
    desc1: document.getElementById('desc1'),
    desc2: document.getElementById('desc2'),
    desc3: document.getElementById('desc3'),
    desc4: document.getElementById('desc4'),
    desc5: document.getElementById('desc5'),
    desc6: document.getElementById('desc6'),
    desc7: document.getElementById('desc7'),
    desc8: document.getElementById('desc8'),
    desc9: document.getElementById('desc9'),
    desc10: document.getElementById('desc10'),
    desc11: document.getElementById('desc11'),
    desc12: document.getElementById('desc12'),
    desc13: document.getElementById('desc13'),
    desc14: document.getElementById('desc14'),
    desc15: document.getElementById('desc15'),
  };

  axios
    .post('/upload', (Breed: Breed))
    .then(axios.get(''))
    .catch();
}
