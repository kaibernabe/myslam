const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");


prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);


let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
  book.style.transform = "translateX(50%)";
  prevBtn.style.transform = "translateX(-180px)";
  nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
  if (isAtBeginning) {
    book.style.transform = "translateX(0%)";
  } else {
    book.style.transform = "translateX(100%)";
  }
  prevBtn.style.transform = "translateX(0px)";
  nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      case 3:
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;
        closeBook();
        break;
      default:
        throw new Error("unknown state");
    }
    currentLocation++;
  }
}

function goPrevPage() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 3;
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 2;
        break;
      case 4:
        openBook();
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 1;
        break;
      default:
        throw new Error("unknown state");
    }
    currentLocation--;
  }
}


function previewImage(event) {
  var reader = new FileReader();
  reader.onload = function() {
    var preview = document.getElementById('image-preview');
    preview.src = reader.result;
    preview.style.display = 'block';
  };
  reader.readAsDataURL(event.target.files[0]);
}


document.getElementById('image').addEventListener('change', function(event) {
  previewImage(event);
});




function saveToSessionStorage(event) {
  const fullName = document.getElementById('full-name').value;
  const nickname = document.getElementById('nickname').value;
  const age = document.getElementById('age').value;
  const birthday = document.getElementById('birthday').value;
  const address = document.getElementById('address').value;
  const email = document.getElementById('Email').value;
  const faveColor = document.getElementById('faveColor').value;
  const faveFood = document.getElementById('faveFood').value;
  const faveNumber = document.getElementById('faveNumber').value;
  const faveHobby = document.getElementById('faveHobby').value;
  const faveSong = document.getElementById('faveSong').value;
  const faveArtist = document.getElementById('faveArtist').value;


  sessionStorage.setItem('fullName', fullName);
  sessionStorage.setItem('nickname', nickname);
  sessionStorage.setItem('age', age);
  sessionStorage.setItem('birthday', birthday);
  sessionStorage.setItem('address', address);
  sessionStorage.setItem('email', email);
  sessionStorage.setItem('faveColor', faveColor);
  sessionStorage.setItem('faveFood', faveFood);
  sessionStorage.setItem('faveNumber', faveNumber);
  sessionStorage.setItem('faveHobby', faveHobby);
  sessionStorage.setItem('faveSong', faveSong);
  sessionStorage.setItem('faveArtist', faveArtist);


  displaySavedDataAndFavorites();
}


function displaySavedDataAndFavorites() {
  const fullName = sessionStorage.getItem('fullName');
  const nickname = sessionStorage.getItem('nickname');
  const age = sessionStorage.getItem('age');
  const birthday = sessionStorage.getItem('birthday');
  const address = sessionStorage.getItem('address');
  const email = sessionStorage.getItem('email');
  const faveColor = sessionStorage.getItem('faveColor');
  const faveFood = sessionStorage.getItem('faveFood');
  const faveNumber = sessionStorage.getItem('faveNumber');
  const faveHobby = sessionStorage.getItem('faveHobby');
  const faveSong = sessionStorage.getItem('faveSong');
  const faveArtist = sessionStorage.getItem('faveArtist');


  const textContainer = document.getElementById('text-container');
  textContainer.style.display = 'block';
  textContainer.innerHTML = `
    <p>Full Name: ${fullName}</p>
    <p>Nickname: ${nickname}</p>
    <p>Age: ${age}</p>
    <p>Birthday: ${birthday}</p>
    <p>Address: ${address}</p>
    <p>Email: ${email}</p>
    <p>Favorite Color: ${faveColor}</p>
    <p>Favorite Food: ${faveFood}</p>
    <p>Favorite Number: ${faveNumber}</p>
    <p>Favorite Hobby: ${faveHobby}</p>
    <p>Favorite Song: ${faveSong}</p>
    <p>Favorite Artist: ${faveArtist}</p>
  `;
}


const slamFormInputs = document.querySelectorAll('#slam-form input');
slamFormInputs.forEach(input => input.addEventListener('input', saveToSessionStorage));

const favSlamFormInputs = document.querySelectorAll('#favslam-form input');
favSlamFormInputs.forEach(input => input.addEventListener('input', saveToSessionStorage));


displaySavedDataAndFavorites();