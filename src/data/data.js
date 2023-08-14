import preview from "../assets/main-page/preview.mp4";
import cow4 from "../assets/main-page/cowboy4.webp";
import cowst from "../assets/main-page/cowboy4st_sand.webp";
import circular from "../assets/main-page/circular.webp";
import work from "../assets/main-page/cowboy4st.webp";
// header
import white from "../assets/main-page/cowboy3.webp";

// 4
import prevBike4 from "../assets/cowboy4/main.webm";
import bat4 from "../assets/cowboy4/battery.mp4";
import chain4 from "../assets/cowboy4/chain.mp4";
import app4 from "../assets/cowboy4/app.mp4";
import bike4bl from "../assets/cowboy4/bike4black.webp";
import bike4gr from "../assets/cowboy4/bike4green.webp";
import bike4sn from "../assets/cowboy4/bike4sand.webp";

import det1 from "../assets/cowboy4/bike4det1.webp";
import det2 from "../assets/cowboy4/bike4det2.webp";
import det3 from "../assets/cowboy4/bike4det3.webp";
import det4 from "../assets/cowboy4/bike4det4.webp";

import c1 from "../assets/cowbow4st/ch1.webp";
import c2 from "../assets/cowbow4st/ch2.webp";
import c3 from "../assets/cowbow4st/ch3.webp";
import cow4footer from "../assets/cowboy4/cow4footer.webp";
// st 4
import stmain from "../assets/cowbow4st/main.mp4";
import sand from "../assets/cowbow4st/c4stsand.webp";
import black from "../assets/cowbow4st/c4stblack.webp";
import green from "../assets/cowbow4st/c4stgreen.webp";

import ch from "../assets/cowbow4st/chain.mp4";
import bat from "../assets/cowbow4st/bat.mp4";
import app from "../assets/cowbow4st/app.mp4";

import rudder from "../assets/cowbow4st/rudder.webp";
import wheel from "../assets/cowbow4st/wheel.webp";
import light from "../assets/cowbow4st/light.webp";
import chain2 from "../assets/cowbow4st/chain2.webp";
import f4footer from "../assets/cowbow4st/st4footer.webp";

// circular

import circularPage from "../assets/circular/circular.webp";
import khaki from "../assets/circular/khaki.webp";
import st4khaki from "../assets/circular/st4khaki.webp";

// app

import vid1 from "../assets/app/app1.mp4";

// sell
import it1 from "../assets/sell/t-sh.webp";
import it2 from "../assets/sell/backpack.webp";
import it3 from "../assets/sell/bell.webp";
import it4 from "../assets/sell/chaild.webp";
import it5 from "../assets/sell/light.webp";
import it6 from "../assets/sell/phone-holder.webp";
import it7 from "../assets/sell/phone-holder1.webp";
import it8 from "../assets/sell/phone-holder2.webp";
import it9 from "../assets/sell/tirein.webp";
import it10 from "../assets/sell/helm.webp";
import it11 from "../assets/sell/lock.webp";
import it12 from "../assets/sell/ban.webp";
import it13 from "../assets/sell/back2.webp";
import it14 from "../assets/sell/tire.webp";
import it15 from "../assets/sell/break.webp";
import it16 from "../assets/sell/battery.webp";

// work
import work2 from '../assets/main-page/work.webp';

