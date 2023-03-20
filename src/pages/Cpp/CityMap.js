import React from "react";
import Gallery from "../Gallery";

const zoomLevelSources = [
  "https://sat02pap005files.storage.live.com/y4mm4dzWM4c84wJMPPJkKJ_BOw4g2haCOqXkR6UDMXhe48N8s3xowMbFfhuARJkQeNJF2Fr-6tMouiN0v1qQGkkWznEhFBYUhBvEjphPRIOV5mjCr7FujGoLD-UA7hVYihQMHtpL6UwSXe4e-Ef1oI8WtncMOs4-hEsrYjBJCdVz5liWxorRCo2dpYJQhgw4382?width=766&height=600&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mFOdrQhgLBh9752UYthDwxg5vVX0PoPVxmmcjuIXk_yjWdfCl2VPjjJq7rjNlP_PocAS7mtYyMBTeliMF9qBhfW9T4yKaWfqw6fwPhxDLJAG7TrhuSR8fPruB_7uLGir4C8ajCxilqrj1vP1f9WyUsMrb1rlztI_85il7Ayxu5a4FuzOFFnbjpBGeRvsYs7bl?width=767&height=599&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m51phkMteutpCzmKs6x7VG3tYipntEWhdZQd6v1jSyPyL9zsdgqMXCl8DeG7k2CuF5XB3L2_HuXkIO1YjAhtEZGbxlYNbuBfk3AIfbUcNWXcmWfTURNOXFHz9mOisXzNiOWMUFZEVZshFir7Ma6oyubFfbsGKy6GzCz7Dj8HczSK1YFwkuulGl98PHM82jwh6?width=766&height=597&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mvJJb8yak9M16YkA8ik2v_ApST63IGKkd_Js38tkIlupxBzB-nF2Dp-B1ZQ6jA9HNLaKzZoxHPLU8ktQLiACC6A3lIX1BZLIs_poldsaV6aDqPb1lsuYB9Q-o-I39gEUbw3lPMCAG_xW78CADSUSlSXLCYRwsPMpMzJ-dzAXKOAMMRWMw4NWVm41jQ0-7NpDp?width=767&height=599&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mP4WVP2FwzaMiv5DIk49luxQ6T127wzRX9xvUj_i__fPw9q0LRrnfpqfzRKzY65Ee7SgZqQi1K4_24Mwez8OsTvFJW3Bzqg_fBnYH4PqCEJsfICCoRVM1Ky90ztbFG-nFZHmh8FtbfjSGecNJl12KXSNV3vtUGspOBExNzqjmf0DijllxI9qfiHM9Uzm4JqzX?width=767&height=598&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mcF5s9aDumubbx2eXbxpj2jRJCKE1w7IRCcDZUNPMybmpMq6uxpc4CUpX_9BuSjgTjvxLpF3ttDhnHGQWrCyTYxJqukYkAnDgOv1w1S9oJy33CvAC5yZYjDacAJWDgBNSZRGoRup0gehtTyG-UYKbqMsaYpcZUWGmOFlqsfBi87INIQkvwhwKSDbgsqmuV6Ug?width=767&height=599&cropmode=none",
];

const zoomLevelCaptions = [
  "Map of Toronto zoomed out.",
  "Zooming in makes the 100 km/h highways visible in orange.",
  "Major roads are visible in yellow",
  "Zooming in some more.",
  "Minor roads are now visible in grey.",
  "Zooming in significantly shows buildings in purple and points of interest in yellow. A one-way street is indicated with an arrow.",
];

