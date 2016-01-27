jQuery(document).ready(function ($) {
  $(".no-more-tables table").each(function() {
    var nmttable = $(this);
    var nmtheadrow = nmttable.find("thead tr");
    nmttable.find("tbody tr").each(function () {
      var currow = $(this);
      for (var i = 0; i < currow.find("td").length; i++) {
        var rowselector = "td:eq(" + i + ")";
        var headselector = "th:eq(" + i + ")";
        currow.find(rowselector).attr('data-title', nmtheadrow.find(headselector).html());
      }
    });
  });
});
