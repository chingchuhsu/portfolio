---
title: "Creating a COVID-19 Dashboard using Google Data Studio"
date: 2020-08-28T15:52:09+02:00
draft: false
author: "Author"
keywords:
    - "Word"
summary: "blogpost"
thumbnail: "thumbnail"
disqus: false
alt: "hero alt"
---

{{< responsive-image path="images/covidheader.jpg" >}}

The year 2020 has been an unusal year for most of us regardless of where we live, since Coronavirus/ COVID-19 has spread across the globe. 

Masks have become must have for our daily lives; Concerts and parties have been wiped out from the plans. The commute distance has been reduced to from bed to desk at home, while the physical distance between people has been enlarged to 1,5 meter minimum. 

## Some Nice Datasets...

The situation of COVID-19 has been changing everyday since its outbreak in Wuhan, and it also accumulates considerable amount of data. 

There are many institutions and websites providing up-to-date dataset, you could find the dataset I use [here](https://ourworldindata.org/coronavirus-source-data "Our World in Data"), which already includes some most important dimensions. 

I also gained my ideas regards what to present on the dashboard from the [COVID-19 interactive map](https://coronavirus.jhu.edu/map.html "Johns Hopkins University") published by Johns Hopkins University, which offers a very cool overview.

## My COVID-19 Dashboard 

This is my finished report. Countries with the most cases and deaths are shown here, with scorecards represent global numbers to emphasize. Cases by continent, as well as daily new cases and deaths are presented with line charts; Case fatality rate with a bar chart.

{{< google-data-studio >}}



## Findings

From this report, I noticed some surprising facts:

- **South Africa, Mexico, Colombia, and Chile** are among the top 10 countries which have most cases,  however, there's relatively little international news coverage about them (based on Google search result).

- **Yemen** has more than double case fatality rate of COVID-19 than Italy, but it doesn't receive much international attention either.

- North America has most cases by continent due to the US and Mexico, Asia is on the second place due to India, Russia and Iran.


## Ideas of Theme Customization 

{{< responsive-image path="images/yellow_metal.jpg" >}}


After roughly finishing the layout of the report, I started to think what colors I should use for my report to let it look more unique. 

Inspired by the [Johns Hopkins University report](https://coronavirus.jhu.edu/map.html "COVID-19 interactive map"), I also wanted to have a dark colour for the background. Then I browsed through some templates on [Data Studio Report Gallery](https://datastudio.google.com/gallery "Data Studio Report Gallery") and [Pinterest](https://www.pinterest.de/search/pins/?q=data%20studio%20report%20templates&rs=typed&term_meta[]=data%7Ctyped&term_meta[]=studio%7Ctyped&term_meta[]=report%7Ctyped&term_meta[]=templates%7Ctypedy "Data Studio Report Templates"), and finally decided dark grey, white, purple, and green as main colours for my report. 


{{< responsive-image path="images/color_palette.png" >}}


Since purple and green are high contrast colours, and white stands out from the dark grey background. This combination of colour makes the tables and data easy to read. I also really like [Coolors](https://coolors.co/ "Coolors"), a free and fun to use color schemes generator, when it comes to decide colours for visualization.