const data = {
  header: [
    { name: "C4", img: cow4, title: "Dream Machine", to: "/bike4" },
    { name: "C4 ST", img: sand, title: "Step Ahead", to: "/bike4st" },
    {
      name: "Circular",
      img: white,
      title: "Certified Refurbished",
      to: "/circular",
    },
  ],
  main: {
    preview: {
      video: preview,
      title: "Meet the Connected electric bike",
    },
    cowboy4: {
      img: cow4,
      title: "Cowboy 4Ь",
      span: "One smooth, agile ride.",
    },
    cowboy4st: {
      img: cowst,
      title: "Cowboy 4 ST",
      span: "An open frame for an open mind.",
    },
    circular: {
      img: circular,
      title: "An Electric Force for Progress",
      span: "Build a better bike. Create a better self. Leave a better world.",
    },
    work: {
      img: work,
      title: "Cowboy for Work",
      span: "Offer your organisation greater mobility and cost savings with an electric bike.",
    },
    app: {
      title: 'It\'s a great day for a ride.',
      span: 'At the heart of a Cowboy is your road companion. Connected to you and any path you take.',

    }
  },
  footer: {
    links: [
      { name: "Cowboy 4", to: "/bike4" },
      { name: "Cowboy 4 ST", to: "/bike4st" },
      { name: "Circular", to: "/circular" },
      { name: "Accessories", to: "/accessories" },
      { name: "App", to: "/app" },
    ],
  },

  items: {
    bike4: {
      preview: {
        video: prevBike4,
        title: "DREAM MACHINE",
        span: "Cowboy 4",
      },
      section: {
        title:
          "Meet the Cowboy 4 for the most agile ride you could ever imagine. Mount up on an electric bike that's built around you.",
        videos: [bat4, app4, chain4],
        bikeImg: {
          img: [bike4bl, bike4sn, bike4gr],
          title:
            "When you encounter a Cowboy, it will stop you in your tracks. With three iconic colors to suit your style, it deserves a closer look.It's your move.",
        },
        descriptions: {
          title:
            "Cowboy is designed with you in mind, crafted to the highest standard. Every custom detail is integrated seamlessly into the frame for a new form of performance.",
          images: [det1, det2, det3, det4],
        },
        vertical: [
          {
            img: c1,
            title: "Powerful",
            span: "Gain 45 Nm of torque in a compact and silent motor as you push ahead. Go from 0 to 25 km/h in just a few seconds and take an incline with ease.",
          },
          {
            img: c2,
            title: "Intuitive",
            span: " Stay nimble and in control, from a strong first kick to seamless support at low and high speeds. No gears needed, just a simple source of power for the smoothest ride feeling around.AdaptableAs you ride, speed and torque sensors adapt continuously to give you a riding ex",
          },
          {
            img: c3,
            title: "Adaptable",
            span: "As you ride, speed and torque sensors adapt continuously to give you a riding experience based on how you uniquely move. Over-the-air updates keep it fresh for every journey you're on.",
          },
        ],
        footer: {
          title: `Now's the time to ride`,
          img: cow4footer,
        },
      },
    },
    bike4st: {
      preview: {
        video: stmain,
        title: "Step Ahead",
        span: "Cowboy 4 ST",
      },
      section: {
        title:
          "Meet the Cowboy 4 ST for a modern spin on a comfortable classic. Step in with ease and ride ahead on an electric bike that's built around you.",
        videos: [bat, app, ch],
        bikeImg: {
          img: [black, sand, green],
          title:
            "When you encounter a Cowboy, it will stop you in your tracks. With three iconic colors to suit your style, it deserves a closer look.It's your move.",
        },
        descriptions: {
          title:
            "Cowboy is designed with you in mind, crafted to the highest standard. Every custom detail is integrated seamlessly into the frame for a new form of performance.",
          images: [wheel, chain2, light, rudder],
        },
        vertical: [
          {
            img: c1,
            title: "Powerful",
            span: "Gain 45 Nm of torque in a compact and silent motor as you push ahead. Go from 0 to 25 km/h in just a few seconds and take an incline with ease.",
          },
          {
            img: c2,
            title: "Intuitive",
            span: " Stay nimble and in control, from a strong first kick to seamless support at low and high speeds. No gears needed, just a simple source of power for the smoothest ride feeling around.AdaptableAs you ride, speed and torque sensors adapt continuously to give you a riding ex",
          },
          {
            img: c3,
            title: "Adaptable",
            span: "As you ride, speed and torque sensors adapt continuously to give you a riding experience based on how you uniquely move. Over-the-air updates keep it fresh for every journey you're on.",
          },
        ],
        footer: {
          title: `Now's the time to ride`,
          img: f4footer,
        },
      },
    },
  },
  circular: {
    img: circularPage,
    preview: [
      {
        title: "Certified refurbished",
        span: "Each bike is refurbished and cleaned by our skilled technicians so it's ready for its new life on the road.",
      },
      {
        title: "Quality guaranteed",
        span: "Depending on the mileage already put on the bike, we assess its condition to be at our quality standard and road ready.",
      },
      {
        title: "Two-year warranty",
        span: "All Circular bikes include a 2-year warranty. If you're not completely satisfied, return it for free in the first 2 weeks.",
      },
      {
        title: "Complete package",
        span: "Every rider gets the full Cowboy experience with any bike, with all services and accessories available to add anytime.",
      },
    ],
    items: {
      c4: [
        { name: "C4 Black", price: "1.999 $", to: "/", img: bike4bl },
        { name: "C4 Sage", price: "1.999 $", to: "/", img: bike4gr },
        { name: "C4 Sand", price: "1.999 $", to: "/", img: bike4sn },
        { name: "C4 Khaki", price: "1.999 $", to: "/", img: khaki },
      ],
      c4st: [
        { img: black, name: "C4 ST Black", price: "1.900 $", to: "/" },
        { img: sand, name: "C4 ST Sand", price: "1.900 $", to: "/" },
        { img: green, name: "C4 ST Sage", price: "1.900 $", to: "/" },
        { img: st4khaki, name: "C4 ST Khaki", price: "1.900 $", to: "/" },
      ],
    },
  },
  app: {
    text: "The Cowboy app is your daily companion on the road. Navigate through your city, turn by turn. Track your bike's location anytime, anywhere. See your ride data at a glance and connect with fellow Cowboy riders.",

    connect: {
      title: "Connect Your Ride",
      span: "From mapping the best routes to keeping you informed of the essentials powering your bike, the app is your key to a smarter, more mindful ride.",
      video: vid1,
    },
  },
  sell: [
    {
      name: "Cowboy x Coco Capitán T-Shirt",
      img: it1,
      descr:
        "Ride philosophical in this limited edition t-shirt with handwritten text by artist Coco Capitán.",
      price: "€45",
    },
    {
      name: "Brooks Scape Large Pannier",
      img: it2,
      descr:
        "The superior waterproof bag that fits on the back of your bike to keep the weight off yours. With a roll-top closure and 100% welded seams, this IPX4-certified bag is perfect for commuting or bikepacking on long distances.",
      price: "€125",
    },
    {
      name: "Crane bell",
      img: it3,
      descr:
        "Be heard on the road with the clear and powerful sound of the Crane bike bell. Manufactured at the highest standard in Osaka, Japan.",
      price: "€35",
    },
    {
      name: "Hamax Caress Child Seat",
      img: it4,
      descr:
        "The essential child seat for any parent and the day's latest adventure. The seat mounts easily on the bike's rear rack and is adjustable with a 20° recline. Designed for one-handed operation so you can stabilize the bike while getting your kid in place.",
      price: "€185",
    },
    {
      name: "Knog Plug front light",
      img: it5,
      descr:
        "Face each and every street in front of you with the Knog Plug front light, increasing front and side visibility thanks to the 250 lumens of power.",
      price: "€30",
    },
    {
      name: "Quad Lock phone case",
      img: it6,
      descr:
        "The phone case you need to securely dock and wirelessly charge your phone. A Quad Lock mount comes with your bike as part of our new cockpit.",
      price: "€30",
    },
    {
      name: "Quad Lock universal adapter",
      img: it7,
      descr:
        "The phone case you need to securely dock and wirelessly charge your phone. A Quad Lock mount comes with your bike as part of our new cockpit.",
      price: "€15",
    },
    {
      name: "Quad Lock phone mount",
      img: it8,
      descr:
        "Mounting interface to securely hold your phone to the bike stem or handlebars.",
      price: "€30",
    },

    {
      name: "HOTO Electric Tire Inflator",
      img: it9,
      descr:
        "Go electric with the compact HOTO pump. Inflates in 129 seconds and auto-stops when it reaches the correct preset pressure. With USB charging and an LED light, you'll want it with you on the road no matter when or where your tires need a lift.",
      price: "€72",
    },
    {
      name: "POC Omne Air MIPS Helmet",
      img: it10,
      descr:
        "A versatile helmet that nods to the street and fits like a glove. The optimal liner density and thicker protection zones provide an adequate buffer while ventilation channels and a light weight ensure comfort for the commute and longer rides.",
      price: "€30",
    },

    {
      name: "Kryptonite U-Lock",
      img: it11,
      descr:
        "Keep your bike safe with our recommended Kryptonite KR U Evolution lock. Extra secure with a key unlock and a 8/10 security rating.",
      price: "€98",
    },
    {
      name: "Sandqvist Lo Bumbag",
      img: it12,
      descr:
        "Life can't weigh you down with the perfect cross-body and waist pack. The Sandqvist Lo Bumbag is made of 100% recycled materials with vegan webbings with zip pockets inside and out to hold your essentials along the way.",
      price: "€79",
    },
    {
      name: "Sandqvist Creek Hike Backpack",
      img: it13,
      descr:
        "Exploration is in the name of this high-performance zipper backpack with function and technical details at its core. Fill what you need for the day's ride in this pack complete with top zipper, laptop pocket, side mesh pockets and an adjustable cord. Made of ultra-strong 100% recycled material from pre-consumer waste, making it a sustainable choice in more ways than one.",
      price: "€169",
    },

    {
      name: "Tyre - C3, C2, C1",
      img: it14,
      descr:
        "Leave a trace like no one else on all-rounder tyres with custom tread. A flexible grip with a puncture-resistant layer keeps you in control.",
      price: "€40",
    },
    {
      name: "Brake pads",
      img: it15,
      descr:
        "Maintain incredible stopping power with durable and performant brake pads with high heat dissipation. Ideal for any Cowboy bike.",
      price: "€19",
    },

    {
      name: "Battery charger",
      img: it16,
      descr:
        "A versatile and easy-to-carry battery charger, embossed with the Cowboy logo. Keep one at home and the office so you'll always be near a full charge.",
      price: "€119",
    },
  ],
  work: {
    span: 'Company bikes are a sound investment for the self employed and for businesses large and small. Offer your organisation greater mobility and cost savings with an electric bike that looks good, too.',
    img: work2,
    title: 'Cowboy for Work',
  }
};

export default data;
