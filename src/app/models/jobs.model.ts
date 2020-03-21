export interface NewJob {
    id: string;
    name: string;
    category: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    location: Location;
}

export interface Location {
    city: string;
    postalCode: number;
    coordinates: Coordinates;
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
    }
]
