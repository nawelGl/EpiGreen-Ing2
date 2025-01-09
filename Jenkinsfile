pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'dev') {
                        echo 'This is the dev branch!'
                    }  else if (env.BRANCH_NAME == 'main') {
                        echo 'This is the main branch!'
                    } else {
                        echo "This is another branch: ${env.BRANCH_NAME}"
                    }
                }
            }
        }
    }
}
