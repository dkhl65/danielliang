import React from "react";

function AIWeatherClassifier() {
  return (
    <>
      <h2 id="aiweatherclassifier">AI Weather Classifier (2020)</h2>
      <p>
        This is the final project of the Introduction to Artificial Intelligence
        course (APS360) that I completed in my third year of university with
        three other students. The purpose of this project is to create an ML
        system with training, validation and testing using PyTorch.
      </p>
      <p>
        The system classifies the weather in outdoor photographs as rain, sun,
        cloud, snow or fog using a convolutional neural network (CNN). We
        achieved an accuracy of 71.4% when testing with a set of 500 images that
        the model was not trained or validated with.
      </p>
      <p>
        Instead of a conventional CNN, my team decided to train a binary
        ResNet50 model for each of the five weather conditions to make the
        training simpler and the division of work easier. The images used to
        train the models were taken from a{" "}
        <a
          href="https://github.com/berkgulay/WeatherPredictionFromImage"
          target="_blank"
          rel="noreferrer"
        >
          similar project on GitHub
        </a>{" "}
        and personal photos were used for validation and testing. The training
        was done using cloud computing on Google Colab. A video demonstration of
        the model working is shown below.
      </p>
      <p>
        We worked on this project using Google Colab but the files are shared on{" "}
        <a
          href="https://github.com/DharmitP/weather-classification"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </p>
      <iframe
        src="https://drive.google.com/file/d/1Exurzflbu3KKLG5nnCgxLV-LjeTTHuBK/preview"
        title="livedemo"
        width="800"
        height="450"
        allow="autoplay"
        allowFullScreen={true}
      ></iframe>
      <div>
        A live demonstration during the final presentation on images that the ML
        model has never seen.
      </div>
    </>
  );
}

export default AIWeatherClassifier;
