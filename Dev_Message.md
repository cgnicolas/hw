# Message from the Developer

Hello Interviewers!

After developing the frontend for this application, and successfully testing it on my machine, I decided to try to run it from the beginning, from your point of view. In order to do this, I went ahead and tried to run the app on a separate computer, and found that it wasn't working. After some time, I diagnosed the cause to be that throughout the entire development process, I had been using `yarn` as my package manager. However, when running it on a separate machine (which didn't have `yarn` installed), I used `npm`. The project didn't like that. After some research, I had found the reason to be that there is a `webpack` version dependency conflict between `craco` and `react-scripts`. `yarn` handles this dependency conflict, whereas `npm` does not. That being said, running the project with `yarn` to install the required packages **instead** of  `npm install`, is absolutely necessary. 

Sorry for any complications,  
Cedric Nicolas