declare enum mealtype {
    VEG = "VEG",
    NONVEG = "NONVEG",
    VEGAN = "VEGAN"
}
export declare class mealdto {
    name: string;
    meal_type: mealtype;
    duration_days: number;
    price: number;
}
export {};
