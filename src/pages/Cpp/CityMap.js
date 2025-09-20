import Gallery from "../Gallery";

const zoomLevelSources = [
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANgCYAAAAAAKHB_abDnEH7VJ8?width=766&height=600",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANgSYAAAAAAF1Qp0gV6YVG07s?width=767&height=599",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANgiYAAAAAAGdz_F4n-cwIqvQ?width=766&height=597",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANhSYAAAAAAEaWmSy0u0AK2MU?width=767&height=599",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANgyYAAAAAAAiwij8GcjlwJIM?width=767&height=598",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANhCYAAAAAAD6aRyOHOmsAUnM?width=767&height=599",
];

const zoomLevelCaptions = [
  <>Map of Toronto zoomed out.</>,
  <>Zooming in makes the 100 km/h highways visible in orange.</>,
  <>Major roads are visible in yellow</>,
  <>Zooming in some more.</>,
  <>Minor roads are now visible in grey.</>,
  <>
    Zooming in significantly shows buildings in purple and points of interest in
    yellow. A one-way street is indicated with an arrow.
  </>,
];

const exploreSources = [
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANYSYAAAAAALiPLErZEuulI-8?width=764&height=595",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANYCYAAAAAAAfu6TInojTZstQ?width=765&height=598",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANWyYAAAAAAJzaO2KmnRL8q9I?width=765&height=598",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANfyYAAAAAAJBAqHB8kN8URYg?width=761&height=594",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANWCYAAAAAAK6OrnGata2sbZg?width=766&height=598",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANfCYAAAAAAH7V3s_i577R-Mw?width=763&height=595",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANVyYAAAAAANk31bxQhPR0oRM?width=765&height=595",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANYiYAAAAAAPMKMaP3yrq2RL0?width=762&height=594",
];

const exploreCaptions = [
  <>
    The Help button shows instructions for using the navigation and search
    features.
  </>,
  <>
    Map features are colour coded depending on their category provided by the
    map data. Streets are coloured by speed limit, buildings are purple, water
    is blue, parks and forests are different shades of green.
  </>,
  <>Intersections are used as starting and end points for navigation.</>,
  <>Beaches are coloured in beige.</>,
  <>
    Searching a partial name of an intersection will show it on the map at the
    appropriate zoom level.
  </>,
  <>
    Searching a partial name of a feature will show all features containing the
    key word.
  </>,
  <>
    Entering the cm keyword, followed by the bin file name will switch the map.
  </>,
  <>The bin file for Hong Kong, China has been loaded.</>,
];

const pathfindingSources = [
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANWSYAAAAAAJYsODsqs_asIIc?width=766&height=596",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANViYAAAAAADrgpTHgEqrGSsw?width=767&height=596",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANVCYAAAAAAF1RV2yY4txhrOo?width=767&height=598",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANWiYAAAAAAMklaDYlWWGlwa4?width=762&height=597",
];

const pathfindingCaptions = [
  <>
    The Find Path button was clicked with a blank search bar, then the starting
    intersection was selected.
  </>,
  <>
    The path is highlighted in red after selecting the destination intersection.
    The estimated time is based on the speed limit and left/right turn
    penalties.
  </>,
  <>
    Two partial name intersections seperated by a comma can be used to find
    directions.
  </>,
  <>
    Show Directions button will give step by step directions with distance
    before turns.
  </>,
];

