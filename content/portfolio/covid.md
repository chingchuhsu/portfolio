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

The year 2020 has been an unusal year for most of us regardless of where we live, since Coronavirus/ COVID-19 has spread across the globe. Masks have become must have for our daily lives; Concerts and parties have been wiped out from the plans. The commute distance has been reduced to from bed to desk at home, while the physical distance between people has been enlarged to 1,5 meter minimum. 

The situation of COVID-19 has been changing everyday since its outbreak in Wuhan, and it also accumulates considerable amount of data. There are many institutions and websites providing up-to-date dataset, you could find the dataset I use [here](https://ourworldindata.org/coronavirus-source-data "Our World in Data"), which already includes some most important dimensions. I also gained my ideas regards what to present on the dashboard from the [COVID-19 interactive map](https://coronavirus.jhu.edu/map.html "Johns Hopkins University") published by Johns Hopkins University, which offers a very cool overview.

Google Data Studio enables Google Sheet as a data source for our reports, which makes it pretty easy to import the data into it. **For this report, I want to find out how the COVID-19 case and deaths are distributed by countries and continents, as well as their trends since December 2019.**

I firstly created two tables: Cases by Country/ Region and Deathes by Country/Region and let them sort by descending, so that we could see the countries with the most cases and deaths on the first page. I then put 2 scorecards next to each of them to showcase global cases, global deaths, new cases, and new deaths. Scorecards are helpful to catch the readers' attention, but be careful of using them since you don't want your reports to be messy.

Now we know the cases and deaths in each country. But how about by continent? And how does it look like on a map? A line chart and a geo map would be great here. And guess what, Google Data Studio supports both of them! With continent, cases, and date variables, it can be seen that the trends of COVID-19 differ in every continent. The geo map, on the other hand, shows the cases a country has when the mouse hovers on the country. 



{{< google-data-studio >}}