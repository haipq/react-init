import React from 'react'
class AddItem extends React.Component {
    constructor() {
        super();
        this.count = 0;
        this.addItem = this.addItem.bind(this);
    }

    addItem() {
        this.props.dispatch("data " + (this.count++))
    }

    render() {
        return (
            <section id="add-item">
                <button onClick={this.addItem}>Test</button>
            </section>
        )
    }
}
export default AddItem
