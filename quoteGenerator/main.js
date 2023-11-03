document.addEventListener("DOMContentLoaded", function () {
  const newQuoteBtn = document.querySelector(".new-quote");
  const rootTheme = document.querySelector(":root");
  const quote = document.querySelector("#text");
  const quoteAuthor = document.querySelector("#author");
  const linkTwitter = document.querySelector(".link-social-twitter");

  newQuoteBtn.addEventListener("click", () => {
    fetch(`https://api.quotable.io/random`)
      .then((response) => response.json())
      .then(({ content, author }) => {
        quote.textContent = content;
        quoteAuthor.textContent = author;
        linkTwitter.href += `${content} - ${author}`;
      });

    let r, g, b, brightness;

    // Generate a color with sufficient contrast against white text
    do {
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);

      // Calculate the brightness of the color
      brightness = (r * 299 + g * 587 + b * 114) / 1000;
    } while (brightness > 128); // Repeat until a sufficiently dark color is found

    // Create the RGB color string
    const randomColor = `rgb(${r}, ${g}, ${b})`;

    rootTheme.style.setProperty("--primary-color", randomColor);
  });
});
