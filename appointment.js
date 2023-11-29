<!-- <!DOCTYPE html> -->


    <!-- //PHP MAILER
    // use PHPMailer\PHPMailer\PHPMailer;
    // use PHPMailer\PHPMailer\Exception;

    // require './PHPMailer/src/Exception.php';
    // require './PHPMailer/src/PHPMailer.php';
    // require './PHPMailer/src/SMTP.php'; 

    //ORDER FORM
    if (isset($_POST['submitbtn'])) {
        $lastname = $_POST['lname'];
        $firstname = $_POST['fname'];
        $contact_num = $_POST['phone'];
        $email = $_POST['email'];
        $address = $_POST['address'];
        

        // ------------ PHPMailer -----------------
        //Create an instance; passing `true` enables exceptions
        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                       //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'suerogeneralhospital0@gmail.com';      //SMTP username
            $mail->Password   = 'qipi iykw huni bpsc';                  //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

            //RECIPIENT
            $mail->setFrom('suerogeneralhospital0@gmail.com', 'Suero General Hospital');
            $mail->addAddress($email);                                  //Recipient of email from forms input


            $email_message = "<h1><center>Suero General Hospital</center></h1>
                    <h3><center>Your booking appointment has been confirmed.</center></h3>
                    <p>Hi there, $firstname, <br><br>
                        We hope this email finds you well. This is a confirmation of your upcoming appointment at 
                        <strong>Suero General Hospital.</strong> We appreciate your trust in our healthcare services.
                    !<p/>
                    <h3>APPOINTMENT DETAILS</h3>
                    <ul>
                        <li><strong>Patient's Name: </strong>$firstname $lastname</li>
                        <li><strong>Patient's Contact Number:</strong> $contact_num</li>
                        <li><strong>Patient's Address:</strong> $address</li>
                        <li><strong>Service: </strong> </li>
                        <li><strong>Schedule:</strong> </li>
                    </ul>
                    <h3>REMINDERS:</h3>
                    <ol>
                        <li>Arrival: Please arrive at least 15 minutes before your scheduled appointment to complete any necessary paperwork.</li>
                        <li>Documentation: Bring your photo ID, insurance card, and any relevant medical records or test results.</li>
                        <li>Cancellation/Rescheduling: If you need to cancel or reschedule your appointment, 
                            kindly contact us at least 24 hours in advance.</li>
                    </ol>
                    <p>We look forward to providing you with quality healthcare. Thank you for choosing Suero General Hospital.</p><br><br>
                    <p>Best Regards</p>
                    <p>Suero General Hospital</p>";


            <!-- // Iterate over selected items and their corresponding amounts
            // for ($i = 0; $i < count($item_selected); $i++) {
            //     $selected_item = $item_selected[$i];
            //     $amount = $item_amount[$i];

            //     $email_message .= "<tr>
            //                 <td>$selected_item</td>
            //                 <td><center>$amount</center></td>
            //                 <td>$itemTotal</td>
            //             </tr><br>";
            // } -->

<!-- 
            //CONTENT
            $mail->isHTML(true);                            //Set email format to HTML
            $mail->Subject = 'Booking Appointment Confirmed';         //Email Subject
            $mail->Body    = $email_message;                //Email Message


            $mail->send();
            
       } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
