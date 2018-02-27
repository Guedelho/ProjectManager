import React, {Component} from 'react';
import Projects from './Components/Projects';
import AddProject from "./Components/addProject";

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentWillMount() {
        this.setState({
            projects: [
                {
                    title: "business",
                    category: "design"
                },
                {
                    title: "social",
                    category: "mobile"
                },
                {
                    title: "ecommerce",
                    category: "web"
                }
            ]
        });
    }

    handleAddProject(project){
        let projects = this.state.projects
        projects.push(project);
        this.setState(projects);
    }

    render() {
        return (
            <div className="App">
                <AddProject addProject={this.handleAddProject.bind(this)}/>
                <Projects projects={this.state.projects}/>
            </div>
        );
    }
}

export default App;
