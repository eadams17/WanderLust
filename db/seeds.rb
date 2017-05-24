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

Album.destroy_all

album1 = Album.create(user_id: 1, title: 'Spring Semester in China', description: 'My travels around China during spring semester of 2016',
thumbnail_url: 'https://previews.123rf.com/images/hugolacasse/hugolacasse1101/hugolacasse110100110/8626973-Passport-stamps-Stock-Vector-passport-stamp-visa.jpg')

album2 = Album.create(user_id: 1, title: 'Fall Semester in Indonesia', description: 'My travels around Indonesia during fall semester of 2016',
thumbnail_url: 'https://previews.123rf.com/images/hugolacasse/hugolacasse1101/hugolacasse110100110/8626973-Passport-stamps-Stock-Vector-passport-stamp-visa.jpg')

album3 = Album.create(user_id: 1, title: 'Summer Trip to Iceland', description: 'Exploring the beautiful countryside of Iceland',
thumbnail_url: 'https://previews.123rf.com/images/hugolacasse/hugolacasse1101/hugolacasse110100110/8626973-Passport-stamps-Stock-Vector-passport-stamp-visa.jpg')

album4 = Album.create(user_id: 1, title: 'Carnaval no Brazil', description: 'Photos taken throughout my trip to Brazil for Carnaval',
thumbnail_url: 'https://previews.123rf.com/images/hugolacasse/hugolacasse1101/hugolacasse110100110/8626973-Passport-stamps-Stock-Vector-passport-stamp-visa.jpg')

album5 = Album.create(user_id: 1, title: 'Year Abroad in Germany', description: 'Images captured throughout the year I lived in Germany',
thumbnail_url: 'https://previews.123rf.com/images/hugolacasse/hugolacasse1101/hugolacasse110100110/8626973-Passport-stamps-Stock-Vector-passport-stamp-visa.jpg')


Photo.destroy_all

photo1 = Photo.create(caption: 'Overlooking the city of Guilin',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495488226/12435764123_744a5d884b_z_eqhibi.jpg',
         user_id: 1, album_id: 1)

photo2 = Photo.create(caption: 'Victoria Harbour, Hong Kong',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495488226/14434826117_4974175950_z_vqekvp.jpg',
         user_id: 1, album_id: 1)

photo3 = Photo.create(caption: 'Huangshan National Park, China',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495488225/3393105538_5dbe4bd55e_z_fq2mos.jpg',
         user_id: 1, album_id: 1)

photo4 = Photo.create(caption: 'The Bund, Shanghai, China',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495474530/16526151761_61b24efa46_z_rifi7z.jpg',
         user_id: 1, album_id: 1)

photo5 = Photo.create(caption: 'The Great Wall of China',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495474530/Great_Wall_%E5%96%B5_%E6%AF%94%E6%AF%94_www.flickr.comphotosmandylovefly19837884814_dzksb6.jpg',
         user_id: 1, album_id: 1)

photo6 = Photo.create(caption: 'Overlooking the City of Kunming',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495488226/9542787077_9460b88bd3_z_xjyzd1.jpg',
         user_id: 1, album_id: 1)

photo7 = Photo.create(caption: 'Friends at The Bund in Shanghai, China',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495488226/7962510078_158e2cfdf1_z_jsbztk.jpg',
         user_id: 1, album_id: 1)

photo8 = Photo.create(caption: 'Leshan Giant Buddha, China',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495474530/2166125622_6cacd698d2_z_gtvzsx.jpg',
         user_id: 1, album_id: 1)

photo9 = Photo.create(caption: 'Shanghai at Sunset',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495488226/5869196846_9e5f39c29d_z_yqebji.jpg',
         user_id: 1, album_id: 1)

photo10 = Photo.create(caption: 'Shanghai at Night',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495488225/11864531814_5f8866701b_z_h3vf8g.jpg',
         user_id: 1, album_id: 1)

photo11 = Photo.create(caption: 'Hiking the Great Wall of China',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495474530/Beijing_Great_Wall_of_China_EricAdams_uvse50.jpg',
         user_id: 1, album_id: 1)

