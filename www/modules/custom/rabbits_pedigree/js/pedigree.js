google.charts.load('current', {packages:['orgchart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('string', 'Child');
  var offspring = document.getElementById('offspring'),
    sire = document.getElementById('sire'),
    dam = document.getElementById('dam'),
    sire_grandsire = document.getElementById('sire-grandsire'),
    sire_granddam = document.getElementById('sire-granddam'),
    dam_grandsire = document.getElementById('dam-grandsire'),
    dam_granddam = document.getElementById('dam-granddam'),
    sire_grandsire_greatgrandsire = document.getElementById('sire-grandsire-greatgrandsire'),
    sire_grandsire_greatgranddam = document.getElementById('sire-grandsire-greatgranddam'),
    sire_granddam_greatgrandsire = document.getElementById('sire-granddam-greatgrandsire'),
    sire_granddam_greatgranddam = document.getElementById('sire-granddam-greatgranddam'),
    dam_grandsire_greatgrandsire = document.getElementById('dam-grandsire-greatgrandsire'),
    dam_grandsire_greatgranddam = document.getElementById('dam-grandsire-greatgranddam'),
    dam_granddam_greatgrandsire = document.getElementById('dam-granddam-greatgrandsire'),
    dam_granddam_greatgranddam = document.getElementById('dam-granddam-greatgranddam');


  // For each orgchart box, provide the name, manager, and tooltip to show.
  data.addRows([
    [{v:'offspring', f:document.getElementById('offspring').outerHTML}, ''],
    [{v:'sire', f:document.getElementById('sire').outerHTML}, 'offspring'],
    [{v:'dam', f:document.getElementById('dam').outerHTML}, 'offspring'],
    [{v:'sire-grandsire', f:document.getElementById('sire-grandsire').outerHTML}, 'sire'],
    [{v:'sire-granddam', f:document.getElementById('sire-granddam').outerHTML}, 'sire'],
    [{v:'dam-grandsire', f:document.getElementById('dam-grandsire').outerHTML}, 'dam'],
    [{v:'dam-granddam', f:document.getElementById('dam-granddam').outerHTML}, 'dam'],
    [{v:'sire-grandsire-greatgrandsire', f:document.getElementById('sire-grandsire-greatgrandsire').outerHTML}, 'sire-grandsire'],
    [{v:'sire-grandsire-greatgranddam', f:document.getElementById('sire-grandsire-greatgranddam').outerHTML}, 'sire-grandsire'],
    [{v:'sire-granddam-greatgrandsire', f:document.getElementById('sire-granddam-greatgrandsire').outerHTML}, 'sire-granddam'],
    [{v:'sire-granddam-greatgranddam', f:document.getElementById('sire-granddam-greatgranddam').outerHTML}, 'sire-granddam'],
    [{v:'dam-grandsire-greatgrandsire', f:document.getElementById('dam-grandsire-greatgrandsire').outerHTML}, 'dam-grandsire'],
    [{v:'dam-grandsire-greatgranddam', f:document.getElementById('dam-grandsire-greatgranddam').outerHTML}, 'dam-grandsire'],
    [{v:'dam-granddam-greatgrandsire', f:document.getElementById('dam-granddam-greatgrandsire').outerHTML}, 'dam-granddam'],
    [{v:'dam-granddam-greatgranddam', f:document.getElementById('dam-granddam-greatgranddam').outerHTML}, 'dam-granddam'],

  ]);

  // Create the chart.
  var chart = new google.visualization.OrgChart(document.getElementById('pedigree-chart'));
  // Draw the chart, setting the allowHtml option to true for the tooltips.
  chart.draw(data, {allowHtml:true});

offspring.parentNode.removeChild(offspring);
sire.parentNode.removeChild(sire);
dam.parentNode.removeChild(dam);
sire_grandsire.parentNode.removeChild(sire_grandsire);
sire_granddam.parentNode.removeChild(sire_granddam);
dam_grandsire.parentNode.removeChild(dam_grandsire);
dam_granddam.parentNode.removeChild(dam_granddam);
sire_grandsire_greatgrandsire.parentNode.removeChild(sire_grandsire_greatgrandsire);
sire_grandsire_greatgranddam.parentNode.removeChild(sire_grandsire_greatgranddam);
sire_granddam_greatgrandsire.parentNode.removeChild(sire_granddam_greatgrandsire);
sire_granddam_greatgranddam.parentNode.removeChild(sire_granddam_greatgranddam);
dam_grandsire_greatgrandsire.parentNode.removeChild(dam_grandsire_greatgrandsire);
dam_grandsire_greatgranddam.parentNode.removeChild(dam_grandsire_greatgranddam);
dam_granddam_greatgrandsire.parentNode.removeChild(dam_granddam_greatgrandsire);
dam_granddam_greatgranddam.parentNode.removeChild(dam_granddam_greatgranddam);
}
