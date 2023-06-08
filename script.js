var map = L.map('map');
map.setView([35, 0], 2.45);

L.tileLayer('https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=2uBtXXP0tRIYtS0qaZR3', {attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}).addTo(map);


var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });


  var greyIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
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
var markerCopenhagen = L.marker([55.6761, 12.5683], {icon: redIcon}).addTo(map);
var markerVirtual = L.marker([20.202188, -41.305786], {icon: redIcon}).addTo(map);
var markerLondonUK = L.marker([51.5072, 0.1276], {icon: redIcon}).addTo(map);
var markerAmsterdam = L.marker([52.3676, 4.9041], {icon: redIcon}).addTo(map);
var markerVancouver = L.marker([49.2827, -123.1207], {icon: redIcon}).addTo(map);
var markerBaltimore = L.marker([39.2904, -76.6122], {icon: redIcon}).addTo(map);
var markerQuebec = L.marker([46.8131, -71.2075], {icon: redIcon}).addTo(map);
var markerWinnipeg = L.marker([49.8954, -97.1385], {icon: redIcon}).addTo(map);
var markerSydney = L.marker([-33.8688, 151.2093], {icon: redIcon}).addTo(map);
var markerCairo = L.marker([30.0444, 31.2357], {icon: redIcon}).addTo(map);
var markerTrenton = L.marker([44.0997, -77.5782], {icon: redIcon}).addTo(map);
var markerHalifax = L.marker([44.8857, -63.1005], {icon: redIcon}).addTo(map);
var markerTampa = L.marker([27.9506, -82.4572], {icon: redIcon}).addTo(map);
var markerLondonON = L.marker([42.9849, -81.2453], {icon: redIcon}).addTo(map);
var markerHollywood = L.marker([26.011280, -80.142967], {icon: redIcon}).addTo(map);
var markerMontreal = L.marker([45.5019, -73.5674], {icon: redIcon}).addTo(map);
var markerCornerBrook = L.marker([48.9523, -57.9460], {icon: redIcon}).addTo(map);
var markerLyon = L.marker([45.7640, 4.8357], {icon: redIcon}).addTo(map);
var markerSantaigo = L.marker([-33.4489, -70.6693], {icon: redIcon}).addTo(map);
var markerParis = L.marker([48.8566, 2.3522], {icon: redIcon}).addTo(map);
var markerSteadyBrook = L.marker([48.9543, -57.8233], {icon: redIcon}).addTo(map);
var markerBerkley = L.marker([37.8715, -122.2730], {icon: redIcon}).addTo(map);
var markerStanford = L.marker([37.4241, -122.1661], {icon: redIcon}).addTo(map);
var markerLouisville = L.marker([38.2527, -85.7585], {icon: redIcon}).addTo(map);
var markerOrlando = L.marker([28.5384, -81.3789], {icon: redIcon}).addTo(map);
var markerDenver = L.marker([39.7392, -104.9903], {icon: redIcon}).addTo(map);
var markerTucson = L.marker([32.2540, -110.9742], {icon: redIcon}).addTo(map);
var markerLiverpool = L.marker([53.4084, 2.9916], {icon: redIcon}).addTo(map);
var markerPortland = L.marker([45.5152, -122.6784], {icon: redIcon}).addTo(map);
var markerWhistler = L.marker([50.1162, -122.9535], {icon: redIcon}).addTo(map);
var markerBoston = L.marker([42.3601, -71.0589], {icon: redIcon}).addTo(map);
var markerSanDiego = L.marker([32.7157, -117.1611], {icon: redIcon}).addTo(map);
var markerCalgary = L.marker([51.0447, -114.0719], {icon: redIcon}).addTo(map);
var markerNewOrleans = L.marker([29.9511, -90.0715], {icon: redIcon}).addTo(map);

let allMarkers = {
    kuwait: markerKuwait,
    riyadh: markerRiyadh,
    toronto: markerToronto,
    ottawa: markerOttawa,
    copenhagen: markerCopenhagen,
    virtual: markerVirtual,
    londonUK: markerLondonUK,
    amsterdam: markerAmsterdam,
    vancouver: markerVancouver,
    baltimore: markerBaltimore,
    quebec: markerQuebec,
    winnipeg: markerWinnipeg,
    sydney: markerSydney,
    cairo: markerCairo,
    trenton: markerTrenton,
    halifax: markerHalifax,
    tampa: markerTampa,
    londonON: markerLondonON,
    hollywood: markerHollywood,
    montreal: markerMontreal,
    cornerBrook: markerCornerBrook,
    lyon: markerLyon,
    santiago: markerSantaigo,
    paris: markerParis,
    steadyBrook: markerSteadyBrook,
    berkley: markerBerkley,
    standford: markerStanford,
    louisville: markerLouisville,
    orlando: markerOrlando,
    denver: markerDenver,
    tucson: markerTucson,
    liverpool: markerLiverpool,
    portland: markerPortland,
    whistler: markerWhistler,
    boston: markerBoston,
    sanDiego: markerSanDiego,
    calgary: markerCalgary,
    newOrleans: markerNewOrleans,
}

