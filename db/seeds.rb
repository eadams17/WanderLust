User.destroy_all

user1 = User.create(firstname: 'Mantis', lastname: 'Tobogan', username: 'DrTobogan',
        email: 'drtobogan@gmail.com', password: 'password')

user2 = User.create(firstname: 'Margaret', lastname: 'Thatcher', username: 'MaggieThatch',
        email: 'maggiethatch@gmail.com', password: 'password')

user3 = User.create(firstname: 'Jill', lastname: 'de los Angeles', username: 'jilldela',
        email: 'jilldela@gmail.com', password: 'password')

user4 = User.create(firstname: 'Eric', lastname: 'Adams', username: 'PresidentAdams',
        email: 'erictayloradams@gmail.com', password: 'password')

user5 = User.create(firstname: 'Hubert', lastname: 'Cumberdale', username: 'CandidCamera',
        email: 'cumberdale@gmail.com', password: 'password')

user6 = User.create(firstname: 'Kelli', lastname: 'Adams', username: 'DancingNomad',
        email: 'kadams@gmail.com', password: 'password')

user7 = User.create(firstname: 'Muryllo', lastname: 'de Oliveira Mattos', username: 'MrMattos',
        email: 'mmattos@gmail.com', password: 'password')

user8 = User.create(firstname: 'Lauren', lastname: 'Quinn', username: 'Quintessential',
        email: 'lquinn@gmail.com', password: 'password')

user9 = User.create(firstname: 'James', lastname: 'McClymont', username: 'BritishTequilaBananas',
        email: 'jmclymont@gmail.com', password: 'password')

Photo.destroy_all

photo1 = Photo.create(title: 'Thailand 1', caption: '1',
         img_url: 'https://cdn.ek.aero/english/images/Thailand-Large_tcm233-2122022.jpg',
         user_id: 1, album_id: 1)

photo2 = Photo.create(title: 'Thailand 2', caption: '2',
         img_url: 'http://s1.travix.com/as/asia-thailand-medium.jpg',
         user_id: 1, album_id: 1)

photo3 = Photo.create(title: 'Thailand 3', caption: '3',
         img_url: 'https://media-gadventures.global.ssl.fastly.net/media-server/dynamic/blogs/posts/daniels/2015/03/Untitled-21.jpg',
         user_id: 1, album_id: 1)

photo4 = Photo.create(title: 'Brazil 1', caption: '1',
         img_url: 'http://i2.cdn.turner.com/money/dam/assets/160408072953-rio-de-janeiro-brazil-780x439.jpg',
         user_id: 2, album_id: 1)

photo5 = Photo.create(title: 'Brazil 2', caption: '2',
         img_url: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/140401160623-brazil---fernando-de-noronha-horizontal-large-gallery.jpg',
         user_id: 2, album_id: 1)

photo6 = Photo.create(title: 'Brazil 3', caption: '3',
         img_url: 'https://totallycoolpix.com/images/tcp_thumbnails/1495/carnival-brazil-2015__tcp_large.jpg',
         user_id: 2, album_id: 1)

photo7 = Photo.create(title: 'Italy 1', caption: '1',
         img_url: 'http://www.australiansabroad.com.au/wp-content/uploads/2011/10/italian-riviera1-slide1.jpg',
         user_id: 3, album_id: 1)

photo8 = Photo.create(title: 'Italy 2', caption: '2',
         img_url: 'http://kids.nationalgeographic.com/content/dam/kids/photos/Countries/H-P/italy-florence-duomo.adapt.945.1.jpg',
         user_id: 3, album_id: 1)

photo9 = Photo.create(title: 'Italy 3', caption: '3',
         img_url: 'https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5222667829001_5203602613001-vs.jpg?pubId=5104226627001&videoId=5203602613001',
         user_id: 3, album_id: 1)
