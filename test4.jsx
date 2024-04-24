import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            textPalindrome: '',
            isTextPalindrome: null
        };
    }

    remove_special_characters = (input)  => {
        return input.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "")
    }

    remove_accents = (input)  => {
        return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    }

    // Function to simulate palindrome validation on the server
    isPalindrome = (input)  => {
        // Remove special characters
        const special_chtr_removed = this.remove_special_characters(input);
        // Remove accents
        const accents_removed = this.remove_accents(special_chtr_removed);
        // Validate palindromes
        const palindrome_validation = accents_removed.toLowerCase() === accents_removed.split('').reverse().join('').toLowerCase();
        return palindrome_validation
    }

    onChangeText = (input) => {
        this.setState({ textPalindrome: input });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { textPalindrome } = this.state;

        if (textPalindrome) {            
            const validatePalindrome = this.isPalindrome(textPalindrome);
    
            // Send form data using Axios to a testing API
            axios.post('https://jsonplaceholder.typicode.com/posts', {isPalindrome: validatePalindrome})
                .then(response => {
                    this.setState({ isTextPalindrome: response.data.isPalindrome });
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };

    render() {
        return (
            <div className="palindrome-container">
                <form onSubmit={this.handleSubmit}>
                    <label className="label">Ingrese un texto</label>
                    <br/>
                    <input type="text" onChange={(e) => this.onChangeText(e.target.value)} />
                    {this.state.isTextPalindrome !== null && (
                        <div className="message-container">
                            <p>{this.state.isTextPalindrome ? '¡El texto es un palíndromo!' : 'El texto NO es un palíndromo'}</p>
                        </div>
                    )}
                    <br/>
                    <div className="send-btn">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        )
    }
}