const Cars = [
    {
        NameCar:"Beluga",
        Text:"The yt car,Looks a bit silly and innocent😐",
        Image:"/Testimonial-Slider/img/beluga.png",
    },
    {
        NameCar:"Axle",
        Text:"known as silly axle, very silly car, can't even form a thought😐",
        Image:"/Testimonial-Slider/img/axle.png",
    },
    {
        NameCar:"Blawg",
        Text:"another version of silly axle, a very innocent car to ever exist, blawg is a CutiePatootie😊",
        Image:"/Testimonial-Slider/img/blawg.jpg",
    },
    {
        NameCar:"Schlawg",
        Text:"one of the lookxmaxing car founder, such a sigma car, Chad😐",
        Image:"/Testimonial-Slider/img/axle.png",
    },
];

const NameEL = document.querySelector('.Name');
const ImageEL = document.querySelector('img');
const TextEL = document.querySelector('.Text');

let idx = 0;

updateCars()

function updateCars(){
    const {NameCar,Image,Text} = Cars[idx];
    NameEL.innerText = NameCar;
    ImageEL.src = Image;
    TextEL.innerText = Text;
    idx++;
    if(idx === Cars.length){
        idx = 0;
    }
    setTimeout(() => {
        updateCars();
      }, 3000);
}
