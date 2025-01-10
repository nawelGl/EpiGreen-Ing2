pipeline {
    agent any
    stages {
        stage('Build Backend') {
            steps {
                dir('proto-back') {
                    echo "Building backend for branch: ${env.BRANCH_NAME}"
                    sh 'mvn clean package' // Commande Maven pour générer le .jar
                }
            }
        }
        stage('Deploy Backend') {
                    steps {
                        script {
                            def targetVM = '172.31.249.34'  // L'adresse IP de la VM cible
                            def credentials = credentials('toto')  // Récupère le credential

                            def username = credentials.username   // Récupère le nom d'utilisateur
                            def password = credentials.password   // Récupère le mot de passe
        
                            echo "Deploying backend to ${username}@${targetVM}"

                            sh """
                                echo 'Transferring backend JAR to the server...'
                                sshpass -p '${password}' scp -o StrictHostKeyChecking=no proto-back/target/*.jar ${username}@${targetVM}:deploy/backend/
                                sshpass -p '${password}' ssh -o StrictHostKeyChecking=no ${username}@${targetVM} 'cd deploy/backend && nohup java -jar *.jar &'
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
                    def targetVM = 'toto@172.31.249.34'
                    echo "Deploying frontend to ${targetVM}"
                    sh """
                        scp -r proto-front/build/* ${targetVM}:deploy/frontend-build/
                    """
                }
            }
        }
    }
}
