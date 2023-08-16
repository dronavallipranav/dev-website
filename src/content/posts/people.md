---
title: People Counter
author: Pranav Dronavalli
image: ppl.png
date: March 2023
slug: people-counter
description: At the Undergrad Project Lab (UPL), we were faced with a common issue - students wanted to access the lab outside of set office hours, but they could only do so when a coordinator was present. 
---
# Creating a People Counter for the UPL with YOLOv7 and Raspberry Pi

At the Undergrad Project Lab (UPL), we were faced with a common issue: students wanted to access the lab outside of set office hours, but they could only do so when a coordinator was present. No one outside the room had a way to know if a coordinator was inside. A problem that I faced as a member of the UPL. Walking fifteen minutes to go to the UPL only to find out no one was in there was incredibly frustrating. This uncertainty led to reduced lab participation (I know it did for me) and hindered the purpose of UPL which is meant to provide a space for students to collabrate, innovate, or just socialize, and so I turned to technology to see if I could find a solution.

## **The Solution: A People Counter**

### **1. Choosing the Tech Stack**

I decided to use the **YOLOv7** model And to make the solution budget-friendly and easy to deploy, I chose the **Raspberry Pi** as the hardware as not only was it incredibly portable but also had low upkeep costs as the counter would need to run constantly.

### **2. Implementation**

The Raspberry Pi was set up in the lab, and with the help of a basic usb camera module, it started feeding live video to the **YOLOv7** model.  To make the solution even more accessible, I integrated the counter with the UPL's official Discord server using Discord's python API wrapper. With this integration, members could not only check the server to see if the lab was open, but also provide the headcount which proved useful to members and unknowingly useful to the organization as we now how had a more concrete way to track UPL participation.

### **3. Outcome**

It's hard to gauge how much participation was increased but I have had members thank me for the project, so it is safe to say it has helped at least some people. The solution was incredibly simple as well as easy to implement. The problem wasn't incredibly important, and yet it was one of the more satisfying projects I have undertaken. I am now more enthusiastic about the possibility of working on similar projects in the future to enhance accessibility for everyone.

![My Roommate!](/counter.jpeg)