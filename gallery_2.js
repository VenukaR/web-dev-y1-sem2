// chanege color
function colorbg ()						//https://www.youtube.com/watch?v=FRTMfXlyYrU 
            {
                var x=document.getElementById("selectid")
                var bgcolor= x.options[x.selectedIndex].value;
                document.body.style.backgroundColor=bgcolor;
            } 



//change font size
let buttons = document.querySelector('.buttons');		// https://www.w3schools.com/jsref/met_document_queryselector.asp , https://www.youtube.com/watch?v=xOy0kVlbhlc 
let btn = buttons.querySelectorAll('.btn');
for (var i = 0; i<btn.length; i++){
	btn[i].addEventListener('click',function(){
		let current = document.getElementsByClassName('active');
		current[0].className = current[0].className.replace("active","");
		this.className += "active";
	})
}


// Big image display 
function getImage(choice) {		// https://www.w3schools.com/tags/canvas_getimagedata.asp
	if (choice == 1) {
		document.getElementById("big-image").src = "thumbnails/img1.png";  // https://www.w3schools.com/jsref/met_document_getelementbyid.asp */
		document.getElementById("gallery-display").style.display = "block"; 
		document.getElementById("bigImage-description").innerHTML = "<h1>Pop Music</h1><br> Pop music is a genre of popular music that originated in its modern form during the mid-1950s in the United States and the United Kingdom. The terms popular music and pop music are often used interchangeably, although the former describes all music that is popular and includes many disparate styles.";

	} else if (choice == 2) {
		document.getElementById("big-image").src = "thumbnails/img2.jpg";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Electronic Music</h1><br> Electronic music is a genre of music that employs electronic musical instruments, digital instruments, or circuitry-based music technology in its creation. It includes both music made using electronic and electromechanical means (electroacoustic music). Pure electronic instruments depended entirely on circuitry-based sound generation, for instance using devices such as an electronic oscillator, theremin, or synthesizer. Electromechanical instruments can have mechanical parts such as strings, hammers, and electric elements including magnetic pickups, power amplifiers and loudspeakers. Such electromechanical devices include the telharmonium, Hammond organ, electric piano and the electric guitar.";

	} else if (choice == 3) {
		document.getElementById("big-image").src = "thumbnails/img3.jpg";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Bob Marley</h1><br> Robert Nesta Marley OM was a Jamaican singer, musician, and songwriter. Considered one of the pioneers of reggae, his musical career was marked by fusing elements of reggae, ska, and rocksteady, as well as his distinctive vocal and songwriting style. Marley's contributions to music increased the visibility of Jamaican music worldwide, and made him a global figure in popular culture to this day. Over the course of his career, Marley became known as a Rastafari icon, and he infused his music with a sense of spirituality.He is also considered a global symbol of Jamaican music and culture and identity, and was controversial in his outspoken support for democratic social reforms.";
	} else if (choice == 4) {
		document.getElementById("big-image").src = "thumbnails/img4.jpg";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Music Mixing & Editing</h1><br>In sound recording and reproduction, audio mixing is the process of optimizing and combining multitrack recordings into a final mono, stereo or surround sound product. In the process of combining the separate tracks, their relative levels are adjusted and balanced and various processes such as equalization and compression are commonly applied to individual tracks, groups of tracks, and the overall mix. In stereo and surround sound mixing, the placement of the tracks within the stereo (or surround) field are adjusted and balanced.";
	} else if (choice == 5) {
		document.getElementById("big-image").src = "thumbnails/img5.jpg";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>DJ</h1><br>A disc jockey, more commonly abbreviated as DJ, is a person who plays recorded music for an audience. Types of DJs include radio DJs (who host programs on music radio stations), club DJs (who work at a nightclub or music festival), mobile DJs (who are hired to work at public and private events such as weddings, parties, or festivals), and turntablists (who use record players, usually turntables, to manipulate sounds on phonograph records). Originally, the 'disc' in 'disc jockey' referred to shellac and later vinyl records, but nowadays DJ is used as an all-encompassing term to also describe persons who mix music from other recording media such as cassettes, CDs or digital audio files on a CDJ, controller, or even a laptop. DJs may adopt the title 'DJ' in front of their real names, adopted pseudonyms, or stage names.";
	} else if (choice == 6) {
        document.getElementById("big-image").src = "thumbnails/img6.jpg";
        document.getElementById("gallery-display").style.display = "block";
        document.getElementById("bigImage-description").innerHTML = "<h1>David Guetta</h1><br>Pierre David Guetta is a French DJ and music producer. He has over 10 million album and 65 million single sales globally, with more than 10 billion streams. In 2011, 2020 and 2021, Guetta was voted the number one DJ in the DJ Mag Top 100 DJs poll.In 2013, Billboard crowned 'When Love Takes Over' as the number one dance-pop collaboration of all time.Born and raised in Paris, he released his first album, Just a Little More Love, in 2002. Later, he released Guetta Blaster (2004) and Pop Life (2007). Guetta achieved mainstream success with his 2009 album One Love which included the hit singles 'When Love Takes Over', 'Gettin Over You', 'Sexy Bitch' and 'Memories', the first three of which reached number one in the United Kingdom.";
    } else if (choice == 7) {
        document.getElementById("big-image").src = "thumbnails/img7.jpg";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Rock Music</h1><br>Rock music is a broad genre of popular music that originated as 'rock and roll' in the United States in the late 1940s and early 1950s, developing into a range of different styles in the mid-1960s and later, particularly in the United States and United Kingdom.It has its roots in 1940s and 1950s rock and roll, a style that drew directly from the blues and rhythm and blues genres of African-American music and from country music. Rock also drew strongly from a number of other genres such as electric blues and folk, and incorporated influences from jazz, classical, and other musical styles. For instrumentation, rock has centered on the electric guitar, usually as part of a rock group with electric bass guitar, drums, and one or more singers. Usually, rock is song-based music with a 4/4 time signature using a verse–chorus form, but the genre has become extremely diverse. Like pop music, lyrics often stress romantic love but also address a wide variety of other themes that are frequently social or political. Rock was the most popular genre of music in the United States and much of the Western world from the 1950s to the 2010s.";
    } else if (choice == 8) {
        document.getElementById("big-image").src = "thumbnails/img8.jpg";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Country Music</h1><br>Country (also called country and western) is a music genre originating in the Southern and Southwestern United States. First produced in the 1920s, country primarily focuses on working class Americans and blue-collar American life.Country music is known for its ballads and dance tunes (also known as 'honky-tonk music') with simple form, folk lyrics, and harmonies accompanied by instruments such as banjos, fiddles, harmonicas, and many types of guitar (including acoustic, electric, steel, and resonator guitars).";
    } else if (choice == 9) {
        document.getElementById("big-image").src = "thumbnails/img9.webp";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Hip-Hop Music</h1><br>Hip hop music or hip-hop music, also known as rap music and formerly known as disco rap,is a genre of popular music that originated in the Bronxborough of New York City in the early 1970s. It consists of stylized rhythmic music (usually built around drum beats) that commonly accompanies rapping, a rhythmic and rhyming speech that is chanted.It developed as part of hip hop culture, a subculture defined by four key stylistic elements: MCing/rapping, DJing/scratching with turntables, break dancing, and graffiti writing.Other elements include sampling beats or bass lines from records (or synthesized beats and sounds), and rhythmic beatboxing. While often used to refer solely to rapping, 'hip hop' more properly denotes the practice of the entire subculture.";
    }  else if (choice == 10) {
        document.getElementById("big-image").src = "thumbnails/img10.jpg";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Michael Jackson</h1><br>Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, dancer, and philanthropist. Dubbed the 'King of Pop', he is regarded as one of the most significant cultural figures of the 20th century. Over a four-decade career, his contributions to music, dance, and fashion, along with his publicized personal life, made him a global figure in popular culture. Jackson influenced artists across many music genres; through stage and video performances, he popularized complicated dance moves such as the moonwalk, to which he gave the name, as well as the robot. On June 25, 2009, less than three weeks before his concert residency was due to begin in London, with all concerts sold out, Jackson died from cardiac arrest, caused by a propofol and benzodiazepine overdose.";
    } else if (choice == 11) {
        document.getElementById("big-image").src = "thumbnails/img11.webp";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Jazz</h1><br> Jazz is a music genre that originated in the African-American communities of New Orleans, Louisiana, in the late 19th and early 20th centuries, with its roots in blues and ragtime.Since the 1920s Jazz Age, it has been recognized as a major form of musical expression in traditional and popular music. Jazz is characterized by swing and blue notes, complex chords, call and response vocals, polyrhythms and improvisation. Jazz has roots in European harmony and African rhythmic rituals. As jazz spread around the world, it drew on national, regional, and local musical cultures, which gave rise to different styles. New Orleans jazz began in the early 1910s, combining earlier brass band marches, French quadrilles, biguine, ragtime and blues with collective polyphonic improvisation. But jazz did not begin as a single musical tradition in New Orleans or elsewhere.";
    } else if (choice == 12) {
        document.getElementById("big-image").src = "thumbnails/img12.webp";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Snoop Dogg</h1><br>Calvin Cordozar Broadus Jr. (born October 20, 1971), known professionally as Snoop Dogg (previously Snoop Doggy Dogg and briefly Snoop Lion), is an American rapper and actor. His fame dates back to 1992 when he was featured on Dr. Dre's debut solo single, 'Deep Cover', and then on Dre's debut solo album, The Chronic. Broadus has since sold over 23 million albums in the United States and 35 million albums worldwide. His accolades include an American Music Award, a Primetime Emmy Award, and 17 nominations at the Grammy Awards.";
    }
    else {}

	
}


/* destinations */
function CheckDestination(form) {  		// show Image 
	var selected = destinations[destinations.selectedIndex].value;
	if (selected == "option1") {
		getImage(1);
	} else if (selected == "option2") {
		getImage(2);
	} else if (selected == "option3") {
		getImage(3);
	} else if (selected == "option4") {
		getImage(4);
	} else if (selected == "option5") {
		getImage(5);
	} else if (selected == "option6") {
		getImage(6);
	} else if (selected == "option7") {
		getImage(7);
	} else if (selected == "option8") {
		getImage(8);
	} else if (selected == "option9") {
		getImage(9);
	} else if (selected == "option10") {
		getImage(10);
	} else {

	}
}