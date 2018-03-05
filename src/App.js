import React, {Component} from 'react';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from "./Components/addProject";
import Todos from "./Components/Todos";

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    getTodos() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos",
            dataType: "json",
            cache: false,
            success: ((data) => {
                this.setState({todos: data}, () => console.log(this.state));
            }).bind(this),
            error: (err) => {
                console.log(err);
            }
        });
    }

    getProjects() {
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

    componentWillMount() {
        this.getProjects();
        this.getTodos();
    }

    componentDidMount() {
        this.getTodos();
    }

    handleAddProject(project) {
        let projects = this.state.projects
        projects.push(project);
        this.setState(projects);
    }

    handleDeleteProject(title) {
        let projects = this.state.projects
        let index = projects.findIndex(x => x.title === title);

        projects.splice(index, 1);
        this.setState(projects);
    }

    render() {
        return (
            <div className="App">
                <AddProject addProject={this.handleAddProject.bind(this)}/>
                <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
                <hr/>
                <Todos todos={this.state.todos}/>
            </div>
        );
    }
}

export default App;
