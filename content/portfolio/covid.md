---
title: "Creating a COVID-19 Dashboard using Google Data Studio"
date: 2020-08-28T15:52:09+02:00
draft: false
author: "Ching-Chu Hsu"
keywords:
    - "study"
summary: "The COVID-19 dataset is updated everyday. I made a Google Data Studio report to present the facts and trends of it. "
thumbnail: "images/covidheader.jpg"
disqus: false
alt: "hero alt"
---

{{< info-card >}}
### Findings

Here are some facts:

* **South Africa, Mexico, Colombia, and Chile** are among the top 10 countries which have most cases,  however, there's relatively little international news coverage about them (based on Google search result).

* **Yemen** has **more than double the case fatality rate of COVID-19 than Italy**, but it doesn't receive much international attention either.

* European countries occupy **6 of 10 places in countries with the highest case fatality rate**.

* North America has most cases by continent due to the US and Mexico, Asia is on the second place due to India, Russia, and Iran.
{{</ info-card >}}

The year 2020 has been an unusual year for most of us regardless of where we live since COVID-19 has spread across the globe. 

Masks have become must-have for our daily lives; Concerts and parties have been wiped out from the plans. The commute distance has been reduced from bed to desk at home, while the physical distance between people has been enlarged to 1,5-meter minimum. 

## Some Nice Datasets...

The situation of COVID-19 has been changing every day since its outbreak in Wuhan, and it also accumulates a considerable amount of data. 

Many websites are providing up-to-date dataset, you could find the dataset I use [here](https://ourworldindata.org/coronavirus-source-data "Our World in Data"), which already includes some most important dimensions such as total cases, total deaths, new cases, population, etc. 

I also gained my ideas regards what to present on the dashboard from the [COVID-19 interactive map](https://coronavirus.jhu.edu/map.html "Johns Hopkins University") published by Johns Hopkins University, which offers a very cool overview. 

## My COVID-19 Dashboard 

This is my finished report with data from [Our World in Data](https://ourworldindata.org/coronavirus-source-data "Our World in Data"). Countries with the most cases and deaths are shown here, with scorecards represent global numbers to emphasize. 

{{< google-data-studio >}}

## Ideas of Theme Customization 

After roughly finishing the layout of the report, I started to about think what colors I should use for my report to let it look more unique. 

Inspired by the [Johns Hopkins University report](https://coronavirus.jhu.edu/map.html "COVID-19 interactive map"), I also wanted to have a dark color for the background. 

Then I browsed through some templates on [Data Studio Report Gallery](https://datastudio.google.com/gallery "Data Studio Report Gallery") and [Pinterest](https://www.pinterest.de/search/pins/?q=data%20studio%20report%20templates&rs=typed&term_meta[]=data%7Ctyped&term_meta[]=studio%7Ctyped&term_meta[]=report%7Ctyped&term_meta[]=templates%7Ctypedy "Data Studio Report Templates"), and finally decided dark grey, white, purple, and green as the main colors for my report. Since purple and green are high contrast colors, and white stands out from the dark grey background. 

{{< responsive-image path="images/color_palette.png" >}}

This combination of color makes the tables and data easy to read. I also really like [Coolors](https://coolors.co/ "Coolors"), a free and fun to use color schemes generator, when it comes to deciding colors for visualization.

### To Wrap up

This is the first time I created a report using Google Data Studio, and thanks to the easy to get and complete COVID-19 datasets, the process was more painless than I expected. The abundant information of COVID-19 also gave me some ideas of how I wanted my report to look like before I even started making it. 

The dataset is very useful, though for some variables there's no data from all the countries (which is common in real-world), I didn't need those variables for my report.

Although this report might only contain some relatively basic functions of Data Studio, I found it easy to read and clear. I also learned a few more things about the facts and trends of COVID-19.