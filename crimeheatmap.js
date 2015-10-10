$(function(){
        $.getJSON('crimedata.json',function(data){
            console.log('success');
            points = [];
            data = data['data']
            console.log(data.length)
            for(var i = 0; i < data.length; i++){
            	var lat = data[i][15][1];
            	var lng = data[i][15][2];
            	points.push(new google.maps.LatLng(lat, lng));
     
            }
            var sanFrancisco = new google.maps.LatLng(37.774546, -122.433523);

            var map = new google.maps.Map(document.getElementById('map'), {
			  center: sanFrancisco,
			  zoom: 13,
			  mapTypeId: google.maps.MapTypeId.SATELLITE
			});
			var heatmap = new google.maps.visualization.HeatmapLayer({
			  data: points
			});
			heatmap.setMap(map);
            
        }).error(function(){
            console.log('error');
        });
    });