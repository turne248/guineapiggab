/*Welcome to the script file! Your 1st time here, you should update
  the BASIC INFO section to include your name and website/social 
  media link (if desired). Most of the time, you will just come
  here to update the POSTS ARRAY. However, you can also edit or
  add your own scripts to do whatever you like!*/

//TABLE OF CONTENTS
  // 1. Basic Info
  // 2. Posts Array
  // 3. Creating HTML Sections to Be Inserted (Header, Footer, etc)
  // 4. Inserting the Sections Into our Actual HTML Pages

//-----------------------------

//==[ 1. BASIC INFO ]==

let blogName = "Guinea Pig Gab";
let authorName = "Robby Turner";
let authorLink = "/about"; // Enter your website, social media, etc. Some way for people to tell you they like your blog! (Leaving it empty is okay too)

//-----------------------------

//==[ 2. POSTS ARRAY ]==

/*Each time you make a new post, add the filepath here at the top of postsArray.
  This will cause all the right links to appear and work.
  NOTE: It's important to follow this exact naming convention, because the scripts
  below are expecting it ( 'posts/YYYY-MM-DD-Title-of-Your-Post.html', ). You can
  alter the scripts if you want to use a different naming convention*/
/*UPDATE: as of version 1.3, you may omit the date if you would like. But if you
  use a date it must still follow that format.*/

let postsArray = [
//[ "posts/2020-11-10-Special-Characters-Example.html", encodeURI( 'Spéci@l "Character\'s" Examp|e' ) ],
//[ "posts/2020-11-10-HTML-cheat-sheet.html" ],
[ "posts/2026-09-09-whats-this-all-about.html", encodeURI("What's this all about?") ] ];

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*CAUTION!! BEGINNING OF MORE ADVANCED SECTION!
  For default functionality, you DO NOT have to touch anything beyond this point.
  Things get more complicated here, so if you are unfamiliar with Javascript,
  your site may break. That's okay though, you can always paste back in the code
  from the Zonelets starter files :) */

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//==[ 3. GENERATING THE HTML SECTIONS TO BE INSERTED ]==

let url = window.location.pathname;

//The date format to look for is 4 digits, hyphen, 2 digits, hyphen, 2 digits, hyphen.
const postDateFormat = /\d{4}\-\d{2}\-\d{2}\-/;

//Check if you are in posts (if so, the links will have to go up a directory)
let relativePath = ".";
if ( url.includes("posts/") ) {
  relativePath = "..";
}

let titleHTML = '<a class="logo-holder" href="' + relativePath + '/index.html"><img class="logo" src="/images/gpg-logo-sm.png"></a>';

//Generate the Header HTML, a series of list items containing links.
let headerHTML = '<div class="header-content"> <nav> <ul style="padding-left: 0 !important;"> <li><a href="' + relativePath + '/index.html" class="menu-item">Home</a></li>' + 
'<li><a href="' + relativePath + '/about.html" class="menu-item">About Me</a></li>' +
'<li><a href="' + relativePath + '/blog.html" class="menu-item">Blog</a></li>' +
'<li><a href="' + relativePath + '/faq.html" class="menu-item">FAQ</a></li>' +
'<li><a href="' + relativePath + '#" class="menu-item">Piggy Cam (coming soon)</a></li> </ul> </nav> </div>';

let mobileheaderHTML = '<div class="header-content"> <nav> <ul style="padding-left: 0 !important;"> <li><a href="' + relativePath + '/index.html" class="menu-item">Home</a></li>' + 
'<li><a href="' + relativePath + '/about.html" class="menu-item">About Me</a></li>' +
'<li><a href="' + relativePath + '/blog.html" class="menu-item">Blog</a></li>' +
'<li><a href="' + relativePath + '/faq.html" class="menu-item">FAQ</a></li>' +
'<li><a href="' + relativePath + '#" class="menu-item">Piggy Cam (coming soon)</a></li> </ul> </nav> </div>';

let statusHTML = '<div class="sidebar-title"><img class="section-heading" src="/images/current-status.gif" style="height: 27px; padding-left: 20px;"></div><<div id="statuscafe"><div id="gpgadmin"></div><div id="statuscafe-content"></div></div>';
let mobilestatusHTML = '<div class="sidebar-title"><img class="section-heading" src="/images/current-status.gif" style="height: 27px; padding-left: 20px;"></div><blockquote style="margin: 0em 0;"></blockquote>';

