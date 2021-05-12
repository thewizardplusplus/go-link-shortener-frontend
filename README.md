# go-link-shortener-frontend

Front-end of the service for shorting links.

## Features

- general features:
  - based on the [Ant Design](https://ant.design/):
    - adaptive design;
    - mobile design;
  - navigation via the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API);
  - asynchronous interaction with the back-end via [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API);
- pages:
  - form for creating a link:
    - animating interaction with the back-end;
    - displaying errors on interaction with the back-end in the form of pop-up notifications;
  - result of creating a link:
    - generating a redirect link from a link code;
    - copying a redirect link to a clipboard via a button click:
      - displaying a notification about successful copying to a clipboard;
  - any error (most often it's the "Not Found" error).

## Installation

Clone this repository:

```
$ git clone https://github.com/thewizardplusplus/go-link-shortener-frontend.git
$ cd go-link-shortener-frontend
```

Install dependencies:

```
$ npm install
```

Build the project:

```
$ npm run build
```

## License

The MIT License (MIT)

Copyright &copy; 2020-2021 thewizardplusplus
