pipeline {
  agent any
  stages {
    stage('') {
      steps {
        parallel(
          "stage1": {
            echo '1'
            
          },
          "stage2": {
            echo '2'
            
          }
        )
      }
    }
    stage('stage3') {
      steps {
        sleep 10
      }
    }
    stage('stage4') {
      steps {
        echo '3'
      }
    }
  }
}