const kuwaitText = "KUIWAIT CITY, KUIWAIT:<br><br> <b>Dubois, Daniel.</b> Curriculum Mapping. Kuwait Institute for Medical Specialization. . November 2022. <br><br> <b>Chiu M, Dubois D.</b> Developing a Meaningful Curriculum Map for Competence By Design. Kuwait Institute for Health Specialization (KIMS). January 2022";
const riyadhText = "RIYADH, SAUDI ARABIA: <br><br> <b>Chiu M.</b> Staying Safe & Optimizing Opportunity: Harnessing Simulation to Weather the Pandemic Storm. Keynote speaker. Saudi Society of Simulation Scientific Assembly. December 2021";
const torontoText = "TORONTO, ONTARIO: <br><br> <b>Bryson, Gregory Lyle.</b> Top 5 papers of the past year (non-COVID). Ontario Anesthesia Meeting. September 2022. Toronto <br><br> <b>Chiu M, Nickel C.</b> Transition to Practice: A Bridge to Independence. Ontario Anesthesia Meeting. Toronto Canada. September 2022 <br><br> <b>Duggan, Laura.</b> Ontario Anesthesia Meeting October 2023, Workshop Lead, Cricothyrotomy <br><br> <b>Eissa, Mohamed.</b> Speaker Anesthesia grand rounds at the University of Toronto. Waking up to SleAP: The Sleep, Anesthesiology, and Pain Medicine Program. October 2022. <br><br> <b>Eissa, Mohamed.</b> Speaker at the Pain Grand Rounds, for Pain Fellows and Residents at the University Health Network (UHN), University of Toronto, (Sleep disorders in chronic pain patients). Sept. 2021 <br><br> <b>Filteau, Lucie.</b> CAS President’s Update. Ontario’s Anesthesiologists Annual Meeting. Toronto. September, 2022. <br><br> <b>Lamontagne, C.</b> (March 2022) To block or not to block?- Interventional pain management in pediatric chronic pain. Pediatric project Echo, Hosted by Sick Kids Hospital, international outreach <br><br> <b>Lamontagne, C.</b> (August 2021). Is it ABs-normal? Anterior Cutaneous Nerve Entrapment Syndrome. Project ECHO on pediatric pain ,Sick Kids Hospital, Toronto, Ontario, Presentation and Teaching material available on <a href='https://sickkids.echoontario.ca/resources/pain-management/'>https://sickkids.echoontario.ca/resources/pain-management/</a> <br><br> <b>McIsaac, Daniel I.</b> PREHABILITATION: The road to routine multimodal  optimization. Unity Health System, St Michael's Hospital Multidisciplinary Grand Rounds, November 2022 <br><br> <b>Neilipovitz, David.</b> Cut the Count Symposium- Improving Surgical Quality. Ontario Surgical Quality Improvement Network & Health Quality Ontario. March 10, 2021 Toronto <br><br> <b>Nickel, Curtis.</b> Transition to Practice: A Bridge to Independence. Ontario Anesthesiologist's Meeting. Toronto, Sept. 2022 <br><br> <b><b>Rajaleelan, Wesley</b>.</b> Task-Sharing Spinal Anesthesia Care in Three Rural Indian Hospitals: A Non-Inferiority Randomized Controlled Clinical Trial. Bethune Roundtable - May 2023 <br><br> <b>Ramlogan, Reva.</b> Regional Anesthesia Review Lecture. Making a Mark National Resident Conference. Annually 2021 – 2022. Toronto <br><br> <b>Sylvain Gagné,</b> Managing the Diabetic Patient in the Perioperative Period, Ontario Anesthesia Meeting, Toronto, September 2022";
const ottawaText = "OTTAWA, ONTARIO: <br><br> <b>Alie, Tristan.</b>  Difficult Airway Management.  Critical Care Medicine Program Academic Half Day.  Ottawa.  October, 2022 <br><br> <b>Allard, Rene.</b> POCUS Workshop Instructor. LUCAS Conference. Ottawa. February, 2023. <br><br> <b>Andrews M,</b> FEAST Fellow Simulation Workshop. Gap Closure Tools for CRM. uOSSC. Oct 2022 <br><br> <b>Aucoin, Sylvie.</b> Virtual Recovery After Surgery (VRAS). The Ottawa Hospital Department of Surgery Grand Rounds. Ottawa, ON. February 2023. <br><br> <b>Boet, Sylvain.</b> Vaccin: Non merci. Journées Montfort 2022. Webcast (National) March 2022. <br><br> <b>Boet, Sylvain.</b> Dissémination de ma recherche: comment se faire publier et hors publication affiche, podcast, atelier et autres. Francophones Affairs, Faculty of Medicine, University of Ottawa. Webcast (Canada, France, Switzerland, Cameroun) January 2022. <br><br> <b>Boet, Sylvain.</b> La médecine hyperbare au service de mon patient?. Développement Professional Continu des Affaires Francophones, Faculty of Medicine, University of Ottawa. Webcast (National) November 2021. <br><br> <b>Budiansky, Adele.</b> Neuroanesthesia Lecture. Ottawa National Neurosurgery Review Course. Ottawa. February, 2023. <br><br> <b>Budiansky, Adele.</b> Neuroanesthesia Lecture. Ottawa National Neurosurgery Review Course. Ottawa. February, 2022. <br><br> <b>Bryson, Gregory L</b>. QPS Rounds. How did that get there? Drug errors and the supply chain. Anesthesiology and Pain Medicine, The Ottawa Hospital. March 2023. <br><br> <b>CHEO Rounds:</b> <ul> <li><b>Corvo, Antoinette</b>	M&M Rounds	Ottawa, ON	2-Feb-22 <li><b>Lamontagne, Christine</b>	To Block or Not to Block? Interventional Pain Management in Peditric Chronic Pain	Ottawa, ON	23-Mar-23 <li><b>Lamontagne, Christine</b>	M&M Rounds Case Discussion	Ottawa, ON	19-Oct-23 <li><b>Lamontagne, Christine</b>	Research Rounds Paint Catastrophizing Study and Power in Pain Portal	Ottawa, ON	8-Feb-23 <li><b>Lamontagne, Christine</b>	Chronic Pain Service Rounds Case Presentations	Ottawa, ON	24-May-23 <li><b>Lamontagne, Christine</b>	Pain Due to Post Acute Infection Syndrome	Ottawa, ON	25-Jan-23 <li><b>Mervitz, Deborah</b>	Acute Pain Services Rounds Muscle Relaxants in Patients With Neuromuscular Disease	Ottawa, ON	24-Nov-21 <li><b>Mervitz, Deborah</b>	Opioid Related Respiratory Events in Nalaxone - Risk Factors for Pediatric In-Patients	Ottawa, ON	9-Feb-22 <li><b>Mervitz, Deborah</b>	Acute Pain Services Rounds 	Ottawa, ON	17-May-23 <li><b>Mervitz, Deborah</b>	Pain Due to Post Acute Infection Syndrome	Ottawa, ON	25-Jan-23 <li><b>Murto, Kimmo</b>	Research Rounds Research Rounds Update	Ottawa, ON	27-Oct-21 <li><b>Murto, Kimmo</b>	Quaterly Research Rounds Update & Bloody Busy A Potpourri of pediatric Transfusion Research Initiatives	Ottawa, ON	23-Nov-22 <li><b>Murto, Kimmo</b>	Research Rounds Update Celecoxib Plasma and CSF Pharmacokinetics in Children - A Randomized - Controlled Study	Ottawa, ON	18-Jan-23 <li><b>Murto, Kimmo</b>	Research Rounds Update	Ottawa, ON	15-Mar-23 <li><b>Murto, Kimmo</b>	Research Rounds Pediatric Massive Hemorrhage Protocols and Quality Metrics	Ottawa, ON	10-May-23 <li><b>Rosen, David</b>	M&M Rounds Case Presentation	Ottawa, ON	26-Jan-22 <li><b>Rosen, David</b>	New Pediatric Anesthesia Fasting Guideline: Recent Evidence and Discussion	Ottawa, ON	30-Mar-22 <li><b>Rosen, David</b>	Fasting Guidelines Update	Ottawa, ON	7-Dec-22 <li><b>Ryan, Gail</b>	M&M Rounds Case Discussion	Ottawa, ON	6-Oct-21 <li><b>Shadrina, Anna</b>	M&M Rounds Case Presentation	Ottawa, ON	29-Mar-23 <li><b>Weekes, Darlene</b>	OU DAPM Equity, Diversity & Inclusion Survey	Ottawa, ON	27-Oct-21 </ul> <b>Dubois, Daniel.</b> Competence Committees for Residents. Royal College of Physicians and Surgeons of Canada, National Webinar. February 2023. <br><br> <b>Dubois, Daniel.</b> Faculty Development by and for Competence Committees. Royal College of Physicians and Surgeons of Canada, National Webinar. April 2022. <br><br> <b>Dubois, Daniel.</b> Virtual Recovery After Surgery. Lower and Upper Canada Symposium. Ottawa, Canada. February 2022. <br><br> <b>Dubois, Daniel.</b> Group Decision Making and Managing Pitfalls. Royal College of Physicians and Surgeons of Canada, National Webinar. October 2021. <br><br> <b>Duggan, Laura.</b> LUCAS Conference 2023; Workshop Lead, Awake Intubation <br><br> <b>Duggan, Laura.</b> National Association of PeriAnesthesia Nurses of Canada May 2023, Teamwork in Airway Emergencies, a combined lecture with Gisele Eustace RN <br><br> <b>Dumitrascu, G.</b> CBL for Medical Students, Ottawa. 2023 <br><br> <b>Eissa, Mohamed.</b> Hands on teaching and Instructor for POCUS, Lower and Upper Canada Anesthesia Symposium (LUCAS) 2023 POCUS workshop in Ottawa, Ontario. Jan. 2023 <br><br> <b>Eissa, Mohamed.</b> Hands on teaching and Instructor for POCUS, resident’s half day at the Civic Campus, The Ottawa Hospital. June 2022. <br><br> <b>Eissa, Mohamed.</b> Speaker Urology Multidisciplinary grand rounds, for the Urology Staff, Fellows and Residents at The Ottawa Hospital; (Anesthesia for pregnant patient for non-obstetric surgery). June 2022 <br><br> <b>Eissa, Mohamed.</b> Undergraduate Medical Education (UGME) POCUS Teaching, Cardiac scanning sessions for medical students at the University of Ottawa School of Medicine. Apr. 2022 <br><br> <b>Eissa, Mohamed.</b> Hands on teaching and Instructor for POCUS, Train the trainers POCUS course, 2022 organised by the POCUS group, Department of Anesthesia, The Ottawa hospital to train anesthesia staff on POCUS. Mar. 2022 <br><br> <b>Eissa, Mohamed.</b> Hands on teaching and Instructor for POCUS, resident’s half day at the Civic Campus, The Ottawa Hospital. Mar. 2022 <br><br> <b>Eissa, Mohamed.</b> Anesthesia Grand Rounds, for the Anesthesia Staff, Fellows and Residents at The Ottawa Hospital; (Sleep Apnea in Pregnancy). Jan. 2022 <br><br> <b>Eissa, Mohamed.</b> POCUS Rounds for the Anesthesia Staff, Fellows and Residents at The Ottawa Hospital; (Novel Upper Airway PoCUS Tool for OSA Screening). Dec. 2021 <br><br> <b>Eissa, Mohamed.</b> Undergraduate Medical Education (UGME) POCUS Teaching, Cardiac scanning sessions for medical students at the University of Ottawa School of Medicine. Apr. 2023 <br><br> <b>Filteau, Lucie.</b> Perioperative PotPourri: An exploration of emerging topics of relevance to the periop team. National Association of PeriAnesthesia Nurses of Canada (NAPANc) Annual National Conference. Ottawa. May, 2023. <br><br> <b>Filteau, Lucie.</b> CAS Medication Safety Webinar. Canadian Anesthesiologists’ Society Virtual Webinar. Virtual. February, 2023. <br><br> <b>Filteau, Lucie.</b> CAS President’s Update. Lower and Upper Canada Anesthesia Symposium. Ottawa. February, 2023. <br><br> <b>Filteau, Lucie.</b> An Update on the Royal College Maintenance of Certification (MOC) Framework. DAPM Grand Rounds. Ottawa. February, 2022. <br><br> <b>Gadbois, Kristen.</b> Hot topics in regional anesthesia: Safe Practices in Regional Anesthesia in a World of Direct Oral Anticoagulants. CAS, Virtual. June, 2021 <br><br> <b>Gadbois, Kristen.</b> Meet the experts session (Regional Anesthesia Section). CAS, Virtual. June, 2021 <br><br> <b>Ghatalia, Julie.</b> Preparing your Competence Committee - The PA Perspective. International Conference on Residency Education. October, 2021. <br><br> <b>Gomez, Claudia.</b> UGME Lecture: Assessing and Treating Pain. Ottawa, April, 2023. <br><br> <b>Gomez, Claudia.</b> UGME CBL: PAIN Part 1. Ottawa, April 2023. <br><br> <b>Gomez, Claudia.</b> Internal DAPM Rounds: Don't Let Fatigue Put Patients at Risk: Tips and Tools for Anesthesiologists. Ottawa, March, 2023. <br><br> <b>Gomez, Claudia.</b> UGME lecture: Pharmacology of Local and General Anesthetics. Ottawa, February, 2023. <br><br> <b>Gomez, Claudia.</b> Sociedad Boliviana de Anestesiología, Reanimación y Dolor. 3rd refresher course in anesthesiology, obstetrics and gynecology session. Non-obstetric surgical emergencies in the pregnant patient. On-line, Ottawa, May, 2022. <br><br> <b>Gomez, Claudia.</b> ICRE 2021- International Conference in Resident Education Presenter of workshop: How to integrate wellness into your residency program, Ottawa, October, 2021. <br><br> <b>Gomez, Claudia.</b> Royal College- Program Administrators Conference- Presenter of workshop: How to integrate wellness into your residency program, Ottawa, October, 2021. <br><br> <b>Grand Rounds, Division of Cardiac Anesthesiology:</b> <br> <ul> <li><b>Dryden, Adam.</b> Anesthesia Intervention for Delirium Prevention. Grand Rounds, Division of Cardiac Anesthesiology. November, 2021. <li><b>Nicholson, Donna & Dr. Yegappan, C.</b> Challenging Cases in Cardiac Anesthesia and Critical Care; congenital lesions, novel procedures, rare complications, and more… December, 2021. <li><b>Dupuis, Daniel.</b> Perioperative management of hyperglycemia in 496 cardiac surgical patients operated at UOHI between May and August 2020: A quality assurance and improvement project January, 2022 <li>MRI imaging and anaesthesia- <b>Dr.Rob Chen and Dr. Rebecca Thornhill.</b> Feb, 2022 <li>Combined Rounds- Cardiac Anesthesia and Cardiac Surgery – 2022 STS data and CSICU re admission data-<b>Dr Masters & Mahaffey.</b> June, 2023 <li>UOHI Quarterly Staff Meeting- <b>Dr. Nicholson.</b> March, 2022 <li>Cardiac Anesthesia-Open discussion about current and future anesthesia involvement in PAU JYD & JR. April, 2022 <li>Blood pressure management in cardiac surgery <b>Dr. L. Sun</b> (invite surgeons and perfusionist) June 2022 <li>M&M Rounds- <b>R. Mahaffey</b> June 2022 <li>UOHI Quarterly Staff Meeting & Scientific staff Spet, 2022 <li>Jeopardy Rounds- <b>Dr. Nicholson.</b> Oct, 2022 <li>Cardiac Anesthesia Rounds- Repair Focused Echocardiographic Evaluation of the Aortic Valve and Root- <b>Dr. Adam Dryden</b> Oct, 2022 <li>introducing FARES plasma vs octaplex in Cardiac surgery- <b>Dr. Tran.</b> Nov, 2022 <li>M&M rounds D<b>R. Mahaffey</b>. Dec, 2022 <li>Combined Rounds- Enhanced Recovery after Cardiac Surgery (ERAS) and pain control- <b>Dr. Robert Chen & Dr. Alex Nantsios.</b> Jan, 2023 </ul> <b>Gupta, Sanjiv.</b> Consciousness and Anesthesia:​ Is unconsciousness an indispensable goal of general anesthesia? DAPM Rounds. March, 2023. <br><br> <b>Gupta, Sanjiv.</b> Basic Principles of Clinical Pharmacology. PGME - AHD. November, 2022. <br><br> <b>Gupta, Sanjiv.</b> Mechanisms of Anesthesia and Consciousness. PGME - AHD. December, 2021. <br><br> <b>Gu, Yuqi.</b> Foundational Elements of Applied Simulation Theory (FEAST) lecture – debrief the debriefer, Department of Innovation and Medical Education, University of Ottawa (December 2022) <br><br> <b>Gu, Yuqi.</b> Foundational Elements of Applied Simulation Theory (FEAST) lecture – Introduction to debriefing, Department of Innovation and Medical Education, University of Ottawa (September 2022) <br><br> <b>Harty, C </b> and Cheung, W. Competence Committees for Residents at Royal College. October 2021 <br><br> <b>Krolczyk, Gregory.</b> Regional Anesthesia Demonstrator - LUCAS 2023, Feb 2024 <br><br> <b>Kruger P,</b> Lead the Congenital cardiac surgery M&M rounds every 2 months Ottawa <br><br> <b>Lamontagne C.</b> (2023) Post viral myofascial pain syndrome, Anesthesia Grand Rounds, Children’s Hospital of Eastern Ontario, Ottawa, Ontario, Canada <br><br> <b>Lamontagne C.</b>, (2023) Update on research activities, Research rounds , Anesthesia Grand Rounds, Children’s Hospital of Eastern Ontario, Ottawa, Ontario, Canada <br><br> <b>Lamontagne C.</b> (October 2022) Case presentation on CO2 embolism, Morbidity and Mortality Rounds, Department of Anesthesia, Children’s Hospital of Eastern Ontario, Ottawa, Ontario, Canada <br><br> <b>Lamontagne C.</b> (August 2022) What you always wanted to know about Pain, sedation and anesthesia but were afraid to ask… Academic half day for pediatric residents, University of Ottawa, Ottawa, Canada <br><br> <b>Lamontagne C.</b> (April 2022 and April 2023) Lecturer, La douleur chronique et son evaluation- Second Year medical student Pain Medicine Integration Week (French Stream), University of Ottawa <br><br> <b>Lamontagne C.</b>, Academic Half Day for Pediatric medicine residents Development of content and lecture on pain management, sedation and medical optimization for general anesthesia in pediatric patients, CHEO, University of Ottawa, Ontario <br><br> <b>Lamontagne C.</b>, December 2022, January 2023. Pain medicine resident lectures. Pediatric Complex Regional pain syndrome, Persistent post surgical pain in pediatric patients. <br><br> <b>Miller, Elizabeth.</b> Co-Director. LUCAS Point-of-Care Ultrasound Workshop. Ottawa, 2023. <br><br> <b>McFaul, Colleen.</b> Course Co-Director. Point of Care Ultrasound Train the Trainers course. Ottawa Hospital. March, 2022. <br><br> <b>McFaul, Colleen.</b> Physiologie de la douleur. Pain Week, Faculty of Medicine, Ottawa ON. April 2021, 2022 and 2023. <br><br> <b>McFaul, Colleen.</b> Summary of Pain Week. Faculty of Medicine, Ottawa, ON. April 2021, 2022, 2023. <br><br> <b>McFaul, Colleen.</b> Co-lead Point of Care Ultrasound Course. LUCAS. Feb 2023. <br><br> <b>McFaul, Colleen.</b> Presentation on Thoracic Anesthesia. LUCAS. Feb 2022. <br><br> <b>McFaul, Colleen.</b> Thoracic Anesthesia Panel Moderator. LUCAS. Feb 2021. <br><br> <b>Moffett, Stephane, MD:</b> yearly PGY1 CLB teacher to respirology core Feb-March 2023 (since Feb 2008), yearly PGY2 CBL teacher to Pain week April 2022 Ottawa <br><br> <b>Murto, Kimmo.</b> Pediatric Massive Hemorrhage Protocols and Quality Metrics. Research Rounds.  CHEO DAPM. May, 2023. <br><br> <b>Murto, Kimmo.</b> Perioperative Pediatric Patient Blood Management.  Department of Surgery Rounds. CHEO. May, 2023. <br><br> <b>Murto, Kimmo.</b> Research Rounds Update. Research Rounds. CHEO DAPM. March, 2023. <br><br> <b>Murto, Kimmo.</b> Celecoxib Plasma and CSF Pharmacokinetics in Children: A Randomized Controlled Trial. Research Rounds. CHEO DAPM. January, 2023. <br><br> <b>Murto, Kimmo.</b> Bloody Busy, a potpourri of pediatric transfusion research initiatives. Research Rounds. CHEO DAPM. November, 2023. <br><br> <b>Murto, Kimmo.</b>  Update current projects. Research Rounds. CHEO DAPM. October, 2021. <br><br> <b>Neilipovitz, David.</b> Critical Care Podcast Series called Ontario Critical Care Clinical Practice Rounds (OC3PR). 2021-22 Presentations listed:<br> <ol> <li>OC3PR- Leveraging Adult Capacity to Support Critically Ill Patients during Pediatric ICU Surge. Dr. Sonny Dahani. November 11, 2022. <li>OC3PR- Prolonged Ventilation Weaning in ICU. Dr. Ian Fraser. October 20, 2022. <li>OC3PR- Move to Improve: Early Mobility in the ICU. Ms. Ellen Lewis & Ms. Amber Robertson. June 9, 2022. <li>OC3PR- Resilience in a Pandemic: Is That Even a Thing? Dr. Shelly Dev. May 12, 2022. <li>OC3PR- Mass Casualty Planning and a Sudden Increase of Critically Ill Patients. Dr. Paul Bradford & Ms. Diane Bradford.April 7, 2022. <li>OC3PR- Chief Medical Officer of Health: Integrated System Response to a Pandemic. Dr. Kieran Moore. February 10, 2022. <li>OC3PR- Burns Outside the Burn Centre. Dr. Stephanie Mason. January 13, 2022. <li>OC3PR- Post-COVID ICU Survivors and their Outcomes. Drs Angela Cheung & Margaret Herridge. December 2, 2021. <li>OC3PR- Critical Care Transport Medicine, Air and Land. Dr. Randy Wax & Mr. Justin Smith. November 4, 2021. <li>OC3PR- Planning for Paediatric COVID-19 Surge, Leveraging Paediatric & Adult ICUs. Drs Sonny Dhanani & Elaine Gilfoyle. October 7, 2021. <li>OC3PR- Pandemic Perspectives from CritiCall Ontario and Ornge. Ms. Isabel Hayward & Dr. Michael Lewell. September 9, 2021. <li>OC3PR- ECLS for COVID-19 Patients: The Ontario Experience. Drs. Faizan Amin & Eddy Fan. June 3, 2021. <li>OC3PR- Ramping Up Activity After the COVID-19 Third Wave. Dr. Chris Simpson. May 25, 2021. <li>OC3PR- IPAC Measures Among Evolving COVID-19 Health System Pressures. Dr. Susy Hota. May 6, 2021. <li>OC3PR- Evidence Based Therapies for COVID-19. Dr. Bram Rochberg. April 15, 2021. <li>OC3PR- The COVID-19 Variants: What You Need to Know. Dr. Gerald Evans. April 1, 2021. <li>OC3PR- First Anniversary of the COVID-19 Pandemic: Invitation to Pause, Reflect & Remember. Dr. Andrea Frolic. March 11, 2021. <li>OC3PR- Implementing Team Based Models during COVID-19- Tips and Lessons Learned. Ru Taggar, Dawna Van Boxmeer & Tracey DasGupta. March 4, 2021. <li>OC3PR- Coagulation & COVID-19: What to Do? Dr. Lana Castellucci. February 18, 2021. <li>OC3PR- How Clinical Studies Enrolling Critically Ill COVID-19 Patients from all ICUs Can Improve Care. Drs. Marshall, Tsang & Binnie. Feb. 4, 2021. <li>OC3PR- Maximizing Care through an Emergency Standard of Care. January 23, 2021. </ol> <b>Persaud, Desiree:</b> Royal College Oral Examiner Anesthesiology. Ottawa. May, 2021 <br><br> <b>Persaud, Desiree:</b> Royal College Oral Examiner Anesthesiology. Ottawa. May, 2022 <br><br> <b>Persaud, Desiree:</b> Royal College Oral Examiner Anesthesiology. Ottawa. April. 2023 <br><br> <b>Persaud, Desiree:</b> Royal College Written Test Committee member Term end June 2021 <br><br> <b>Polis, Tomasz.</b> Ultra low dose ketamine and naloxone in the perioperative pain management. May 14, 2023 - National Association of PeriAnesthesia Nurses of Canada Conference <br><br> <b>Racine, Jennifer</b>. Anesthesia during Labour. University of Ottawa. November 11, 2022. <br><br> <b>Racine, Jennifer</b>. CBL repro block. University of Ottawa RGN. November, 2022. <br><br> <b>Racine, Jennifer</b>. Obstetrical Anesthesia. Civic Hospital. September 6 2022. <br><br> <b>Racine, Jennifer</b>, Obstetrical Anesthesia -Meet the Expert-. Civic Hospital. April 2022. <br><br> <b>Rajaleelan, Wesley</b> - perioperative care in West Africa & my tryst with humanitarian aid. NAPAN. May, 2023. Ottawa <br><br> <b><b>Rajaleelan, Wesley</b>.</b> Perioperative care in West Africa and my tyrst with humanitarian aid. NAPAN, Ottawa , May 2023 <br><br> <b>Tierney, Sarah.</b> Regional anesthesia workshop. LUCAS. Ottawa. February, 2023. <br><br> <b>Tierney, Sarah.</b> What is Pain?. UGME - 2nd year med student core lecture. UOttawa. April, 2023 <br><br> <b>Tierney, Sarah.</b> Local anesthetics presentation. Surgical foundations half day. Ottawa sim centre. April, 2023. <br><br> <b>Tierney, Sarah.</b> Perioperative Gabapentinoids: Review of the evidence and local practices. DAPM Grand Rounds. Ottawa. April 2022.";
const copenhagenText = "COPENGAGEN, DENMARK <br><br> <b>Chiu M,</b> Faculty at Utstein Meeting for Development of a curriculum for simulation-based education and training for anaesthesiology trainees. Copenhagen, Denmark. September 2022.";
const virtualText = "VIRTUAL TALKS, PRESENTATIONS AND WORKSHOPS: <br><br> <b><b>Boet, Sylvain.</b></b> COVID-19 Treatment With HBOT. Canadian Undersea and Hyperbaric Medicine Association (CUHMA) Annual Meeting. Webcast (National) November 2021. <br><br> <b><b>Budiansky, Adele.</b></b> Rapid Ventricular Pacing for Intracranial Aneurysm Clipping. CAS Neuroanesthesia   Section Virtual Rounds. September, 2023. <br><br> <b><b>Budiansky, Adele.</b></b> Neuroanesthesia Lecture. CAREs. Virtual. June, 2022. <br><br> <b><b>Budiansky, Adele.</b></b> Neuroanesthesia Lecture. Making a Mark. Virtual. August, 2021. <br><br> <b><b>Chiu M.</b></b> Using Simulation for Neuroanesthesia Education: Practical Tips and Pearls  Panel on Advancing Education: Essential Skills for Neuroanesthesiologists. Canadian Anesthesiologists Society Annual Meeting. June 2021. <br><br> <b><b>Chiu M.</b></b> The Role of Simulation in the AFMC Response to the Opioid Crisis. The Association of Faculties of Medicine of Canada Response to the Opioid Crisis Project Summit. February 2022 <br><br> <b>Eissa, Mohamed.</b>	Lecturer at the Mega online learning virtual education platform (Airway Symposium; Airway Ultrasound) Feb. 2022 <br><br> <b>Eissa, Mohamed.</b>	Lecturer at the Mega online learning virtual education platform on perioperative sleep medicine. (Sleep medicine and Anesthesia 101). <a href='https://megalearning.online/aiovg_videos/sleep-medicine-and-anaesthesia-101/'>https://megalearning.online/aiovg_videos/sleep-medicine-and-anaesthesia-101/</a>. September, 2021. <br><br> <b>Filteau, Lucie</b> Reducing Opioid Diversion Risk in the Operating Room. Northern Ontarion School of Medicine (NOSM) Visiting Professor Rounds. Virtual. December, 2022. <br><br> <b>Filteau, Lucie.</b> CAS President’s Update. BCAS Annual General Meeting. Virtual. November, 2022. <br><br> <b>Filteau, Lucie.</b> Conversations with Jillian Horton, Finding a Way Back to Balance: Wisdom from Physician Artists.  Royal College of Physicians and Surgeons of Canada Podcast Series. Virtual. September, 2022. <br><br> <b>Filteau, Lucie.</b> Modernising CPD to support improved patient experiences and outcomes. Tri-Nation Alliance (Canada, Australia, New Zealand) Continuing Professional Development Webinar. Virtual. September, 2022. <br><br> <b>Filteau, Lucie.</b> Learning in the COVID and Post COVID Period – Panelist Discussion. Meeting for the International Academy for CPD Accreditation, Cologne Consensus Conference. Virtual. September, 2022. <br><br> <b>Filteau, Lucie.</b> Recognizing QI Work in the MOC Framework. Royal College Specialty Scoop Podcast. Virtual. April, 2022. <br><br> <b>Filteau, Lucie.</b> Maintenance of Certification Update: Adding QI to your CPD Portfolio. Royal College Professional Practice Webinar. Virtual. November, 2021. <br><br> <b>Gomez, Claudia.<</b> Confederación Latinoamericana de Sociedades de Anestesiología-Curso de Anestesia Obstétrica- Workshop Presenter: Acute Pain Management in the Pregnant Patient, April, 2021. <br><br> <b>Gomez, Claudia.</b> Confederación Latinoamericana de Sociedades de Anestesiología (CLASA)- Curso de Anestesia en Obesidad Mórbida- Presenter: ERAS in Bariatric Surgery, March, 2021. <br><br> <b>Lalu, Manoj.</b> Patient engagement in preclinical laboratory research. International Association for the Study of Pain (IASP) Post-Congress Webinar. Virtual. November 2022. <br><br> <b>Lalu, Manoj.</b> Increasing the transparency and rigour of preclinical systematic reviews through better reporting. Brazilian Reproducibility Initiative Annual Symposium. Virtual. June 2022. <br><br> <b>Lamontagne, C.</b>, Sun N.(2021-2023) Development of 6 freely accessible, interactive, evidence-based, bilingual learning modules for the Association of Faculties of Medicine of Canada (AFMC) on pediatric pain for Canadian medical schools and continuing medical education participants across Canada Pediatrics : Continuum of care from birth to adolescence <a href='https://opioids.afmc.ca/cpd/'>https://opioids.afmc.ca/cpd/</a> <br><br> <b>Murto, Kimmo.</b> Pediatric Patient Blood Management.  Workshop Member, Virtual Principles of Pediatric Anesthesia and Critical Care, Department of Anesthesiology, Critical Care and Pain Medicine, under the auspices of the Department of Continuing Education of Harvard Medical School. May, 2022. <br><br> <b>Power D.</b> Conversations on Defence Ethics, Peer Facilitation, March, 2022.";
const londonUKText ="LONDON, ENGLAND: <br><br> <b>McIsaac, Daniel I.</b> Frailty and the older surgical patient. Bulkley-Barry-Copper Professorship Lecture, King's Health Partners, London UK. Dec 2021 <br><br> <b>McIsaac, Daniel I.</b> Prehabilitation for the older surgical patient. Age Anaesthesia Association, London UK, April 2022 <br><br> <b>McIsaac, Daniel I.</b> What do we know about prehabilitation? And what do we have left to learn? Royal College of Anaesthetists' Education Update, London UK, September 2022";
const amsterdamText = "AMSTERDAM, NETHERLANDS: <br><br> <b>McIsaac, Daniel I.</b> Perioperative Frailty: the journey to better outcomes for our most vulnerable patients. Keynote Address, Dutch Science Symposium on Anesthesiology. Netherlands, Sept 2023";
const vancouverText = "VANCOUVER, BC: <br><br> <b>McIsaac, Daniel I.</b> PREHABILITATION: The road to  routine multimodal  optimization. Costal Health Authority, Vancouver BC December 2023 <br><br> <b>Filteau, Lucie.</b> Building a QPS pillar – key components of a departmental QPS program. BCAS-WSSA Annual Combined Scientific Meeting. Vancouver. November, 2022. <br><br> <b>Filteau, Lucie.</b> Women in Anesthesia Leadership Panel. BCAS-WSSA Annual Combined Scientific Meeting. Vancouver. November, 2022.";
const baltimoreText = "BALTIMORE, MARYLAND: <br><br> <b>McIsaac, Daniel I.</b> Perioperative Frailty: Improving outcomes for vulnerable older adults. Anesthesiology & Critical Care Grand Rounds, Johns Hopkins School of Medicine, January 2023";
const quebecText = "QUEBEC CITY, QUEBEC: <br><br> <b>Chiu, Michelle and Aucoin, Sylvie.</b> Managing Unprofessional Behavior in the Perioperative Environment. Chief’s Plenary Session. Canadian Anesthesiologists Society Meeting. Quebec City. June 2023 <br><br> <b>Filteau, Lucie.</b> Managing the Medication Safety Landscape: Employing National, Departmental and Personal Strategies. Canadian Anesthesiologists’ Society Annual Meeting. Quebec City. June, 2023. <br><br> <b>Filteau, Lucie.</b> The Future of Anesthesia Delivery in Canada – The Good, the Bad and the Ugly Canadian Anesthesiologists’ Society Annual Meeting. Quebec City. June, 2023. <br><br> <b>McIsaac, Daniel I.</b> Patient centered prehabilitation research. Laval University Research Day, March 2022, Quebec QC <br><br> <b>Murto, Kimmo.</b>  Tonsillectomy - Avoid the Pitfalls 60 min. PBLD session on two occasions. Canadian Anesthesiologists’ Society (CAS) annual meeting, Quebec City, Quebec. June, 2023. <br><br> <b>Rajeelan, Wesley</b> - PBLD, Traumatic head injury and bone healing. CAS 2023. Quebec City <br><br> <b><b>Rajaleelan, Wesley</b>.</b> TBI and ORIF - PBLD - CAS Neurosection 2023, Quebec City. June 2023> <br><br> <b>Wong P,</b> Workshop leader, Abdominal Truncal Blocks, CAS Annual Meeting. Quebec, Quebec. June 2023.";
const winnipegText = "WINNIPEG, MANNITOBA: <br><br> <b>McIsaac, Daniel I.</b> Perioperative Frailty. University of Manitoba Research Day. Winnipeg, MB. November 2021";
const sydneyText = "SYDNEY, AUSTRALIA: <br><br> <b>McIsaac, Daniel I.</b> Frailty: Perioperative Assessment and Optimization. Australia and New Zealand College of Anaesthesia, Perioperative Care, Special Interest Group, August 2021, Sydney, Australia.";
const cairoText = "CAIRO, EGYPT <br><br> <b>Eissa, Mohamed.</b> Speaker and Hands on teaching and Instructor for POCUS workshop, for the Anesthesia staff and Residents at Cardiothoracic Academy, Ain Shams University, Cairo, Egypt.  Aug. 2021";
const trentonText = "TRENTON, ONTARIO <br><br> <b>Power D,</b> Stressors of Flight and Medical Evacuation, Canadian Forces Flight Surgeon Course, Trenton, ON Feb 2022. <br><br> <b>Power D,</b> Management of Chemical and Biological Injuries, Seminar Facilitator, Canadian Joint Incident Response Unit Trenton, Sept 2022";
const halifaxText = "HALIFAX, NOVA SCOTIA <br><br> <b>Aucoin, Sylvie.</b> Anesthesiology Human Resources in Canada: The Challenges and the Opportunities. Canadian Anesthesiologists Society Annual Meeting. Halifax, Nova Scotia. June 2022 <br><br> <b>Boretsky K., Marhofer P.,</b> <b><b>Lamontagne C.</b></b>, Kattail D., Chidambaran V. Workshop on Basic Ultrasound Guided Nerve Blocks and Phantom Simulation Workshop for Pediatric Acute Pain Management, accepted submission for the International Symposium on Pediatric Pain, October 2-4th, 2023 <br><br> <b>Gadbois, Kristen.</b> Basic Ultrasound Guided Regional Blocks for Lower Limb. CAS Halifax June, 2022 <br><br> <b>Lamontagne C.</b>, (June 25th, 2022) Opioid sparing management for pediatric ambulatory surgery: Why does it matter?   Canadian Anesthesia Society Annual meeting , Halifax, Nova Scotia, Canada <br><br> <b>Murto, Kimmo.</b>  Tonsillectomy - Avoid the Pitfalls 60 min. PBLD session on two occasions. Canadian Anesthesiologists’ Society (CAS) annual meeting, Halifax, Nova Scotia. June, 2022. <br><br> <b>Murto, Kimmo.</b> Plenary Speaker  What's in your pediatric massive hemorrhage protocol? Canadian Anesthesiologists’ Society (CAS) annual meeting, Halifax, Nova Scotia. June, 2022. <br><br> <b>Persaud, Desiree:</b> Canadian Anesthesiologists' Society workshop: Upper extremity Blocks newer and essential. Halifax. June, 2022 <br><br> <b>Ramlogan, Reva.</b> Recommendations for learning regional anesthesia: Pathway for the practicing anesthesiologist. Canadian Anesthesiologists’ Society Conference. Halifax, NS. June 2022";
const tampaText = "TAMPA, FLORIDA <br><br> <b>Lamontagne C.</b> (March 2022) Does ACNES stand for Abdominal Cutaneous Nerve Entrapment Syndrome or Absolutely Controversial Neurological Explanation Suggested?, Society for Pediatric Pain Medicine 9th Annual Meeting, Tampa, Florida, USA <br><br> <b>Murto, Kimmo.</b>  Pediatric Patient Blood Management Society for Pediatric Anesthesia (SPA) Patient Blood Management (PBM) Special Interest Group (SIG) Workshop member. Tampa, Florida. April, 2022.";
const londonONText = "LONDON, ONTARIO <br><br> <b>Lamontagne C.</b> (February 2023) What’s so different about pediatric chronic pain? Project ECHO St Joseph’s Care Group, virtual presentation with national outreach <br><br> <b>Murto, Kimmo.</b> Novel Approaches to Analgesia in Children. Invited speaker, Department of Pediatrics Grand Rounds, University of London, Ontario. Virtual. September, 2022.";
const hollywoodText = "HOLLYWOOD, FLORIDA <br><br> <b>Tierney, Sarah.</b> Podium Poster Presentation - TPS Spine feasibility project. ASRA Spring meeting 2023. Hollywood, Florida. April, 2023. <br><br> <b>Tierney, Sarah.</b> Ankle and Foot ultrasound workshop instructor. ASRA spring meeting. Hollywood, Florida. April, 2023.";
const montrealText = "MONTREAL, QUEBEC <br><br> <b>Crooks, Simone. Garber, A.</b> Co-Presenter – SimTrek CanMEDS – Plenary presentation at International Conference for Residency Education. Royal College of Physicians and Surgeons of Canada. Montreal PQ, October 2022. <br><br> <b>Dubois, Daniel.</b> Competence Committee Chairs Forum. International Conference for Residency Education. Montreal, Quebec. October 2022. <br><br> <b>Dubois, Daniel.</b> Competence Committee 101. International Conference for Residency Education. Montreal, Canada. October 2022. <br><br> <b>Dubois, Daniel.</b> Competence Committee 101. International Conference for Residency Education. Montreal, Canada. October 2021. <br><br> <b>Filteau, Lucie.</b> Reducing Opioid Diversion Risk in the Operating Room. Université de Montréal Visiting Professor rounds. Montreal. April, 2023. <br><br> <b>Filteau, Lucie.</b> Building a QPS pillar – key components of a departmental QPS program. McGill University Visiting Professor Keynote. Virtual. April, 2022. <br><br> <b>Filteau, Lucie.</b> Perioperative patient positioning – how to QIP it. McGill University Visiting Professor Grand Rounds. Virtual. April, 2022. <br><br> <b>Filteau, Lucie.</b> Lessons Learned from an Accidental Leader. McGill University Visiting Professor Resident Session. Virtual. April, 2022. <br><br> <b>Legault S,</b> Airway Workshop for third year medical students at Montfort Hospital, March 2023";
const cornerBrookText = "CORNER BROOK, NEWFOUNDLAND <br><br> <b>Aucoin, Sylvie.</b> Perioperative Medicine: The Past, Present and Future. Atlantic Canadian Anesthesiologists’ Society Annual Meeting. Corner Brook, Newfoundland. February 2023";
const lyonText = "LYON, FRANCE <br><br> <b>Dubois, Daniel.</b> Curricular Change Management. Association for Medical Education in Europe. Lyon, France. August 2022.";
const santiagoText = "SANTIAGO, CHILE <br><br> <b>Dubois, Daniel.</b> Principles of Assessment. Pontificia Universidad Católica de Chile, Virtual Webinar. December 2021.";
const parisText = "PARIS, FRANCE <br><br> <b>Boet, Sylvain.</b> Recherche en éducation médicale : Impact auprès des patients et des apprenants. Les 10 ans de LabForSIMS. Paris, France. May 2022. <br><br> <b>Boet, Sylvain.</b> Pourquoi et comment faire de la recherche en éducation médicale? Séminaire de Pédagogie Médicale du regroupement HUGO. France. March 2022. <br><br> <b>Boet, Sylvain.</b> Comment réussir son étude en éducation médicale. Groupe de Recherche et Innovation en Pédagogie en Santé GRIPS. Webcast (France) November 2022.";
const steadyBrookText = "STEADY BROOK, NEWFOUNDLAND <br><br> <b>Filteau, Lucie.</b> CAS President’s Update. Canadian Atlantic Anesthesia Meeting. Steady Brook, Newfoundland. February, 2023.";
const berkleyText = "BERKLEY, CALIFORNIA <br><br> <b>Lalu, Manoj.</b> How can we engage patients as partners in our preclinical/bench research? Innovative Genomics Institute (Berkeley/UCSF) Seminar Series. April 2022.";
const standfordText = "STANFORD, CALIFORNIA <br><br> <b>Lalu, Manoj.</b> Lifting the lid on randomized control trials published in predatory journals. Meta-Research Innovation Center at Stanford (METRICS) Seminar Series. Virtual. August 2021.";
const louisvilleText = "LOUISVILLE, KENTUCKY <br><br> <b>Lalu, Manoj.</b> Past and future changes in scientific publishing. American Society of Animal Science Annual Meeting. Louisville, Kentucky + Virtual. July 2021.";
const orlandoText = "ORLANDO, FLORIDA <br><br> <b>Rajaleelan, Wesley.</b> Impact of Sugammadex vs. Neostigmine Reversal on Post-Operative Recovery and Postoperative Complications in Patients with Obstructive Sleep Apnea Undergoing Bariatric Surgery: A Double-Blind, Randomized Controlled Trial. SQPHI, Orlando, FL. March 2023";
const denverText= "DENVER, COLORADO <br><br> <b>Murto, Kimmo.</b> Pediatric massive hemorrhage protocols and quality metrics. Panel Enhanced Recovery after Hemorrhage: A new 'ERAH' in Pediatric Patient Blood Management for the International Anesthesia Research Society (IARS) Annual meeting.  Denver, Colorado. April, 2023. <br><br> <b>Murto, Kimmo.</b> Invited PBLD Speaker: Tonsillectomy in a Child-Avoid the Pitfalls for the International Anesthesia Research Society (IARS) 2023 Annual Meeting. Denver, Colorado. April, 2023. <br><br> <b>Rajaleelan, Wesley.</b> Task-Sharing Spinal Anesthesia Care in Three Rural Indian Hospitals: A Non-Inferiority Randomized Controlled Clinical Trial :IARS, Denver, CO. April 2023 <br><br> <b>Rajaleelan, Wesley.</b> The clinical benefits of POCUS in parturients, A review of evidence. IARS, Denver, CO. April 2023";
const tucsonText = "TUSCON, ARIZONA <br><br> <b>Rajaleelan, Wesley.</b> Emergency airway management in the prone position, an observational mannequin  study. SAM. Tucson, AZ. September 2022";
const liverpoolText = "LIVERPOOL, ENGLAND <br><br> <b>Duggan, Laura.</b> John Snow Keynote Lecture: Deficits in Airway Research, Association of Anaesthetists of Great Britain Annual Meeting, Liverpool UK September 2021 <br><br> <b>Duggan, Laura.</b> Grading the view of the larynx- what have we learned since the 1980s? Association of Anaesthetists of Great Britain Annual Meeting, Liverpool UK September 2021";
const portlandText = "PORTLAND, OREGON <br><br> <b>Duggan, Laura.</b> Visiting Professor, Oregon Health and Sciences University, Department of Anesthesiology and Perioperative Medicine, February 2023";
const whistlerText = "WHISTLER, BC <br><br> <b>Duggan, Laura.</b> Whistler Anesthesia Summit 2022, What is new in the 2021 CAFG airway guidelines";
const bostonText = "BOSTON, MASSACHUSETTS <br><br> <b>Murto, Kimmo.</b>  Pediatric Massive Hemorrhage Protocols– Evidence-Based Content Guideline. Masterclass in Pediatric Patient Blood Management in Principles of Pediatric Anesthesia and Critical Care Pre-conference Offering. A Harvard Medical School Accredited CME Activity. Boston, Massachusetts. May, 2023. <br><br> <b>Murto, Kimmo.</b> Workshop lead Massive Hemorrhage–Case-Based Discussion and Hands on Equipment Demonstration. Masterclass in Pediatric Patient Blood Management in Principles of Pediatric Anesthesia and Critical Care Pre-conference Offering. A Harvard Medical School Accredited CME Activity. Boston, Massachusetts. May, 2023.";
const sanDiegoText = "SAN DIEGO, CALIFORNIA <br><br> <b>Murto, Kimmo.</b> Systemic Inflammatory Aspects of OSA and Predisposition to Perioperative Respiratory Adverse Events (PRAEs). Panel The influence of obstructive sleep apnea on perioperative outcomes in children at the American Society of Anesthesiologists (ASA) annual meeting.  San Diego, California. October, 2021.";
const calgaryText = "CALGARY, ALBERTA <br><br> <b>Chiu M,</b> Cherry R, Levy A. Degriefing the Debrief: Troubleshooting and Managing Difficult Situations. Royal College of Physicians and Surgeons of Canada Simulation Educator Training Course. March 2022 <br><br> <b>Chiu M,</b> Cherry R, Levy A. Debriefing Techniques for Simulation-Based Education. Royal College of Physicians and Surgeons of Canada Simulation Educator Training Course. February 2022 <br><br> Tavares W, <b>Chiu M,</b> Clark M. Conceptual Frameworks Informing Simulation Education and Assessment. Royal College of Physicians and Surgeons of Canada Simulation Educator Training Course. February 2022 CALGARY";
const newOrleansText = "NEW ORLEANS, LOUISIANA <br><br> <b>Ramlogan, Reva.</b> Management of peripheral nerve block catheters for rib fractures. Trauma Anesthesiologists Society. August, 2022. New Orleans";

