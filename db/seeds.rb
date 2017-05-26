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

album6 = Album.create(user_id: 2, title: 'Cheeky Little Trip to Canada', description: 'Some photos I took during a quick tour around Canada',
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

photo47 = Photo.create(caption: 'Watefalls at Canmore, Alberta, Canada',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495821126/33607683733_2253515b91_z_ahi4vw.jpg',
         user_id: 2, album_id: 6)

photo48 = Photo.create(caption: 'Horeshoe Falls in Ontaria, Canada',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495821126/33242679361_caf9e62af6_z_vaizqx.jpg',
         user_id: 2, album_id: 6)

photo49 = Photo.create(caption: 'Lady of the Mist at Niagara Falls, Ontario, Canada',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495821126/32987790450_ccc8fe3823_z_nwuub3.jpg',
         user_id: 2, album_id: 6)

photo50 = Photo.create(caption: 'Tour at Horseshoe Falls in Ontario, Canada',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495821125/32987775150_37421e24af_z_sa4jkr.jpg',
         user_id: 2, album_id: 6)

photo51 = Photo.create(caption: 'Crowfoot Mountain, British Columbia, Canada',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495821125/13156906733_27e2f04f8b_z_fcpona.jpg',
         user_id: 2, album_id: 6)

photo52 = Photo.create(caption: 'Canada Day Fireworks in Toronto, Canada',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495821125/9179810679_23b787357b_z_njrwxz.jpg',
         user_id: 2, album_id: 6)

photo53 = Photo.create(caption: 'Nortern Lights in Alberta, Canada',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495821125/9163549047_09e3e37b91_z_fejsxl.jpg',
         user_id: 2, album_id: 6)

photo54 = Photo.create(caption: 'Aerial View of Niagara Falls, Canada',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495821125/9058987459_1469ec4220_z_q5sdbr.jpg',
         user_id: 2, album_id: 6)

photo55 = Photo.create(caption: 'River in Banff, Alberta, Canada',
         img_url: 'http://res.cloudinary.com/explorewanderlust/image/upload/v1495821125/8168751119_22eb2d5c19_z_ljfznt.jpg',
         user_id: 2, album_id: 6)

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

Tag.destroy_all

tag1 = Tag.create(tag_name: "beach")
tag2 = Tag.create(tag_name: "city")
tag3 = Tag.create(tag_name: "mountains")
tag4 = Tag.create(tag_name: "architecture")
tag5 = Tag.create(tag_name: "night")
tag6 = Tag.create(tag_name: "tropical")
tag7 = Tag.create(tag_name: "winter")
tag8 = Tag.create(tag_name: "summer")
tag9 = Tag.create(tag_name: "waterfall")
tag10 = Tag.create(tag_name: "sunset")
tag11 = Tag.create(tag_name: "spring")
tag12 = Tag.create(tag_name: "autumn")
tag13 = Tag.create(tag_name: "river")

PhotoTag.destroy_all

#photo1

PhotoTag.create(photo_id: photo1.id, tag_id: tag3.id)

PhotoTag.create(photo_id: photo1.id, tag_id: tag10.id)
PhotoTag.create(photo_id: photo1.id, tag_id: tag13.id)

#photo2

PhotoTag.create(photo_id: photo2.id, tag_id: tag2.id)
PhotoTag.create(photo_id: photo2.id, tag_id: tag3.id)
PhotoTag.create(photo_id: photo2.id, tag_id: tag4.id)
PhotoTag.create(photo_id: photo2.id, tag_id: tag10.id)

#photo3

PhotoTag.create(photo_id: photo3.id, tag_id: tag3.id)

#photo4

PhotoTag.create(photo_id: photo4.id, tag_id: tag2.id)
PhotoTag.create(photo_id: photo4.id, tag_id: tag4.id)
PhotoTag.create(photo_id: photo4.id, tag_id: tag5.id)

#photo5

PhotoTag.create(photo_id: photo5.id, tag_id: tag3.id)
PhotoTag.create(photo_id: photo5.id, tag_id: tag4.id)
PhotoTag.create(photo_id: photo5.id, tag_id: tag8.id)

#photo6

PhotoTag.create(photo_id: photo6.id, tag_id: tag3.id)
PhotoTag.create(photo_id: photo6.id, tag_id: tag4.id)
PhotoTag.create(photo_id: photo6.id, tag_id: tag13.id)

#photo7

PhotoTag.create(photo_id: photo7.id, tag_id: tag2.id)
PhotoTag.create(photo_id: photo7.id, tag_id: tag4.id)
PhotoTag.create(photo_id: photo7.id, tag_id: tag5.id)
PhotoTag.create(photo_id: photo7.id, tag_id: tag8.id)

#photo8

PhotoTag.create(photo_id: photo8.id, tag_id: tag3.id)
PhotoTag.create(photo_id: photo8.id, tag_id: tag8.id)

#photo9

PhotoTag.create(photo_id: photo9.id, tag_id: tag2.id)
PhotoTag.create(photo_id: photo9.id, tag_id: tag4.id)
PhotoTag.create(photo_id: photo9.id, tag_id: tag10.id)

#photo10

PhotoTag.create(photo_id: photo10.id, tag_id: tag2.id)
PhotoTag.create(photo_id: photo10.id, tag_id: tag4.id)
PhotoTag.create(photo_id: photo10.id, tag_id: tag5.id)

#photo11

PhotoTag.create(photo_id: photo11.id, tag_id: tag3.id)
PhotoTag.create(photo_id: photo11.id, tag_id: tag4.id)
PhotoTag.create(photo_id: photo11.id, tag_id: tag8.id)

#photo12

PhotoTag.create(photo_id: photo12.id, tag_id: tag4.id)
PhotoTag.create(photo_id: photo12.id, tag_id: tag6.id)

#photo13

PhotoTag.create(photo_id: photo13.id, tag_id: tag1.id)
PhotoTag.create(photo_id: photo13.id, tag_id: tag6.id)
PhotoTag.create(photo_id: photo13.id, tag_id: tag10.id)

#photo14

PhotoTag.create(photo_id: photo14.id, tag_id: tag3.id)

#photo15

PhotoTag.create(photo_id: photo15.id, tag_id: tag3.id)
PhotoTag.create(photo_id: photo15.id, tag_id: tag10.id)

#photo16

PhotoTag.create(photo_id: photo16.id, tag_id: tag3.id)
PhotoTag.create(photo_id: photo16.id, tag_id: tag6.id)

#photo17

PhotoTag.create(photo_id: photo17.id, tag_id: tag1.id)
PhotoTag.create(photo_id: photo17.id, tag_id: tag6.id)
PhotoTag.create(photo_id: photo17.id, tag_id: tag10.id)

#photo18

PhotoTag.create(photo_id: photo18.id, tag_id: tag1.id)
PhotoTag.create(photo_id: photo18.id, tag_id: tag4.id)

#photo19

PhotoTag.create(photo_id: photo19.id, tag_id: tag1.id)
PhotoTag.create(photo_id: photo19.id, tag_id: tag3.id)
PhotoTag.create(photo_id: photo19.id, tag_id: tag6.id)
PhotoTag.create(photo_id: photo19.id, tag_id: tag10.id)

#photo20

PhotoTag.create(photo_id: photo20.id, tag_id: tag9.id)
PhotoTag.create(photo_id: photo20.id, tag_id: tag13.id)

#photo21

PhotoTag.create(photo_id: photo21.id, tag_id: tag1.id)
PhotoTag.create(photo_id: photo21.id, tag_id: tag7.id)

#photo22

PhotoTag.create(photo_id: photo22.id, tag_id: tag3.id)

#photo23

PhotoTag.create(photo_id: photo23.id, tag_id: tag9.id)

#photo24

PhotoTag.create(photo_id: photo24.id, tag_id: tag4.id)

#photo25

PhotoTag.create(photo_id: photo25.id, tag_id: tag13.id)

#photo26

PhotoTag.create(photo_id: photo26.id, tag_id: tag3.id)

#photo27

PhotoTag.create(photo_id: photo27.id, tag_id: tag13.id)

#photo28

PhotoTag.create(photo_id: photo28.id, tag_id: tag7.id)
PhotoTag.create(photo_id: photo28.id, tag_id: tag9.id)
PhotoTag.create(photo_id: photo28.id, tag_id: tag13.id)

#photo29

PhotoTag.create(photo_id: photo29.id, tag_id: tag2.id)
PhotoTag.create(photo_id: photo29.id, tag_id: tag3.id)
PhotoTag.create(photo_id: photo29.id, tag_id: tag6.id)

#photo30

PhotoTag.create(photo_id: photo30.id, tag_id: tag1.id)
PhotoTag.create(photo_id: photo30.id, tag_id: tag6.id)

#photo31

PhotoTag.create(photo_id: photo31.id, tag_id: tag1.id)
PhotoTag.create(photo_id: photo31.id, tag_id: tag3.id)
PhotoTag.create(photo_id: photo31.id, tag_id: tag6.id)
PhotoTag.create(photo_id: photo31.id, tag_id: tag10.id)

#photo32

PhotoTag.create(photo_id: photo32.id, tag_id: tag3.id)
PhotoTag.create(photo_id: photo32.id, tag_id: tag4.id)
PhotoTag.create(photo_id: photo32.id, tag_id: tag10.id)

#photo33

PhotoTag.create(photo_id: photo33.id, tag_id: tag1.id)
PhotoTag.create(photo_id: photo33.id, tag_id: tag6.id)

#photo34

PhotoTag.create(photo_id: photo34.id, tag_id: tag6.id)

#photo35

PhotoTag.create(photo_id: photo35.id, tag_id: tag6.id)
PhotoTag.create(photo_id: photo35.id, tag_id: tag13.id)

#photo36

PhotoTag.create(photo_id: photo36.id, tag_id: tag2.id)
PhotoTag.create(photo_id: photo36.id, tag_id: tag3.id)
PhotoTag.create(photo_id: photo36.id, tag_id: tag5.id)

#photo37

PhotoTag.create(photo_id: photo37.id, tag_id: tag1.id)
PhotoTag.create(photo_id: photo37.id, tag_id: tag6.id)

#photo38

PhotoTag.create(photo_id: photo38.id, tag_id: tag4.id)
PhotoTag.create(photo_id: photo38.id, tag_id: tag8.id)
PhotoTag.create(photo_id: photo38.id, tag_id: tag13.id)

#photo39

PhotoTag.create(photo_id: photo39.id, tag_id: tag4.id)
PhotoTag.create(photo_id: photo39.id, tag_id: tag7.id)

#photo40

PhotoTag.create(photo_id: photo40.id, tag_id: tag4.id)
PhotoTag.create(photo_id: photo40.id, tag_id: tag8.id)
PhotoTag.create(photo_id: photo40.id, tag_id: tag13.id)

#photo41

PhotoTag.create(photo_id: photo41.id, tag_id: tag4.id)
PhotoTag.create(photo_id: photo41.id, tag_id: tag8.id)
PhotoTag.create(photo_id: photo41.id, tag_id: tag13.id)

#photo42

PhotoTag.create(photo_id: photo42.id, tag_id: tag12.id)
PhotoTag.create(photo_id: photo42.id, tag_id: tag13.id)

#photo43

PhotoTag.create(photo_id: photo43.id, tag_id: tag4.id)
PhotoTag.create(photo_id: photo43.id, tag_id: tag11.id)

#photo44

PhotoTag.create(photo_id: photo44.id, tag_id: tag3.id)
PhotoTag.create(photo_id: photo44.id, tag_id: tag8.id)

#photo45

PhotoTag.create(photo_id: photo45.id, tag_id: tag4.id)
PhotoTag.create(photo_id: photo45.id, tag_id: tag7.id)

#photo46

PhotoTag.create(photo_id: photo46.id, tag_id: tag4.id)
PhotoTag.create(photo_id: photo46.id, tag_id: tag8.id)

#photo47

PhotoTag.create(photo_id: photo47.id, tag_id: tag3.id)
PhotoTag.create(photo_id: photo47.id, tag_id: tag11.id)
PhotoTag.create(photo_id: photo47.id, tag_id: tag13.id)

#photo48

PhotoTag.create(photo_id: photo48.id, tag_id: tag8.id)
PhotoTag.create(photo_id: photo48.id, tag_id: tag9.id)
PhotoTag.create(photo_id: photo48.id, tag_id: tag13.id)

#photo49

PhotoTag.create(photo_id: photo49.id, tag_id: tag8.id)
PhotoTag.create(photo_id: photo49.id, tag_id: tag9.id)
PhotoTag.create(photo_id: photo49.id, tag_id: tag13.id)

#photo50

PhotoTag.create(photo_id: photo50.id, tag_id: tag9.id)

#photo51

PhotoTag.create(photo_id: photo51.id, tag_id: tag3.id)
PhotoTag.create(photo_id: photo51.id, tag_id: tag7.id)
PhotoTag.create(photo_id: photo51.id, tag_id: tag13.id)

#photo52

PhotoTag.create(photo_id: photo52.id, tag_id: tag2.id)
PhotoTag.create(photo_id: photo52.id, tag_id: tag4.id)
PhotoTag.create(photo_id: photo52.id, tag_id: tag5.id)
PhotoTag.create(photo_id: photo52.id, tag_id: tag8.id)

#photo53

PhotoTag.create(photo_id: photo53.id, tag_id: tag5.id)
PhotoTag.create(photo_id: photo53.id, tag_id: tag8.id)

#photo54

PhotoTag.create(photo_id: photo54.id, tag_id: tag2.id)
PhotoTag.create(photo_id: photo54.id, tag_id: tag8.id)
PhotoTag.create(photo_id: photo54.id, tag_id: tag9.id)
PhotoTag.create(photo_id: photo54.id, tag_id: tag13.id)

#photo55

PhotoTag.create(photo_id: photo55.id, tag_id: tag8.id)
PhotoTag.create(photo_id: photo55.id, tag_id: tag13.id)