const exploreSources = [
  "https://sat02pap005files.storage.live.com/y4m8w3k2-0JucpIfzVrshwfZRzQUm_j6aK47JOdtXFbKIel5cmljqMKGXESarp6w-GiiFw8_y-YRaqYbndXNbURgsp3kJaE2v5Wgvu0SMWUT8exCmmtLOPFA1XHXl58bGe6Jsz56MWQMBDtvwIJNo-UaUDScYju4Ql8V-m3-fnmPCYf0jYZeUODmSHhcdZOSnyo?width=764&height=595&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mB8rbwZmCb_gaOA3wg8QDlmyQ3DAZXCBpHtAWCvR-UpROw2a3tAqvVggp0hDLSiEH2EjSkinjO8MN_RUZENNjyN3IO9Vmf-JPM8WHPOS1VgxwekZj0ydfB_j7hAVhJWRN8xI-WkEti8KXG-DVbZMUJYrZHhRLLs66kBd0LoW7tMOQbqD_DuIQR2qPfnCMW_J0?width=765&height=598&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mNOuQ_8J5cVAjesuBYvhMH6ftg7wMKNW8RsW7vxLkEuGdeVPZAeYuOB4tUAq3Qr8Od8ba2l3ddwZAxhQz372eGPiDbNtsmatw1nPtVxci3qPpSyQuoCR8Lm87Wtq8grksw7dygIlOq6S__Ju-dVFPMzLbNQj0tc8fEZ1NhTQ39bhjWxIqSXljcOcN_JAQOi0X?width=765&height=598&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4myiUoP9ghb9Y4sVkWkPyToHSV7JtU2_dddrOyTmnVy5tuwhTsr4BsTHyfYIy3H8J0S-WwhshmRMlXMOFbMBdvyuJjOHJFty1ZzV6RaqV3T6Wq9B_aSG4VqiZ9F_MPnHtvzjjs4L2hROu6zVXTnKZoCJunKf49dLxwlqcKssgqoa8ni50eyaWxufkyTuOKV66l?width=761&height=594&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mMKieUhmzD_Iuifc0E6QcSul3yorXgiRLSRcUmp2uO7jjSTeIqp_6JvUn_lxqAUV3eXPBv3MnoMwmQIEKyxiHWqdWbcKJvw1Hinw0aAJHK9kweeg_9Vw_Y7iPGorn0Zqk1vzS972LGhTf290KA1xiq4CA4zCRLR2G8yBh8ZZqEPMpYJNeVjZxAiNULi5ikrFQ?width=766&height=598&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m9h3Lz0NWNCHJL86IbKFr5vfc9kf5FebCZIgQqrm5uc3pPSXTiqQCkq7F8ojzRhXgsgL5URwZtPoG3rEq2MhEFZDlRxymxdn0EC7TMuYEGg8_GYkk9OwvJzrmmtthXBCtMct4i76zwohY7CgFC5Y3BzIbHMJLTz-NF_CwxFyKMA4OJHA7gyuJkaYxp51mEXs3?width=763&height=595&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mmZfXX4lz2N1oMmWVfQKVrZ8B2E6Bp-yhAHcCKCPnJw9wKgrmH7LNkz_swPBmKluW3JWpp2Q0uDsga8LtIZPbzMamHUnsu6AFHw80oyCFNi2x1m2VZ-XTP_TZPqXiRnOeE3nFoB8kTUTmgEk8XyOMYzAvrWWLemz6RjrynUes3aDCitQNrT_9yPt0vNxSfWSi?width=765&height=595&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m416ZX0KP9RcpfFFxGJl62AxhXB-gNjYpX9iBHCWQEVYb1SE33vaVdv2x0p6PD12ZEVwstt530FNkNUpw_PvTq_huJ2Ka4hCyUhYpAgDDiY8w_v6spgkG2p4Mdcd8HSrYg61G_SKTjzmqidXfC6E4o-e4fMD-AB43zDPZQFFstlUfg3IQpeBlMsnU_jf5lut9?width=762&height=594&cropmode=none",
];

const pathfindingSources = [
  "https://sat02pap005files.storage.live.com/y4mntr0o6nf6_RSvcX82iYB22cvxvL2D-J0JLS6RBQK0-QIX06VVVOuDjDYdyk9KSK5LabvHgK_apDd-Wxyimj3PlPXF1KzjXmQnUxItCWMpuD8YvObWCC4vc3hKKjZ24kaJKUhC7BReeOMTmexJviE4hM0oS6tuQEM9awpR0elqpYqyQWi6tB8hLZXVaRweQ6e?width=766&height=596&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m5x3a9IrEvZOoe834TKqGsyLtLnGDxOsrQXtHUkX0ndjvqvnxrJB91ys7hHMJXuXwRmngUEN7-xJTQk0-S1abKEqkIclgVSr_fbm43DqZywso-oeYt6ROcExzFgqPPqvqgtn-OcgqCOw54XpCvj9GuSgWNADKtowpA7xP6O3i8aeQ6Ce2oHVP-FVF1rRSw3Uv?width=767&height=596&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4meVFjIrkgqM5fnZY2RrOIm-1GhyfPeA4A2eViTNV_o2cWlCB_Al7xxDPp-qiVBFkQ2nCTIBoA_vZlEyVMs8_fSwLI1O3LTKlTnjiInt0D6iIqkEy6biT-Cn9ngwuFA3k1MRRt7uwW_HBbP810Xnn5bbVxiCUyQJU9J0Cx5Ptb35YPR043TSisK6h7DgQjNOJa?width=767&height=598&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mgVBgwNcH5lWmNik2YqaPNVahLoWS8_RAs4NJWUBT_obzJCLzrQFhCJ7CrJeuCMdjUWUPas8WvlNZSiudlrka1LUdwJlAX0Rbc2XHSr4JgFWFzgyAX4C5z7M1pcyjNTh2W2xjfHpIBXkQUCGR9xVf2PH2TTwGVG1Awwcbp9JWAze0Kf0nTBi6puJYDnuMUFpc?width=762&height=597&cropmode=none",
];