let mixtapeHTML = '<div class="sidebar-title"><img class="section-heading" src="/images/meenas-mixtape.gif" style="padding-right: 10px;"></div> <div class="mixtape-container"> <div class="meena-holder"> <img src="/images/meena-head.png"> </div> <div class="list-holder"> <ul class="mixtape"><li class="status-text">♫ <a href="https://feeblelittlehorse.bandcamp.com/album/bitknot">bitknot - feeble little horse</a></li> <li class="status-text">♫ <a href="https://underscores.bandcamp.com/album/u">u - underscores</a></li> </ul> </div> <div class="list-holder-mobile"> <ul class="mixtape"><li class="status-text">♫ <a href="https://feeblelittlehorse.bandcamp.com/album/bitknot">bitknot - feeble little horse</a></li> <li class="status-text">♫ <a href="https://underscores.bandcamp.com/album/u">u - underscores</a></li> <li class="status-text">♫ <a href="https://sueter7.bandcamp.com/album/todo-sali-bien-en-la-sencilla-villa-qui-n">todo salió bien en la sencilla villa quién - sueter7</a></li> <li class="status-text">♫ <a href="https://racecourse.bandcamp.com/album/july-december">july, december - racecourse</a></li> </ul> </div> </div><div class="list-holder"><ul class="mixtape"> <li class="status-text">♫ <a href="https://sueter7.bandcamp.com/album/todo-sali-bien-en-la-sencilla-villa-qui-n">todo salió bien en la sencilla villa quién - sueter7</a></li> <li class="status-text">♫ <a href="https://racecourse.bandcamp.com/album/july-december">july, december - racecourse</a></li></ul> </div>';
let mobilemixtapeHTML = '<div class="sidebar-title"><img class="section-heading" src="/images/meenas-mixtape.gif" style="padding: 0px 20px;"></div> <div class="mixtape-container"> <div class="meena-holder"> <img src="/images/meena-head.png"> </div> <div class="list-holder"> <ul class="mixtape"><li class="status-text">♫ <a href="https://feeblelittlehorse.bandcamp.com/album/bitknot">bitknot - feeble little horse</a></li> <li class="status-text">♫ <a href="https://underscores.bandcamp.com/album/u">u - underscores</a></li> </ul> </div> <div class="list-holder-mobile"> <ul class="mixtape"><li class="status-text">♫ <a href="https://feeblelittlehorse.bandcamp.com/album/bitknot">bitknot - feeble little horse</a></li> <li class="status-text">♫ <a href="https://underscores.bandcamp.com/album/u">u - underscores</a></li> <li class="status-text">♫ <a href="https://sueter7.bandcamp.com/album/todo-sali-bien-en-la-sencilla-villa-qui-n">todo salió bien en la sencilla villa quién - sueter7</a></li> <li class="status-text">♫ <a href="https://racecourse.bandcamp.com/album/july-december">july, december - racecourse</a></li> </ul> </div> </div><div class="list-holder"><ul class="mixtape"> <li class="status-text">♫ <a href="https://sueter7.bandcamp.com/album/todo-sali-bien-en-la-sencilla-villa-qui-n">todo salió bien en la sencilla villa quién - sueter7</a></li> <li class="status-text">♫ <a href="https://racecourse.bandcamp.com/album/july-december">july, december - racecourse</a></li></ul> </div>';

let shoutoutHTML = '<div class="sidebar-title"><img class="section-heading" src="/images/shoutouts.gif" style="padding: 0px 20px;"></div> <marquee> <a href="https://www.chickennuggetandgang.com/" target="_blank"><img src="/images/cn_and_gang.png"></a> <a href="https://linktr.ee/thepigroom?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAadqA47_4wCkoKckuzb2TGiSJLXa8rnOlWLO6Qeqo9cEokJUZXxhNQetkqaWxQ_aem_SB28Vw97jzzUuDjcZaD2hA" target="_blank"><img src="/images/tpr.png"></a> <a href="https://www.etsy.com/shop/the3littlebeansshop/?etsrc=sdt&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafBB5tbwzsq2CQqdQA2XVJzHN_3Gz-G71Jq_nnrqVJx6QHiSeRsWEIN-wbXDQ_aem_3Va78Iiuw_AbfkGdBy-mdg" target="_blank"><img src="/images/3lb.png"></a> <a href="https://cheekywheekies.org/" target="_blank"><img src="/images/cw.png"></a></marquee>';
let mobileshoutoutHTML = '<div class="sidebar-title"><img class="section-heading" src="/images/shoutouts.gif" style="padding: 0px 20px;"></div> <marquee> <a href="https://www.chickennuggetandgang.com/" target="_blank"><img src="/images/cn_and_gang.png"></a> <a href="https://linktr.ee/thepigroom?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAadqA47_4wCkoKckuzb2TGiSJLXa8rnOlWLO6Qeqo9cEokJUZXxhNQetkqaWxQ_aem_SB28Vw97jzzUuDjcZaD2hA" target="_blank"><img src="/images/tpr.png"></a> <a href="https://www.etsy.com/shop/the3littlebeansshop/?etsrc=sdt&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafBB5tbwzsq2CQqdQA2XVJzHN_3Gz-G71Jq_nnrqVJx6QHiSeRsWEIN-wbXDQ_aem_3Va78Iiuw_AbfkGdBy-mdg" target="_blank"><img src="/images/3lb.png"></a> <a href="https://cheekywheekies.org/" target="_blank"><img src="/images/cw.png"></a></marquee>';

let contactHTML = '<div class="sidebar-title"><img class="section-heading" src="/images/contact-me.gif"></div> <div class="site-button"> <a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a> <textarea><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a></textarea> </div>';
let mobilecontactHTML = '<div class="sidebar-title"><img class="section-heading" src="/images/contact-me.gif"></div> <div class="site-button"> <a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a> <textarea><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a></textarea> </div>';

