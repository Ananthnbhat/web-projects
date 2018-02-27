<?php
$iPod= stripos($_SERVER['HTTP_USER_AGENT'],"iPod");
$iPhone = stripos($_SERVER['HTTP_USER_AGENT'],"iPhone");
$iPad= stripos($_SERVER['HTTP_USER_AGENT'],"iPad");
$Android = stripos($_SERVER['HTTP_USER_AGENT'],"Android");
$webOS= stripos($_SERVER['HTTP_USER_AGENT'],"webOS");
if( $Android ){
  header('Location:https://play.google.com/store/apps/details?id=com.acharya.habbaregistration');
 exit();
} else if($iPad || $iPod || $iPhone) {
	header('location:https://itunes.apple.com/us/app/habba-18/id1350738288?ls=1&mt=8');
	exit();
}
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Acharya Habba 2018</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="flipcards1/cardStyle.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="text/javascript" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js">
    <link rel='stylesheet prefetch' href='https://fonts.googleapis.com/css?family=Ubuntu:400,700'>
    <link rel='stylesheet prefetch' href='https://cdn.rawgit.com/electerious/basicGrid/d77c5024/dist/basicGrid.min.css'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="goo red.css">
    <link rel="stylesheet" type="text/css" href="goobackground.css">
    <link rel="stylesheet" type="text/css" href="planetSat/planetSat.css">
    <link rel="stylesheet" type="text/css" href="mana/mana.css">
    <link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css'>
    <link rel="stylesheet" type="text/css" href="timeline-button/timeline-button.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript">
        function goToByScroll(id) {
            $('html,body').animate({
                scrollTop: $("#" + id).offset().top
            }, 'slow');
        }
    </script>
    <script>
        function delay_disp() {
            document.getElementById("jsfunc").style.filter = "blur(5px)";
            setTimeout(function() {
                document.getElementById("rdl").style.display = "block";

            }, 1000)
        }
        $(".popup").click(function(event) {
            document.getElementById("rdl").style.display = "none";
        });
    </script>
    <script>
        function to_blur() {
            document.getElementById("jsfunc").style.filter = "blur(5px)";
            return false;
        }

        function cancel_blur3() {
            document.getElementById("rdl").style.display = "none";
            document.getElementById("calendar-app").style.display = "none";
            document.getElementById("jsfunc").style.filter = "blur(0px)";
            goToByScroll("devs_id");
        }

        function cancel_blur() {
            document.getElementById("calendar-app").style.display = "none";
            document.getElementById("jsfunc").style.filter = "blur(0px)";
            goToByScroll("timelineanchor");
        }

        function cancel_blur2() {
            document.getElementById("jsfunc").style.filter = "blur(0px)";
            goToByScroll("bck_button");
        }

        function appear() {
            console.log("appear");
            document.getElementById("jsfunc").style.filter = "blur(3px)";
            setTimeout(function() {
                document.getElementById("calendar-app").style.display = "block";
            }, 1000);
            return false;

        }
    </script>

</head>

