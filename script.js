const galery2Imagess = document.querySelectorAll(".galery2Images");

galery2Imagess.forEach((galery2Images) => {
    galery2Images.addEventListener("click", () => {
        removeActiveClasses();
        galery2Images.classList.add("active");
    });
});

const removeActiveClasses = () => {
    galery2Imagess.forEach((galery2Images) => {
        galery2Images.classList.remove("active" , "blur");
    });
};