let audioplayerHTML = '<div id="musicplayer"><div class="title-color"><div class="actual-title"><img src="https://loveberry.nekoweb.org/assets/musicplayer/player-icon.png" alt="" height="14px" width="14px">Piggy Audio Player</div> <div class="title-bar-controls"><div class="window-button minimize"></div><div class="window-button maximize"></div><div class="window-button close"></div> </div> </div> <div class="player-flex"><div class="player-icon-holder"><div class="player-icon"></div> </div><div class="player-main"><select class="track-select"></select><div class="controls"><div class="seeking"><div class="current-time">00:00</div><input type="range" min="1" max="100" value="0" class="seek_slider" oninput="seekTo(event)"><div class="total-duration">0:00</div></div><div class="player-buttons"><button class="window-button prev-track" onclick="prevTrack()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-skip-back-icon lucide-skip-back"><path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"/><path d="M3 20V4"/></svg></button><button class="window-button playpause-track" onclick="playpauseTrack()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-icon lucide-play"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg></button><button class="window-button next-track" onclick="nextTrack()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-skip-forward-icon lucide-skip-forward"><path d="M21 4v16"/><path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"/></svg></button></div> </div> </div></div><audio id="music" src=""></audio></div>';
let mobileaudioplayerHTML = '<div id="musicplayer"><div class="title-color"><div class="actual-title"><img src="https://loveberry.nekoweb.org/assets/musicplayer/player-icon.png" alt="" height="14px" width="14px">Piggy Audio Player</div> <div class="title-bar-controls"><div class="window-button minimize"></div><div class="window-button maximize"></div><div class="window-button close"></div> </div> </div> <div class="player-flex"><div class="player-icon-holder"><div class="player-icon"></div> </div><div class="player-main"><select class="track-select"></select><div class="controls"><div class="seeking"><div class="current-time">00:00</div><input type="range" min="1" max="100" value="0" class="seek_slider" onchange="seekTo()"><div class="total-duration">0:00</div></div><div class="player-buttons"><button class="window-button prev-track" onclick="prevTrack()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-skip-back-icon lucide-skip-back"><path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"/><path d="M3 20V4"/></svg></button><button class="window-button playpause-track" onclick="playpauseTrack()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-icon lucide-play"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg></button><button class="window-button next-track" onclick="nextTrack()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-skip-forward-icon lucide-skip-forward"><path d="M21 4v16"/><path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"/></svg></button></div> </div> </div></div><audio id="music" src=""></audio></div>';

let guestbookHTML = '<div class="sidebar-title"><a href="/guestbook.html"><img class="section-heading" src="/images/leave-me-a-message.gif" style="height: 26px; padding: 0px 10px;"></a></div>';
let mobileguestbookHTML = '<div class="sidebar-title"><a href="/guestbook.html"><img class="section-heading" src="/images/leave-me-a-message.gif" style="height: 26px; padding: 0px 10px;"></a></div>';

let counterHTML = '<div class="sidebar-title" style="padding-left:10px;"><img class="section-heading" src="/images/bean-counter.gif"></div> <div class="bean-holder"><div class="meena-holder" style="padding:0px 10px; margin: 0;"><img src="/images/bean.png" style="margin: 5px 0px 0px 0px;"></div></div><div style="width: 100%;"><div class="counter-display"><span class="count-number">000000</span></div><button id="increment-btn" onclick="incrementGlobalCounter()">+ Click</button></div>';
let mobilecounterHTML = '<div class="sidebar-title" style="padding-left:10px;"><img class="section-heading" src="/images/bean-counter.gif"></div> <div class="bean-holder"><div class="meena-holder" style="padding:0px 10px; margin: 0;"><img src="/images/bean.png" style="margin: 5px 0px 0px 0px;"></div></div><div style="width: 100%;"><div class="counter-display"><span class="count-number">000000</span></div><button id="increment-btn" onclick="incrementGlobalCounter()">+ Click</button></div>';

let supportHTML = '<div class="sidebar-title" style="padding-left:20px;"><img class="section-heading" src="/images/support.gif"></div> <div class="support-container"> <div class="meena-holder" style="width: 180%; margin-right: 10px; margin-bottom: -3px;"> <a href="https://ko-fi.com/guineapiggab"><img src="/images/oz-head.png"></a> </div> <div style="align-content: center;"> <a href="https://ko-fi.com/guineapiggab"><img src="/images/piggy-bank.gif"></a> </div> </div> <div class="support-description"> <p>All proceeds go towards future vet bills</p> </div>';
let mobilesupportHTML = '<div class="sidebar-title" style="padding-left: 20px;"><img class="section-heading" src="/images/support.gif"></div> <div class="support-container"> <div class="meena-holder" style="width: 180%; margin-right: 10px; margin-bottom: -3px;"> <a href="https://ko-fi.com/guineapiggab"><img src="/images/oz-head.png"></a> </div> <div style="align-content: center;"> <a href="https://ko-fi.com/guineapiggab"><img src="/images/piggy-bank.gif"></a> </div> </div> <div class="support-description"> <p>All proceeds go towards future vet bills</p><div class="menu-item"> <h4 style="text-align: center; margin: 0;">▶ <a href="/support.html"><strong>Learn More About Oz</strong></a></h4></div></div>';

let mobilepetwidgetHTML = '<img id="pet" class="pet-sprite" src="/images/georgie.png" onclick="interactPet()"> <div id="status" class="status-text">Pet me!</div>';
let petwidgetHTML = '<img id="pet" class="pet-sprite" src="/images/georgie.png" onclick="interactPet()"> <div id="status" class="status-text">Pet me!</div>';

let mobileguesswidgetHTML = '<div class="nose-container"> <img class="mystery-img" src="/images/cheryl-nose.jpg"> </div> <p class="piggy-name hidden-name" style="margin:0;">???</p><button class="reveal-btn" onclick="revealAnswer()">Reveal</button>';
let guesswidgetHTML = '<div class="nose-container"> <img class="mystery-img" src="/images/cheryl-nose.jpg"> </div> <p class="piggy-name hidden-name" style="margin:0;">???</p><button class="reveal-btn" onclick="revealAnswer()">Reveal</button>';