<body style="background:#000000">

    <div id="popup-article" class="popup">
        <div id="try">
            <div class="calendar" id="calendar-app">
                <div class="calendar--day-view" id="day-view">
                    <span class="day-view-exit" id="day-view-exit">&times;</span>
                    <span class="day-view-date" id="day-view-date">MAY 29 2016</span>
                    <div class="day-view-content">
                        <div class="day-highlight">
                            You
                            <span class="day-events" id="day-events">had no events for today</span>. &nbsp;
                            <span tabindex="0" onkeyup="if(event.keyCode != 13) return; this.click();" class="day-events-link" id="add-event" data-date></span>
                        </div>
                        <div id="day-events-list" class="day-events-list">

                        </div>
                    </div>
                </div>
                <div class="calendar--view" id="calendar-view">
                    <div class="cview__month">
                        <span class="cview__month-last" id="calendar-month-last">Apr</span>
                        <span class="cview__month-current" id="calendar-month">May</span>
                        <span class="cview__month-next" id="calendar-month-next">Jun</span>
                    </div>
                    <div class="cview__header">Sun</div>
                    <div class="cview__header">Mon</div>
                    <div class="cview__header">Tue</div>
                    <div class="cview__header">Wed</div>
                    <div class="cview__header">Thu</div>
                    <div class="cview__header">Fri</div>
                    <div class="cview__header">Sat</div>
                    <div class="calendar--view" id="dates">
                    </div>
                </div>
                <div class="footer">
                    <span>
                        <span id="footer-date" class="footer__link">Today is May 30</span>
                    </span>
                </div>
            </div>
            <a onclick="cancel_blur();" href="#" class="popup__close">close</a>
            <script src="https://code.jquery.com/jquery-3.2.1.js"></script>
            <script src="script.js"></script>
        </div>
    </div>
    <div id="jsfunc">
        <div class="container1">
            <div class="top">
                <div class="dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>

                <svg id="goobackgroundsvg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="800">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo"></feColorMatrix>
                            <feComposite in="SourceGraphic" in2="goo"></feComposite>
                        </filter>
                    </defs>
                </svg>
                <div class="aclogo">
                    <center>
                        <img src="playground-images/habbalogo.png" alt="" width="250px">
                    </center>
                </div>
                <div class="titleanim">
                    <h1 id="typer-size" style="text-align:center">

                        <span id="typed"></span>
                        <div id="typed-strings">

                            <p>Acharya Habba 2018</p>

                        </div>

                    </h1>
                </div>


            </div>


        </div>
        <div class="black">
            <div class="card1">
                <!-- big red blob -->
                <div id="gooblobdiv1">
                    <svg id="organic-blob" width="80em" height="80em" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" version="1.1" filter="url(#goo)">
                        <defs>
                            <filter id="goo2">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix>
                                <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
                            </filter>
                        </defs>

                        <circle fill="#FF2936" cx="80" cy="75" r="50" id="Circle1"></circle>
                        <circle fill="#FF2936" cx="85" cy="90" r="50" id="Circle2"></circle>
                        <circle fill="#FF2936" cx="75" cy="80" r="50" id="Circle3"></circle>
                        <circle fill="#FF2936" cx="85" cy="80" r="50" id="Circle4"></circle>
                    </svg>
                </div>

                <!-- end big red blob -->
                <div class="smallcardInsideCard">
                </div>
                <div class="aboutUs">

                    <p id="aboutusid" align="center">Acharya Habba is the annual techno-cultural fest organised by Acharya Institutes, Bangalore. Spanning over a duration of a month, it draws about 25,000+ students from more than 300 colleges across Karnataka.</p>
                </div>
                <div class="events">
                    <div class="left">
                        <p>Events</p>
                        <img src="playground-images/left-arrow.png" alt="goBack" id="bck_button" onclick="initial()" width="30px">
                        <div class="eventCard">
                            <p>Select the category</p>

                            <img src="playground-images/arrow.png" alt="" width="40em">
                        </div>
                    </div>
                    <div class="right"></div>
                </div>
                <div class="feed">
                    <h1>Follow Us</h1>
                    <div class="social-item1">
                        <div id="facebookd" style="height:31em;width:30em;">
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Facharya.ac.in%2F&tabs=timeline&small_header=true&height=100%&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" style="border:none;overflow:hidden"
                                height="100%" width="100%" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
                        </div>
                    </div>
                    <div class="social-item2">
                        <div style="height:100%;overflow-y: scroll; background-color: #fff;border-radius:5px;">
                            <div id="insta">
                                <script src="http://lightwidget.com/widgets/lightwidget.js"></script><iframe src="http://lightwidget.com/widgets/747008caf4dc5492a875ddad35c84563.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style=" width:100%;border: 0; overflow: hidden;"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="social-item3">
                        <a class="twitter-timeline" href="https://twitter.com/hashtag/habba18" data-widget-id="964176197046292480" width="100%">#habba18 Tweets</a>
                        <script>
                            ! function(d, s, id) {
                                var js, fjs = d.getElementsByTagName(s)[0],
                                    p = /^http:/.test(d.location) ? 'http' : 'https';
                                if (!d.getElementById(id)) {
                                    js = d.createElement(s);
                                    js.id = id;
                                    js.src = p + "://platform.twitter.com/widgets.js";
                                    fjs.parentNode.insertBefore(js, fjs);
                                }
                            }(document, "script", "twitter-wjs");
                        </script>


                    </div>
                    <div class="feedb1">
                        <img src="playground-images/feedb.png" alt="" width="100%">
                    </div>
                    <div class="feedb2">
                        <img src="playground-images/feedbulta.png" alt="" width="100%">
                    </div>
                </div>
                <div class="timeline">
                    <hr class="hrline" style="height:3px;border:none;color:rgb(0, 0, 0);background-color:rgb(0, 0, 0);" />
                    <p style="font-size:66px;margin-top:60px;font-family:PlaylistScript,sans-serif">Check out our timeline</p>
                    <p style="font-size:25px">to find out when and where your favourite events are happening</p>
                    <div class="timeline-button">


                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="gooe">
                                <defs>
                                    <filter id="gooe">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="gooe" />
                                        <feComposite in="SourceGraphic" in2="gooe" />
                                    </filter>
                                </defs>
                            </svg>

                        <span class="buttonn--bubble__container">
                                <a id="timelineanchor" href="#popup-article" onclick="appear();" class="card__link card__readmore buttonn buttonn--bubble">
                                    Timeline
                                </a>
                                <span class="buttonn--bubble__effect-container">
                                    <span class="circle top-left"></span>
                        <span class="circle top-left"></span>
                        <span class="circle top-left"></span>

                        <span class="buttonn effect-buttonn"></span>

                        <span class="circle bottom-right"></span>
                        <span class="circle bottom-right"></span>
                        <span class="circle bottom-right"></span>
                        </span>
                        </span>

                    </div>
                    <hr class="hrline" style="height:3px;border:none;color:rgb(0, 0, 0);background-color:rgb(0, 0, 0);" />
                </div>

                <div class="maps">
                    <h3 style="color:#31313b;text-align:center;font-size:66px;font-family:PlaylistScript,sans-serif;">Find us at <span style="font-family:PlaylistCaps">A</span>charya Institutes</h3>
                    <br>
                    <div id="map" class="pura">
                        <iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=acharya%20habba&key=AIzaSyAqZfw03d2lmk-2ZuDN9pGuhbA6lITWwCY&zoom=18" allowfullscreen></iframe>
                    </div>
                </div>
                <footer>
                    <div class="footerSec">
                        <p>CONTACT US</p><br>
                        <p>Feel free to email us, to provide some feedback, to give us suggestions, or to just say hello!</p>
                        <br><br>
                        <a style="text-decoration:none" class="card__link card__readmore" href="#popup-article3" onclick="delay_disp()">
                            <div id="devs_id" class="mana">
                                developers
                            </div>
                        </a>
                        <br><br>
                        <p>
                            <a href="" style="text-decoration:none;color:darksalmon;">habba@acharya.ac.in</a>
                        </p>
                        <br>
                        <ul class="list-inline banner-social-buttons" style="text-align: center;">
                            <li>
                                <a href="https://twitter.com/acharya_ac_in" target="_blank" class="btn btn-default btn-lg">
                                    <i class="fa fa-twitter fa-fw"></i>
                                    <span class="network-name"></span>
                                </a>
                                <a href="https://www.facebook.com/acharya.ac.in/" target="_blank" class="btn btn-default btn-lg">
                                    <i class="fa fa-facebook fa-fw"></i>
                                    <span class="network-name"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/habba2018/" target="_blank" class="btn btn-default btn-lg">
                                    <i class="fa fa-instagram fa-fw"></i>
                                    <span class="network-name"></span>
                                </a>
                                <a href="https://www.snapchat.com/add/acharya_habba" target="_blank" class="btn btn-default btn-lg">
                                    <i class="fa fa-snapchat-ghost fa-fw"></i>
                                    <span class="network-name"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://play.google.com/store/apps/details?id=com.codefive.adichi.myapplication" target="_blank" class="btn btn-default btn-lg">
                                    <i class="fa fa-android fa-fw"></i>
                                    <span class="network-name"></span>
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.codefive.adichi.myapplication" target="_blank" class="btn btn-default btn-lg">
                                    <i class="fa fa-apple fa-fw"></i>
                                    <span class="network-name"></span>
                                </a>
                            </li>
                        </ul>
                        <br>
                        <p>Copyright © Acharya Habba 2017</p>
                        <br>
                    </div>
                    <div class="filter-goot" style="height:0">
                        <svg version='1.1' xmlns='http://www.w3.org/2000/svg'>
                            <defs>
                                <filter id='goot'>
                                    <feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='10'></feGaussianBlur>
                                    <feColorMatrix in='blur' mode='matrix' result='goot' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'></feColorMatrix>
                                    <feComposite in2='goot' in='SourceGraphic' operator='atop'></feComposite>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </footer>
                <img id="timelineback" src="playground-images/timeline.png" alt="" style="position:absolute;top:65%" width="100%">
            </div>
            <div class="smallcardOutsideCard">
                <h3><span style="font-family:PlaylistCaps">A</span>bout Habba</h3>
            </div>
            <div class="bigcardOutsideCard">
                <div class="container2">
                    <div id="event_cards">
                    </div>
                    <div class="planetSat">
                        <div class="planet"></div>
                        <div class="satellite"></div>
                        <!-- filters -->
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="good">
      <fegaussianblur in="SourceGraphic" stddeviation="10" result="blur"></fegaussianblur>
      <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="good"></fecolormatrix>
      <feblend in="SourceGraphic" in2="good"></feblend>
    </filter>
  </defs>
</svg>
                    </div>
                </div>
            </div>
        </div>
        <script>
            var globalsubcat;

            function initial() {
                document.getElementById("bck_button").style.display = "none";
                $.ajax({
                    type: "GET",
                    url: "http://acharyahabba.in/habba18/events.php",
                    success: fillPoly,
                    sync: true
                });
            }
            initial();

            function fillPoly(data) {
                var eventsobj = jQuery.parseJSON(data);
                var res = eventsobj.result;
                $("#event_cards").html("");
                $.each(eventsobj.result, function(key, val) {
                    $("#event_cards").append(
                        "<div class='card'><div id='backg" + val.id +
                        "' class='front'><div class='title'><h2>" + val.name +
                        "</h2></div></div><div class='back'><span id='" + val.id +
                        "' class='btn' >Events</span></div></div>"
                    );
                    document.getElementById("backg" + val.id).style.backgroundImage = "url('" + val.image_logo + "'),url('" + val.url + "')";
                    console.log(val.id);
                    document.getElementById(val.id).addEventListener("click", function() {
                        if (val.id == 2) {
                            window.open('http://www.google.com', '_blank').focus();
                            fillPoly();
                        }
                        document.getElementById("bck_button").style.display = "block";
                        $.ajax({
                            type: "GET",
                            url: 'http://acharyahabba.in/habba18/subcat.php?id=' + this.id,
                            success: fillsubcat,
                            sync: true
                        });
                        $("#event_cards").html("");

                        function fillsubcat(data) {
                            var subobj = jQuery.parseJSON(data);
                            globalsubcat = subobj;
                            var res = subobj.result;
                            $.each(subobj.result, function(key, val) {
                                $("#event_cards").append(
                                    "<div class='card'><div id='backg" + val.eid +
                                    "' class='front'><div class='title'><h2>" + val.name +
                                    "</h2></div></div><div class='back'><p>" + val.description +
                                    "</p><a id='" + val.eid +
                                    "' class='btn card__link card__readmore' href='#popup-article2' onclick='to_blur(" +
                                    val.eid + ")' >More details!</a></div></div>"
                                );
                                document.getElementById("backg" + val.eid).style.backgroundImage =
                                    "url('" + val.url + "')";
                            })
                        }
                    });
                });
            }
        </script>
        <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
        <script src="http://threejs.org/examples/js/libs/stats.min.js"></script>
        <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/plugins/CSSPlugin.min.js'>
        </script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenLite.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineLite.min.js'></script>
        <script type="text/javascript" src="playground.js"></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js'></script>
        <script type="text/javascript" src="timeline-button/timeline-button.js"></script>
        <script src="js/index.js"></script>
    </div>
    <div id="popup-article2" class="popup">
        <div class="popup__block">
            <div class="event__card">
                <div class="thumbnail">
                    <!-- add the image of the event -->
                    <img id="img1" class="left" src="" />
                </div>
                <div class="right">
                    <!-- in h1 write the event name -->
                    <h1 id="event_name"></h1>
                    <div class="author">
                        <!-- prize money -->
                        <h2 id="pr"></h2>
                    </div>
                    <div class="separator"></div>
                    <div class="scroll" id=style-3>
                        <p class="for_style" id="phone"></p>
                        <p class="for_style" id="desc"></p>
                        <p class="for_style" id="amt"></p>
                        <p class="for_style" id="enm"></p>
                        <p class="for_style" id="pnum"></p>
                        <p class="for_style" id="ven"></p>
                        <p class="for_style" id="rules"></p>
                    </div>
                </div>
                <p id="pr_dt">123</p>
                <p id="pr_tm">234</p>
            </div>
            <a onclick="cancel_blur2()" href="#" class="popup__close">close</a>
        </div>
    </div>
    <div id="popup-article3" class="popup3">
        <div id="rdl">
            <ul class="rolldown-list" id="myList">
                <li>
                    <img src="Pics/Bhatta.jpg" alt="" width="50px" height="50px" style="float:left;text-align:left">
                    <p style="margin:0.5em;text-align:left;float:left;margin-left:30px">Ananth N Bhat</p>
                    <p style="margin:0.5em;text-align:right">Web Developer</p>
                </li>
                <li><img src="Pics/Raghav.jpg" alt="" width="50px" height="50px" style="float:left;text-align:left">
                    <p style="margin:0.5em;text-align:left;float:left;margin-left:30px">Raghav C.S</p>
                    <p style="margin:0.5em;text-align:right">Web Developer</p>
                </li>
                <li><img src="Pics/Prashanth.jpg" alt="" width="50px" height="50px" style="float:left;text-align:left">
                    <p style="margin:0.5em;text-align:left;float:left;margin-left:30px">Prashanth S</p>
                    <p style="margin:0.5em;text-align:right">Web Developer</p>
                </li>
                <li><img src="Pics/Hrushi.jpg" alt="" width="50px" height="50px" style="float:left;text-align:left">
                    <p style="margin:0.5em;text-align:left;float:left;margin-left:30px">Hrushikesh Choudary</p>
                    <p style="margin:0.5em;text-align:right">Web Developer</p>
                </li>
                <li><img src="Pics/Ankur.jpg" alt="" width="50px" height="50px" style="float:left;text-align:left">
                    <p style="margin:0.5em;text-align:left;float:left;margin-left:30px">Ankur Vinekar</p>
                    <p style="margin:0.5em;text-align:right">UI/UX Designer</p>
                </li>
                <li><img src="Pics/Prateek.jpg" alt="" width="50px" height="50px" style="float:left;text-align:left">
                    <p style="margin:0.5em;text-align:left;float:left;margin-left:30px">Prateek Hegde</p>
                    <p style="margin:0.5em;text-align:right">Web/App Backend</p>
                </li>
                <li><img src="Pics/Arjun.jpg" alt="" width="50px" height="50px" style="float:left;text-align:left">
                    <p style="margin:0.5em;text-align:left;float:left;margin-left:30px">Arjun Madhu</p>
                    <p style="margin:0.5em;text-align:right">Motion Graphics Designer</p>
                </li>
                <li><img src="Pics/Chirag.jpg" alt="" width="50px" height="50px" style="float:left;text-align:left">
                    <p style="margin:0.5em;text-align:left;float:left;margin-left:30px">Chirag Sastry</p>
                    <p style="margin:0.5em;text-align:right">App Developer</p>
                </li>
                <li><img src="Pics/Ashwin.jpg" alt="" width="50px" height="50px" style="float:left;text-align:left">
                    <p style="margin:0.5em;text-align:left;float:left;margin-left:30px">Ashwin Prasad</p>
                    <p style="margin:0.5em;text-align:right">App Developer</p>
                </li>
                <li><img src="Pics/Adi.jpg" alt="" width="50px" height="50px" style="float:left;text-align:left">
                    <p style="margin:0.5em;text-align:left;float:left;margin-left:30px">Aditya Das</p>
                    <p style="margin:0.5em;text-align:right">App Developer</p>
                </li>
                <li><img src="Pics/Rajat.jpg" alt="" width="50px" height="50px" style="float:left;text-align:left">
                    <p style="margin:0.5em;text-align:left;float:left;margin-left:30px">Rajat Porwal</p>
                    <p style="margin:0.5em;text-align:right">App Developer</p>
                </li>

            </ul>
            <a onclick="cancel_blur3();" href="#" class="close3"></a>
        </div>
    </div>

</body>
<script>
    $('.rolldown-list li').each(function() {
        var delay = ($(this).index() / 4) + 's';
        $(this).css({
            webkitAnimationDelay: delay,
            mozAnimationDelay: delay,
            animationDelay: delay
        });
    });

    function to_blur(getid) {
        document.getElementById("jsfunc").style.filter = "blur(3px)";
        $.each(globalsubcat.result, function(key, val) {
            if (getid == val.eid) {
                $('#event_name').html(val.name);
                $('#desc').html(val.description);
                $('#amt').html("Registration fee:" + val.amount);
                $('#rules').html("Rules:" + val.rules);
                $('#img1').attr('src', val.url);
                $('#pr_tm').html(val.time);
                $('#phone').html("Contact No.:" + val.numb);
                $('#pr_dt').html(val.date);
                $('#pr').html("Prize:" + val.pmoney);
            }
        })
    }
</script>

</html>