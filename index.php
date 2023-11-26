<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <!-- CSS Link -->
    <link rel="stylesheet" href="header.css">
    <link rel="stylesheet" href="footer.css">
    <!-- CSS Bootstrap Link -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <!-- Font-awesome link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" type="text/css" integrity="sha512-PgZKc0lCwo0sahsMcSQ9X9y0uzCyXLn1tGv/Jt+ZUCNqqMf2QsCnB+PkiHJpDdC1fBey+8Es1mZYfRZexmLJqw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- Page Icon -->
    <link rel="shortcut icon" href="images/Logo.png">
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body>
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
                        style="color: #1B4303; font-size: 22px; font-family: Lekton; font-weight: 700; word-wrap: break-word;">Services</a>
                    <a class="nav-link mx-2" href="appointment.php"
                        style="color: #1B4303; font-size: 22px; font-family: Lekton; font-weight: 700; word-wrap: break-word;">Appointment</a>
                    <a class="nav-link mx-2" href="#"
                        style="color: #1B4303; font-size: 22px; font-family: Lekton; font-weight: 700; word-wrap: break-word;">Doctor</a>
                    <a class="nav-link mx-2" href="#"
                        style="color: #1B4303; font-size: 22px; font-family: Lekton; font-weight: 700; word-wrap: break-word;">About Us</a>
                </div>
            </div>
        </div>
    </nav>
       
    
    
    <div class="content">
        <!-- Carousel -->
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="images/b1.png" class="d-block w-100" alt="Slide1">
                </div>

                <div class="carousel-item">
                    <img src="images/b2.png" class="d-block w-100" alt="Slide2">
                </div>

                <div class="carousel-item ">
                    <img src="images/b3.png" class="d-block w-100" alt="Slide3">
                </div>
            </div>

            <!-- Carousel Controls -->
            <div class="carousel-controls">
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
        
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        <br><br>

        <div class="choose">
            <div class=" mx-">
                <div class="card-header text-center py-4" style="font-size: 30px; font-weight: bold; color: #1B4303;">Why Choose Us</div>
                <div class="card-body">
                    <p class="card-text" style="text-align: justify; font-size: 18px; font-family: Arial, sans-serif; color: #333;">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce
                        posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros
                        quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi
                        tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede.
                        Mauris et orci. Aenean nec lorem.
                    </p>
                </div>
            </div>
        </div>

        <br><br>

        <!-- Card-->
        <div class="container">
            <div class="row justify-content-around">
                <!-- Card 1 -->
                <div class="card" style="width: 18rem;">
                    <img src="images/services.png" width="50px" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">Services</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="services.php" class="btn btn-primary d-flex justify-content-center">Services</a>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="card" style="width: 18rem;">
                    <img src="images/doctors.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">Doctor</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="doctor.php" class="btn btn-primary d-flex justify-content-center">Doctor</a>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="card" style="width: 18rem;">
                    <img src="images/appointment.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">Appointment</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="appointment.php" class="btn btn-primary d-flex justify-content-center">Appointment</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Location Map-->
        <div class="location d-flex justify-content-center">
            <h1 style="font-size: 30px; font-weight: bold; color: #1B4303;">Our Location </h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.964998416237!2d120.44962767897856!3d17.793342039756116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e8bf4752a50c9%3A0xb87ed16ee1a924b1!2sSuero%20General%20Hospital!5e0!3m2!1sen!2sph!4v1699886375802!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>    
    </div>

    
        



    <!--FOOTER-->
    <?php include 'footer.php'; ?>
    <!-- <div style="height: 100px;" class="footer_bg"></div> -->
    </body>
</html>