//let mobilechatwidgetHTML = '';
let chatwidgetHTML = '<div class="sidebar-title" style="padding-left: 20px;"><img class="section-heading" src="/images/chat.gif"></div> <div id="chat-container"></div>';

let potdwidgetHTML = '<div class="photo-frame"><img class="daily-photo"></div>';
let mobilepotdwidgetHTML = '<div class="photo-frame"><img class="daily-photo"></div>';

 
//Generate the Footer HTML, which uses the variables defined in the BASIC INFO section above to list info about the site.
//Note: feel free to remove the references to Zonelets and Neocities! Just be careful not to delete any necessary HTML closing tags or other syntax.
let footerHTML = "<hr><p>" + blogName + " is written by <a href='" + authorLink + "'>" + authorName + "</a>.";

//To do the following stuff, we want to know where we are in the posts array (if we're currently on a post page).
let currentIndex = -1;
let currentFilename = url.substring(url.lastIndexOf('posts/'));
//Depending on the web server settings (Or something?), the browser url may or may not have ".html" at the end. If not, we must add it back in to match the posts array. (12-19-2022 fix)
if ( ! currentFilename.endsWith(".html") ) {
    currentFilename += ".html";
}
let i;
for (i = 0; i < postsArray.length; i++) {
  if ( postsArray[i][0] === currentFilename ) {
    currentIndex = i;
  }
}

//Convert the post url to readable post name. E.g. changes "2020-10-10-My-First-Post.html" to "My First Post"
//Or pass along the "special characters" version of the title if one exists
function formatPostTitle(i) {
  // Check if there is an alternate post title
  if ( postsArray[i].length > 1 ) {
    //Remember how we had to use encodeURI for special characters up above? Now we use decodeURI to get them back.
    return decodeURI(postsArray[i][1]);
  } else { 
  //If there is no alternate post title, check if the post uses the date format or not, and return the proper title
	if (  postDateFormat.test ( postsArray[i][0].slice( 6,17 ) ) ) {
	  return postsArray[i][0].slice(17,-5).replace(/-/g," ");
    } else {
      return postsArray[i][0].slice(6,-5).replace(/-/g," ");
    }
  }
}

//Get the current post title and date (if we are on a post page)
let currentPostTitle = "";
let niceDate = "";
if ( currentIndex > -1 ) {
  currentPostTitle = formatPostTitle( currentIndex );
  //Generate the "nice to read" version of date
  if (  postDateFormat.test ( postsArray[currentIndex][0].slice( 6,17 ) ) ) {
    let monthSlice = postsArray[currentIndex][0].slice( 11,13 );
    let month = "";
    if ( monthSlice === "01") { month = "Jan";}
    else if ( monthSlice === "02") { month = "Feb";}
    else if ( monthSlice === "03") { month = "Mar";}
    else if ( monthSlice === "04") { month = "Apr";}
    else if ( monthSlice === "05") { month = "May";}
    else if ( monthSlice === "06") { month = "Jun";}
    else if ( monthSlice === "07") { month = "Jul";}
    else if ( monthSlice === "08") { month = "Aug";}
    else if ( monthSlice === "09") { month = "Sep";}
    else if ( monthSlice === "10") { month = "Oct";}
    else if ( monthSlice === "11") { month = "Nov";}
    else if ( monthSlice === "12") { month = "Dec";}
	niceDate = postsArray[currentIndex][0].slice( 14,16 ) + " " + month + ", " + postsArray[currentIndex][0].slice( 6,10 );
  }
}

//Generate the Post List HTML, which will be shown on the "Archive" page.

function formatPostLink(i) {
  let postTitle_i = "";
  if ( postsArray[i].length > 1 ) {
    postTitle_i = decodeURI(postsArray[i][1]);
  } else {
	if (  postDateFormat.test ( postsArray[i][0].slice( 6,17 ) ) ) {
	  postTitle_i = postsArray[i][0].slice(17,-5).replace(/-/g," ");
    } else {
      postTitle_i = postsArray[i][0].slice(6,-5).replace(/-/g," ");
    }
  }
  if (  postDateFormat.test ( postsArray[i][0].slice( 6,17 ) ) ) {
    return '<li><a href="' + relativePath + '/'+ postsArray[i][0] +'" class="menu-item">' + postsArray[i][0].slice(6,16) + " \u00BB " + postTitle_i + '</a></li>';
  } else {
    return '<li><a href="' + relativePath + '/'+ postsArray[i][0] +'" class="menu-item">' + postTitle_i + '</a></li>';
  }
}

let postListHTML = "<ul class='recent-list'>";
for ( let i = 0; i < postsArray.length; i++ ) {
  postListHTML += formatPostLink(i);
}
postListHTML += "</ul>";

//Generate the Recent Post List HTML, which can be shown on the home page (or wherever you want!)
let recentPostsCutoff = 2; //Hey YOU! Change this number to set how many recent posts to show before cutting it off with a "more posts" link.
let recentPostListHTML = "<ul class='recent-list'>";
let numberOfRecentPosts = Math.min( recentPostsCutoff, postsArray.length );
for ( let i = 0; i < numberOfRecentPosts; i++ ) {
  recentPostListHTML += formatPostLink(i);
}
/*If you've written more posts than can fit in the Recent Posts List,
  then we'll add a link to the archive so readers can find the rest of
  your wonderful posts and be filled with knowledge.*/
