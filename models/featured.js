const featured =
{

    fakeDB: [],
    init() {
        this.fakeDB.push({
            title: 'Family cabin', description: `Family cabin for a big-medium-small size family. Bring them all`, price: `165`, image: '/img/3.jpg', beds: '6', icon1: '/img/hotel.jpg',
            icon3: '/img/taxi.jpg',
            icon4: '/img/wifi.jpg',
            icon5: '/img/access.jpg',
            icon7: '/img/bed.jpg',
            icon8: '/img/beds.jpg',
            icon10: '/img/pet.jpg',
            icon11: '/img/ccard.jpg'
        });
        this.fakeDB.push({
            title: 'Hobbit house 1', description: `Lord of the rings? fan This is a vacation place just for you`, price: `165`, image: '/img/4.jpg', beds: '6', icon1: '/img/hotel.jpg',
            icon3: '/img/taxi.jpg',
            icon4: '/img/wifi.jpg',
            icon7: '/img/bed.jpg',
            icon8: '/img/beds.jpg',
            icon10: '/img/pet.jpg',
            icon11: '/img/ccard.jpg'
        });
        this.fakeDB.push({
            title: 'High and awesome', description: `Stylish designer house just in the heart of the city`, price: `298`, image: '/img/5.jpg', beds: '6', icon2: '/img/house.jpg',
            icon3: '/img/taxi.jpg',
            icon4: '/img/wifi.jpg',
            icon7: '/img/bed.jpg',
            icon10: '/img/pet.jpg'
        });

        this.fakeDB.push({
            title: 'Luxurus villa', description: `Spa and pool, gym and sauna, this are only few to be found there`, price: `725`, image: '/img/11.jpg', beds: '12', icon2: '/img/house.jpg',
            icon3: '/img/taxi.jpg',
            icon4: '/img/wifi.jpg',
            icon5: '/img/access.jpg',
            icon6: '/img/concierge.jpg',
            icon7: '/img/bed.jpg',
            icon8: '/img/beds.jpg',
            icon11: '/img/ccard.jpg'
        });
        this.fakeDB.push({
            title: 'Hobbit house 3', description: `Lord of the rings? fan This is a vacation place just for you`, price: `188`, image: '/img/14.jpg', beds: '8', icon1: '/img/hotel.jpg',
            icon3: '/img/taxi.jpg',
            icon4: '/img/wifi.jpg',
            icon5: '/img/access.jpg',
            icon6: '/img/concierge.jpg',
            icon8: '/img/beds.jpg',
            icon10: '/img/pet.jpg',
            icon11: '/img/ccard.jpg'
        });

    },
    getAllFeatured() {
        return this.fakeDB;
    }
}
featured.init();
module.exports = featured;
