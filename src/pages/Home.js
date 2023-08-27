import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="content">
      <h1>Welcome to my portfolio</h1>
      <p>
        Here, I showcase my software projects and electronics projects that I
        completed as part of a school assignment or on my own time for practice
        and learning. I have organized my projects into categories based on the
        main programming language. The source code for this website is{" "}
        <a
          href="https://github.com/dkhl65/danielliang"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <div className="contact">
        <p>
          <a href="mailto:dan.liang@mail.utoronto.ca">
            <FontAwesomeIcon icon={faEnvelope} size="xl" />{" "}
            dan.liang@mail.utoronto.ca
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/daniel-liang-957960149/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" /> LinkedIn profile
          </a>
        </p>
        <p>
          <a href="https://github.com/dkhl65" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="xl" /> dkhl65
          </a>
        </p>
      </div>
      <h1>My journey</h1>
      <p>
        I first became interested in programming in Grade 4 (2008 - 2009). I
        borrowed books from the library to learn JavaScript and HTML to create
        simple webpages with UI elements such as buttons and forms.
      </p>
      <p>
        From Grade 6 to 8 (2010 - 2013), I was in a regional program called
        Sci-Tech in the Peel District School Board. In Sci-Tech, technologies
        such as Lego robotics, video editing and animation are part of the
        curriculum, but not programming languages. I bought an Arduino starter
        kit from the school to use for the Arduino club. The Arduino club
        provided instructions for using the breadboard and sample code. I spent
        a lot of my free to learn C++ for programming the Arduino and how to use
        electronic components such as LEDs, resistors, potentiometers and
        various sensors. I created a Wikispace to document my findings and help
        the Arduino club. In addition to learning C++ for programming Arduino, I
        also learned general purpose C and C++, including concepts such as
        variables, pointers, functions, classes, libraries and compiling using
        books and online resources. While using Arduino, I came across{" "}
        <a href="https://processing.org/" target="_blank" rel="noreferrer">
          Processing
        </a>
        , an IDE and graphical library in Java. I used it to receive data from
        Arduino to draw graphs. I continued to create small projects with
        Arduino throughout middle school and high school.
      </p>
      <p>
        In high school (2013 - 2017), I took the Computer Engineering Technology
        series of courses (TEJ2O0, TEJ3M0 and TEJ4M0). In these courses, I built
        circuits on the breadboard with LEDs, capacitors, transistors, logic
        gates and motors with great ease, thanks to my Arduino experience. I
        also took the Computer Science series of courses (ICS3U0 and ICS4U0). In
        these courses, I excelled at the Java programming language.
      </p>
      <p>
        In my first year of university (2017 - 2018), I took Computer
        Fundamentals (APS105), where I used C programming with proficiency. I
        took Engineering Strategies and Practice (APS111 and APS112), where I
        learned the engineering process, including problem solving,
        communication skills, teamwork, designing for human factors, society and
        the environment. I joined the University of Toronto Robotics Association
        (UTRA) and made a robot using Arduino for their sumo robot competition.
        In the summer, I learned to use Android Studio to make apps in Java.
      </p>
      <p>
        In my second year of university (2018 - 2019), I took Programming
        Fundamentals (ECE244), where I improved my skills in C++. I took Digital
        Systems (ECE241), where I learned digital logic and the Verilog hardware
        description language using the DE1-SoC development board FPGA. I took
        Computer Organization (ECE243), where I learned low level computer
        architecture, memory addressing and assembly programming using the
        DE1-SoC ARM processor. I took Communication and Design (ECE297), where I
        learned project management and communication with technical managers and
        non-technical clients while completing a large C++ project. I
        participated in UTRA again, this time on their new Pacbot team. I
        learned Python to program the game logic for an autonomous robot powered
        by a Raspberry Pi to play a real-life game of Pacman. I used the Pygame
        library to simulate Pacman. In the summer, I used the Pygame library to
        create my own game.
      </p>
      <p>
        In my third year of University (2019 - 2020), I took Operating Systems
        (ECE344), where I learned CPU thread scheduling, memory management,
        process management and file systems. Assignments were programmed in C. I
        took Algorithms and Data Structures (ECE345), where I learned many
        essential concepts for software engineers, such as asymptotics,
        summations, trees, graphs, sorting, dynamic programming, and greedy
        algorithms. I took Artificial Intelligence Fundamentals (APS360), where
        I learned neural networks and deep learning using Python and PyTorch on
        Google Colab. I took Introduction to Databases (CSC343), where I learned
        relational algebra and PostgreSQL. I took Computer Networks I (ECE361),
        which is an introduction to many networking concepts, such as layered
        network architectures, TCP/IP protocol, Peer-to-Peer protocols,
        Ethernet, flow control, packet switching and shortest path algorithms.
        Assignments were programmed in Python.
      </p>
      <p>
        From July 2020 to August 2021, I did my Professional Experience Year
        (PEY Co-op) at Analog Devices as a software engineer. I learned and used
        modern JavaScript libraries and frameworks, such as Angular JS, Express
        JS, MongoDB and jQuery. I managed an EC2 server on Amazon Web Services
        (AWS). I used C programming for embedded Linux applications. On my time
        off, I used jQuery to create some personal projects.
      </p>
      <p>
        In my fourth year of university (2021 - 2022), I took Software
        Engineering (ECE444), where I learned the Agile software development
        process, the software development life cycle, web development with Flask
        and open source software. This course does not go in-depth with
        programming languages, so I had to learn React JS on my own for the web
        app project. I{" "}
        <a
          href="https://github.com/igraph/usability-benchmarks/pull/1"
          target="_blank"
          rel="noreferrer"
        >
          contributed to a Python library on Github called igraph
        </a>{" "}
        for the open source project. I took Computer Networks II (ECE466), which
        taught network traffic concepts such as traffic shaping, fairness and
        scheduling. Assignments were programmed in Java and Matlab. As part of
        my Artificial Intelligence minor, I took Introduction to Artificial
        Intelligence (CSC384), Introduction to Machine Learning (ECE421) and
        Probabilistic Reasoning (ECE368), all of where I learned low level
        computational intelligence and machine learning related concepts. All
        three courses had assignments programmed in Python. For my year-long
        design project, also known as capstone, I researched blockchain
        technology and proof-of-stake consensus algorithm, wrote extensive
        documentation and created a web app using React, TypeScript and Redux
        for simulating proof-of-stake.
      </p>
      <p>
        From June 2023 to August 2023, I took the Web Development using React
        and JSX course (3704) from the University of Toronto School of
        Continuing Studies. Although I have used React before, I gained a deeper
        understanding of React through this course. I learned about class
        components and functional components, lifecycle functions and hooks, and
        transferring data between parent and child components using props and
        callback functions. For my final project, I created a weather app.
      </p>
      <p>
        From July 2023 to August 2023, I worked at a non-profit organization
        called Helping Hands as a software developer. My position was funded by
        Canada Summer Jobs. I worked on{" "}
        <a href="https://helpinghandsapp.com/" target="_blank" rel="noreferrer">
          their website
        </a>
        , where I added new content, improved navigation and formatting. I
        developed their app for helping youth connect with non-profit
        organizations to find volunteer opportunities, using Ruby on Rails,
        React and PostgreSQL. I contributed to documentation of the app and set
        standards for code style. I improved their AWS architecture by creating
        accounts for individual users in IAM Identity Center and using
        CodeDeploy to deploy their website.
      </p>
    </div>
  );
}

export default Home;
