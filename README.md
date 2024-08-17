# Frontend Mentor - Age Calculator App Solution

This is my solution to the [Age Calculator App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). This challenge helped me practice and improve my skills in form validation, date manipulation, and responsive design using React.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View their age in years, months, and days after submitting a valid date through the form.
- Receive validation errors if:
  - Any field is empty when the form is submitted.
  - The day number is not between 1-31.
  - The month number is not between 1-12.
  - The year is in the future.
  - The date is invalid (e.g., 31/04/1991).
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.
- **Bonus**: See the age numbers animate to their final number when the form is submitted.

### Screenshot

![Screenshot](./public/screenshot.png)

### Links

- [Solution URL](https://github.com/omk1r/age-calculator-app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - For styling

### What I learned

During this project, I learned how to perform complex date validations in JavaScript, ensuring that users cannot input impossible dates like February 30th or April 31st. I also improved my skills in handling form validation and managing state in React.

Here's a piece of code that I'm particularly proud of:

```js
const isValidDate = (day, month, year) => {
  const date = new Date(year, month - 1, day);
  return (
    date.getDate() === parseInt(day, 10) &&
    date.getMonth() === month - 1 &&
    date.getFullYear() === parseInt(year, 10)
  );
};
```

This function ensures that the date input by the user is a valid calendar date, taking into account the varying number of days in different months and leap years.

### Continued development

In future projects, I want to explore more advanced forms of validation and error handling, especially in complex forms with multiple interdependent fields. I also aim to deepen my understanding of React's performance optimization techniques and to implement animations for smoother user experiences.

### Useful resources

- [MDN Web Docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) - This resource was invaluable for understanding JavaScript date manipulation.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Helped me quickly style the application and maintain responsiveness across devices.

## Author

- Frontend Mentor - [@omk1r](https://www.frontendmentor.io/profile/omk1r)
- Twitter - [@omk1rJ](https://www.twitter.com/omk1rJ)

## Acknowledgments

Thanks to the Frontend Mentor community for the support and inspiration. This project was a great learning experience, and I appreciate all the feedback and encouragement along the way.