if ( postsArray.length > recentPostsCutoff ) {
  recentPostListHTML += '<li class="moreposts"><a href=' + relativePath + '/archive.html>\u00BB more posts</a></li></ul>';
} else {
  recentPostListHTML += "</ul>";
}

//Generate the Next and Previous Post Links HTML
let nextprevHTML = "";
let nextlink = "";
let prevlink = "";

/*If you're on the newest blog post, there's no point to
 a "Next Post" link, right? And vice versa with the oldest 
 post! That's what the following code handles.*/
if ( postsArray.length < 2 ) {
  nextprevHTML = '<a href="' + relativePath + '/index.html">Home</a>';
} else if ( currentIndex === 0 ) {
  prevlink = postsArray[currentIndex + 1][0];
  nextprevHTML = '<a href="' + relativePath + '/index.html">Home</a> | <a href="'+ relativePath + '/' + prevlink +'">Previous Post \u00BB</a>';
} else if ( currentIndex === postsArray.length - 1 ) {
  nextlink = postsArray[currentIndex - 1][0];
  nextprevHTML = '<a href="' + relativePath + '/' + nextlink +'">\u00AB Next Post</a> | <a href="' + relativePath + '/index.html">Home</a>';
} else if ( 0 < currentIndex && currentIndex < postsArray.length - 1 ) {
  nextlink = postsArray[currentIndex - 1][0];
  prevlink = postsArray[currentIndex + 1][0];
  nextprevHTML = '<a href="' + relativePath + '/'+ nextlink +'">\u00AB Next Post</a> | <a href="' + relativePath + '/index.html">Home</a> | <a href="' + relativePath + '/'+ prevlink +'">Previous Post \u00BB</a>';
}

//-----------------------------

//==[ 4. INSERTING THE SECTIONS INTO OUR ACTUAL HTML PAGES ]==

/*Here we check if each relevant div exists. If so, we inject the correct HTML!
  NOTE: All of these sections are optional to use on any given page. For example, if there's 
  one particular blog post where we don't want the footer to appear, 
  we simply don't put a <div id="footer"> on that page.*/

if (document.getElementById("nextprev")) {
  document.getElementById("nextprev").innerHTML = nextprevHTML;
}
if (document.getElementById("postlistdiv")) {
  document.getElementById("postlistdiv").innerHTML = postListHTML;
}
if (document.getElementById("recentpostlistdiv")) {
  document.getElementById("recentpostlistdiv").innerHTML = recentPostListHTML;
}
if (document.getElementById("title")) {
  document.getElementById("title").innerHTML = titleHTML;
}
if (document.getElementById("header")) {
  document.getElementById("header").innerHTML = headerHTML;
}
if (document.getElementById("mobile-header")) {
  document.getElementById("mobile-header").innerHTML = mobileheaderHTML;
}
if (document.getElementById("blogTitleH1")) {
  document.getElementById("blogTitleH1").innerHTML = blogTitle;
}
if (document.getElementById("postTitleH1")) {
  document.getElementById("postTitleH1").innerHTML = currentPostTitle;
}
if (document.getElementById('mobile-status-container')) {
  document.getElementById('mobile-status-container').innerHTML = mobilestatusHTML;
}
if (document.getElementById('status-container')) {
  document.getElementById('status-container').innerHTML = statusHTML;
}
if (document.getElementById('mobile-mixtape-container')) {
  document.getElementById('mobile-mixtape-container').innerHTML = mobilemixtapeHTML;
}
if (document.getElementById('mixtape-container')) {
  document.getElementById('mixtape-container').innerHTML = mixtapeHTML;
}
if (document.getElementById('shoutout-container')) {
  document.getElementById('shoutout-container').innerHTML = shoutoutHTML;
}
if (document.getElementById('mobile-shoutout-container')) {
  document.getElementById('mobile-shoutout-container').innerHTML = mobileshoutoutHTML;
}
if (document.getElementById('contact-container')) {
  document.getElementById('contact-container').innerHTML = contactHTML;
}
if (document.getElementById('mobile-contact-container')) {
  document.getElementById('mobile-contact-container').innerHTML = mobilecontactHTML;
}
if (document.getElementById('guestbook-container')) {
  document.getElementById('guestbook-container').innerHTML = guestbookHTML;
}
if (document.getElementById('mobile-guestbook-container')) {
  document.getElementById('mobile-guestbook-container').innerHTML = mobileguestbookHTML;
}
if (document.getElementById('audio-container')) {
  document.getElementById('audio-container').innerHTML = audioplayerHTML;
}
if (document.getElementById('mobile-audio-container')) {
  document.getElementById('mobile-audio-container').innerHTML = mobileaudioplayerHTML;
}
if (document.getElementById('counter-container')) {
  document.getElementById('counter-container').innerHTML = counterHTML;
}
if (document.getElementById('mobile-counter-container')) {
  document.getElementById('mobile-counter-container').innerHTML = mobilecounterHTML;
}
if (document.getElementById('support-container')) {
  document.getElementById('support-container').innerHTML = supportHTML;
}
if (document.getElementById('mobile-support-container')) {
  document.getElementById('mobile-support-container').innerHTML = mobilesupportHTML;
}
if (document.getElementById("pet-widget")) {
  document.getElementById("pet-widget").innerHTML = petwidgetHTML;
}
if (document.getElementById("pet-widget-mobile")) {
  document.getElementById("pet-widget-mobile").innerHTML = mobilepetwidgetHTML;
}
if (document.getElementById("nose-widget")) {
  document.getElementById("nose-widget").innerHTML = guesswidgetHTML;
}
if (document.getElementById("nose-widget-mobile")) {
  document.getElementById("nose-widget-mobile").innerHTML = mobileguesswidgetHTML;
}
if (document.getElementById("chat-container")) {
  document.getElementById("chat-container").innerHTML = chatwidgetHTML;
}
if (document.getElementById("potd-widget")) {
  document.getElementById("potd-widget").innerHTML = potdwidgetHTML;
}
if (document.getElementById("mobile-potd-widget")) {
  document.getElementById("mobile-potd-widget").innerHTML = mobilepotdwidgetHTML;
}
//if (document.getElementById("chat-container-mobile")) {
//  document.getElementById("chat-container-mobile").innerHTML = mobilechatwidgetHTML;
//}
if (document.getElementById("postDate")) {
  document.getElementById("postDate").innerHTML = niceDate;
}
if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footerHTML;
}

