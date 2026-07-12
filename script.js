// Change this to her birthday in DDMM format.
// Example: 1806 = 18 June
const correctPassword = "1806";

function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === correctPassword) {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        document.getElementById("error").innerHTML = "❌ Wrong passcode. Try again ❤️";
    }

    celebrate();

    document.getElementById("bgMusic").play;
    document.getElementById("musicBtn").innerHTML="⏸Pause Music"
}

function nextPage() {
    const page = document.getElementById("mainContent");
page.classList.add("fade");
page.innerHTML = `
        <h1>💌 A Letter For You</h1>

        <p>
       HAPPY BIRTHDAY SANA GOD BLESS YOU TU HAMESHA KHUSH RAHE AUR APNE LIFE ME AAGE BADE ME ESA PRATNA KARTA HU PRABHU SE.

       TU JAISE APNE LIFE ME AAGE BADRI HAI ESE HE AAGE BADTE RENA HAMESHA...TERI LIFE ME JITNI BHI PROBLEM AAYE MUJHE PATA HAI TU USKO SAAMNA KAREGI AUR KISI SE DAREGI NHI EKDUM BINDASS RAHEGI APNE LIFE ME. AGAR TUJHE YEH SAB ACCHA NHI LAGA HOGA TOH I'M VERY SORRY.
       
       TERI YAAD MUJHE ROZ AATI HAI MUJHE PATA NHI TU KYU TERI BHEN KA SUNKE MUJHE CHORDI AGAR MERE SE KOI GALTI HOGAYI HOGI TOH ME EKDUM DIL SE SORRY BOLTA HU TEKO KI WOH ME PHIRSE NEXT TIME KABHI NHI KARUNGA MEKO MALUM PADH GAYA HAI INN 2 SAALO ME...TERE AAGE PICHE GHUMKE TEKO MANA NE KI BAHOT KHOSHIH KIYA HU BUT TU MAANI NHI AUR TUJHE MERE SE UNCOMFORTABLE HORA THA ISLIYE ME AANA BHI BAND KIYA BAHOT KAM AATA THA WOH BHI CHUPKE KI TU DHEK NAA LE KABHI.
       
       ME CHHATA HU KI AGAR TERE DIL ME MEIN ABHI BHI HU TOH PLEASE AAJA PHIRSE ME EKDUM SUDAR GAYA HU GAALI NHI DAARU NHI KUCH NHI KARTA SAB GALAT KAAM CHORDIYA HU ME...ABHI KAAM KARTA HU GHARWALO KI MADAD KARTA HU AUR PADHAI KARTA HU BASS ITNA HE.
       
       ❤️<br><br>

        
        HAPPY BIRTHDAY SANA ONCE AGAIN HOPE TERA AAJ KA DIN ACCHA JAAYE ESA ME PRATHNA KARTA HU 🎂❤️
        </p>

        <button onclick="showFinal()">Next ❤️</button>
    `;
}

function showFinal() {

const page = document.getElementById("mainContent");
page.classList.add("fade");
page.innerHTML = `

<h1>📸 Our Memories</h1>

<div class="gallery">

<img src="photo1.jpeg">

<img src="photo2.jpeg">

<img src="photo3.jpeg">

<img src="photo4.jpeg">

<img src="photo5.jpeg">

<img src="photo6.jpeg">

</div>

<p>

MUJHE RAAT KO APNI HAR EK PHOTO DHEKKE TERI BAHOT YAAD AATI HAI.

JAB HUM SAATH THE TUNE MERI LIFE ME KHUSIYA HE KHUSIYA LAAYI USSLIYE THANKYOU.

AAJ KA DIN AUR AANE WALE DIN MERE HISSE KI KHUSHI BHI TEKO MILE ESA ME PRATHNA KATA HU.

HAPPY BIRTHDAY❤️

</p>

<button onclick="finalMessage()">Continue ❤️</button>

`;

}

