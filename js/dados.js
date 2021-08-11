let url_trending_movies =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=f1f5ceb4e3ce445c6f7d89156c68fb66&total_results=5";
let url_trending_tv =
  "https://api.themoviedb.org/3/trending/tv/week?api_key=f1f5ceb4e3ce445c6f7d89156c68fb66";

let image = document.getElementById("images");

const trending_movies = () =>
  fetch(url_trending_movies)
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      // console.log(data.results);
      const imgs = data.results
        .map((item) => {
          let img = document.createElement("img");
          img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`;
          img.classList.add("slider--item");
          document.getElementById("images").appendChild(img);
          // carousel attributes
          totalSlides = document.querySelectorAll(".slider--item").length;
          document.querySelector(
            ".cards--width"
          ).style.width = `calc(220px * ${totalSlides})`;
          return;
        })
        .join("");
    })
    .catch((error) => {
      console.log(error);
    });

trending_movies();

const trending_tv = () =>
  fetch(url_trending_tv)
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      // console.log(data.results);
      const imgs = data.results
        .map((item) => {
          let img = document.createElement("img");
          img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`;
          img.classList.add("slider--item");
          document.getElementById("teste").appendChild(img);
          // carousel attributes
          totalSlides = document.querySelectorAll(".slider--item").length;
          document.querySelector(
            ".cards--width"
          ).style.width = `calc(220px * ${totalSlides})`;
          return;
        })
        .join("");
    })
    .catch((error) => {
      console.log(error);
    });

trending_tv();

const goPrev = () => {
  const item = document.querySelector(".cards--width");
  const style = getComputedStyle(item);
  const element = style.marginLeft;
  const itemMarginLeft = parseInt(element);
  let maximo = 50;
  // -940;
  if (itemMarginLeft < 50) {
    if (itemMarginLeft >= -940) {
      document.querySelector(".cards--width").style.marginLeft = `${maximo}px`;
    } else {
      document.querySelector(".cards--width").style.marginLeft = `calc(${
        itemMarginLeft + Math.round(window.innerWidth / 2)
      }px)`;
    }
  }
};

const goNext = () => {
  const item = document.querySelector(".cards--width");
  const style = getComputedStyle(item);
  const element = style.marginLeft;
  const itemMarginLeft = parseInt(element);
  let maximo = -3180;
  if (itemMarginLeft > maximo) {
    document.querySelector(".cards--width").style.marginLeft = `calc(${
      itemMarginLeft - 1120
    }px)`;
    // document.querySelector(".prev").style.visibility = "visible";
    if (itemMarginLeft <= -2190) {
      document.querySelector(".cards--width").style.marginLeft = `${maximo}px`;
    }
  }
};

document.getElementById("goPrev").addEventListener("click", goPrev);
document.getElementById("goNext").addEventListener("click", goNext);
