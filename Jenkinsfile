pipeline {
    agent any

    stages {
        stage('Get dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Convert typescript to javascript') {
            steps {
                sh 'tsc --build tsconfig.json'
            }
        }
        stage('Run the server.js file') {
            steps {
                sh 'npm run start'
            }
        }
    }
}