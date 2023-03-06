function updatemap()
{
fetch("data.json")
.then(response => response.json())
.then(rsp =>{
    console.log(rsp.data)
    rsp.data.forEach(element =>{
        latitude  =element.latitude
        longitude = element.longitude
        cases = element.infected
        countryname = element.name
        country = element.country
        dead = element.dead 
        sick = element.sick      

        if (cases>255)
        {
            color = "rgb(214, 52, 41)"
        }
        else{
            color = `rgb(${cases},0,0)`;
        }

         new mapboxgl.Marker({
            draggable: false,
            color:color
            })
            .setLngLat([longitude, latitude])
            .addTo(map);

             
               
    })
    new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
        });
    
        
            
});
 
map.on('mouseleave', 'places', () => {
map.getCanvas().style.cursor = '';
popup.remove();
});
}
updatemap();