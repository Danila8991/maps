 function initMap() {
    var stadium = {
        lat: 55.8181801, 
        lng: 37.4404755
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lat: 55.8181801, lng: 37.4404755}
    });
    var marker = new google.maps.Marker({
        position: {lat: 55.8181801, lng: 37.4404755},
        map: map,
        title: 'Наш маркер: ball',
        icon: './images/ball.png'
});
}