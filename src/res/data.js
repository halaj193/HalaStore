import { Image, View } from "react-native"
import images from "../assets/images/image"
export const homeData = [
    {
        title: 'dresses',
        products: [
            {
                img: images.redzaradress(),
                title: 'red dress',
                price: 'price:10',
                discerption: 'about the dress :satin midi drees - Red',
            },
            {
                img: images.yellowdress(),
                title: 'yellow dress',
                price: ' price: 10',
                discerption: ' about the produt: Long Sleeve Bodycon Dress Women Yellow Elegant Bowknot Evening Party Dress',
            },
            { 
                img:images.bluedress(),
                title:'party dress',
                price:'price:150',
                discerption:'Elegant Party Dress, High Waist Sheath Dress Women Temperament Long Dress Chic Design',
            },
            { 
            img: images.pinkdress(), 
            title:'pink dress',
            price:'price:200',
            discerption:'Off Shoulder Ruffle Pink Long Prom Dress with Train, Off the Shoulder Pink Formal Evening Dress ',



            },

            { 
                img: images.blackdress(),
                title:'black dress',
                price:'price:400',
                discerption:' Off-shoulder Lace Corset Evening Dress black'

            },


        ]
    },
    {
        title: 'tops',
        products: [
            {
               img:images.whitetop(),
                title: 'white top',
                price:'price:50', 
               discerption: 'Basic Tight Scoop Neck Crop Short top for Women',
            },
            {
                img: images.khakitop(),
                title: 'khaki top',
                price:'price:80',
                discerption: 'Shape Khaki Woven Corset Crop Top',
            }, 

            { 
                img:images.dawnsmockedtop(),
                title:'dawn smocked top',
                price:'price:65',
                discerption:'Free-est Dawn Smocked Top',
            },
            { img:images.whitenicktop(),
                title:'white nick top',
                price:'price:40',
                discerption:'HALTERNECK CROCHET CROP TOP',
            },
            {
                img:images.biegetop(),
                title:'biege tank',
                price:'price:50',
                discerption:'STONE THICK BINDING V HEM RIB VEST',

            },
        ]
    },

    {
        title: 'bottums',
        products:
            [
                {
                    img:images.widelegjeans(),
                    title:'wide leg jeans',
                    price:'price:100',
                    discerption:'High Stretch Retro Flare Jeans - Slim Fit Bell Bottoms ',
                },

                { 
                    img:images.whitepants(),
                    title:'wide white jeans',
                    price:'price:150',
                    discerption:'Low rise, flared leg, white pants with two pockets ',
                
                },
                {
                    img:images.brownpants(),
                    title:'brown pants',
                    price:'price:120',
                    discerption:'high-rise elegant brown pants ',

                }, 

                {
                    img:images.blackpants(),
                    title:'elegant black pants',
                    price:'price:90',
                    discerption:'black elegant pants',
                }, 

                {
                    img:images.redjeans(),
                    title:'wide leg red jeans',
                    price:'price:200',
                    discerption:'wide leg red cargo jeans ',

        

                },


            ]

    }




] 
