import axios from "axios";

class HelloWorldService{
    executeHelloWorldService(){
        console.log('executed Service')
        return axios.get('http://localhost:8080/hello-world')
        
    }

    executeHelloWorldBeanService(){
        console.log('executed Service BEan')
        return axios.get('http://localhost:8080/hello-world-bean')
        
    }

    executeHelloWorldPathVariableService(name){
        console.log('executed path variable Service')
        return axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`)
        
    }
    executehandleError(name){
        console.log('error')
        return axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`)
    }

}




export default new HelloWorldService()