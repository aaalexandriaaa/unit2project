const User = require('../models/user');
const Allergy = require('../models/allergy');
const Recipe = require('../models/recipe');
const user = require('../models/user');

module.exports = {
    index,
    new: newRecipe,
    create
};

function index(req, res) {
    Recipe.find()
        .then((recipes) => {
            res.render('recipes/search', {
                title: "All Recipes",
                user: req.user,
                recipes: recipes.reverse()
            })
        })
}

function newRecipe(req, res) {
    res.render('recipes/new', {
        title: 'Add Recipe',
        user: req.user,
    })
}

function create(req, res) {
    Allergy.create(req.body)
        .then((allergy) => {
            console.log("ALLERGY", allergy)
            req.body.allergies = allergy._id
            console.log("REQBODY", req.body)
            Recipe.create(req.body)
                .then((recipe) => {
                    console.log(recipe)
                    //res.redirect('/recipes')
                    res.render('recipes/showNewRecipe', {
                        title: recipe.name,
                        user: req.user,
                        recipe,
                        allergy


                    })
                })
        })
}