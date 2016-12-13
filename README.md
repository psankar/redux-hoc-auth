A simple demo of using React Redux Higher Order Components for a simple authentication workflow.

There are 2 components, public_page and private_page. The former is the default view. The latter will be available only when authentication is succesful.

At the time of signout, if the user was in the private view, they will be redirected to the public view.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

```
npm start
```
