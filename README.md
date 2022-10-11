# Touch-Grass-App

## Description
Touch Grass App allows users to search for national parks by state. When searched, the user will see a list of the state parks in their specified state along with the website link and location on Google Maps. 

This 3-day project introduced 4 students to the barriers and challenges that collaborative work brings. This was also the first time the students used a third-party API's in an assignment. 
     
Touch Grass App is designed by Paulo Condori Pinedo, Ashley Thompson, Vincent Yang, and Jules Franklin.

[Touch Grass Website](https://ashley1thompson.github.io/touch-grass-app-national-park-finder/)
     
![website](./assets/images/pin-drop.png)

## Table of Content
* [Summary](#summary)
* [Application Development](#application-development)
* [Questions](#questions)


## SUMMARY

### Day 1
* UX design first draft completed
* Group changed scope to National Park Finder
* We focused on making a website that would show the parks in the State the user searched for
* Established goal was to use Google Maps API on our website

### Day 2
* Worked on finding a way to sort the data from the fetch request

### Day 3
* Finalized application functionality and website design



## Application Development

Group members proposed ideas for the project. The initial main ideas for the project were:
* Providing location and information for people interested in hiking
* Providing location and information for people interested in going to rivers
* Providing location and information for people interested in going to parks in Georgia

Final Decision on proposed ideas:
The ideas for hiking and rivers were deemed too specific to finish in the limited time frame. The reason why it was deemed as such was because team members searched the web to look for free and accessible API to use but unfortunately the API's that were found required extensive work to fetch and pull that specific data. API's explored:

* [National River Recreational Database](https://www.esri.com/arcgis-blog/products/national-government/national-government/national-rivers-project-a-recreational-rivers-geospatial-map-database/)
* [Rapid API](https://rapidapi.com/search/outdoor)

The final decision was to pursue the Parks in Georgia idea due to the fact there were a decent amount of API's that we could use to fetch and pull the information we wanted. 

The group was split into two groups. One focused on the UX/UI design and another on the API fetch code. 

### API

Group looked through API's and ran into issues with accessibility.
* [Recreation.gov](https://ridb.recreation.gov/docs)
* [Prescription Trails](https://prescriptiontrails.org/api/)
* [TrailForks](https://www.trailforks.com/about/api/#!/trails/getTrails_get_0)

They worked on it for a couple of hours before reaching the conclusion that a change of the project goal would be beneficial to the group as the issues were too obtuse to solve in the allowed time frame.

We decided to now pursue a national park finder.

Worked on NPS API with the primary goal to access the information we need to show on our HTML. All code was written on separate branches before modifying the main branch. Time was spent on resolving the reason fetch issues and finding a way to sort data from user input.

Fixed Google Maps issues and added map functionality.

### UX/UI

The first draft of the HTML/CSS skeleton was produced. We used BootStrap for our HTML skeleton. Most of the customization was complete with allotted space for elements to be implemented.

Created Hero image on canvas and made it mobile responsive. 

Slight changes on CSS as it caused issues with display fetch return data. The primary example was with the use of ```  * ``` in CSS. If you applied a background-color in CSS in the ```  * ``` section, it would cover the data display on your webpage.

## Questions

If you have any questions, contact me at j.franks725@gmail.com. Visit my GitHub page at [jfranklin12](https://github.com/jfranklin12/) to see my other projects.