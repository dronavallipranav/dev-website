---
title: Building a GameBoy Emulator
author: Pranav Dronavalli
image: /trainerRed.jpg
date: July 2023
slug: gameboy-emulator
description: Making an emulator was an idea I had in the back of my head for a while. I had used emulators in the past to play my favorite pokemon games on my phone. I had also recently taken a course on memory management
---

# Building a GameBoy Emulator

## July 13, 2023

### The Start of the Journey

Making an emulator was an idea I had in the back of my head for a while. I had used emulators in the past to play my favorite pokemon games on my phone. I had also recently taken a course on memory management which I enjoyed, and so I figured I'd try to apply the skills I learned to scratch the itch while I wait to take OS. I had always assumed that emulator development would be an easy undertaking (no idea what gave me that assumption). After a little research, I realized that the project would be much larger than originally anticipated. It would require me to replicate the entirety of the GameBoy's unique hardware which is poorly documented due to the time period when it was created. But others have successfully created GameBoy emulators in the past and there is a dedicated emulator dev community on Reddit. With all that, I decided that this would be something that I would enjoy as well as a great learning experience for me, so I started development on my GameBoy Emulator with the eventual goal of emulating Pokemon Red.

## July 14, 2023

### Time to Develop!

Before starting development on my GameBoy Emulator, I had decided to try emulating the simpler Intel 8080 CPU. After some development and once I felt like I understood the process of developing an Emulator, I left to start work on my GameBoy. The most daunting task I was faced with at the start was the sheer amount of instructions that would need to be implemented for full emulation. The Emulator101 guide I looked at suggested a giant switch case that handles every instruction. I knew this approach wouldn't cut it for the GameBoy's massive instruction set which also includes an extended 256 instructions.

## July 15, 2023

### Making Design Choices

It was clear to me that I would need a modular and reusable codebase, something commonly preached in the software world, but something that very few projects will truly force you to implement. I was able to design helper methods that generalized operations across the emulator by utilizing function pointers, which proved particularly useful for being able to read/write to CPU's state struct registers. This greatly generalized the load functions and any instruction that needs to use a register. I had also decided to use CMake to help automate the build process as my number of header and source files grew.

## July 16, 2023

### Implementing Instructions

With my project build and design set and the creation of my CPU state struct, I was finally ready to began implementing instructions. I knew this would be the meat of the project, and with my internship, I knew it was only feasible to finish a few sets of instructions a day. Regardless, I hunkered down and started incremental daily work.

## July 17, 2023

### Adopting a Test-Driven Approach

I knew as the codebase grew and the architecture grew more complex it would be increasingly hard to catch bugs in development. So I made sure to add unit tests as I implemented instructions to ensure that my code was working as expected. This helped guarantee my emulator's code quality and adopting this incremental develop then test mindset was something that projects in the past never really forced me to do.

## August 3, 2023

### The Dreaded MMU

The pivotal moment arrived with the introduction of the Memory Management Unit (MMU). Transitioning all read/write operations via the MMU instead of direct CPU interactions was a significant shift, and required a significant refactoring of the code and tests. This also highlighted some unseen bugs as I started failing some of my movement tests. It turns out I wasn't properly incrementing and pushing onto the stack, but my test didn't properly test the case and gave a false positive. The MMU is not complete yet, and I have simply partitioned the memory into the GameBoy's different address spaces and routed all read/write to occur within its respective address space. I still need to implement all the various permissions, and commands that occur when writing to a certain address in memory. Once those cases are done, then I can call my MMU complete.

## August 13, 2023

### FINISHED INSTRUCTIONS!

Today, I finally finished the rest of my instructions. I also created an execution loop as well as an opcode table to route the instructions to their respective handler. With that, I can began to test my instructions. I have decided to use Blargg's tests for my GameBoy emulator which are widely regarded as one of the best ways to test your CPU, display, audio. I am sure that running the Blargg tests will reveal bugs in my CPU and so development on the CPU isn't done yet. But I am excited to move on to the more exciting portions of the GameBoy's hardware and see how my project comes together.
