// ===============================================================================================
// ===============================================================================================
// ===============================================================================================
//                                   IMAGES SWAP ON JAVASCRIPT

const input = document.querySelector('.input-field')
const bid = document.querySelector('.bid_button')
const resPrice = document.querySelector('.rprice')
const newAmount = document.querySelector('.rprice2')


var bid_count = 0;
var countDisplay = document.getElementById("bid_count");
// const bdj = document.querySelector('.swal2-styled')

let slider = document.querySelector('.mbenz');
let otherImages = ['Benz1.jpg', 'Benz2.jpg', 'Benz3.jpg', 'Benz4.jpg', 'Benz5.jpg'];
let i = 0;

const next = () =>{
    if(i >= otherImages.length-1) i = -1;
    i++;
    return myImg();			 
}

const prev = () => {
	if(i <= 0) i = otherImages.length;	
	i--;
	return myImg();			 
}

const myImg = () =>{
	return slider.setAttribute('src', "/img/auction-pictures/"+otherImages[i]);	
}

// ===============================================================================================
// ===============================================================================================
// ===============================================================================================
//                                   IMAGES SWAP ON JAVASCRIPT

let slider2 = document.querySelector('.lexus');
let lexusImages = ['Lexus1.webp', 'Lexus2.webp', 'Lexus3.webp', 'Lexus4.webp', 'Lexus5.webp'];
let j = 0;

const next2= () =>{
    if(j >= lexusImages.length-1) j = -1;
    j++;
    return Lexus();			 
}

const prev2 = () => {
	if(j <= 0) j = lexusImages.length;	
	j--;
	return Lexus();			 
}

const Lexus = () =>{
	return slider2.setAttribute('src', "/img/auction-pictures/"+lexusImages[j]);	
}

// ===============================================================================================
// ===============================================================================================
// ===============================================================================================
//                                   IMAGES SWAP ON JAVASCRIPT

let slider3 = document.querySelector('.homeitems');
let homeItems = ['home-theater2.png', 'lounge-chair.png', 'sofa-chair.png', 'ward-robe.png'];
let k = 0;

const next3= () =>{
    if(k >= homeItems.length-1) k = -1;
    k++;
    return Home();			 
}

const prev3 = () => {
	if(k <= 0) k = homeItems.length;	
	k--;
	return Home();			 
}


const Home = () =>{
	return slider3.setAttribute('src', "/img/auction-pictures/"+homeItems[k]);	
}

let slider4 = document.querySelector('.homeitems2');
let homeItems2 = ['tv-console.png', 'Luxury-dining.png', 'lounge-chair.png', 'sofa-chair(2).png'];
let l = 0;

const next4 = () =>{
    if(l >= homeItems2.length-1) l = -1;
    l++;
    return Home2();			 
}

const prev4 = () => {
	if(l <= 0) l = homeItems2.length;	
	l--;
	return Home2();			 
}


const Home2 = () =>{
	return slider4.setAttribute('src', "/img/auction-pictures/"+homeItems2[l]);	
}

let slider5 = document.querySelector('.homeitems3');
let homeItems3 = ['wardrobe(2).png', 'wardrobe.png', 'Luxury-dining.png', 'luxury-sit.png'];
let m = 0;

const next5 = () =>{
    if(m >= homeItems3.length-1) m = -1;
    m++;
    return Home3();			 
}

const prev5 = () => {
	if(m <= 0) m = homeItems3.length;	
	m--;
	return Home3();			 
}


const Home3 = () =>{
	return slider5.setAttribute('src', "/img/auction-pictures/"+homeItems3[m]);	
}

let slider6 = document.querySelector('.electronics');
let elect = ['hisense-ac.jfif', 'Hisense-ac.png', 'hisense-ac.jfif', 'hisense-both-ac.jpg'];
let n = 0;

const next6 = () =>{
    if(n >= elect.length-1) n = -1;
    n++;
    return Home4();			 
}