//Dynamically set the HTML <title> tag from the postTitle variable we created earlier
//The <title> tag content is what shows up on browser tabs
if (document.title === "Blog Post") {
  document.title = currentPostTitle;
}

function renderStatusCafeWidget() {
  // Query all desktop and mobile status targets
  const containers = document.querySelectorAll('.status-container');
  if (containers.length === 0) return;

  const username = 'gpgadmin'; // Replace with your Status.cafe username

  fetch(`https://status.cafe/users/${username}/status.json`)
    .then(response => {
      if (!response.ok) throw new Error('Status network response failed');
      return response.json();
    })
    .then(data => {
      const statusHTML = data.content

        ? `<div class="sidebar-title">
        <img class="section-heading" src="/images/current-status.gif" style="height: 27px; padding-left: 10px;">
        </div>
        <div class="status-box">
             <span class="status-text">${data.content}</span>
           </div>`
        : '<p class="status-text">No status posted yet!</p>';

      // Inject into every container found on the page (mobile & desktop)
      containers.forEach(container => {
        container.innerHTML = statusHTML;
      });
    })
    .catch(error => {
      console.warn('Unable to load Status.cafe widget:', error);
      containers.forEach(container => {
        container.innerHTML = '<p class="status-text">Offline</p>';
      });
    });
}

// DEFINE YOUR SONGS HERE
let track_list = [
      {
          name:"Cheryl Purring",
          artist:"Happy to meet you",
          path:"https://files.catbox.moe/6v2m7t.mp3"
      },
      {
          name:"POV",
          artist:"You Walk In & Sage is Hungry",
          path:"https://files.catbox.moe/wy5aht.mp3"
      },
      {
          name:"Oz Excited",
          artist:"I smell something!",
          path:"https://files.catbox.moe/441yw8.mp3"
      },
      {
          name:"Sage Chows Down on Lettuce",
          artist:"",
          path:"https://files.catbox.moe/00h39u.mp3"
      },
      {
          name:"Georgie Upset - Teeth Chattering",
          artist:"Wants to be left alone",
          path:"https://files.catbox.moe/nw8qaj.mp3"
      }
  ];
  
// Single Audio Element shared across both controls
let curr_track = document.getElementById("music");
if (!curr_track) {
  curr_track = document.createElement("audio");
  curr_track.id = "music";
  document.body.appendChild(curr_track);
}

let track_index = 0;
let isPlaying = false;
let updateTimer;

const PAUSE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pause-icon"><rect x="14" y="3" width="5" height="18" rx="1"/><rect x="5" y="3" width="5" height="18" rx="1"/></svg>`;
const PLAY_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-icon"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg>`;

// Helper: Query all instances across mobile and desktop
function getElements(selector) {
  return document.querySelectorAll(selector);
}

