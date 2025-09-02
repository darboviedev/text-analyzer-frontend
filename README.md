# Text Analyzer – Frontend

## Overview

This repository contains the **Angular frontend** for the Text Analyzer application.  
It provides a user interface where you can enter text, start an analysis, and view the results.  

You can use this frontend  

- **standalone** (offline mode – analysis runs directly in the browser with TypeScript), or  
- **together with the backend**: [Text Analyzer Backend](https://github.com/darboviedev/text-analyzer-backend)  
  (online mode – analysis requests are sent to the Spring Boot REST API).  

## Features
* Online/Offline switch
  * Online: analysis is made through a REST-call to the backend
  * Offline: analysis is made simply in the frontend without the use of the backend

## How to run

* Install dependencies\
```npm install```  

* Start development server\
```ng serve```
* Open the application in your browser:\
  http://localhost:4200
