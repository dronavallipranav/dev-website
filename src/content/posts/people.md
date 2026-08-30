---
title: People Counter
author: Pranav Dronavalli
image: /ppl.png
date: March 2023
slug: people-counter
description: At the Undergrad Project Lab (UPL), we were faced with a common issue - students wanted to access the lab outside of set office hours, but they could only do so when a coordinator was present. 
---
# Creating a People Counter for the UPL with YOLOv7 and Raspberry Pi

At the Undergrad Project Lab (UPL), we were faced with a common issue: students wanted to access the lab outside of set office hours, but they could only do so when a coordinator was present. No one outside the room had a way to know if a coordinator was inside. A problem that I faced as a member of the UPL. Walking fifteen minutes to go to the UPL only to find out no one was in there was incredibly frustrating. This uncertainty led to reduced lab participation (I know it did for me) and hindered the purpose of UPL.

### Why not a door sensor

It is not fun and I like to over-engineer. And having counts seemed like a nice feature for members and for us as coordinators to have.

I decided to use the **YOLOv7** model And to make the solution budget-friendly and easy to deploy, I chose the **Raspberry Pi** as the hardware as not only was it incredibly portable but also had low upkeep costs as the counter would need to run constantly.

### One frame

The Raspberry Pi was set up in the lab, and with the help of a basic usb camera module. The pi sits inactive and through a discord command captures a single frame and ouputs a number of how many people are currently in the lab. With this integration, members could not only check the server to see if the lab was open, but also provide the headcount which proved useful to members and to our project lab as we now how had a more concrete way to track UPL participation.

Despite it's simplicity, It was one of the more satisfying projects I have undertaken. It's very fulfulling having members tell me how much they like the feature.

![My Roommate!](/counter.jpeg)