photo12 = Photo.create(caption: 'Bukittinggi Museum, West Sumatra, Indonesia',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495474530/Bukittinggi_Museum_Dolf_van_der_Haven_www.flickr.comphotosdvdhaven6962392557_pglvqe.jpg',
         user_id: 1, album_id: 2)

photo13 = Photo.create(caption: 'Kuta, Lombok, Indonesia',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495474531/Kuta_Lombok_Fadil_Basymeleh_www.flickr.comphotosfadilfb5088499969_emrvzu.jpg',
         user_id: 1, album_id: 2)

photo14 = Photo.create(caption: 'Mount Bromo, East Java, Indonesia',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495474531/Mount_Bromo_Sara_Marlowe_www.flickr.comphotossaramarlowe1296883372_buap2u.jpg',
         user_id: 1, album_id: 2)

photo15 = Photo.create(caption: 'Sunrise from Mt.Batur, Bali, Indonesia',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495475381/IMG_4075_ddkru9.jpg',
         user_id: 1, album_id: 2)

photo16 = Photo.create(caption: 'Rice Paddies near Ubud, Bali, Indonesia',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495475386/IMG_4076_yjakxp.jpg',
         user_id: 1, album_id: 2)

photo17 = Photo.create(caption: 'Sunset from Gili Air, Indonesia',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495475381/IMG_3891_i4vczs.jpg',
         user_id: 1, album_id: 2)

photo18 = Photo.create(caption: 'Tanah Lot, Bali, Indonesia',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495475384/IMG_4172_qrpzqg.jpg',
         user_id: 1, album_id: 2)

photo19 = Photo.create(caption: 'Sunset from Gili Trawangan, Indonesia',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495475383/IMG_3872_x8zu2z.jpg',
         user_id: 1, album_id: 2)

photo20 = Photo.create(caption: 'Waterfalls at Goðafoss, Iceland',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495479811/6025067017_87ecbc55eb_z_vytwbl.jpg',
         user_id: 1, album_id: 3)

photo21 = Photo.create(caption: 'Auster-Skaftafellssysla, Iceland',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495479811/15698332845_86082f6b2e_z_dsdtcd.jpg',
         user_id: 1, album_id: 3)

photo22 = Photo.create(caption: 'Volcano near Reykjavik, Iceland',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495479811/15916076269_57dd40032c_z_ptjwaq.jpg',
         user_id: 1, album_id: 3)

photo23 = Photo.create(caption: 'Waterfall near Reykjavik, Iceland',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495479811/6013942169_bbdc0b56d0_z_scgdvk.jpg',
         user_id: 1, album_id: 3)

photo24 = Photo.create(caption: 'Church near Reykjavik, Iceland',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495479811/6014460514_8866c9a4fb_z_wg2vpu.jpg',
         user_id: 1, album_id: 3)

photo25 = Photo.create(caption: 'River Rapids in Rangarvallasysla, Iceland',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495479812/16328391906_5645a821d2_z_yasvw3.jpg',
         user_id: 1, album_id: 3)

photo26 = Photo.create(caption: 'Mountains near Reykjavik, Iceland',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495479812/16166994600_474ff70ed4_z_i4qkci.jpg',
         user_id: 1, album_id: 3)

photo27 = Photo.create(caption: 'Caverns near Reykjavik, Iceland',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495480400/6013907925_be49ef3a90_z_nvikum.jpg',
         user_id: 1, album_id: 3)

photo28 = Photo.create(caption: 'Waterfall at Nordur-Tingeyjarsysla, Iceland',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495479812/26050345151_7ca8ab89c9_z_sjfugd.jpg',
         user_id: 1, album_id: 3)

photo29 = Photo.create(caption: 'Overlooking Rio de Janeiro, Brazil',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495485627/23203525324_0190015e30_z_orxqf6.jpg',
         user_id: 1, album_id: 4)

photo30 = Photo.create(caption: 'Praia Olho de Boi, Brazil',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495485626/8672667437_49e75e24ef_z_kgwghc.jpg',
         user_id: 1, album_id: 4)

photo31 = Photo.create(caption: 'Cantumbi, Rio de Janeiro, Brazil',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495485626/16177830830_b7b9f4800c_z_b4swkc.jpg',
         user_id: 1, album_id: 4)

