$.get("xml/bookingList.xml", function(xml, status){
    var txt = "<table class=\"table table1\"><thead><tr id=\"mainRow\"><th>Room type</th><th>Unavailable from:</th><th>To:</th></tr></thead>";
    $(xml).find("booking").each(function(){
         var room = $(this).find("room").text();
         var arrival = $(this).find("arrival").text();
         var departure = $(this).find("departure").text();
         txt += "<tr><td>" + room + "</td><td>" + arrival + "</td><td>" + departure + "</td></tr>";
    });
    txt += "</table>";
    $("#bookings").html(txt);
});




