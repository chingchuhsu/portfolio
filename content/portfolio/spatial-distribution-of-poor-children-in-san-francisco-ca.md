---
title: "Accessbility to Head Start Centers and Spatial Distribution of Poor Children in San Francisco"
date: 2020-06-12T15:20:40+02:00
draft: false
author: "Ching-Chu Hsu"
keywords:
    - "Word"
summary: "blogpost"
thumbnail: "images/thumbnail.png"
disqus: false
alt: "hero alt"
---

## ArcGIS?

At the beginning of my Social Sciences study, I took an software course to learn how to manage space-related data and visualize it in ArcGIS. ArcGIS is a geographic information system (GIS)

## Background ...

https://en.wikipedia.org/wiki/Head_Start_(program)

Head Start is a programm launched in 1965 by the US Department of Health and Human Services, in helping low-income children and families with early childhood education, health, nutrition, and parent involvent services. It operates independently from local schools and is designed to enhance children's physical and emotional well-being and stable family relationships.

## Goal

The goal is to visualize the distribution of children in proverty under 5 years old in San Francisco and how many Head Start Centers are within certain distances from them.


## Data

Pamuk, A. (2006). Mapping global cities: GIS methods in urban analysis. ESRI press.

## Process

I first want to find out how many children under 5 years live in proverty in San Francisco and how the distribution looks like. From the attribute table I saw there are 3949 children under 5 years living in proverty in  San Francisco, however, the distrbution of them in each census block group is fairly uneven. It therefore will be helpful to visualize it on the map. I used nature breaks to divide them into 5 groups and visualize them with gradient colours. We could see that the situation in each census block group differs a lot.

The next step is to examine the covering of Head Start Centers on children in proverty under 5 years old. I created a 0.25 mile and 0.5 mile buffer layer around each Head Center, which aims to show the walking distance within it. For a better visualization, I made the layers transparent and used a contrast colour (green) here.

Going to Head Start Centers on foot may be relatively difficult in a big city like San Francisco. However, for some families who don't own a car, public transport is then crucial for their accessbility. I thus added in the route of subway in San Francisco, which is called Bay Area Rapid Transit (BART). With seeing the route and the location of each station, it will be simple to see which Head Start Centers are further from the BART stations and which are relatively diffcult to arrive with public transport.

Now, we could see a map with the distribution of children living in proverty under 5 years old, the location of Head Start Centers and BART stations, and the accessbility to Head Start Centers on foot and by publc transport. With buffer layers being contrast colour green (from orange), we could still read the information under them. 

