// key authoring access to api
var key = "7Ju7v6rpc4AREcfXediwK3Gvx91SVHsg";
var searchTerm = $("#searchTerm");
var recordsRetreived = $("#recordsRetreived")
var startYear = $("#startYear");
var endYear = $("#endYear");
// search button clicks and grabs data from api
$("#searchButton").on("click", function(){
    var queryURL = "https://api.nytimes.com/svc/archive/" + {searchTerm} +"/" + {startYear} + "/" + {endYear}.json + "?api-key=" + key;
    $.ajax({
        URL: queryURL,
        method: 'GET'
    })
    .then(function(response){
        console.log(response);

    })
})