function finalMessage(){

const page = document.getElementById("mainContent");
page.classList.add("fade");
page.innerHTML = `

<h1>🎂 HAPPY BIRTHDAY ❤️</h1>

<p>

MUJHE PATA NHI AAGE ME TUJHE KABHI MESG KAR PAAHUNGA KI NHI AAJ JITNI BHI DIL KI BAAT HAI SAB BOLDUNGA TUJHE AUR SABSE MAIN BAAT JAB MENE JESSICA KO MESG KIYA THA TERE SE BAAT KARNA HAI KARKE TOH JAB HAMARI BAAT HUI THI MENE TUJHE KARMA KE BAAREME ME BOLA THA USKE LIYE ME DIL SE SORRY BOLTA HU SANA WOH ME INTENTIONALLY NHI BOLA JAISA TU BAAT KARI THI AUR BOLRI THI MEKO SACHME SAHI NHI LAGA TIH MERE SE NIKAL GAYA USKE LIYE BAHOT SORRY USS DIN KE BAAD SE ME KHUD KO BAHOT KOOS RAHA THA KI MENE KYU BOLA KARKE ISLIYE MENE SANIYA KO BOLA KI TEKO SORRY BOLNE KYUKI ME NHI BOL PAAYA TUJHE SORRY ISLIYEABHI BOLRA HU SORRYYYYY SANA JAB KE LIYE.
JABSE TU MERI LIFE SE GAI HAI ME TABSE EKDUM AKELA HOGAYA HU JO JO MERE KHAAS THE SAB CHALE GAYE JAB HUM SAATH THE TOH MERE DADA KO MOUTH CANCER THA TOH ME UNKO HOSPITAL VAGERA LEKE JAANE ME BUSY RETA THA TEKO BOLA NHI KABHI ME ISLIYE KABHI KABHI GUSSA HOJAATE THA ME KYUKI DIN BHAR BAAR RENEKA ISLIYE SORRRYYYY SANA.
TU CHORDNE KE BAAD MERE DADA BHI MEKO CHORDKE CHALE GAYE ME MERE GHAR ME SABSE CLOSE UNHI SE THA ABH MEKO NHI LAGTA ME KISI KE CLOSE HU JITNA TERE SE AUR MERE DADA SE THA ME AUR CLG WALE BHI SANIYA HEENA ABHISHEK VAGERA SAB ALAG HOGAYE HAI TOH AUR AKELA PAN LAGTA HAI...
MENE EK AUR GALTI KI HAI TU JAANE KE BAAD JAB MEKO AKELA FEEL HONE KA BAHOT TOH EK DO LADKI SE BAAT KIYA HU JUST AS A FRIEND USKE LIYE BHI SORRY BUT YEH MENE BAHOT PEHLE KIYA THA ABHI RECENTLY MENE TERI EK FRIEND SE BAAT KI EK HE DIN PHIR BAADME ME USKO BLOCK KIYA AUR USKE BAAD KISI SE NHI KIYA AUR NHI KARUNGA I'M VERY SORRY SANA ISKE LIYE NEXT TIME ESA NHI HOGA....

ME SAB CHIZ KE LIYE TUJHSE MAAFI MAANGTA HU AUR AGAR TUJHE MERE PE TODHA BHI TARAS AARA HO TOH PLEASE AAJA VAPAAS SANA PLEASE HUM PHIRSE EK NAYE START KAR SAKTE HAI AUR ME BILKUL POSSESIVE NHI RAHUNGA...TU MERI PEHLI PYAAR THI AUR MEKO UTNA DIMAG BHI NHI THA KI TU MERE SAATH HAI ISLIYE ME BASS TEKO KONE SE DARA THA AUR KUCH NHI ABHI MEKO SAMAJ AAGAYA HAI BAHOT ACCHE SE INN 2 SAALO ME BAHOT KUCH SAMAJ LIYA HU ME PLEASE SANA PLEASE HUM PHIRSE EK NAYE START KARTE HAINA PLEASEEE AUR SORRY AGAR TU YEH SAB CHIZ SE DISTURB HUI HO YAA MENE TERA BIRTHDAY KHARAB KARDIYA HU TOH PLEASE MUJHE MAAF KARDE SANA PLEASE❤️

</p>

<h2>From Joseph</h2>

`;

}

function toggleMusic(){

const music=document.getElementById("bgMusic");
const btn=document.getElementById("musicBtn");

if(music.paused){

music.play();

btn.innerHTML="⏸ Pause Music";

}else{

music.pause();

btn.innerHTML="🎵 Play Music";

}

}

function celebrate() {

confetti({
    particleCount: 180,
    spread: 100,
    origin: { y: 0.6 }
});

}

// Floating hearts
const hearts = document.querySelector(".hearts");

setInterval(() => {
    const heart = document.createElement("span");

    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}, 500);