let markerText = {
    kuwait: kuwaitText,
    riyadh: riyadhText,
    toronto: torontoText,
    ottawa: ottawaText,
    copenhagen: copenhagenText,
    virtual: virtualText,
    londonUK: londonUKText,
    amsterdam: amsterdamText,
    vancouver: vancouverText,
    baltimore: baltimoreText,
    quebec: quebecText,
    winnipeg: winnipegText,
    sydney: sydneyText,
    cairo: cairoText,
    trenton: trentonText,
    halifax: halifaxText,
    tampa: tampaText,
    londonON: londonONText,
    hollywood: hollywoodText,
    montreal: montrealText,
    cornerBrook: cornerBrookText,
    lyon: lyonText,
    santiago: santiagoText,
    paris: parisText,
    steadyBrook: steadyBrookText,
    berkley: berkleyText,
    standford: standfordText,
    louisville: louisvilleText,
    orlando: orlandoText,
    denver: denverText,
    tucson: tucsonText,
    liverpool: liverpoolText,
    portland: portlandText,
    whistler: whistlerText,
    boston: bostonText,
    sanDiego: sanDiegoText,
    calgary: calgaryText,
    newOrleans: newOrleansText,
}

for (let marker in allMarkers){
    allMarkers[marker]._icon.style.filter = "hue-rotate(10deg)";

    allMarkers[marker].on('click', function () {
        for (let marker in allMarkers){
            allMarkers[marker].setIcon(redIcon);
        }

        const sidebarText = document.querySelector('.sidebarText');
        sidebarText.innerHTML = markerText[marker];
        sidebarText.classList.add('textAlignLeft');
        sidebarText.style.color = 'black';
        sidebarText.style.fontWeight = '400';
        allMarkers[marker].setIcon(greyIcon);

        document.body.scrollTop = document.documentElement.scrollTop = 0;

    });

    allMarkers[marker].on('mouseover', function (e) {
        this.openPopup();
    });
    allMarkers[marker].on('mouseout', function (e) {
        this.closePopup();
    });

    
}

