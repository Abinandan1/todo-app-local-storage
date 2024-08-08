# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

- Desktop Design Light

![](/solution-images/abinandan-desktop-design-light.png)

- Desktop Design Dark

![](/solution-images/abinandan-desktop-design-dark.png)

- Mobile Design Light

![](/solution-images/abinandan-mobile-design-light.png)

- Mobile Design Dark

![](/solution-images/abinandan-mobile-design-dark.png)

### Links

- Live Site URL: https://todo-app-abinandan.netlify.app

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Learned to build drag and drop functionality:

```html
<Wrapper
        checked={checked}
        draggable={true}
        onDragOver={(e) => e.preventDefault()}
        onDragStart={(e) => {
          setStartId(id);
        }}
        onDrop={handleDrop}
      >
        <Checkbox
          id={id}
          checked={checked}
          setChecked={setChecked}
          edit={true}
        />
        <p>{todo}</p>
        <button onClick={() => deleteTodo(id)} className="delete-btn">
          <img src={crossImg} alt="" />
        </button>
      </Wrapper>
```

```js
-SingleTodo.jsx;

const handleDrop = (e) => {
  console.log(startId);
  swapPosition(startId, id);
};

-App.jsx;

const swapPosition = (i, j) => {
  let k, l;
  todos.forEach((todo, index) => {
    if (todo.id === i) {
      k = index;
    }
    if (todo.id === j) {
      l = index;
    }
  });
  const newTodos = todos;
  const temp = newTodos[k];
  newTodos[k] = newTodos[l];
  newTodos[l] = temp;
  setTodos([...newTodos]);
};
```

### Useful resources

- [Drag & Drop Functionality](https://dev.to/colinmcd01/drag-drop-re-ordering-using-html-and-react-974) - This helped me to achieve the drag and drop functionality.

## Author

- Website - [Abinandan A T](https://portfolio-abinandan.netlify.app/)
- Frontend Mentor - [@Abinandan1](https://www.frontendmentor.io/profile/Abinandan1)
- Twitter - [@abidev3009](https://www.twitter.com/abidev3009)
