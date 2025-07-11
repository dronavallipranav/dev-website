---
title: Migrating My Portfolio to AWS
author: Pranav Dronavalli
image: /aws.jpg
date: September 2023
slug: migration-to-aws
description: What inspired me to migrate from Netlify to AWS. The challenges I faced including a bug with a seemingly unsupported library in AWS Lambda.
---

# Migrating My Portfolio from Netlify to AWS

## The Problem

The need for migration all started when I was building a chatbot about myself using Netlify's serverless functions. The backend worked fine locally, but when I tried to deploy my site, I kept getting an error on Netlify’s build process: "maximum call stack exceeded". After doing some research online, I figured out it was either a recursive element in my code or possibly an issue with a dependency, maybe some circular dependency issue.

I created a ticket on Neltify Support to ask for help with the bug. While they acknowledged the issue and stated their devs were working on it, a solution wasn’t immediately available. I knew Netlify's serverless functions were built on AWS Lambda, and so I decided that this might be a good time to migrate to AWS. I thought I'd be able to fix this problem myself and get more detailed error logs on the issue I was facing.

## AWS Lambda and hnswlib-node

My backend was having trouble with Lambda, even though I had the hnswlib-node package installed and uploaded, my code was having trouble importing the package in the Lambda environment. After doing research on the topic, I found some people having common issues on github and the issues weren't yet closed meaning that there wasn't one verified solution to the problem. It did seem like Amazon was aware of this issue and they said they aim to add support on Lambda to eventually fix the problems. 

My theory after learning a little more is that the the natively compiled hnswlib-node binary was not working seamlessly with AWS Lambda, despite using the same X86 ISA and the same Node runtime. I did manage to find a workaround to the issue through containzering my backend on ECR and using Lambda to execute the image. 


## Frontend Hosting and Domain Complications

After getting my backend situated, I started the process to transfer my domain ownership from Netlify to name.com. I wanted to use Route 53 to route my domain name, but it turns out Route 53 does not support .dev domains, and so I created a hosted zone on Route 53 and tweaked the DNS settings on name.com. Once done, Route 53 pointed my domains to my CloudFront distribution I created which served my S3 bucket.

## Integrating Frontend and Backend

I used AWS API Gateway to act as a trigger for my Lambda function, providing an endpoint for my frontend. It was relatively simple but introduced some CORS issues on API Gateway (which I managed to resolve relatively quickly) to CORS issues with preflight request complications my Lambda and CloudFront.

After doing more research, I found that CloudFront caching settings was stripping my CORS headers, as well as the Lambda function timing out, were the real problems behind my CORS errors. Disabling caching seemed to fix the problem, but this is pretty inefficent and I had to whitelist the CORS headers. Tweaking the Lambda timeout to give ample time for the llm was the final fix for the chatbot and my website. Seeing PranavBot functional was incredibly satisfying. 

After that, I integrated a GitHub Action to automatically build and deploy my content to the S3 bucketand my migration was finally complete.
