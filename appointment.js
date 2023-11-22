//APPOINTMENT PAGE

<?php require_once('header.php'); ?>

<!DOCTYPE html>
<?php

    //PHP MAILER
    /*use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require './PHPMailer/src/Exception.php';
    require './PHPMailer/src/PHPMailer.php';
    require './PHPMailer/src/SMTP.php'; */

    //ORDER FORM
    if (isset($_POST['submitbtn'])) {
        $compname = $_POST['name'];
        $contact_person = $_POST['person'];
        $contact_num = $_POST['phone'];
        $email = $_POST['email'];
        $address = $_POST['address'];
        $city = $_POST['city'];
        $province = $_POST['province'];
        $zip = $_POST['zip'];
        $item_selected = $_POST['selected-item'];
        $item_amount = $_POST['quantity'];
        $totalAmount = 0;
        $itemTotalPrice = array();

        for ($i = 0; $i < count($item_selected); $i++) {
            $selected_item = $item_selected[$i];
            $amount = $item_amount[$i];
            $product_id;
            $item_price;


                if ($selected_item === "BIOELAB AS-280 Fully Auto Chemistry Analyze") {
                    $product_id = 1;
                    $item_price = 5.00;
                } else if ($selected_item === "ZYBIO Z3  HEMATOLOGY ANALYZER") {
                    $product_id = 2;
                    $item_price = 5.00;
                } else if ($selected_item === "EOSCARE IMMUNO ANALYZER") {
                    $product_id = 3;
                    $item_price = 16000.00;
                } else if ($selected_item === "EASYLYTE EXPAND ANALYZER") {
                    $product_id = 4;
                    $item_price = 46000.00;
                } else if ($selected_item === "KHB202 COAGULOMETER") {
                    $product_id = 5;
                    $item_price = 12500.00;
                } else if ($selected_item === "6MINDRAY BC 30 FULLY AUTO HEMA ANALYZER") {
                    $product_id = 6;
                    $item_price = 28700.00;
                } else if ($selected_item === "BGENRUI GE500 ELECTROLYTE ANALYZER") {
                    $product_id = 7;
                    $item_price = 33000.00;
                }
                $itemTotal = $item_price * $amount;
                //$itemTotalPrice[$i] = $itemTotal;
                //$newTotal = $itemTotalPrice[$i];

            $insertOrderSQL = "INSERT INTO `Order` (product_id, customer_id, quantity) VALUES ($product_id, $customer_id, $amount)";
            executeQuery($insertOrderSQL); 
        }

        //Total Amount of the ordered items
        for($j = 1; $j <= count($item_selected); $j++){
            $totalAmount += $itemTotal;
        }

        // ------------ PHPMailer -----------------
        //Create an instance; passing `true` enables exceptions
        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                       //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'tiffanyjaydeenterprisesph@gmail.com';  //SMTP username
            $mail->Password   = 'yfgbukyunhvqngkv';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

            //RECIPIENT
            $mail->setFrom('from@example.com', 'Tiffany Jayde Enterprises');
            $mail->addAddress($email);                                  //Recipient of email from forms input


            $email_message = "<h1><center>Tiffany Jayde Enterprises</center></h1>
                    <h3><center>We have received your order!</center></h3>
                    <p><center>Hi there, $contact_person, <br><br>Thank you for shopping with us. We hope you enjoy your order!</center><p/>
                    <div>
                    <table style='display: flex; justify-content: center;'>
                        <tr>
                            <td><strong>Order/s: </strong></td>
                            <td><strong>Quantity: </strong></td>
                            <td><strong>Price: </strong></td>
                        </tr>";

            // Iterate over selected items and their corresponding amounts
            for ($i = 0; $i < count($item_selected); $i++) {
                $selected_item = $item_selected[$i];
                $amount = $item_amount[$i];

                $email_message .= "<tr>
                            <td>$selected_item</td>
                            <td><center>$amount</center></td>
                            <td>$itemTotal</td>
                        </tr><br>";
            }

            $email_message .= "<tr>
                        <td><strong>Shipping Address: </strong></td>
                        <td></td>
                        <td><strong>Total Amount</strong></td>
                    </tr>
                    <tr>
                        <td>$address</td>
                        <td></td>
                        <td>$totalAmount</td>
                    </tr>
                    <tr>
                        <td>$province</td>
                    </tr>
                    <tr>
                        <td>$city</td>
                    </tr>
                </table>";

            //CONTENT
            $mail->isHTML(true);                            //Set email format to HTML
            $mail->Subject = 'Order Confirmation!';         //Email Subject
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

    </head>
    <body>
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
                <div class="container">
                    <br></br>
                    <img src="images/logo.png" alt="logo" id="logo">
                    <h3 class="sgh">SUERO GENERAL HOSPITAL</h3><br></br>
                    <div class="row">
                        <div class="col-md-6">
                            <input class="form-control mb-2" type="text" name="lname" id="inp1" placeholder="Last Name" required>
                            <input class="form-control mb-2" type="text" name="fname" id="inp2" placeholder="Full Name" required>
                            <input class="form-control mb-2" type="text" name="phone" id="inp3" placeholder="Contact Number" required>
                            <input class="form-control mb-2" type="text" name="email" id="inp4" placeholder="Email" required>
                            <input class="form-control mb-2" type="text" name="address" id="inp5" placeholder="Home Address" required>
                        </div>
                                                    <!-- Item -->
                        <div id="form" class="mb-2">
                                <label for="Item"><strong>Item:</strong></label>
                                <select class="form-control selected-item" name="selected-item[]" id="item">
                                    <option value="0">-- Please Select --</option>
                                    <option value="BIOELAB AS-280 Fully Auto Chemistry Analyze">BIOELAB AS-280 Fully Auto Chemistry Analyze</option>
                                    <option value="ZYBIO Z3  HEMATOLOGY ANALYZER">ZYBIO Z3 HEMATOLOGY ANALYZER</option>
                                    <option value="EOSCARE IMMUNO ANALYZER">EOSCARE IMMUNO ANALYZER</option>
                                    <option value="EASYLYTE EXPAND ANALYZER">EASYLYTE EXPAND ANALYZER</option>
                                    <option value="KHB202 COAGULOMETER">KHB202 COAGULOMETER </option>
                                    <option value="6MINDRAY BC 30 FULLY AUTO HEMA ANALYZER">MINDRAY BC 30 FULLY AUTO HEMA ANALYZER</option>
                                    <option value="GENRUI GE500 ELECTROLYTE ANALYZER">GENRUI GE500 ELECTROLYTE ANALYZER </option>
                                </select>

                                <!-- Quantity -->
                                <label for="quantity"><strong>Select Quantity:</strong></label>
                                <select class="form-control" name="quantity[]" id="quantity">
                                    <?php for ($i = 1; $i <= 10; $i++) { ?>
                                        <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                                    <?php } ?>
                                </select>


                        <div class="col-md-6">
                            <div class="text-end" >
                                <input class="mb-2 ms-auto btn btn-dark" type="button" id="add-product" value="Add another product">
                            </div>



                               
                            </div>
                        </div>
                    </div>


                    <div class="text-center mt-3 mb-5"  >
                        <input type="submit" name="submitbtn" id="submitted" class="form-submit" data-submit="...Sending" value="Submit">
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
                    var selections = document.querySelectorAll('.selected-item');
                    for (var i = 0; i < selections.length; i++) {
                        if (selections[i].value === "0") {
                            alert("Please select an item for all fields.");
                            return false; // Prevent form submission
                        }
                    }    
                    alert("Your order form has successfully been submitted!")            
                    return true; // Allow form submission
                }
                /* MODAL - pwede niyo try if kaya siya sa conditional statement
                const section = document.querySelector("section"),
                        overlay = document.querySelector(".overlay"),
                        showBtn = document.querySelector(".form-submit"),
                        closeBtn = document.querySelector(".close-btn");

                showBtn.addEventListener("click", () => section.classList.add("active"));
                    overlay.addEventListener("click", () => section.classList.remove("active"));
                    closeBtn.addEventListener("click", () => section.classList.remove("active"));   
                */
            </script>
        </div>
        <?php require_once('footer.php'); ?>
 
    </body>
</html>
