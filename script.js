var map = L.map('map');
map.setView([35, 0], 2.45);

L.tileLayer('https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=2uBtXXP0tRIYtS0qaZR3', {attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}).addTo(map);


var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

var markerKuwait = L.marker([29.3117, 47.4818], {icon: redIcon}).addTo(map);
var markerRiyadh = L.marker([24.7136, 46.6753], {icon: redIcon}).addTo(map);
var markerToronto = L.marker([43.6532, -79.3832], {icon: redIcon}).addTo(map);
var markerOttawa = L.marker([45.4215, -75.6972], {icon: redIcon}).addTo(map);
var markerCalgary = L.marker([51.0447, -114.0719], {icon: redIcon}).addTo(map);
var markerCopenhagen = L.marker([55.6761, 12.5683], {icon: redIcon}).addTo(map);

markerKuwait.bindPopup('<b>Chiu M, Dubois D.</b> “Developing a Meaningful Curriculum Map for Competence By Design”. Kuwait Institute for Health Specialization (KIMS). 2022');
markerOttawa.bindPopup('<b>Chiu M.</b> “The Role of Simulation in the AFMC Response to the Opioid Crisis”. The Association of Faculties of Medicine of Canada Response to the Opioid Crisis Project Summit. 2022.');
markerCalgary.bindPopup('<b>Chiu M,</b> Cherry R, Levy A. “Debriefing Techniques for Simulation-Based Education”. Royal College of Physicians and Surgeons of Canada Simulation Educator Training Course. 2022 <br><br> Tavares W, <b>Chiu M,</b> Clark M. “Conceptual Frameworks Informing Simulation Education and Assessment”. Royal College of Physicians and Surgeons of Canada Simulation Educator Training Course. 2022 <br><br> <b>Chiu M, </b>Cherry R, Levy A. “Degriefing the Debrief: Troubleshooting and Managing Difficult Situations”. Royal College of Physicians and Surgeons of Canada Simulation Educator Training Course. 2022')
markerToronto.bindPopup('<b>Chiu M, Nickel C.</b> “Transition to Practice: A Bridge to Independence”. Ontario Anesthesia Meeting. 2022 ');
markerRiyadh.bindPopup('<b>Chiu M. </b>“Staying Safe & Optimizing Opportunity: Harnessing Simulation to Weather the Pandemic Storm”. Keynote speaker. Saudi Society of Simulation Scientific Assembly. 2021');
markerCopenhagen.bindPopup('<b>Chiu M, </b>Utstein Simulation Study Panel Member. “Development of a curriculum for simulation-based education and training for anaesthesiology trainees”. 2022')

let allMarkers = {
    kuwait: markerKuwait,
    riyadh: markerRiyadh,
    toronto: markerToronto,
    ottawa: markerOttawa,
    calgary: markerCalgary,
    copenhagen: markerCopenhagen,
}

for (let marker in allMarkers){
    allMarkers[marker].on('mouseover', function (e) {
        this.openPopup();
    });
    allMarkers[marker].on('mouseout', function (e) {
        this.closePopup();
    });

    allMarkers[marker]._icon.style.filter = "hue-rotate(10deg)"
}
