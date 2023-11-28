<!DOCTYPE html>
<?php

    //PHP MAILER
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require './PHPMailer/src/Exception.php';
    require './PHPMailer/src/PHPMailer.php';
    require './PHPMailer/src/SMTP.php'; 

    //ORDER FORM
    if (isset($_POST['submitbtn'])) {
        $lastname = $_POST['lname'];
        $firstname = $_POST['fname'];
        $contact_num = $_POST['phone'];
        $email = $_POST['email'];
        $address = $_POST['address'];
        //$service_selected = $_POST['selected_service'];
        //$schedule_selected = $_POST['schedule'];

        // for ($i = 0; $i < count($item_selected); $i++) {
        //     $selected_item = $item_selected[$i];
        //     $amount = $item_amount[$i];
        //     $product_id;
        //     $item_price;


        //         if ($selected_item === "BIOELAB AS-280 Fully Auto Chemistry Analyze") {
        //             $product_id = 1;
        //             $item_price = 5.00;
        //         } else if ($selected_item === "ZYBIO Z3  HEMATOLOGY ANALYZER") {
        //             $product_id = 2;
        //             $item_price = 5.00;
        //         } else if ($selected_item === "EOSCARE IMMUNO ANALYZER") {
        //             $product_id = 3;
        //             $item_price = 16000.00;
        //         } else if ($selected_item === "EASYLYTE EXPAND ANALYZER") {
        //             $product_id = 4;
        //             $item_price = 46000.00;
        //         } else if ($selected_item === "KHB202 COAGULOMETER") {
        //             $product_id = 5;
        //             $item_price = 12500.00;
        //         } else if ($selected_item === "6MINDRAY BC 30 FULLY AUTO HEMA ANALYZER") {
        //             $product_id = 6;
        //             $item_price = 28700.00;
        //         } else if ($selected_item === "BGENRUI GE500 ELECTROLYTE ANALYZER") {
        //             $product_id = 7;
        //             $item_price = 33000.00;
        //         }

            // $insertOrderSQL = "INSERT INTO `Order` (product_id, customer_id, quantity) VALUES ($product_id, $customer_id, $amount)";
            // executeQuery($insertOrderSQL); 
        //}


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


            // Iterate over selected items and their corresponding amounts
            // for ($i = 0; $i < count($item_selected); $i++) {
            //     $selected_item = $item_selected[$i];
            //     $amount = $item_amount[$i];

            //     $email_message .= "<tr>
            //                 <td>$selected_item</td>
            //                 <td><center>$amount</center></td>
            //                 <td>$itemTotal</td>
            //             </tr><br>";
            // }


            //CONTENT
            $mail->isHTML(true);                            //Set email format to HTML
            $mail->Subject = 'Booking Appointment Confirmed';         //Email Subject
            $mail->Body    = $email_message;                //Email Message


            $mail->send();
            
       } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
?>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Form</title>

        <!--- CSS Bootstrap Link -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <link rel="stylesheet" href="css/products.css">

        <!-- Font-awesome link -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-PgZKc0lCwo0sahsMcSQ9X9y0uzCyXLn1tGv/Jt+ZUCNqqMf2QsCnB+PkiHJpDdC1fBey+8Es1mZYfRZexmLJqw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        <!-- JQuery -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"></script>

        <!-- Modal -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/modalstyle.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

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


            <!-- APPOINTMENT FORM -->
            <div class="form-container">
                <form action="" method="POST" onsubmit="return validateForm()">
                <div class="container" style="height: 570px;">
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
                        <div id="service_dd"    >
                                <label for="service_opt" class="service"><strong>Service:</strong></label>
                                <select class="form-control selected-service" name="selected-service[]" id="service_opt">
                                    <option value="0">-- Please Select --</option>
                                    <option value="OPD">Out-Patient Department Services </option>
                                    <option value="Radiology Services">Radiology Services</option>
                                </select>

                                <!-- SCHEDULE DROPDOWN -->
                                <label for="schedule"><strong>Select Schedule:</strong></label>
                                <select class="form-control" name="schedule[]" id="schedule">
                                    <?php for ($i = 1; $i <= 10; $i++) { ?>
                                        <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                                    <?php } ?>
                                </select>
                            

                            <!-- BOOK APPOINTMENT BUTTON -->
                                <!-- <input class="mb-2 ms-auto btn btn-dark" type="button" id="add-product" value="Add another product"> -->
                                <!-- <button type="button" class="btn btn-success" name="submitbtn" id="bookapp">Book Appointment</button> -->
                    </div>


                    <div class="text-center mt-3 mb-5"  >
                        <input type="submit" name="submitbtn" id="submitted" class="form-submit" data-submit="...Sending" value="Submit">
                        <!-- <button type="button" class="btn btn-success">Book Appointment</button> -->
                    </div>

                </div>
            </form>
        </div>
            
            <script>
                document.getElementById('add-product').addEventListener('click', function() {
                    var container = document.getElementById('form');
                    var clone = container.cloneNode(true);
                    container.parentNode.appendChild(clone);
                });
                function validateForm() {
                    var selections = document.querySelectorAll('.selected-service');
                    for (var i = 0; i < selections.length; i++) {
                        if (selections[i].value === "0") {
                            alert("Please select an item for all fields.");
                            return false; // Prevent form submission
                        }
                    }    
                    alert("Your order form has successfully been submitted!")            
                    return true; // Allow form submission
                }
            </script>
        </div>
        <!-- FOOTER -->
        <?php include 'footer.php'; ?>
    </body>
</html>