photo32 = Photo.create(caption: 'Christ the Redeemer, Rio de Janeiro, Brazil',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495485626/2323426046_538a4fb54b_z_ztaqx4.jpg',
         user_id: 1, album_id: 4)

photo33 = Photo.create(caption: 'Buzios Brazil',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495485626/3615321990_34a0161b35_z_bmbtzr.jpg',
         user_id: 1, album_id: 4)

photo34 = Photo.create(caption: 'Amazon River, Brazil',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495485627/5777960409_28f2640ecf_z_dt1k7r.jpg',
         user_id: 1, album_id: 4)

photo35 = Photo.create(caption: 'Amazon River, Brazil',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495485626/5865015108_35b5be52b9_z_d57ozi.jpg',
         user_id: 1, album_id: 4)

photo36 = Photo.create(caption: 'Overlooking Rio de Janeiro at Night, Brazil',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495485626/8492917389_927c279317_z_do0dvb.jpg',
         user_id: 1, album_id: 4)

photo37 = Photo.create(caption: 'Praia da Foca, Brazil',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495485627/8671090088_b1bb566aa4_z_vrbmk5.jpg',
         user_id: 1, album_id: 4)

photo38 = Photo.create(caption: 'Limburg Cathedral, Hesse, Germany',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495486521/15356297286_776e8f168d_z_e8fdqs.jpg',
         user_id: 1, album_id: 5)

photo39 = Photo.create(caption: 'Winter in Monschau, Germany',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495486521/16229873918_0d27e345aa_z_re8v1v.jpg',
         user_id: 1, album_id: 5)

photo40 = Photo.create(caption: 'Baden-Württemberg, Germany',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495486521/15773117217_6613541f26_z_b80ldu.jpg',
         user_id: 1, album_id: 5)

photo41 = Photo.create(caption: 'Rhineland-Palatinate, Germany',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495486520/14585987023_6af8ab1b9d_z_rlb4bj.jpg',
         user_id: 1, album_id: 5)

photo42 = Photo.create(caption: 'Autumn in Windebruch Village, Germany',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495486520/5896618615_4829fe3fe0_z_fociv3.jpg',
         user_id: 1, album_id: 5)

photo43 = Photo.create(caption: 'Architecture of Plochingen, Germany',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495486520/14293428773_81c832a885_z_rsgfxp.jpg',
         user_id: 1, album_id: 5)

photo44 = Photo.create(caption: 'Schwangau, Bavaria, Germany',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495486520/9383899030_400e9bdea9_z_zqz02j.jpg',
         user_id: 1, album_id: 5)

photo45 = Photo.create(caption: 'Neuschwanstein Castle, Hohenschwangau, Germany',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495486520/4510298417_2fa95bd6d0_z_e5bjzy.jpg',
         user_id: 1, album_id: 5)

photo46 = Photo.create(caption: 'Architecture of Bacharach, Germany',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495486520/14564219244_e7c3f8ef5c_z_hqxf4g.jpg',
         user_id: 1, album_id: 5)

Comment.destroy_all

comment1 = Comment.create(user_id: 2, photo_id: 1, body: "Great shot!")
comment2 = Comment.create(user_id: 3, photo_id: 1, body: "Beautiful!")
comment3 = Comment.create(user_id: 4, photo_id: 1, body: "Where is this?")
comment4 = Comment.create(user_id: 1, photo_id: 17, body: "<3 <3 <3")
comment5 = Comment.create(user_id: 2, photo_id: 6, body: "Well done.")
comment6 = Comment.create(user_id: 5, photo_id: 17, body: "I wanna go here!")
comment7 = Comment.create(user_id: 3, photo_id: 40, body: "Amazing!")
comment8 = Comment.create(user_id: 1, photo_id: 33, body: "What camera do you use?")
comment9 = Comment.create(user_id: 4, photo_id: 25, body: "Phenomenal!")
comment10 = Comment.create(user_id: 2, photo_id: 13, body: "Very nice!")
comment11 = Comment.create(user_id: 2, photo_id: 17, body: "Great shot!")
