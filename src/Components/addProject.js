import React, {Component} from 'react';

class AddProject extends Component {
    static defaultProps = {
        categories: ["design", "mobile", "web"]
    }

    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.refs.title.value) {
            alert("title is required");
        } else {
            this.setState({
                newProject: {
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, () => this.props.addProject(this.state.newProject));
        }
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
        return (
            <div className="AddProject">
                <h3>Add Project</h3>
                <form action="" onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label htmlFor="">Title</label><br/>
                        <input type="text" ref="title"/>
                    </div>
                    <div>
                        <label htmlFor="">Category</label><br/>
                        <select name="" id="" ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <br/>
                    <input type="submit" value="Submit"/>
                    <br/>
                </form>
            </div>
        );
    }
}

export default AddProject;
