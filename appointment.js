
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Form</title>

         <!-- CSS Bootstrap Link -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
      <!-- Font-awesome link -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" type="text/css" integrity="sha512-PgZKc0lCwo0sahsMcSQ9X9y0uzCyXLn1tGv/Jt+ZUCNqqMf2QsCnB+PkiHJpDdC1fBey+8Es1mZYfRZexmLJqw=="  crossorigin="anonymous" referrerpolicy="no-referrer" />
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <!-- JQuery -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"></script>

        <!-- Modal -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"></script>

        <!-- FOOTER -->
        <link rel="stylesheet" href="footer.css">
        <link rel="stylesheet" href="appointment.css">


    </head>
    <body>
        <!-- HEADER-->
        <div style="height: 30px; background-color: #fff;"></div>

        <nav class="navbar navbar-expand-md  " style="height: 70px; background: #E6ECE2;">
            <!-- Navbar Start -->
            <div class="container-fluid mx-4">
                <!-- Logo and Hospital Name -->
                <a class="navbar-brand mx-4" href="index.html">
                    <img src="images/logo.png" width="50px" height="50px" class="ml-2" alt="Logo">
                    <span style="color: #1B4303; font-size: 30px; font-weight: bold ; font-family: League Gothic; margin-left: 10px">SUERO GENERAL HOSPITAL</span>
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse mx-6" id="navbarNavAltMarkup">
                    <div class="navbar-nav text-md-right ms-auto mx-4">
                        <a class="nav-link mx-2" href="services.html"
                        style="color: #1B4303; font-size: 22px; font-family: Lekton; font-weight: 700; word-wrap: break-word;" target="_blank">Services</a>
                        <a class="nav-link mx-2" href="#"
                            style="color: #1B4303; font-size: 22px; font-family: Lekton; font-weight: 700; word-wrap: break-word;"target="_blank">Appointment</a>
                        <a class="nav-link mx-2" href="#"
                            style="color: #1B4303; font-size: 22px; font-family: Lekton; font-weight: 700; word-wrap: break-word;" target="_blank">Doctor</a>
                        <a class="nav-link mx-2" href="#"
                            style="color: #1B4303; font-size: 22px; font-family: Lekton; font-weight: 700; word-wrap: break-word;" target="_blank">About Us</a>
                    </div>
                </div>
            </div>
        </nav><br>
        <!--PS DIVIDER-->
        <div class="body-container">

            <div class="app_div">
                <!-- OUT PATIENT SERVICES -->
                <div class="ps_photo">
                    <img src="images/PatientServices.png" alt="ps_img" id="ps">
                    <h3 class="ots">OUT PATIENT SERVICES</h3>
                    <div class="ps-photo-desc">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
                            Nunc viverra imperdiet enim. Fusce est.
                        </p>
                    </div>
                </div>
                <div class="form-container">
                    <form action="" method="POST" onsubmit="return validateForm()">
                    <div class="container" style="height: 620px;">
                        <br></br>
                        <img src="images/logo.png" alt="logo" id="logo">
                        <h3 class="sgh">SUERO GENERAL HOSPITAL</h3><br></br>
                        <div class="row">
                            <div class="col-md-6">
                                <input class="form-control mb-2" type="text" name="lname" id="inp1" placeholder="Patient's Last Name" required>
                                <input class="form-control mb-2" type="text" name="fname" id="inp2" placeholder="Patient's Full Name" required>
                                <input class="form-control mb-2" type="text" name="phone" id="inp3" placeholder="Contact Number" required>
                                <input class="form-control mb-2" type="text" name="email" id="inp4" placeholder="Email" required>
                                <input class="form-control mb-2" type="text" name="address" id="inp5" placeholder="Home Address" required>
                            </div>
                            
                            <!-- SERVICES DROPDOWN-->           
                            <div id="service_dd" class="col-md-7">
                                <label for="selected_service" class="service"><strong>Service:</strong></label>
                                <select class="form-control mb-2" id="service_opt">
                                    <option value="0">-- Please Select --</option>
                                    <option value="OPD">Out-Patient Department Services </option>
                                    <option value="Radiology Services">Radiology Services</option>
                                </select>
                            </div>

                                
                            <!-- DEPARTMENTS -->
                            <!-- OPD DROPDOWN -->
                            <div id="OPD_dropdown" class="col-md-7" style="display: none;">
                                <label for="opd_selected" class="service" ><strong>Select Department: </strong></label>
                                <select class="form-control mb-2" id="opd_selected">
                                    <option value="0">-- Please Select --</option>
                                    <option value="ENT Department">ENT Department</option>
                                    <option value="Opthalmology Department">Opthalmology Department</option>
                                    <option value="Pediatrics Department">Pediatrics Department</option>
                                    <option value="Cardiology Department">Cardiology Department</option>
                                    <option value="Gynecology and Obstetrics Department">Gynecology and Obstetrics Department</option>
                                    <option value="Pulmonology Department">Pulmonology Department</option>
                                </select>
                            </div>       
                            
                            <!-- RADIOLOGY DROPDOWN -->
                            <div id="Radiology_dropdown" class="col-md-7" style="display: none;">
                                <label for="radiology_selected" class="service"><strong>Select Department</strong></label>
                                <select class="form-control mb-2" id="radiology_selected">
                                    <option value="Ultrasound">Ultrasound</option>
                                    <option value="X-ray">X-ray</option>
                                    <option value="CT Scan">CT Scan</option>
                            </select>
                            </div>
                                    
                            <!-- SCHEDULE -->
                            <!-- ENT DROPDOWN-->
                            <div id="ENT_dropdown" class="col-md-7" style="display: none;">
                                <label for="ENT_sched"><strong>Select Schedule:</strong></label>
                                <select class="form-control mb-2" id="ENT_sched">
                                    <option value="00">-- Please Select --</option>
                                    <option value="01">MWF: 8am to 9am</option>
                                    <option value="02"> MWF: 10am to 11am</option>
                                    <option value="03">MWF: 1pm to 3pm</option>
                                </select>
                            </div>   
                            
                            <!-- OPTHALMOLOGY DROPDOWN-->
                            <div id="Opth_dropdown" class="col-md-7" style="display: none;">
                                <label for="Opth_sched"><strong>Select Schedule:</strong></label>
                                <select class="form-control mb-2" id="Opth_sched">
                                    <option value="00">-- Please Select --</option>
                                    <option value="01">TTHS: 10am to 11am</option>
                                    <option value="02"> TTHS: 1pm to 3pm</option>
                                    <option value="03">TTHS: 3:30pm to 5pm</option>
                                </select>
                            </div>  

                            <!-- PEDIATRICS DROPDOWN-->
                            <div id="Pedia_dropdown" class="col-md-7" style="display: none;">
                                <label for="Pedia_sched"><strong>Select Schedule:</strong></label>
                                <select class="form-control mb-2" id="Pedia_sched">
                                    <option value="00">-- Please Select --</option>
                                    <option value="01">MWF: 8am to 11am</option>
                                    <option value="02"> MWF: 12pm to 2pm</option>
                                    <option value="03">MWF: 2:30pm to 5pm</option>
                                </select>
                            </div>  

                            <!-- CARDIOLOGY  DROPDOWN-->
                            <div id="Cardio_dropdown" class="col-md-7" style="display: none;">
                                <label for="Cardio_sched"><strong>Select Schedule:</strong></label>
                                <select class="form-control mb-2" id="Cardio_sched">
                                    <option value="00">-- Please Select --</option>
                                    <option value="01">TTHS: 9am to 12nn</option>
                                    <option value="02"> TTHS: 2pm to 7pm</option>
                                </select>
                            </div>  
                        </div>

                        <!-- GYNECOLOGY  DROPDOWN-->
                        <div id="Gyne_dropdown" class="col-md-7" style="display: none;">
                            <label for="Gyne_sched"><strong>Select Schedule:</strong></label>
                            <select class="form-control mb-2" id="Gyne_sched">
                                <option value="00">-- Please Select --</option>
                                <option value="01">Tue Fri: 1pm to 5pm</option>
                                <option value="02"> Wed Sat 1pm to 5pm</option>
                            </select>
                        </div>  

                        <!-- PULMONARY  DROPDOWN-->
                        <div id="Pulmo_dropdown" class="col-md-7" style="display: none;">
                            <label for="Gyne_sched"><strong>Select Schedule:</strong></label>
                            <select class="form-control mb-2" id="Pulmo_sched">
                                <option value="00">-- Please Select --</option>
                                <option value="01">Mon Tue: 7am to 12nn</option>
                                <option value="03"> Fri: 1pm to 5pm</option>
                            </select>
                        </div>  

                        <!-- ULTRASOUND  DROPDOWN-->
                        <div id="Ultrasound_dropdown" class="col-md-7" style="display: none;">
                            <label for="Ultrasound_sched"><strong>Select Schedule:</strong></label>
                            <select class="form-control mb-2" id="Ultrasound_sched">
                                <option value="00">-- Please Select --</option>
                                <option value="01">Mon - Fri: 8am to 11am</option>
                                <option value="02"> Mon - Fri: 1pm to 4pm</option>
                                <option value="03"> Sat: 9am to 3pm</option>
                            </select>
                        </div>  

                        <!--X-RAY  DROPDOWN-->
                        <div id="Xray_dropdown" class="col-md-7" style="display: none;">
                            <label for="Xray_sched"><strong>Select Schedule:</strong></label>
                            <select class="form-control mb-2" id="Xray_sched">
                                <option value="00">-- Please Select --</option>
                                <option value="01">Mon - Fri: 8am to 11am</option>
                                <option value="02"> Mon - Fri: 1pm to 4pm</option>
                                <option value="03"> Mon - Fri: 6pm to 8pm</option>
                            </select>
                        </div>  

                        <!--CT SCAN  DROPDOWN-->
                        <div id="CT_dropdown" class="col-md-7" style="display: none;">
                            <label for="CT_sched"><strong>Select Schedule:</strong></label>
                            <select class="form-control mb-2" id="CT_sched">
                                <option value="00">-- Please Select --</option>
                                <option value="01">Mon - Fri: 8am to 11am</option>
                                <option value="02"> Mon - Fri: 1pm to 4pm</option>
                                <option value="03"> Mon - Fri: 6pm to 8pm</option>
                            </select>
                        </div>  
                    </div>
    
    
                        <div class="text-center mt-3 mb-5"  >
                            <input type="submit" name="submitbtn" id="submitted" class="form-submit" data-submit="...Sending" value="Submit">
                            <!-- <button type="button" class="btn btn-success">Book Appointment</button> -->
                        </div>
    
                    </div>
                </form>
            </div>
        </div>
       


            <!-- APPOINTMENT FORM -->
            <script>
                function validateForm() {
                    var selections = document.querySelectorAll('.selected-service');
                    for (var i = 0; i < selections.length; i++) {
                        if (selections[i].value === "0") {
                            alert("Please select an item for all fields.");
                            return false; // Prevent form submission
                        }
                    }
                    alert("Your order form has successfully been submitted!");
                    return true; // Allow form submission
                }

            //References to the dropdowns
            const serviceDropdown = document.getElementById("service_opt");
            const opdDropdown = document.getElementById("OPD_dropdown");
            const radiologyDropdown = document.getElementById("Radiology_dropdown");
            const ENTDropdown = document.getElementById("ENT_dropdown");
            const Opthdrowndown = document.getElementById("Opth_dropdown");
            const Pediadropdown = document.getElementById("Pedia_dropdown");
            const Cardiodropdown = document.getElementById("Cardio_dropdown");
            const Gynedropdown = document.getElementById("Gyne_dropdown");
            const Pulmodropdown = document.getElementById("Pulmo_dropdown");
            const Ultrasounddropdown = document.getElementById("Ultrasound_dropdown");
            const Xraydropdown = document.getElementById("Xray_dropdown");
            const CTdropdown = document.getElementById("CT_dropdown");




            const OPDselectedDept = document.getElementById("opd_selected");
            const RadiologyselectedDept = document.getElementById("radiology_selected");


            //Event listener to the first dropdown
            serviceDropdown.addEventListener("change", function() {
                //Hide all dropdowns
                opdDropdown.style.display = "none";
                radiologyDropdown.style.display = "none";

                // Get the selected value
                const selectedService = serviceDropdown.value;

                if (selectedService === "OPD"){
                    opdDropdown.style.display = "block";
                }
                else if (selectedService === "Radiology Services") {
                    radiologyDropdown.style.display = "block";
                }
            });
            OPDselectedDept.addEventListener("change", function (){
                const selectedDept = OPDselectedDept.value;

                //Hide other dropdowns
                ENTDropdown.style.display = "none";
                Opthdrowndown.style.display = "none";
                Pediadropdown.style.display = "none";
                Cardiodropdown.style.display = "none";
                Gynedropdown.style.display = "none";
                Pulmodropdown.style.display = "none";
    
                if (selectedDept === "ENT Department") {
                    ENTDropdown.style.display = "block";
                }
                else if (selectedDept === "Opthalmology Department") {
                    Opthdrowndown.style.display = "block";
                }
                else if (selectedDept === "Pediatrics Department"){
                    Pediadropdown.style.display = "block";
                }
                else if (selectedDept === "Cardiology Department"){
                    Cardiodropdown.style.display = "block";
                }
                else if (selectedDept === "Gynecology and Obstetrics Department"){
                    Gynedropdown.style.display= "block";
                }
                else if (selectedDept === "Pulmonology Department"){
                    Pulmodropdown.style.display = "block";
                }
            });
            RadiologyselectedDept.addEventListener("change", function(){
                const selectedDept2 = RadiologyselectedDept.value;

                //Hide other dropdowns
                Ultrasounddropdown.style.display = "none";
                Xraydropdown.style.display = "none";
                CTdropdown.style.display = "none";

                if (selectedDept2 === "Ultrasound"){
                    Ultrasounddropdown.style.display = "block";
                }
                else if (selectedDept2 === "X-ray"){
                    Xraydropdown.style.display = "block";
                }
                else if (selectedDept2 === "CT Scan"){
                    CTdropdown.style.display = "block";
                }
            });


            </script>
        </div>
    </body>
    <!-- FOOTER -->
