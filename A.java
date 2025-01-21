pipeline {
    agent any
    triggers {
        cron('H/5 * * * *') // Exécuter toutes les 5 minutes
    }
    stages {
        stage('Build Backend') {
            when {
                anyOf {
                    branch 'main'
                    branch 'dev'
                }
            }
            steps {
                dir('epigreen-back') {
                    echo "Building backend for branch: ${env.BRANCH_NAME}"
                    sh './mvnw clean package' // Commande Maven pour générer le .jar
                }
            }
        }
        stage('Deploy Backend') {
            when {
                anyOf {
                    branch 'main'
                    branch 'dev'
                }
            }
            steps {
                script {
                    def targetVM = (env.BRANCH_NAME == 'main') ? 'back-prod@172.31.252.73' : 'toto@172.31.249.34'
                    echo "Deploying backend to ${targetVM}"
                    sh """
                        scp epigreen-back/target/*.jar ${targetVM}:deploy/backend/
                        ssh ${targetVM} 'cd deploy/backend && nohup java -jar *.jar &'
                    """
                }
            }
        }
        stage('Build Frontend') {
            when {
                anyOf {
                    branch 'main'
                    branch 'dev'
                }
            }
            steps {
                dir('epigreen-front') {
                    echo "Building frontend for branch: ${env.BRANCH_NAME}"
                    sh 'npm install' // Installer les dépendances
                    sh 'npm run build' // Générer le dossier build
                }
            }
        }
        stage('Deploy Frontend') {
            when {
                anyOf {
                    branch 'main'
                    branch 'dev'
                }
            }
            steps {
                script {
                    def targetVM = (env.BRANCH_NAME == 'main') ? 'front-prod@172.31.249.252' : 'toto@172.31.249.34'
                    echo "Deploying frontend to ${targetVM}"
                    sh """
                        scp -r epigreen-front/build/* ${targetVM}:deploy/frontend-build/
                    """
                }
            }
        }
    }
}