function CityMap() {
  return (
    <>
      <h2 id="citymap">City Map (2019)</h2>
      <p>
        The first part of this project is a GTK app I created with two other
        students for the Communication and Design (ECE297) course. The purpose
        of this app is to draw a map using data from{" "}
        <a
          href="https://www.openstreetmap.org/"
          target="_blank"
          rel="noreferrer"
        >
          OpenStreetMap
        </a>{" "}
        and provide navigational directions using a pathfinding algorithm. The
        second part of this project is the Traveling Courier challenge to help a
        delivery truck find the best route to pick up and drop off packages.
      </p>
      <p>
        The project is entirely coded in C++ using the university's Debian
        GNU/Linux computers. We used functions from OpenStreetMap's API to
        interpret the data from bin files. We used a GTK based library written
        by the course instructors to draw the map features and create the user
        interface. Collaboration was done with Git. Since all of the code and
        libraries are on the university's computer system, I cannot provide a
        Git link here.
      </p>
      <h3 id="zoomlevels">Zoom Levels</h3>
      <p>
        Streets and text are hidden until the zoom level is appropriate. Zooming
        is done by scrolling the mouse wheel or clicking the zoom buttons.
        Streets are coloured based on speed limit with the faster streets
        showing up first.
      </p>
      <Gallery sources={zoomLevelSources} captions={zoomLevelCaptions} />
      <h3 id="exploring">Exploring</h3>
      <p>
        The user can click on most features and intersections, which display's
        their name on the status bar. The user can also search for intersections
        and features by their name. A map of a different city can be loaded from
        a bin file by entering the file path into the text field or using the
        city name and country name.
      </p>
      <Gallery sources={exploreSources} captions={exploreCaptions} />
      <h3 id="pathfinding">Pathfinding</h3>
      <p>
        Dijkstra's algorithm is used to find the best path between two
        intersections in the city. Step by step driving directions are provided.
        The path can be chosen by typing the names of the two intersections or
        by clicking the two intersections on the map. The pathfinding takes left
        turns and right turns into account and avoids turning when possible.
      </p>
      <Gallery sources={pathfindingSources} captions={pathfindingCaptions} />
      <h3 id="videodemo">Video Demonstration</h3>
      <iframe
        src="https://odysee.com/$/embed/@danielliang:d/city-map-video:0?r=DJ7HXqy3MzZAwt1J5s1yP4iL2RdsfXZk"
        title="videodemo"
        width="800"
        height="608"
        allowFullScreen={true}
      ></iframe>
      <div>
        A demonstration without commentary going through each feature of the map
        app.
      </div>
      <h3 id="traveling">Traveling Courier</h3>
      <p>
        This is the second part of the project, which does not involve any
        graphics, but uses the map data from part 1. A series of pickup and
        dropoff locations are assigned to intersections in the city. The
        delivery truck can carry only a specified number of packages at a time.
        It needs to go to the pickup (depot) location before going the dropoff
        location. There is a 45 second compute time limit. The challenge is to
        complete the deliveries as fast as possible. The travel time is
        calculated with road distance, speed limit and turn penalties.
      </p>
      <p>
        We modified our Dijkstra's algorithm from part 1. The original algorithm
        stops searching paths once the destination is found. This time, the
        algorithm begins at the starting intersection and searches the entire
        map. This process has O(n log n) time complexity and uses
        multi-threading. After it is done, a path from a delivery location to
        anywhere on the map can be found very quickly with the O(n) traceback
        routine. We call this dijkstraUnlimited, the first process. I was
        responsible to coding this process.
      </p>
      <p>
        The second process is Multi-Start. The first phase starts at every depot
        and travels to the next best delivery location based on travel time. The
        best path from this phase is passed to the second phase, which does the
        same thing, except it has a 10% chance of going to the second best
        location instead of the best. There is potential to find a shorter
        overall path this way, even if one segment is longer. It repeats this
        ten thousand times.
      </p>
      <p>
        The third process is random 3-opt. Four consecutive delivery
        instructions are randomly shuffled. This has the effect of disconnecting
        three paths and reconnecting in a different way. It can help undo paths
        that cross over. This repeats until the 45 second limit is over. This
        algorithm has been tested with orders of more than 200 deliveries at a
        time.
      </p>
      <img
        alt="travelingcourier"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANfiYAAAAAACp0-bQo0dWyAnQ?width=1321&height=384"
      />
      <p>
        Choosing the heuristic algorithms for rearranging the path is the most
        challenging aspect of this project. We studied other algorithms such as
        2-opt, 4-opt and simulated annealing before deciding on which to use.
        Our results were compared to other student groups in the course and the
        TA examples to determine our grade. The results of the contest are{" "}
        <a
          href="https://ug251.eecg.utoronto.ca/ece297s/contest_2019/final.html"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        . My group was an-345, rank 16.
      </p>
    </>
  );
}

export default CityMap;
