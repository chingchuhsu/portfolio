---
title: "Visualizing Space-related Data with ArcGIS"
date: 2020-06-12T15:20:40+02:00
draft: false
author: "Ching-Chu Hsu"
keywords:
    - "Word"
summary: "blogpost"
thumbnail: "images/sanfran_street.jpg"
disqus: false
alt: "hero alt"
---



## What's ArcGIS?

At the beginning of my Social Sciences study, I took an software course to learn how to manage space-related data and visualize it in ArcGIS. ArcGIS is a **mapping and analytics platform**, it allows users to create many kinds of maps with their own data, then analyzes and gains knowledge from it. You can find more information of it [here](https://www.esri.com/en-us/arcgis/about-arcgis/overview "ArcGIS").


{{< info-card >}}
## Goal 

The goal of this project is to visualize:


* The distribution of children in proverty under 5 years old in San Francisco 
* The amount of Head Start Centers within certain distances from them

{{</ info-card >}}




## The Map I created with ArcGIS 



{{< responsive-image path="images/sanfran_endmap.jpg" >}}



## The Story behind


A huge advantage of creating a map is that it helps us understand our data spatially. And thus, it's easier to discover the hidden relationship in the data and makes decision.

When it comes to deciding the location a store, it's important to know the demography and the accessbility. Same as for the government, when it wants to choose the site of their facilities to best reach people in need.

Maps will be extremely helpful here.


{{< responsive-image path="images/sanfran_city.jpg" >}}


This background of this project is the [**Head Start Program**](
https://en.wikipedia.org/wiki/Head_Start_(program) "Head Start Program") launched in 1965 by the US Department of Health and Human Services, in helping low-income children and families with early childhood education, health, nutrition, and parent involvent services. 

It operates independently from local schools and is designed to enhance children's physical and emotional well-being and stable family relationships.

With the help of a map, I wanted to know if the Head Start Centers in San Francisco actually cover the area, where children in proverty habit. I also want to know if these Head Start Centers are easy to acess on foot or with public transport. 



## Data Source

The data source of this project is from Ayse Pamuk's book (2006) [Mapping global cities: GIS methods in urban analysis](
https://agris.fao.org/agris-search/search.do?recordID=SO2007100040 "Mapping Global Cities: GIS methods in Urban analysis").





## Process

### 1. Find out the Distribution of Children in Proverty in the City
I first want to find out how many children under 5 years live in proverty in San Francisco and how the distribution looks like. From the attribute table I saw there are 3949 children under 5 years living in proverty in  San Francisco, however, the distrbution of them in each census block group is fairly uneven. It therefore will be helpful to visualize it on the map. I used nature breaks to divide them into 5 groups and visualize them with gradient colours. We could see that the situation in each census block group differs a lot.

{{< responsive-image path="images/sanfran_1.png" >}}

### 2. The Accessbility to Head Start Centers on Foot
The next step is to examine the covering of Head Start Centers on children in proverty under 5 years old. I created a 0.25 mile and 0.5 mile buffer layer around each Head Center, which aims to show the walking distance within it. For a better visualization, I made the layers transparent and used a contrast colour (green) here.

{{< responsive-image path="images/sanfran_2.png" >}}

### 2. The Accessbility to Head Start Centers by Public Transport
Going to Head Start Centers on foot may be relatively difficult in a big city like San Francisco. However, for some families who don't own a car, public transport is then crucial for their accessbility. I thus added in the route of subway in San Francisco, which is called Bay Area Rapid Transit (BART). With seeing the route and the location of each station, it will be simple to see which Head Start Centers are further from the BART stations and which are relatively diffcult to arrive with public transport.

{{< responsive-image path="images/sanfran_3.png" >}}

Now, we could see a map with the distribution of children living in proverty under 5 years old, the location of Head Start Centers and BART stations, and the accessbility to Head Start Centers on foot and by publc transport. With buffer layers being contrast colour green (from orange), we could still read the information under them. 

## Conclusion

