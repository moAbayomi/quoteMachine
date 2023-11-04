document.addEventListener("DOMContentLoaded", function () {
  const newQuoteBtn = document.querySelector(".new-quote");
  const rootTheme = document.querySelector(":root");
  const text = document.querySelector("#text");
  const quoteAuthor = document.querySelector("#author");
  const linkTwitter = document.querySelector(".link-social-twitter");

  const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote:
        "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost",
    },
    {
      quote: "Don't count the days; make the days count.",
      author: "Muhammad Ali",
    },
    {
      quote: "The only thing we have to fear is fear itself.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      quote: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates",
    },
    {
      quote:
        "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      quote:
        "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr.",
    },
    {
      quote:
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote:
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein",
    },
    {
      quote:
        "The only thing necessary for the triumph of evil is for good men to do nothing.",
      author: "Edmund Burke",
    },
    {
      quote:
        "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky",
    },
    {
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein",
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      quote:
        "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
      author: "Albus Dumbledore (J.K. Rowling)",
    },
    {
      quote:
        "Success is stumbling from failure to failure with no loss of enthusiasm.",
      author: "Winston Churchill",
    },
    {
      quote: "It's not whether you get knocked down, it's whether you get up.",
      author: "Vince Lombardi",
    },
    {
      quote:
        "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote:
        "To live is the rarest thing in the world. Most people exist, that is all.",
      author: "Oscar Wilde",
    },
  ];

  newQuoteBtn.addEventListener("click", () => {
    console.log("clicked");
    const { quote: content, author } =
      quotes[Math.floor(Math.random() * quotes.length)];
    text.textContent = content;
    quoteAuthor.textContent = author;
    linkTwitter.href += `${content} - ${author}`;

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
