import React from "react";
import Gallery from "../Gallery";

const sources = [
  "https://onedrive.live.com/embed?resid=DA6CEFB80D170B9%2110231&authkey=%21AAYMGlHWeABeqGY&width=1203&height=1035",
  "https://onedrive.live.com/embed?resid=DA6CEFB80D170B9%2110232&authkey=%21AJFmsruasQNufX0&width=1203&height=1035",
  "https://onedrive.live.com/embed?resid=DA6CEFB80D170B9%2110233&authkey=%21AAsFIhItxslDzvA&width=1203&height=1035",
  "https://onedrive.live.com/embed?resid=DA6CEFB80D170B9%2110234&authkey=%21AOhvy6Cb0K_EICA&width=1203&height=1035",
  "https://onedrive.live.com/embed?resid=DA6CEFB80D170B9%2110238&authkey=%21AOKTG_ObGjFDH1Y&width=1203&height=1035",
  "https://onedrive.live.com/embed?resid=DA6CEFB80D170B9%2110235&authkey=%21AB4ifpjDbqMYVqw&width=1203&height=1035",
  "https://onedrive.live.com/embed?resid=DA6CEFB80D170B9%2110236&authkey=%21AMJMd7bF2FDqu-4&width=1203&height=1035",
  "https://onedrive.live.com/embed?resid=DA6CEFB80D170B9%2110237&authkey=%21AL3XAX0npu34cy8&width=1203&height=1035",
];

const captions = [
  <>The initial state of the weather app.</>,
  <>
    Clicking the Detect Location button automatically queries Weather API with
    the coordinates from the browser's geolocation API.
  </>,
  <>
    When there are multiple locations with the same name, they are displayed for
    the user to select.
  </>,
  <>The first tab shows the current weather conditions.</>,
  <>Units can be switched between metric and US customary.</>,
  <>The second tab shows the 14-day forecast.</>,
  <>Clicking on a row opens the hourly forecast for that day.</>,
  <>Many details are shown, so scrolling is needed to see everything.</>,
];

const errorSources = [
  "https://onedrive.live.com/embed?resid=DA6CEFB80D170B9%2110240&authkey=%21AIaMx0CRCjyrMhc&width=499&height=209",
  "https://onedrive.live.com/embed?resid=DA6CEFB80D170B9%2110241&authkey=%21AG9NRXbL3GksfkI&width=524&height=438",
  "https://onedrive.live.com/embed?resid=DA6CEFB80D170B9%2110239&authkey=%21ALBIk358UY4Nx7Y&width=495&height=438",
];

const errorCaptions = [
  <>
    If the user disabled geolocation, an error message will show after clicking
    "Detect Location".
  </>,
  <>
    If the web service cannot be reached, the error message returned by Axios
    will be displayed.
  </>,
  <>
    There are{" "}
    <a
      href="https://www.weatherapi.com/docs/#intro-error-codes"
      target="_blank"
      rel="noreferrer"
    >
      several error messages
    </a>{" "}
    the API may return.
  </>,
];

function WeatherApp() {
  return (
    <>
      <h2 id="weather">React Weather App (2023)</h2>
      <p>
        A React app I created for my final project in the Web Development using
        React and JSX course (3704) from the University of Toronto School of
        Continuing Studies.
      </p>
      <p>Project requirements:</p>
      <ul>
        <li>React</li>
        <li>
          Web service call (I used{" "}
          <a
            href="https://www.weatherapi.com/"
            target="_blank"
            rel="noreferrer"
          >
            Weather API
          </a>{" "}
          for my web service)
        </li>
        <li>Error handling when web service call fails</li>
        <li>Semantic UI</li>
        <li>AG Grid</li>
        <li>4+ components</li>
        <li>State hooks</li>
        <li>Conditional rendering</li>
      </ul>
      <p>
        The project is deployed to{" "}
        <a
          href="https://danielweather.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </a>
        . The GitHub repository is{" "}
        <a
          href="https://github.com/dkhl65/react-weather"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <h3 id="weather-function">Function of the App</h3>
      <Gallery sources={sources} captions={captions} />
      <h3 id="weather-errors">Error Handling</h3>
      <Gallery sources={errorSources} captions={errorCaptions} />
    </>
  );
}

export default WeatherApp;