<footer class="text-center text-lg-start bg-body-tertiary text-muted">
    <!-- Section: Links  -->
    <section class="mt-2">
      <div class="container text-md-start">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 mx-auto my-3">
            <!-- Content -->
            <img src="images/logo.png" width="30px" height="30px">
            <span style="color: #1B4303; font-size: 25px; font-weight: bold; font-family: League Gothic; margin-left: 2px">SUERO GENERAL HOSPITAL</span>
            <br> <br>
            <h5> Suero General Hospital, QFV3+8QQ, Cabugao, Ilocos Sur </h5>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 my-3">
            <!-- Links -->
            <a href="services.html" style="text-decoration:underline; color: #1B4303;">
              <h6 class="text-uppercase fw-bold mb-4" style="color: #1B4303; font-size: 20px; font-weight: bold; font-family: League Gothic;">Services</h6>
            </a>
            <a href="services.html" style="text-decoration:underline; color: #1B4303;">
              <h6 class="text-uppercase fw-bold mb-4" style="color: #1B4303; font-size: 20px; font-weight: bold; font-family: League Gothic;">Appointment</h6>
            </a>
            <a href="services.html" style="text-decoration:underline; color: #1B4303;">
              <h6 class="text-uppercase fw-bold mb-4" style="color: #1B4303; font-size: 20px; font-weight: bold; font-family: League Gothic;">Doctor</h6>
            </a>
            <a href="services.html" style="text-decoration:underline; color: #1B4303;">
              <h6 class="text-uppercase fw-bold mb-4" style="color: #1B4303; font-size: 20px; font-weight: bold; font-family: League Gothic;">About Us</h6>
            </a>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto my-3">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4" style="color: #1B4303; font-size: 20px; font-weight: bold; font-family: League Gothic;">Contact Us</h6>
            <p>
              <i class="fas fa-envelope me-3"></i>
              suerogeneralhospital@gmail.com
            </p>
            <p><i class="fas fa-phone me-3"></i> 09123456158</p>
          </div>
        </div>
      </div>
      
    </section>
    <!-- Copyright -->
    
  </footer>
</html>