function CityMap() {
  return (
    <>
      <h2 id="citymap">City Map (2019)</h2>
      <p>
        This is a project completed in the second year of university for the
        Communication and Design course with two other students. It is written
        entirely in C++ on a Linux system with Git, but the code cannot be
        released online due to copyright by the univeristy. Most of the code was
        written by me. Using map data from a bin file, we displayed graphics for
        features of the map such as green spaces, buildings, streets and
        intersections. Intersections and features can be searched using the text
        field at the top of the window. Paths can be found between
        intersections. In addition to the map graphics, we also developed an
        algorithm to find the best sequence of paths for a delivery truck to
        pick up and drop off packages. This is similar to the famous traveling
        salesman problem, but with extra restrictions such as truck capacity.
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
      <Gallery sources={exploreSources} />
      <h3 id="pathfinding">Pathfinding</h3>
      <p>
        Dijkstra's algorithm is used to find the best path between two
        intersections in the city. Step by step driving directions are provided.
        The path can be chosen by typing the names of the two intersections or
        by clicking the two intersections on the map. The pathfinding takes left
        turns and right turns into account and avoids turning when possible.
      </p>
      <Gallery sources={pathfindingSources} />
      <h3 id="videodemo">Video Demonstration</h3>
      <iframe
        src="https://drive.google.com/file/d/15YlgMxjCh6RNn0AKn5czEt2JVZX0_1Zc/preview"
        title="videodemo"
        width="800"
        height="608"
        allow="autoplay"
        allowfullscreen="true"
      ></iframe>
      <div>
        A demonstration without commentary going through each feature of the map
        app.
      </div>
      <h3 id="traveling">Traveling Courier</h3>
      <p>
        This algorithm finds a good sequence for a delivery truck to to pick up
        and drop off a series of packages located anywhere in the city. It is
        subjected to a finite truck capacity and 45 second computational time.
        The initial process is like Dijkstra, but searches the entire map. This
        process has n log n complexity and uses multi-threading. After it is
        done, a path from a delivery location to anywhere on the map can be
        found very quickly with the O(n) traceback routine. This is important
        when the entire courier path is being constructed and rearranged. The
        second process is Multi-Start. The first phase starts at every depot and
        travels to the next best delivery location based on travel time. The
        best path from this phase is passed to the second phase, which does the
        same thing, except that it has a 10% chance of going to the second best
        location instead of the best. There is potential to find a shorter
        overall path this way, even if one segment is longer. It repeats this
        ten thousand times. The third process is random 3-opt. Four consecutive
        delivery instructions are randomly shuffled. This has the effect of
        disconnecting three paths and reconnecting in a different way. It can
        help undo paths that cross over. This repeats until the 45 second limit
        is over. This algorithm has been tested with orders of more than 200
        deliveries at a time. The results of the contest are{" "}
        <a
          href="https://ug251.eecg.utoronto.ca/ece297s/contest_2019/final.html"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        . My group was an-345, rank 16.
      </p>
      <img
        alt="travelingcourier"
        src="https://sat02pap005files.storage.live.com/y4mZZ0XU5cIeTHZN7Q3YjRnuT-Qm2QtQEkp8lIi5F7rnCTkH-So82FwPTIULGzuzTbqqz41OHxMF30Wp1vNRh7i0Pz9ZnAL4mzQKtWgHjaauZcgHeqBr_RdEapI11WgTzfRWHXFyTStXV9PFhB3sVlDy8uEii4ZW4XQMcxoTUVRv3ctMSMVl11qr3jVQ9AkihwZ?width=1321&height=384&cropmode=none"
      />
    </>
  );
}

export default CityMap;