function populateDropdowns() {
  const dropdowns = getElements(".track-select");
  dropdowns.forEach(select => {
    select.innerHTML = "";
    track_list.forEach((track, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${track.name} — ${track.artist}`;
      select.appendChild(option);
    });
    select.value = track_index;
    
    // Attach listener to each dropdown
    select.onchange = function() {
      track_index = parseInt(this.value);
      loadTrack(track_index);
      playTrack();
    };
  });
}

function loadTrack(index) {
  clearInterval(updateTimer);
  resetValues();

  curr_track.src = track_list[index].path;
  curr_track.load();

  getElements(".now-playing").forEach(el => {
    el.textContent = `${index + 1} / ${track_list.length}`;
  });

  getElements(".track-select").forEach(select => {
    select.value = index;
  });

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.onended = nextTrack;
}

function resetValues() {
  getElements(".current-time").forEach(el => el.textContent = "0:00");
  getElements(".total-duration").forEach(el => el.textContent = "0:00");
  getElements(".seek_slider").forEach(slider => slider.value = 0);
}

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  getElements(".playpause-track").forEach(btn => btn.innerHTML = PAUSE_SVG);
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  getElements(".playpause-track").forEach(btn => btn.innerHTML = PLAY_SVG);
}

function nextTrack() {
  track_index = (track_index < track_list.length - 1) ? track_index + 1 : 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  track_index = (track_index > 0) ? track_index - 1 : track_list.length - 1;
  loadTrack(track_index);
  playTrack();
}

function seekTo(event) {
  // Support seek actions from both mobile and desktop sliders
  const slider = event ? event.target : getElements(".seek_slider")[0];
  if (slider && !isNaN(curr_track.duration)) {
    const seekto = curr_track.duration * (slider.value / 100);
    curr_track.currentTime = seekto;
  }
}

function seekUpdate() {
  if (!isNaN(curr_track.duration)) {
    const seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    
    getElements(".seek_slider").forEach(slider => slider.value = seekPosition);

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) currentSeconds = "0" + currentSeconds;
    if (durationSeconds < 10) durationSeconds = "0" + durationSeconds;

    getElements(".current-time").forEach(el => el.textContent = `${currentMinutes}:${currentSeconds}`);
    getElements(".total-duration").forEach(el => el.textContent = `${durationMinutes}:${durationSeconds}`);
  }
}

function initAudioPlayer() {
  populateDropdowns();
  loadTrack(track_index);
}

const PET_LIBRARY = [
  { name: 'Georgie',  idle: '/images/georgie.png',  happy: '/images/georgie-excited.png' },
  { name: 'Scooter',  idle: '/images/scooter.png',  happy: '/images/scooter-excited.png' },
  { name: 'Sage', idle: '/images/sage.png', happy: '/images/sage-excited.png' },
  { name: 'Cheryl', idle: '/images/cheryl.png', happy: '/images/cheryl-excited.gif' }
];

let currentPet = null;
let happySpritePreload = new Image();

function getDailyPet() {
  const today = new Date();
  const dayCode = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  return PET_LIBRARY[dayCode % PET_LIBRARY.length];
}

function initPets() {
  currentPet = getDailyPet();
  happySpritePreload.src = currentPet.happy;
  
  // Select BOTH desktop and mobile elements
  const pets = document.querySelectorAll('.pet-sprite');
  
  pets.forEach(pet => {
    pet.src = currentPet.idle;
    pet.alt = currentPet.name;
    
    // Attach click handler directly to each element
    pet.addEventListener('click', () => interactPet(pet));
  });
}

function interactPet(petElement) {
  // Pass the clicked element so only that specific one jumps
  if (petElement.classList.contains('jumping')) return;

  petElement.src = currentPet.happy;
  petElement.classList.add('jumping');

  setTimeout(() => {
    petElement.src = currentPet.idle;
    petElement.classList.remove('jumping');
  }, 2000);
}

const GUESSING_GAME_LIBRARY = [
  { 
    name: "Georgie!", 
    image: "/images/georgie-nose.jpg", 
    // Target the specific area to zoom into for the hint:
    focus: "50% 20%", 
    transformOrigin: "center",
    zoomLevel: "300%" 
  },
  { 
    name: "Scooter!", 
    image: "/images/scooter-nose.jpg", 
    focus: "70% 70%", 
    transformOrigin: "70% 70%",
    zoomLevel: "400%" 
  },
  { 
    name: "Sage!", 
    image: "/images/sage-nose.jpg", 
    focus: "45% 30%", 
    transformOrigin: "center",
    zoomLevel: "400%" 
  },
  { 
    name: "Cheryl!", 
    image: "/images/cheryl-nose.jpg", 
    focus: "45% 30%", 
    transformOrigin: "center",
    zoomLevel: "400%" 
  },
  { 
    name: "Oz!", 
    image: "/images/Oz-nose.jpg", 
    focus: "left 80%",
    transformOrigin: "left 80%", 
    zoomLevel: "300%" 
  },
  { 
    name: "Meena!", 
    image: "/images/meena-nose.jpg", 
    focus: "45% 30%", 
    transformOrigin: "center",
    zoomLevel: "400%" 
  },
  { 
    name: "Mimosa!", 
    image: "/images/mimosa-nose.jpg", 
    focus: "45% 30%", 
    transformOrigin: "center",
    zoomLevel: "400%" 
  }
];

let todayGameData = null;
let currentDayCode = 0;

function getDailyGameData() {
  const today = new Date();
  const dayCode = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const gameIndex = dayCode % GUESSING_GAME_LIBRARY.length;
  return GUESSING_GAME_LIBRARY[gameIndex];
}

function initGame() {
  todayGameData = getDailyGameData();
  
  const savedRevealedDay = localStorage.getItem('mysteryGame_lastRevealedDay');
  const isAlreadyRevealed = savedRevealedDay === String(currentDayCode);

  const images = document.querySelectorAll('.mystery-img');

  images.forEach(img => {
    img.src = todayGameData.image;

    if (isAlreadyRevealed) {
      img.style.transform = "scale(1)";
      img.style.objectPosition = "center";
      img.style.objectFit = "center";
    } else {
      img.style.transform = `scale(${todayGameData.zoomLevel})`;
      img.style.objectPosition = todayGameData.focus;
      img.style.transformOrigin = todayGameData.focus;
    }
  });

  if (isAlreadyRevealed) {
    showFullAnswerState();
  }
}

function revealAnswer() {
  // Save state so reloads maintain the reveal
  localStorage.setItem('mysteryGame_lastRevealedDay', currentDayCode);
  showFullAnswerState();
}

function showFullAnswerState() {
  const images = document.querySelectorAll('.mystery-img');
  const nameEls = document.querySelectorAll('.piggy-name');
  const buttons = document.querySelectorAll('.reveal-btn');

  // 1. Reset zoom to show full image
  images.forEach(img => {
    img.style.transform = "scale(1)";
    img.style.objectPosition = "center";
    img.style.objectFit = "contain";
  });

  // 2. Display the correct name
  nameEls.forEach(nameEl => {
    nameEl.textContent = todayGameData.name;
    nameEl.classList.remove('hidden-name');
    nameEl.classList.add('revealed-name');
  });

  // 3. Disable button after reveal
  buttons.forEach(btn => {
    btn.disabled = true;
    btn.textContent = "Revealed";
  });
}

// Array containing a mix of .png and .jpg file names
const DAILY_PHOTOS = [
  '2554.jpg',
  '1810.jpg',
  '1660.jpg',
  '3320.jpg',
  '1808.jpg',
  '0501.jpg',
  '0318.jpg'
];

const PHOTO_FOLDER = '/images/potd/';

function getDailyPhotoPath() {
  const today = new Date();
  
  // Creates a unique integer per calendar day (e.g., 20260831)
  const dayCode = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  
  // Select index safely within array bounds
  const photoIndex = dayCode % DAILY_PHOTOS.length;
  
  return `${PHOTO_FOLDER}${DAILY_PHOTOS[photoIndex]}`;
}

function initDailyPhotoWidget() {
  const photoPath = getDailyPhotoPath();
  const photoImages = document.querySelectorAll('.daily-photo');
  photoImages.forEach(img => {
    img.src = photoPath;
  });
}
 
function initChatangoWidget() {
  const target = document.getElementById("chat-container");
  if (!target) return;

  // 1. Create the script element programmatically
  const chatScript = document.createElement('script');
  chatScript.id = 'cid0020000449019165602';
  chatScript.async = true;
  chatScript.src = '//st.chatango.com/js/gz/emb.js';
  chatScript.style.width = '100%';
  chatScript.style.height = '350px';

  // 2. Set the configuration payload
  chatScript.textContent = JSON.stringify({
    "handle": "guineapiggab",
    "arch": "js",
    "styles": {
      "a": "CC0000",
      "c": "000000",
      "d": "000000",
      "f": 0,
      "i": 0,
      "k": "000000",
      "l": "000000",
      "m": "CC0000",
      "n": "FFFFFF",
      "p": "10",
      "q": "000000",
      "t": 0,
      "usricon": 0,
      "surl": 0,
      "cnrs": "0.35"
    }
  });

  // 3. Append to target container so the browser executes it
  target.appendChild(chatScript);
}
// CountAPI Configuration (Zero-setup public endpoint)
// ===============================================
// GLOBAL CLICK COUNTER WIDGET
// ===============================================

const COUNTER_NAMESPACE = 'guineapiggab-site';
const COUNTER_KEY = 'global-clicks';

// Helper: Formats numbers as 6-digit zero-padded strings
function formatSixDigits(num) {
  return String(num).padStart(6, '0');
}

// Helper: Synchronizes formatted count across desktop and mobile elements
function updateCounterDisplays(count) {
  const displays = document.querySelectorAll('.count-number');
  displays.forEach(el => {
    el.textContent = formatSixDigits(count);
  });
}

// 1. Fetch total count from API on initial page load
async function loadGlobalCount() {
  try {
    const response = await fetch(`https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${COUNTER_KEY}`);
    
    // If key doesn't exist yet, create it with /up
    if (response.status === 404) {
      const initResponse = await fetch(`https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${COUNTER_KEY}/up`);
      const initData = await initResponse.json();
      const initialVal = initData.count || 1;
      localStorage.setItem('local_click_fallback', initialVal);
      updateCounterDisplays(initialVal);
      return;
    }

    if (!response.ok) throw new Error('API request failed');

    const data = await response.json();
    const serverCount = data.count || 0;
    
    // Store in localStorage as local backup
    localStorage.setItem('local_click_fallback', serverCount);
    updateCounterDisplays(serverCount);
  } catch (error) {
    console.warn('API unavailable or blocked on localhost. Falling back to LocalStorage:', error);
    // Fallback for offline/localhost testing
    const localSaved = localStorage.getItem('local_click_fallback') || 0;
    updateCounterDisplays(localSaved);
  }
}

// 2. Increment count on button click
function incrementGlobalCounter() {
  // A. Get current display count & increment locally immediately
  const displays = document.querySelectorAll('.count-number');
  let newCount = 0;
  
  displays.forEach(el => {
    const current = parseInt(el.textContent, 10) || 0;
    newCount = current + 1;
    el.textContent = formatSixDigits(newCount);
  });

  // Save to LocalStorage immediately so refreshes on localhost preserve it
  localStorage.setItem('local_click_fallback', newCount);

  // B. Send hit to server in background
  fetch(`https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${COUNTER_KEY}/up`)
    .then(res => res.json())
    .then(data => {
      if (data && data.count) {
        localStorage.setItem('local_click_fallback', data.count);
        updateCounterDisplays(data.count);
      }
    })
    .catch(err => {
      console.warn('Unable to sync with live server, local count saved:', err);
    });
}

// ===============================================
// 5. WIDGET INITIALIZATION (Must run AFTER section 4)
// ===============================================

function initAllWidgets() {
  initPets();
  initGame();
  initDailyPhotoWidget();
  initChatangoWidget();
  loadGlobalCount();
  renderStatusCafeWidget();
  initAudioPlayer();
}

// Fire the setup after the DOM is fully loaded and HTML is injected
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllWidgets);
} else {
  // If DOM is already ready, run immediately
  initAllWidgets();
}