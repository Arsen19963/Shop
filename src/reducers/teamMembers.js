export default function members(state = data, action) {
    if (action.type === "ADD_MEMBERS") {
        return action.payload;
    }
    return state;
}

let data = [
    {
        id: 0,
        img: 'https://personalexcellence.co/files/ceo.jpg',
        title: "Vahag Galustich 'Maroz'",
        introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        position: "CEO",
        board: 'main',
        team:1
    },
    {
        id: 1,
        img: 'https://fundsnetservices.com/wp-content/uploads/business-owner.jpg',
        title: "Name Surname",
        introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        position: "Owner",
        team:1
    },
    {
        id: 2,
        img: "https://www.freelancinggig.com/blog/wp-content/uploads/2017/05/art-director.jpg",
        title: "Name Surname",
        introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        position: "Art Director",
        team:1
    },
    {
        id: 3,
        img: "https://i.ytimg.com/vi/0xZz2t-Ex1I/maxresdefault.jpg",
        title: "Name Surname",
        introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        position: "Art Director",
        team:1
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Name Surname",
        introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        position: "Art Director",
        team:2
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/8124422/pexels-photo-8124422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Name Surname",
        introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        position: "Art Director",
        team:2
    }, {
        id: 6,
        img: "https://images.pexels.com/photos/8124367/pexels-photo-8124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Name Surname",
        introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        position: "Art Director",
        team:2
    }, {
        id: 7,
        img: "https://images.pexels.com/photos/8124218/pexels-photo-8124218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Name Surname",
        introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        position: "Art Director",
        team:2
    }, {
        id: 8,
        img: "https://images.pexels.com/photos/7971717/pexels-photo-7971717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Name Surname",
        introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        position: "Art Director",
        team:2
    }, {
        id: 9,
        img: "https://images.pexels.com/photos/8052619/pexels-photo-8052619.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Name Surname",
        introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        position: "Art Director",
        team:2
    },
];
