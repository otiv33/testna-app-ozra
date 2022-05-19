import React from 'react';
import PropTypes from 'prop-types';
import './SeznamZelja.css';
import Button from 'react-bootstrap/Button';

class SeznamZelja extends React.Component{
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };

        this.saveText = this.saveText.bind(this);
        this.addItem = this.addItem.bind(this);
    }
  
    render() {
        return (
            <div className="SeznamZelja">
                <div class="container oknoSeznam">
                    <h3>{this.props.naslov}</h3>

                    <form onSubmit={this.addItem}>
                        <label htmlFor="zelje">{this.props.navodilo}</label><br></br>
                        <input
                            id="zelje"
                            onChange={this.saveText}
                            value={this.state.text}
                        /><br></br>
                        <Button variant="primary">
                            Dodaj željo št. {this.state.items.length + 1}
                        </Button>
                    </form>

                    <div class="dodaneZelje">
                        <ol>
                            {this.state.items.map(item => (
                                <li key={item.id}>
                                    {item.text}
                                    <Button variant="outline-danger" onClick={() => this.removeItem(item)}>
                                        🗑️
                                    </Button>
                                </li>
                            ))}
                        </ol>
                    </div>

                </div>
            </div>
        );
    }

    // Shranjevanje trenutnega vnosa v stanje
    saveText(e) {
        this.setState({ text: e.target.value });
    }
  
    // Dodaj element
    addItem(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }

    // Odstrani element
    removeItem(item){
        this.setState(state => ({
            items: state.items.filter(el => el != item)
        }));
    }
}

SeznamZelja.propTypes = {};

SeznamZelja.defaultProps = {};

export default SeznamZelja;
