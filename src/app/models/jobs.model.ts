import * as firebase from 'firebase/app';

export interface Job {
    id: string;
    name: string;
    category: string;
    startDate: string;
    endDate?: string;
    description: string;
    location: Location;
    uid: string;
    status: string;
}

export interface Location {
    city: string;
    postalCode: number;
    coordinates: Coordinates;
    address: string;
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Category {
    displayName: string;
    value: string;
    icon: string;
}

export const Categories: Category [] = [
    {
        displayName: 'Reparieren',
        value: 'repair',
        icon: 'construct-outline'
    },
    {
        displayName: 'Gassi gehen',
        value: 'dog',
        icon: 'paw-outline'
    },
    {
        displayName: 'Einkaufen',
        value: 'shopping',
        icon: 'cart-outline'
    },
    {
        displayName: 'Tragen helfen',
        value: 'support',
        icon: 'barbell-outline'
    },
    {
        displayName: 'Medikamente holen',
        value: 'medicine',
        icon: 'bandage-outline'
    },
    {
        displayName: 'Technik erklären',
        value: 'explain',
        icon: 'desktop-outline'
    },
    {
        displayName: 'Im Garten helfen',
        value: 'flower',
        icon: 'flower-outline'
    },
    {
        displayName: 'Zuhören',
        value: 'listen',
        icon: 'ear-outline'
    },
    {
        displayName: 'Kochen',
        value: 'cooking',
        icon: 'restaurant-outline'
    },
    {
        displayName: 'Papierkram regeln',
        value: 'paperstuff',
        icon: 'newspaper-outline'
    }
]
