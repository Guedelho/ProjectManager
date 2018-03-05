import React, {Component} from 'react';

class ProjectItems extends Component {
    deleteProject(title) {
        this.props.onDelete(title);
    }

    render() {
        return (
            <li className="ProjectItems">
                <b>{this.props.project.title}</b> - {this.props.project.category} <a href="#"
                                                                                     onClick={this.deleteProject.bind(this, this.props.project.title)}>X</a>
            </li>
        );
    }
}

export default ProjectItems;
