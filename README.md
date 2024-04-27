# Invoriem

Welcome to Invoriem - a building developer consultant front End website built with React, Next.js, and Tailwind CSS.

## About this project

Invoriem is a platform designed to showcase construction projects, provide information about services, and engage with potential clients. This README will guide you through overview of the project structure and dependencies.

## Live website Invoriem-frontEnd

https://invoriem-front-end.vercel.app/

Git Hub - https://github.com/Brilliant-Developer1/Invoriem-frontEnd

## Tech Stack

- Next.js
- React
- React Countup
- React Scroll Trigger
- React Slick
- Framer Motion
- Slick Carousel
- Classnames
- [jsonsilo API](https://jsonsilo.com)

- Tailwind CSS
- DaisyUI

## Project Overview

This website have total of 4 pages.
All pages are inside the app folder, and a separate folder for common components which are used across different pages.

This is a fully `RESPONSIVE` website for all 3 devices:

- Mobile
- Tablate
- Computer / Laptop

Here is a demonstration for all individual pages.
Navigation and footer are common for all pages.

### 1. Home page

1.  Started with the Hero section.

2.  Case Studies: Some proud projects used Responsive Slick Carousel to show the projects, all cases data is fetching from jsonsilo API. here all images are clickable to a new dynamic page for the Case details.

3.  Clients / projects counts: used React Countup to roll the numbers when the user reached this viewport.

4.  Video section: A short video about the company, built a custom & responsive video player with dynamic video thumbnail option.

5.  Testimonials: used Responsive Slick Carousel and custom arrows to change the Carousel cards.

6.  Companies we worked with: used Responsive Slick Carousel autoplay mode.

### 2. Gallery page

1. Gallery Images: used Framer Motion for smooth animation during sort.

2. Implement a sorting function to sort only Buildings / villas or All.

3. Added modal for individual images, when user clicks on an image this modal will open.

### 3. About page

1. About us and details.

2. Meet our team: use Responsive Slick Carousel center image mode to show team members one by one, click on the next image to see the next team member.

### 3. Contact us page

1. A responsive contact us page.

### 4. Case Studies dynamic route page

When user click on a image on Case Studies, it will open a dynamic route page with some details about that case with following components:

1. Used 2 custom video player components.

2. Responsive Slick Carousel for image slides.

3. At the end of this page added a More Case Studies component with functionality of showing all Case Studies except the current one.

## Components

1. Created a button component which is used in various pages across this website.

2. A responsive custom video player with play / pause, sound, play fast / slow, and forward or backward button.

### Other

1. Added a beautiful font named Gilroy in two variants.

2. Images are custom resized and hosted in [Postimages](https://postimages.org)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Design inspiration

This website design inspired by Rameez Remy's [Figma template](https://dribbble.com/shots/18755891-Property-Developer-Portfolio-Freebie).

## Contact

For any inquiries or support, contact [Obaidullah](mailto:email2obaidul@gmail.com).
