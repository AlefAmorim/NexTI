function displayElements(elements,initalCoordinatesElement,initalCoordinatesSiblingElement,documentCoodinates){
    if(documentCoodinates <= initalCoordinatesElement && documentCoodinates > initalCoordinatesSiblingElement){
        elements.forEach(element => element.classList.add("appear"))
    }
    console.log(true)
    if((documentCoodinates ===  initalCoordinatesElement) ){
        elements.forEach(element => element.classList.add("appear"))
    }
}

const cards = document.querySelectorAll(".cards");
const topics = document.querySelectorAll("#topics-differentials li");

const sectionServices = document.querySelector("#section-services");
const initalCoordinatesServices = Math.round(sectionServices.getClientRects()[0].y);
const initalCoordinatesSiblingServices = sectionServices.nextElementSibling.getClientRects()[0].y;

const sectionDifferentials = document.querySelector("#section-differentials");
const initalCoordinatesDifferentials  = Math.round(sectionDifferentials.getClientRects()[0].y);
const initalCoordinatesSiblingDifferentials = sectionDifferentials.nextElementSibling.getClientRects()[0].y;

document.onscrollend = (e) => {
    const docElement = document.documentElement;
    const coordinatesDocument = docElement.getClientRects()[0].y;

    displayElements(topics,-initalCoordinatesDifferentials,-initalCoordinatesSiblingDifferentials,coordinatesDocument);
    displayElements(cards,-initalCoordinatesServices,-initalCoordinatesSiblingServices,coordinatesDocument);
}