markerToronto.bindPopup('Toronto, Ontario');
markerKuwait.bindPopup('Kuwait City, Kuwait');
markerRiyadh.bindPopup('Riyadh, Saudi Arabia');
markerOttawa.bindPopup('Ottawa, Ontario');
markerCopenhagen.bindPopup('Copenhagen, Denmark');
markerVirtual.bindPopup('Virtual Talks, Presentations and Workshops');
markerLondonUK.bindPopup('London, England');
markerAmsterdam.bindPopup('Amsterdam, Netherlands');
markerVancouver.bindPopup('Vancouver, British Colombia');
markerBaltimore.bindPopup('Baltimore, Maryland');
markerQuebec.bindPopup('Quebec City, Quebec');
markerWinnipeg.bindPopup('Winnipeg, Manitoba');
markerSydney.bindPopup('Sydney, Australia');
markerCairo.bindPopup('Cairo, Egypt');
markerTrenton.bindPopup('Trenton, Ontario');
markerHalifax.bindPopup('Halifac, Nova Scotia');
markerTampa.bindPopup('Tampa, Florida');
markerLondonON.bindPopup('London, Ontario');
markerHollywood.bindPopup('Hollywood, Florida');
markerMontreal.bindPopup('Montreal, Quebec');
markerCornerBrook.bindPopup('Corner Brook, Newfoundland');
markerLyon.bindPopup('Lyon, France');
markerSantaigo.bindPopup('Santiago, Chile');
markerParis.bindPopup('Paris, France');
markerSteadyBrook.bindPopup('Steady Brook, Newfoundland');
markerBerkley.bindPopup('Berkley, California');
markerStanford.bindPopup('Stanford, California');
markerLouisville.bindPopup('Louisville, Kentucky');
markerOrlando.bindPopup('Orlando, Florida');
markerDenver.bindPopup('Denver, Colorado');
markerTucson.bindPopup('Tucson, Arizona');
markerLiverpool.bindPopup('Liverpool, England');
markerPortland.bindPopup('Portland, Oregon');
markerWhistler.bindPopup('Whistler, British Colombia');
markerBoston.bindPopup('Boston, Massachusetts');
markerSanDiego.bindPopup('San Diego, California');
markerCalgary.bindPopup('Calgary, Alberta');
markerNewOrleans.bindPopup('New Orleans, Louisiana');