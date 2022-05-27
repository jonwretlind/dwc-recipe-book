import { React, Component } from 'react';
const axios = require("axios");


class Recipe extends Component {
    //
    constructor() {
        //
        super();
        let imageUrl = "";
        const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
            params: { tags: 'vegetarian,dessert', number: '3' },
            headers: {
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                'X-RapidAPI-Key': '7cb9a9a8a0mshbc8a9bb6e89c28ap1b0da5jsn5d40b68fb415'
            }
        };

        axios.request(options).then(function (response) {
            let json = JSON.stringify(response.data);
            let data = JSON.parse(json);
            imageUrl = data.recipes[0].image;
            console.log(imageUrl);
        }).catch(function (error) {
            console.error(error);
        });
    }

    render() {
        console.log("Render: " + this.imageUrl);

        return (
            <div id="ImagePic">
                <img src={this.imageUrl} />
            </div>
        );
    }

};

export default Recipe;