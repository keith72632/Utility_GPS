// Initialize and add the map
function initMap() {
    var options = {
        zoom:11,
        center: {lat: 36.341856,lng:-93.496815}
    };
    var home = {
        coords:{
            lat: 36.41149,
            lng: -93.83977
        },
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    };
    const map = new google.maps.Map(document.getElementById("map"), options);
    var marker = addMarker(home);
    var infoWindow = new google.maps.InfoWindow({
        content: '<h1>Freeman-Raney Water Treatment Plant</h1>'
    })

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    })

    function addMarker(props){
        const marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: props.icon
        });

        return marker;
    }
}