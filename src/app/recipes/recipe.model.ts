import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';

export class Recipe{

    constructor(
        public name: string,
        public description: string,
        public imagePath: string,
        public ingredients: Ingredient[]
    ){}
}