const prev6 = () => {
	if(n <= 0) n = elect.length;	
	n--;
	return Home4();			 
}


const Home4 = () =>{
	return slider6.setAttribute('src', "/img/auction-pictures/"+elect[n]);	
}

let slider7 = document.querySelector('.electronics2');
let elect2 = ['home-thearter1.png', 'home-theater.png', 'home-theater2.png', 'home-theater.png'];
let o = 0;

const next7 = () =>{
    if(o >= elect2.length-1) o = -1;
    o++;
    return Elect();			 
}

const prev7 = () => {
	if(o <= 0) o = elect2.length;	
	o--;
	return Elect();			 
}


const Elect = () =>{
	return slider7.setAttribute('src', "/img/auction-pictures/"+elect2[o]);	
}

let slider8 = document.querySelector('.electronics3');
let elect3 = ['laptop-power-bank.png', 'laptop-power-b.png', 'portable-laptop-powerbank.png', 'laptop-power-bank.png'];
let p = 0;

const next8 = () =>{
    if(p >= elect3.length-1) p = -1;
    p++;
    return powerBank();			 
}

const prev8 = () => {
	if(p <= 0) p = elect3.length;	
	p--;
	return powerBank();			 
}


const powerBank = () =>{
	return slider8.setAttribute('src', "/img/auction-pictures/"+elect3[p]);	
}

let slider9 = document.querySelector('.electronics4');
let elect4 = ['mikano-generator.png', 'Mikano-features-and-prices-in-Nigeria.jpeg', 'mikano-gen.jpg', 'mikano-perkins-30kva-generator.jpg'];
let q = 0;

const next9 = () =>{
    if(q >= elect4.length-1) q = -1;
    q++;
    return Mikano();			 
}

const prev9 = () => {
	if(q <= 0) q = elect4.length;	
	q--;
	return Mikano();			 
}


const Mikano = () =>{
	return slider9.setAttribute('src', "/img/auction-pictures/"+elect4[q]);	
}

const update = () => {
    const inputValue = input.value.replace(/\D/g, "")
    input.value = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    var myPrice = resPrice.textContent.replace(/[^\d.]/g, '')
    var intMyPrice = parseInt(myPrice)
   
    if (inputValue === ''){
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Please enter your bid amount',
            showConfirmButton: false,
            timer: 1500
          })
}
    else if (inputValue < intMyPrice){
        //  Swal.fire({
        //   position: 'top-center',
        //   icon: 'error',
        //   title: 'Your bid amount is lower than the current bid',
        //   showConfirmButton: false,
        //   timer: 2000
        // })
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your bid amount is lower than the current bid!'
        })
    }
    else if (inputValue == intMyPrice) {
        //  Swal.fire({
        //   position: 'top-center',
        //   icon: 'error',
        //   title: 'Your bid amount must be higher than the current bid',
        //   showConfirmButton: false,
        //   timer: 2000
        // })
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your bid amount must be higher than the current bid!'
        })
    }

    else {      
        Swal.fire({
          icon: 'success',
          title: 'Thank you',
          text: 'Your bid has been successfully placed.',
        })
          // ============================================================
          // ======================BID COUNT=============================
          // ============================================================
          bid_count++;
          if (bid_count === 1){
            countDisplay.innerHTML = bid_count + " bid";}
          else{
            countDisplay.innerHTML = bid_count + " bids";
          }
          
          resPrice.innerHTML = '₦' + input.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",") //for the new reserved price

          var newBid = inputValue
          var number1 = 1

          let newAmount2 = number1 + parseInt(newBid);
          let commaSepAmount = newAmount2.toLocaleString()

          newAmount.innerHTML = '₦' + commaSepAmount //for the least bid amount that can be placed.

          // window.location.href="/pages/auction-page-all-items.html"
    }

}


bid.addEventListener('click', update)


input.addEventListener('input', function () {
  const inputValue = input.value.replace(/\D/g, "")
  input.value = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
})