?> --> 

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
                            
                        
                            <!-- SERVICES DROPDOWN -->
                            <div id="service_dd" class="col-md-7">
                                    <label for="service_opt" class="service"><strong>Service:</strong></label>
                                    <select class="form-control mb-2" name="selected-service[]" id="service_opt">
                                        <option value="0">-- Please Select --</option>
                                        <option value="OPD">Out-Patient Department Services </option>
                                        <option value="Radiology Services">Radiology Services</option>
                                    </select>
    
                                   
                                     <!-- DEPARTMENT DROPDOWN -->
                                        <label for="department" class="service" ><strong>Select Department: </strong></label>
                                        <select class="form-control mb-2" name="selected_dep" id="department">
                                            <option value="0">-- Please Select --</option>
                                            <option value="ENT Department" data-service="OPD">ENT Department</option>
                                            <option value="Opthalmology Department" data-service="OPD">Opthalmology Department</option>
                                            <option value="Pediatrics Department" data-service="OPD">Pediatrics Department</option>
                                            <option value="Cardiology Department" data-service="OPD">Cardiology Department</option>
                                            <option value="Gynecology and Obstetrics Department" data-service="OPD">Gynecology and Obstetrics Department</option>
                                            <option value="Pulmonology Department" data-service="OPD">Pulmonology Department</option>
                                           
                                           
                                     <!-- Radiology Services -->
                                            <option value="Ultrasound" data-service="Radiology">Ultrasound</option>
                                            <option value="X-ray" data-service="Radiology">X-ray</option>
                                            <option value="CT Scan" data-service="Radiology">CT Scan</option>
                                        </select>
                                       
                                    <!-- SCHEDULE DROPDOWN -->
                                    <label for="schedule" class="schedule"><strong>Select Schedule:</strong></label>
                                    <select class="form-control mb-2" name="schedule[]" id="schedule" data-service="Schedule">
                                     <option value="0">-- Please Select --</option>
                                     <option value="1"></option>
                                    <option value="1">8am-9am</option>
                                      <option value="1">10am-11am</option>
                                      <option value="1">1pm-3pm</option>
    
                                      <!-- Add more options as needed -->
                                    </select>
                                    
                        
                              
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
                document.addEventListener('DOMContentLoaded', function () {
                        var serviceDropdown = document.getElementById('service_opt');
                        var departmentDropdown = document.getElementById('department');

                        serviceDropdown.addEventListener('change', function () {
                            console.log('Clicked Service Dropdown');
                            var selectedService = serviceDropdown.value;

                            for (var i = 0; i < departmentDropdown.options.length; i++) {
                                departmentDropdown.options[i].style.display = 'none';
                            }

    // Show options based on the selected service
                    if (selectedService === 'OPD') {
                    // Show OPD-related options
                    document.querySelector('option[value="ENT Department"]').style.display = 'block';
                    document.querySelector('option[value="Opthalmology Department"]').style.display = 'block';
                    document.querySelector('option[value="Pediatrics Department"]').style.display = 'block';
                    document.querySelector('option[value="Cardiology Department"]').style.display = 'block';
                    document.querySelector('option[value="Gynecology and Obstetrics Department"]').style.display = 'block';
                    document.querySelector('option[value="Pulmonology Department"]').style.display = 'none';

                    // Hide specific options not relevant for OPD
                    document.querySelector('option[value="Ultrasound"]').style.display = 'none';
                    document.querySelector('option[value="X-ray"]').style.display = 'none';
                    document.querySelector('option[value="CT Scan"]').style.display = 'none';
                } else if (selectedService === 'Radiology Services') {
                    // Show Radiology-related options
                    document.querySelector('option[value="Ultrasound"]').style.display = 'block';
                    document.querySelector('option[value="X-ray"]').style.display = 'block';
                    document.querySelector('option[value="CT Scan"]').style.display = 'block';

                    // Hide specific options not relevant for Radiology
                    document.querySelector('option[value="ENT Department"]').style.display = 'none';
                    document.querySelector('option[value="Opthalmology Department"]').style.display = 'none';
                    document.querySelector('option[value="Pediatrics Department"]').style.display = 'none';
                    document.querySelector('option[value="Cardiology Department"]').style.display = 'none';
                    document.querySelector('option[value="Gynecology and Obstetrics Department"]').style.display = 'none';
                    document.querySelector('option[value="Pulmonology Department"]').style.display = 'none';
                }
       });
    }
);

            </script>
        </div>
<!-- Footer -->
<!-- Footer -->
<footer class="text-center text-lg-start bg-body-tertiary text-muted">
    <!-- Section: Links  -->
    <section class="mt-5">
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
  
  
           
    </body>
</html>
