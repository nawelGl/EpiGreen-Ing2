pipeline {
    agent any

    environment {
        NODE_VERSION = '20.10.0' // Version de Node.js pour le front-end
        //MAVEN_HOME = tool name: 'Maven_3.9.6' // Configuration de Maven sur Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'nawel', url: 'https://github.com/nawelGl/EpiGreen-Ing2.git'
            }
        }

        /*stage('Setup Node.js') {
            steps {
                // Installer Node.js et npm pour le front-end React
                sh "curl -sL https://deb.nodesource.com/setup_${env.NODE_VERSION} | sudo -E bash -"
                sh 'sudo apt-get install -y nodejs'
                sh 'node -v && npm -v'
            }
        }*/

        stage('Install Frontend Dependencies') {
            steps {
                dir('proto-front') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('proto-front') {
                    sh 'npm run build'
                }
            }
        }

        /*stage('Setup Maven') {
            steps {
                echo "Using Maven at ${env.MAVEN_HOME}"
            }
        }*/

        stage('Build Backend') {
            steps {
                // Compiler le projet Spring Boot avec Maven
                sh 'mvn clean compile -f proto-back/pom.xml'
            }
        }

        stage('Run Tests') {
            steps {
                // Exécuter les tests Maven pour le back-end
                sh 'mvn test -f proto-back/pom.xml'
                // Exécuter les tests front-end, par exemple avec Jest pour React
                dir('frontend') {
                    sh 'npm test'
                }
            }
        }

        stage('Package Backend') {
            steps {
                // Créer le fichier JAR de l'application Spring Boot
                sh 'mvn package -f proto-back/pom.xml'
            }
        }

        stage('Archive Artifacts') {
            steps {
                // Archiver l’artefact backend et les fichiers frontend
                archiveArtifacts artifacts: 'proto-back/target/*.jar', allowEmptyArchive: false
                archiveArtifacts artifacts: 'proto-front/build/**/*', allowEmptyArchive: false
            }
        }

        stage('Deploy (Optional)') {
            when {
                branch 'main'
            }
            steps {
                // Déploiement conditionnel pour la branche principale
                echo "Déploiement de l'application"
                // Ajouter ici les étapes de déploiement (SSH, SCP, Docker, etc.)
            }
        }
    }

    post {
        success {
            echo 'Pipeline exécutée avec succès !'
        }
        failure {
            echo 'Le build a échoué.'
        }
    }
}
