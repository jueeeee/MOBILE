 // 찾아오시는 길 맵 삽입 // 
 window.onload = function() {

    //첫번째 맵
    var container = document.getElementById('map_content1');
    var options = {
        center: new daum.maps.LatLng(37.474291, 126.969276),
        level: 2
    };

    var map = new daum.maps.Map(container, options);
    
    var mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition  = new daum.maps.LatLng(37.474291, 126.969276); 
    var marker = new daum.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);
    
    var overlay = new daum.maps.CustomOverlay({
        map: map,
        position: marker.getPosition()       
    });
     
    //두번째 맵    
    var container2 = document.getElementById('map_content2');
    var options2 = {
        center: new daum.maps.LatLng(34.896570, 128.609791),
        level: 2
    };

    var map2 = new daum.maps.Map(container2, options2);
    
    var mapTypeControl2 = new daum.maps.MapTypeControl();
    map2.addControl(mapTypeControl2, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl2 = new daum.maps.ZoomControl();
    map2.addControl(zoomControl2, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition2  = new daum.maps.LatLng(34.896570, 128.609791); 
    var marker2 = new daum.maps.Marker({
        position: markerPosition2
    });

    marker2.setMap(map2);
    
    var overlay2 = new daum.maps.CustomOverlay({
        map: map2,
        position: marker2.getPosition()       
    }); 
     
    //세번째 맵     
    var container3 = document.getElementById('map_content3');
    var options3 = {
       center: new daum.maps.LatLng(36.393106, 127.402035),
       level: 2
    };

    var map3 = new daum.maps.Map(container3, options3);
   
    var mapTypeControl3 = new daum.maps.MapTypeControl();
    map3.addControl(mapTypeControl3, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl3 = new daum.maps.ZoomControl();
    map3.addControl(zoomControl3, daum.maps.ControlPosition.RIGHT);
   
    var markerPosition3  = new daum.maps.LatLng(36.393106, 127.402035); 
    var marker3 = new daum.maps.Marker({
       position: markerPosition2
    });

    marker3.setMap(map3);
   
    var overlay3 = new daum.maps.CustomOverlay({
       map: map3,
       position: marker3.getPosition()       
    });        
}