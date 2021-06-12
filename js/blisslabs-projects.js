$.ajax({
    type: "GET",
    url: "https://api.blissroms.org/api/allprojects",
    contentType: "application/json",
    datatype: "json",
    data: {},
    success: function (data) {
        var newContent = ''; // Variable to hold HTML
        for (var i = 0; i < data.length; i++) { // Loop through object
            if (data[i].project != null) {
                if (i == 0) {
                    newContent += '<div class="carousel-item active" style="padding-block: 10vh;" >';
                } else {
                    newContent += '<div class="carousel-item" >';
                }
                newContent += '<img class="d-block img-fluid" src="' + data[i].project_avatar + '" style="margin-left: 10%; height: 35vh;"';
                newContent += 'alt="' + data[i].project + ' " style="padding-top: 1.5rem;"/>';
                newContent += '<div class="carousel-caption" style="background: linear-gradient(#343a40 10%, #343a40 100%)!important; padding-top: 50vw; width: 50vw; margin-left: 30vw; bottom: 0px ">';
                // newContent += '<div class="item-details">';
                newContent += '<h3 class="zxc" ><b style="font-size: xx-large;">' + data[i].project + '</b></h3>';
                newContent += '<h5 class="zxc" >Project Lead: ' + data[i].project_lead + '</h5>';
                newContent += '<p class="card__text zxc" style=" margin-right: 1.7rem; margin-left: 1.7rem; ">' + data[i].project_description + '</p>';
                if (data[i].project_github != null) {
                    newContent += '<a href="' + data[i].project_github + '" target="_blank"><i class="fab fa fa-git p-2" style="font-size: 300%;"></i></a>';
                }
                if (data[i].project_website != null) {
                    newContent += '<a href="' + data[i].project_website + '" target="_blank"><i class="fab fa p-2 fa-globe" style="font-size: 300%;"></i></a>';
                }
                // newContent += '</div>';
                newContent += '</div>';
                newContent += '</div>';
            } else {
                newContent = 'NONE';
            }
        }
        // Update the page with the new content
        document.getElementById('carousel-slider').innerHTML = newContent;
    },
    error: function (jqXHR, status, err) {
        newContent = 'ERROR: NONE';
        document.getElementById('carousel-slider').innerHTML = newContent;
        alert("Status: " + textStatus);
        alert("Error: " + errorThrown);
    }
})