pipeline {
    agent any
    
    environment {
        CI = 'false' // Override the CI environment variable
    }

    tools {
        nodejs 'nodejs' // Replace with the name of your NodeJS installation if using the plugin
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Clone the repository containing your React project
                git url: 'https://github.com/anilmsd/learning.git', branch: 'Main'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install dependencies using npm
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                // Build the React app using npm
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build the Docker image
                script {
                    docker.build('my-react-app')
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                // Run the Docker container from the built image
                script {
                    docker.image('my-react-app').run('-p 80:80')
                }
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                // Archive the build artifacts (e.g., the `build` directory)
                archiveArtifacts artifacts: 'build/**', allowEmptyArchive: false
            }
        }
    }

    post {
        success {
            echo 'Build completed successfully!'
        }
        failure {
            echo 'Build failed. Check the logs for details.'
        }
    }
}
