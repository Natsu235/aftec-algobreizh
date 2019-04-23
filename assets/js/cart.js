// -------------------------------------
// AlgoBreizh Script du panier du client
// -------------------------------------


function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

// Ajoute l'article au panier
object.onclick = function() {
	$.ajax({
        url : 'controller/Router.php?action=addToCart',
        type : 'GET',
        data: {
			amount = null;
    });
};

// Paramètres du DataTable
$(document).ready(function() {
	$("#cartTable").DataTable({
		"stateSave": true,
		"ordering": false,
		"deferRender": false,
		"bFilter": false,
  		"bLengthChange": false,
		"responsive": true,
		"page": true,
		"pagingType": "scrolling",
		"language": { 
			"url": 'assets/json/french.cart.json'
		},
	  	"aoColumns": [
		   {"bSortable": true},
		   {"bSortable": true},
		   {"bSortable": true},
		   {"bSortable": true},
		   {"bSortable": true}
	  	],
		"processing": true,
	  	"serverSide": false,
	});
});

