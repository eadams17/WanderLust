# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(firstname: 'Mantis', lastname: 'Tobogan', username: 'mtobogan',
        email: 'drtobogan@gmail.com', password: 'password')

user2 = User.create(firstname: 'Margaret', lastname: 'Thatcher', username: 'maggie',
        email: 'maggiethatch@gmail.com', password: 'password')

user3 = User.create(firstname: 'Hubert', lastname: 'Cumberdale', username: 'hcumb',
        email: 'cumberdale@gmail.com', password: 'password')

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
