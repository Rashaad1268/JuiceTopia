/*
    This file contains all of the juice related data
*/

import type { JuiceInterface } from "./types"

export const juices: Array<JuiceInterface> = [
    {
        id: 1,
        name: 'Banana Bonanza',
        color: '#f1b553',
        description: `
        A sweet and tropical treat, our Banana Bonanza smoothie is made with fresh bananas,
        milk, nuts, and ice blended to perfection. It's the perfect way to start your day
        or cool down on a hot afternoon.`.trim(),
        image: '/juices/banana_smoothie.png',
        price: 350,
    },
    {
        id: 2,
        name: "Dragon's Breath",
        color: '#d3283a',
        description: `
        A fiery treat, our Dragon's Breath juice is made with
        fresh dragon fruit, berries, and ice blended to perfection.
        It's the perfect way to start your day or cool down on a hot afternoon.`.trim(),
        image: '/juices/dragon_fruit_and_berries.png',
        price: 550,
    },
    {
        id: 3,
        name: "Mango Mania",
        color: '#fed053',
        description: `
        A tropical treat that will make you want to dance, Mango Tango is made with fresh mangoes,
        milk, and ice blended to perfection. Savor the sweet and fruity taste of mango, and feel
        the sunshine on your face with every sip.`.trim(),
        image: '/juices/mango_juice.png',
        price: 370,
    },
    {
        id: 4,
        name: "Orange Crush",
        color: '#fe9900',
        description: `
        A zesty and refreshing treat, Orange Crush is made with fresh oranges
        and ice blended to perfection. Enjoy the sweet and tangy taste of orange, and
        feel the energy boost with every sip.`.trim(),
        image: '/juices/orange_juice.png',
        price: 425,
    },
    {
        id: 5,
        name: "Pomegranate Pop",
        color: '#cf2172',
        description: `
        A burst of flavor in every sip, Pomegranate Pop is made with fresh pomegranates,
        milk, and ice blended to perfection. Enjoy the sweet and tart taste of pomegranate,
        and feel the energy boost with every sip.`.trim(),
        image: '/juices/pomegranate_and_kiwi_juice.png',
        price: 520,
    },
    {
        id: 6,
        name: "Strawberry Sparkler",
        color: '#ca0107',
        description: `
        A sweet and refreshing mocktail perfect for any occasion, Strawberry Sparkler is made with fresh
        strawberries, club soda, and lime juice. Enjoy the sweet and tart taste of strawberry,
        and feel the bubbles tickle your nose with every sip.`.trim(),
        image: '/juices/strawberry_mocktail.png',
        price: 575,
    },
    {
        id: 7,
        name: "Berry Blast",
        color: '#68368e',
        description: `
        A burst of berry flavor in every sip, Berry Blast is made with a blend of fresh strawberries,
        blueberries, raspberries, and blackberries, milk, and ice blended to perfection.
        Enjoy the sweet and tart taste of berries, and feel the energy boost with every sip.`.trim(),
        image: '/juices/berry_juice.png',
        price: 550,
    },
    {
        id: 8,
        name: "Watermelon Wave",
        color: '#c44b38',
        description: `
        A refreshing and delicious wave of watermelon goodness! Made with fresh watermelon chunks, ice,
        and a dash of sugar, Watermelon Wave is the perfect way to cool down on a hot day. Enjoy the
        sweet and juicy watermelon flavor, and feel the cool and refreshing sensation of each sip`.trim(),
        image: '/juices/watermelon_ juice.png',
        price: 450,
    },
]