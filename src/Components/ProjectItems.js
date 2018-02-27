import React, { Component } from 'react';

class ProjectItems extends Component {
    project;
    render() {
        return (
            <li className="ProjectItems">
                <b>{this.props.project.title}</b> - {this.props.project.category}
            </li>
        );
    }
}

export default ProjectItems;
