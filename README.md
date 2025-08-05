# 🚀 Jenkins CI/CD Pipeline for Node.js App

This project sets up a complete CI/CD pipeline using Jenkins running in Docker. The pipeline fetches code from GitHub, installs dependencies, runs tests, and simulates deployment for a Node.js application.

### 1. Jenkins Setup Instructions
Pull Jenkins Docker image and run:
```
docker run -d -p 8080:8080 --name jenkins jenkins/jenkins:lts
```
OR 
```
docker pull jenkins/jenkins:lts
```
<img width="619" height="316" alt="1" src="https://github.com/user-attachments/assets/2dbb3108-b7a4-402b-b2d7-3efca5cfdb7e" />
<img width="619" height="200" alt="Screenshot from 2025-08-05 10-40-37" src="https://github.com/user-attachments/assets/07bd5279-8987-4066-a12e-a36aecec2deb" />

## 


### 2. Unlock Jenkins
Visit http://localhost:8080, copy the password from:
```
docker exec -it jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```
OR
```
docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```
<img width="1000" height="84" alt="Screenshot from 2025-08-05 10-41-19" src="https://github.com/user-attachments/assets/83eae16b-e64b-4f5b-81a5-f6c13252776b" />

## 

### 3. Install Suggested Plugins
- During setup, click "Install suggested plugins"
<img width="600" height="347" alt="Screenshot from 2025-08-05 10-41-55" src="https://github.com/user-attachments/assets/92d41646-a233-4a97-adcb-bdacf0219680" />

## 

### 4. Install Additional Plugin:
- Docker Pipeline
- Go to: Setting → Manage Jenkins → Manage Plugins → Available → Search Docker Pipeline → Install without restart

## 

### 5. Install Node.js Inside Jenkins Container
```
docker exec -u 0 -it jenkins bash

# Inside container
apt update
apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs
node -v
npm -v
```

## 

### 6. Create Jenkins Job
- Go to Jenkins → New Item
- Name: nodejs-ci-cd-pipeline
- Type: Pipeline
- In Pipeline section:
- Definition: Pipeline script from SCM
- SCM: Git
- Repo URL: `https://github.com/VisheshGhule/nodejs-ci-cd-task.git`

## 

### 7. Here CI-CD runs successfully

<img width="1000" height="447" alt="Screenshot from 2025-08-05 13-23-04" src="https://github.com/user-attachments/assets/7c368f36-9fb8-4bd5-ab86-0d45d88c8b95" />

## 

<img width="1000" height="447" alt="Screenshot from 2025-08-05 13-25-16" src="https://github.com/user-attachments/assets/0e62149e-1a94-48ca-8f1c-dcfbf3f0f347" />

##  

<img width="1000" height="447" alt="Screenshot from 2025-08-05 13-26-16" src="https://github.com/user-attachments/assets/d8761f0f-d454-41de-a1e1-278c7a100a0a" />

##  

<img width="1000" height="447" alt="Screenshot from 2025-08-05 13-43-46" src="https://github.com/user-attachments/assets/f83c085e-d459-40da-bc66-9a30ddd1a223" />
