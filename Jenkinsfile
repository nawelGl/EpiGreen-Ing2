pipeline {
    agent any
    stages {
        stage('Build Backend') {
            steps {
                dir('proto-back') {
                    echo "Building backend for branch: ${env.BRANCH_NAME}"
                    sh './mvn clean package' // Commande Maven pour générer le .jar
                }
            }
        }
        stage('Deploy Backend') {
            steps {
                script {
                    def targetVM = 'back-prod@172.31.252.73'
                    echo "Deploying backend to ${targetVM}"
                    sh """
                        scp proto-back/target/*.jar ${targetVM}:deploy/backend/
                        ssh ${targetVM} 'cd deploy/backend && nohup java -jar *.jar &'
                    """
                }
            }
        }
        stage('Build Frontend') {
            steps {
                dir('proto-front') {
                    echo "Building frontend for branch: ${env.BRANCH_NAME}"
                    sh 'npm install' // Installer les dépendances
                    sh 'npm run build' // Générer le dossier build
                }
            }
        }
        stage('Deploy Frontend') {
            steps {
                script {
                    def targetVM = 'front-prod@172.31.249.252'
                    echo "Deploying frontend to ${targetVM}"
                    sh """
                        scp -r proto-front/build/* ${targetVM}:deploy/frontend-build/
                    """
                }
            }
        }
    }
}
