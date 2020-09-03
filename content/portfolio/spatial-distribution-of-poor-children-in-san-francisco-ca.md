---
title: "Visualizing Space-related Data with ArcGIS"
date: 2020-06-12T15:20:40+02:00
draft: false
author: "Ching-Chu Hsu"
keywords:
    - "study"
summary: "Maps are extremely helpful for presenting space-related data. I created a map with ArcGIS to examine the real-world data in San Fransisco."
thumbnail: "images/sanfran_street.jpg"
disqus: false
alt: "hero alt"
---

## What's ArcGIS?

At the beginning of my Social Sciences study, I took a software course to learn how to manage space-related data and visualize it in ArcGIS. ArcGIS is a **mapping and analytics platform**, it allows users to create many kinds of maps with their data, then analyzes and gains knowledge from it. You can find more information about it [here](https://www.esri.com/en-us/arcgis/about-arcgis/overview "ArcGIS").

{{< info-card >}}
### Goal 

The goal of this project is to visualize:


* The distribution of children in poverty under 5 years old in San Francisco 
* The number of Head Start Centers within certain distances from them

and thus to examine if the location of Head Start Centers meets the need
{{</ info-card >}}

## The Map I created with ArcGIS 

{{< responsive-image path="images/sanfran_endmap.jpg" >}}

## The Story behind

A huge advantage of creating a map is that it helps us understand our data spatially. And thus, it's easier to discover the hidden relationship in the data and makes a decision.

When it comes to deciding the location of a store, it's important to know the demography and the accessibility. Same as for the government, when it wants to choose the site of their facilities to best reach people in need.

Maps will be extremely helpful here.

{{< responsive-image path="images/sanfran_city.jpg" >}}

This background of this project is the [**Head Start Program**](
https://en.wikipedia.org/wiki/Head_Start_(program) "Head Start Program") launched in 1965 by the US Department of Health and Human Services, in helping low-income children and families with early childhood education, health, nutrition, and parent involvement services. 

It operates independently from local schools and is designed to enhance children's physical and emotional well-being and stable family relationships.

{{< responsive-image path="images/sanfran_street2.jpg" >}}

Since this program aims at helping children in poverty, it will be optimal, if the facilities are close to where the children live, and even it's not, it should be easy to arrive with public transport.

With the help of a map, I thus wanted to know if the Head Start Centers in San Francisco **cover the area, where children in poverty habit**. I also want to know if these Head Start Centers are **easy to access on foot or with public transport**. By visualizing the spatial data I have, it should be possible to examine these features on a map.

## Data Source

The data source of this project is from Ayse Pamuk's book (2006): [Mapping global cities: GIS methods in urban analysis](
https://agris.fao.org/agris-search/search.do?recordID=SO2007100040 "Mapping Global Cities: GIS methods in Urban analysis").

## Steps within ArcGIS

### 1.The Distribution of Children under 5 in Poverty in the City
The [data source](
https://agris.fao.org/agris-search/search.do?recordID=SO2007100040 "Mapping Global Cities: GIS methods in Urban analysis") showed that there are 3949 children under 5 years old living in poverty in San Francisco. However, the distribution of them in each census block group is fairly uneven. 

{{< responsive-image path="images/sanfran_0.png" >}}

It therefore will be helpful to visualize it on the map. I used nature breaks to divide them into 5 groups and visualize them with gradient colors. We could see that the situation in each census block group differs a lot. 

The darker the color is, means that there are more children under 5 years living in poverty in that district.

{{< responsive-image path="images/sanfran_1.png" >}}

### 2. The Location of Head Start Centers and Accessibility to it on Foot

Secondly, I wanted to know where these Head Start Centers are located. I also wanted to know if it's within walking distance for the children in need.

I classified Head Start Centers into three classes based on the number of children in proportion. Then I created a 0.25 miles (≈ 402 meters) and 0.5 miles (≈ 804 meters) buffer layer around each Head Center, which aims to show the walking distance within it. 

For better visualization, I made the layers transparent in different degrees and used a contrast color (orange) here.

{{< responsive-image path="images/sanfran_2.png" >}}

### 3. The Accessibility to Head Start Centers by Public Transport

Going to Head Start Centers on foot may be relatively difficult in a big city like San Francisco. Therefore, for some families who don't own a car, public transport is then crucial for their accessibility. 

I thus added in the route of the subway in San Francisco, which is called Bay Area Rapid Transit (BART). With seeing the route and the location of each station, it will be clear to see which Head Start Centers are close to the BART stations and which are relatively difficult to arrive with public transport.

{{< responsive-image path="images/sanfran_3.png" >}}

Now, we could see a map with the distribution of children living in poverty under 5 years old, the location of Head Start Centers and BART stations, and the accessibility to Head Start Centers on foot and by public transport. With buffer layers contrasting color orange (from blue), we could still read the information under them. 

## Conclusion

From the map above, I noticed that most Head Start Centers are concentrated along the BART route and southeastern part of the city, which matches the area where children in poverty live. Being near the BART stations also makes the Head Start Centers easy to arrive. 

ArcGIS is a very helpful tool for this project since it's pretty good at visualizing space-related data. Although it takes some time for me to get used to the software and understand its abundant functions, I am happy with the outcome it provides.