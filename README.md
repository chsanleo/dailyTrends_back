# 📦 Daily Trends - BACKEND

![](https://img.shields.io/badge/CODE-TypeScript-informational?style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+SmF2YVNjcmlwdCBpY29uPC90aXRsZT48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHptMjIuMDM0IDE4LjI3NmMtLjE3NS0xLjA5NS0uODg4LTIuMDE1LTMuMDAzLTIuODczLS43MzYtLjM0NS0xLjU1NC0uNTg1LTEuNzk3LTEuMTQtLjA5MS0uMzMtLjEwNS0uNTEtLjA0Ni0uNzA1LjE1LS42NDYuOTE1LS44NCAxLjUxNS0uNjYuMzkuMTIuNzUuNDIuOTc2LjkgMS4wMzQtLjY3NiAxLjAzNC0uNjc2IDEuNzU1LTEuMTI1LS4yNy0uNDItLjQwNC0uNjAxLS41ODYtLjc4LS42My0uNzA1LTEuNDY5LTEuMDY1LTIuODM0LTEuMDM0bC0uNzA1LjA4OWMtLjY3Ni4xNjUtMS4zMi41MjUtMS43MSAxLjAwNS0xLjE0IDEuMjkxLS44MTEgMy41NDEuNTY5IDQuNDcxIDEuMzY1IDEuMDIgMy4zNjEgMS4yNDQgMy42MTYgMi4yMDUuMjQgMS4xNy0uODcgMS41NDUtMS45NjYgMS40MS0uODExLS4xOC0xLjI2LS41ODYtMS43NTUtMS4zMzZsLTEuODMgMS4wNTFjLjIxLjQ4LjQ1LjY4OS44MSAxLjEwOSAxLjc0IDEuNzU2IDYuMDkgMS42NjYgNi44NzEtMS4wMDQuMDI5LS4wOS4yNC0uNzA1LjA3NC0xLjY1bC4wNDYuMDY3em0tOC45ODMtNy4yNDVoLTIuMjQ4YzAgMS45MzgtLjAwOSAzLjg2NC0uMDA5IDUuODA1IDAgMS4yMzIuMDYzIDIuMzYzLS4xMzggMi43MTEtLjMzLjY4OS0xLjE4LjYwMS0xLjU2Ni40OC0uMzk2LS4xOTYtLjU5Ny0uNDY2LS44My0uODU1LS4wNjMtLjEwNS0uMTEtLjE5Ni0uMTI3LS4xOTZsLTEuODI1IDEuMTI1Yy4zMDUuNjMuNzUgMS4xNzIgMS4zMjQgMS41MTcuODU1LjUxIDIuMDA0LjY3NSAzLjIwNy40MDUuNzgzLS4yMjYgMS40NTgtLjY5MSAxLjgxMS0xLjQxMS41MS0uOTMuNDAyLTIuMDcuMzk3LTMuMzQ2LjAxMi0yLjA1NCAwLTQuMTA5IDAtNi4xNzlsLjAwNC0uMDU2eiIvPjwvc3ZnPg==&color=2bbc8a) ![](https://img.shields.io/badge/CODE-NodeJS-informational?style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Tm9kZS5qcyBpY29uPC90aXRsZT48cGF0aCBkPSJNMTEuOTk4LDI0Yy0wLjMyMSwwLTAuNjQxLTAuMDg0LTAuOTIyLTAuMjQ3bC0yLjkzNi0xLjczN2MtMC40MzgtMC4yNDUtMC4yMjQtMC4zMzItMC4wOC0wLjM4MyBjMC41ODUtMC4yMDMsMC43MDMtMC4yNSwxLjMyOC0wLjYwNGMwLjA2NS0wLjAzNywwLjE1MS0wLjAyMywwLjIxOCwwLjAxN2wyLjI1NiwxLjMzOWMwLjA4MiwwLjA0NSwwLjE5NywwLjA0NSwwLjI3MiwwbDguNzk1LTUuMDc2IGMwLjA4Mi0wLjA0NywwLjEzNC0wLjE0MSwwLjEzNC0wLjIzOFY2LjkyMWMwLTAuMDk5LTAuMDUzLTAuMTkyLTAuMTM3LTAuMjQybC04Ljc5MS01LjA3MmMtMC4wODEtMC4wNDctMC4xODktMC4wNDctMC4yNzEsMCBMMy4wNzUsNi42OEMyLjk5LDYuNzI5LDIuOTM2LDYuODI1LDIuOTM2LDYuOTIxdjEwLjE1YzAsMC4wOTcsMC4wNTQsMC4xODksMC4xMzksMC4yMzVsMi40MDksMS4zOTIgYzEuMzA3LDAuNjU0LDIuMTA4LTAuMTE2LDIuMTA4LTAuODlWNy43ODdjMC0wLjE0MiwwLjExNC0wLjI1MywwLjI1Ni0wLjI1M2gxLjExNWMwLjEzOSwwLDAuMjU1LDAuMTEyLDAuMjU1LDAuMjUzdjEwLjAyMSBjMCwxLjc0NS0wLjk1LDIuNzQ1LTIuNjA0LDIuNzQ1Yy0wLjUwOCwwLTAuOTA5LDAtMi4wMjYtMC41NTFMMi4yOCwxOC42NzVjLTAuNTctMC4zMjktMC45MjItMC45NDUtMC45MjItMS42MDRWNi45MjEgYzAtMC42NTksMC4zNTMtMS4yNzUsMC45MjItMS42MDNsOC43OTUtNS4wODJjMC41NTctMC4zMTUsMS4yOTYtMC4zMTUsMS44NDgsMGw4Ljc5NCw1LjA4MmMwLjU3LDAuMzI5LDAuOTI0LDAuOTQ0LDAuOTI0LDEuNjAzIHYxMC4xNWMwLDAuNjU5LTAuMzU0LDEuMjczLTAuOTI0LDEuNjA0bC04Ljc5NCw1LjA3OEMxMi42NDMsMjMuOTE2LDEyLjMyNCwyNCwxMS45OTgsMjR6IE0xOS4wOTksMTMuOTkzIGMwLTEuOS0xLjI4NC0yLjQwNi0zLjk4Ny0yLjc2M2MtMi43MzEtMC4zNjEtMy4wMDktMC41NDgtMy4wMDktMS4xODdjMC0wLjUyOCwwLjIzNS0xLjIzMywyLjI1OC0xLjIzMyBjMS44MDcsMCwyLjQ3MywwLjM4OSwyLjc0NywxLjYwN2MwLjAyNCwwLjExNSwwLjEyOSwwLjE5OSwwLjI0NywwLjE5OWgxLjE0MWMwLjA3MSwwLDAuMTM4LTAuMDMxLDAuMTg2LTAuMDgxIGMwLjA0OC0wLjA1NCwwLjA3NC0wLjEyMywwLjA2Ny0wLjE5NmMtMC4xNzctMi4wOTgtMS41NzEtMy4wNzYtNC4zODgtMy4wNzZjLTIuNTA4LDAtNC4wMDQsMS4wNTgtNC4wMDQsMi44MzMgYzAsMS45MjUsMS40ODgsMi40NTcsMy44OTUsMi42OTVjMi44OCwwLjI4MiwzLjEwMywwLjcwMywzLjEwMywxLjI2OWMwLDAuOTgzLTAuNzg5LDEuNDAyLTIuNjQyLDEuNDAyIGMtMi4zMjcsMC0yLjgzOS0wLjU4NC0zLjAxMS0xLjc0MmMtMC4wMi0wLjEyNC0wLjEyNi0wLjIxNS0wLjI1My0wLjIxNWgtMS4xMzdjLTAuMTQxLDAtMC4yNTQsMC4xMTItMC4yNTQsMC4yNTMgYzAsMS40ODIsMC44MDYsMy4yNDgsNC42NTUsMy4yNDhDMTcuNTAxLDE3LjAwNywxOS4wOTksMTUuOTEsMTkuMDk5LDEzLjk5M3oiLz48L3N2Zz4=&color=2bbc8a)

## 📄 Table of contents 
* [General info](#general-info)
* [Work Philosophy](#work-philosophy)
* [Technologies](#technologies)
* [Setup](#setup)
* [Entry Points](#entry-points)
* [RoadMap](#roadmap)
* [Contributors](#contributors)


## 📢 General Info 
The objective of this backend project test the use of TypeScript with node and express.
In this project have a API relative to newspapers news.


## 🎯 Work Philosophy 

+ [GIT Flow](https://danielkummer.github.io/git-flow-cheatsheet/)


## 📚 Technologies 

+ GIT
+ Express - NodeTs
+ MONGO


## 🛠️ NPM installed 

+ [cors](https://www.npmjs.com/package/cors) v.2.8.5
+ [dotenv](https://www.npmjs.com/package/dotenv) v.10.0.0
+ [express](https://www.npmjs.com/package/express) v.4.17.1
+ [mongoose](https://www.npmjs.com/package/mongoose)v.6.0.4
+ [ts-node](https://www.npmjs.com/package/ts-node) v.10.2.1
+ [tslog](https://www.npmjs.com/package/tslog) v.3.2.2",
+ [@types/express](https://www.npmjs.com/package/@types/express) v.4.17.13
+ [@types/node](https://www.npmjs.com/package/@types/node) v.16.7.10
+ [nodemon](https://www.npmjs.com/package/nodemon) v.2.0.12


## ⚙️ Setup 

1. To start to work with the application, is needed to **clone** the repository where it is.

2. Install necessary packages `$ npm install`.

3. Adapt the enviroment file to link with the working database.

4. Create folder 'logs' in the root, and create files `debug.log`, `info.log` and `error.log` [review config/config_log.ts for more info]

5. Start the application to work with it `$ npm start`.


Note: A Docker image is linked to use directly.


## 📖 Entry Points 
To test the all the endpoints of the API can be used an app called PostMan 

[![Postman](https://assets.postman.com/postman-docs/postman-app-default-layout.jpg)](https://www.postman.com/)

Also we can call the API directly from others develops. 


### 📌 feedController

Using the methods inside we can get information about the trends.


### 📌 manualInputController

Using the methods inside we can process manually the information about the trends.

+ EndPoint to create manually a feed

``bash
POST    http://url/importFeed/create
```

i.e.
```json
HeadersRequest: 
    
BodyRequest:  
    { "feed":
        {
           "title": string,
           "link": string,
           "originUrl": string,
           "origin": string,
           "dateCreated": string
        }
    }

Response: 
   202 OK 
   {
      "_id": "id1234556"
      "title": "tile important new",
      "link": "http://www.link.es/new234",
      "originUrl": "http://www.link.es/",
      "origin": "manual",
      "dateCreated": "2021-09-06 00:00:00"
    }

   500 { } 
```



## 📋 RoadMap 

- [ ] Create a key to give access or not to the different methods.
- [ ] Security: add protection against attacks


## ✒️ Contributors

+ Christian Sánchez - [chsanleo](https://github.com/chsanleo/)


## License 📄
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

Ask us before use and ask us for another features or documentation we didn't include.


## How to say 'thanks' to us  🎁

* Tell others about this project 📢
* Pay a beer 🍺 or coffee ☕ to us (or two, or... some ;) ). 
* Comments about always welcome!.