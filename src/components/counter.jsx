import React, { Component } from 'react'

class Counter extends Component {

    // state is a special property in react component.
    // Bascially its an object that includes any data
    // that this component needs
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/25',
        // tags: [],
        tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5']
    };

    // if you want inline style, this is another option
    // e.g.. <span style={this.style} ></span>
    // as we use bootstrap we do not need this.
    style = {
        fontSize: 12,
        fontWeight: 'bold'
    };

    // Binding this class so handleIncrement methos can access this class  
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // This method cannot access this class so it will cause error.
    // Solution is to create constructor as above and bind the class to here
    // handleIncrement() {
    //     console.log('Increment Clicked', this.state.count);
    // }

    // By usig arrow function, the bind problem above is solved
    // It can access this class 
    handleIncrement = () => {
        // Note, count increments but the browser does not know this
        // UNLESS setState is used as below
        //this.state.count++;
        // Notice that the count value increments in console,
        // but the browser does not update the value
        //console.log('Increment Clicked', this.state.count);

        // Now with setState the browser updates the value
        // In react you need setState to notify to the browser 
        // unlike Angular
        this.setState({ count: this.state.count + 1 });
    }

    render() {

        return (
            <div>
                <img src={this.state.imageUrl} alt="" />
                <span style={this.style} className={this.getBadgeClasses()}>
                    {this.state.count + ', OR ' + this.formatCount()}
                </span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm">Increment</button>

                {this.renderTags()}
                {this.state.tags.length === 0 && "Please create a new tag!"}

            </div >
        );
    }

    renderTags() {
        if (this.state.tags.length === 0)
            return <p>There are no tags!</p>

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        // return this.state.count === 0 ?
        //     'Zero' : this.state.count;
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;